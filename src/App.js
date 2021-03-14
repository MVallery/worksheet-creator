import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { useHttpClient } from "./shared/hooks/http-hook";

import { useHistory, Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./worksheet/pages/customize.css";
import DisplayUserSelection from "./worksheet/components/DisplayUserSelection";
import DisplayAssignment from "./worksheet/pages/DisplayAssignment";
import ConceptSelection from "./worksheet/pages/ConceptSelection";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ConceptCustomization from "./worksheet/pages/ConceptCustomization";
import FinalSelections from "./worksheet/pages/FinalSelections";
import Home from "./general/pages/home.js";
import { handleCreateWorksheet } from "./worksheet/components/create-worksheet";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Authenticate from "./user/pages/Authenticate";
import { AuthContext } from "./shared/context/auth-context";
import UserWorksheets from "./worksheet/pages/UserWorksheets";
import { cap } from "./worksheet/problems/general";
function App() {
  const styles = StyleSheet.create({
    body: {
      marginTop: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 50,
      paddingLeft: 20,
      marginRight: 50,
    },
    title: {
      fontSize: 13,
      textAlign: "center",
    },
    text: {
      fontSize: 12,
      textAlign: "justify",
    },
    ac: {
      margin: 5,
      marginLeft: 40,
      fontSize: 12,
    },
    question: {
      margin: 5,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 12,
    },
  });
  const initialValues = {
    concept: "",
    probStyle: "",
    level: "1",
    quantity: "",
    specify: [],
    isChecked: false,
  };
  const initialGenValues = {
    order: true,
    docStyle: false, //true = columns
    docTitle: "",
  };
  const [userSelection, setUserSelection] = useState([]);
  const [generalSelection, setGeneralSelection] = useState(initialGenValues);
  const [inputState, setInputState] = useState(initialValues);
  const [createdWorksheetState, setCreatedWorksheetState] = useState([])
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);
  const [viewPDF, setViewPDF] = useState(false);
  const [copyState, setCopyState] =useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);

    const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  const handleInput = (e) => {
    const { name, value, checked } = e.target;
    if (name === "docStyle" || name === "order") {
      setGeneralSelection({
        ...generalSelection,
        [name]: !generalSelection[name],
      });
    } else if (name === "docTitle") {
      setGeneralSelection({
        ...generalSelection,
        [name]: value,
      });
    } else if (name === "specify") {
      setInputState({ ...inputState, [value]: checked });
    } else {
      setInputState({
        ...inputState,
        [name]: value,
      });
    }
  };

  const handleAddConcept = (e) => {
    let tempList = JSON.parse(JSON.stringify(userSelection));
    let tempInput = JSON.parse(JSON.stringify(inputState));
    tempList.push(tempInput);
    setInputState(initialValues);
    setUserSelection(tempList);
  };

  const handleDeleteConcept = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    temp.splice(i, 1);
    setUserSelection(temp);
  };

  const handleClearSelections = () => {
    setUserSelection([]);
    setGeneralSelection(initialValues);
    setInputState(initialValues);
    setCreatedWorksheetState([])
  };
  const handleClearInput = () => {
    setInputState(initialValues);
  };
  const handlePDFViewerTrigger = () => {
    setViewPDF(true);
    handleCreatedWorksheet()

  };
  const history = useHistory();

  const handleDuplicate = async(handle, us, title, questAnswerList) => {

    setUserSelection(us);
    setGeneralSelection({...generalSelection, docTitle:title});
    setCreatedWorksheetState(questAnswerList);

    history.push('/display-assignment');

      if (handle==='copy') {
        setViewPDF(true);
  
      } else {
          handlePDFViewerTrigger()

      }

  }
  // useEffect(() => {
  //   if()
  // }, [userSelection])
  const handleDuplicatePDFViewTrigger = () => {

  }

  const handleCreatedWorksheet = () => {
    console.log(userSelection)
    let createdWorksheet = handleCreateWorksheet(
      userSelection,
      generalSelection
    );
    setCreatedWorksheetState(createdWorksheet)
    const fetchWorksheet = async () => {
      try {
        let data = {
          title: generalSelection.docTitle,
          docStyle: generalSelection.docStyle ? true : false,
          userSelection: userSelection,
          creator: userId,
          questAnswerList: createdWorksheet,
        };
        console.log(data);
        await sendRequest(
          `http://localhost:5000/api/worksheets/${userId}`,
          "POST",
          JSON.stringify(data),
          {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }
        );
        console.log('Hiiiiiiiiiiiiilo')
        // history.push(`/worksheets/${auth.userId}/`);
      } catch (err) {}
    };
    fetchWorksheet();
  }
  const handlePDF = () => {
    //handleCreateWorksheet returns an array [questionList, answerKey].
    console.log(createdWorksheetState)

    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.question} wrap={false}>
            Name:____________________________________________ Date:____________
          </Text>
          <Text style={styles.title}>{cap(generalSelection.docTitle)}</Text>
          {/* {createdWorksheet[0]} */}
          {createdWorksheetState[0]}
        </Page>
        <Page style={styles.ac}>
          <Text style={styles.ac}>Answer Key: </Text>
          {/* {createdWorksheet[1]} */}
          {createdWorksheetState[1]}
        </Page>
      </Document>
    );
  };
  let finalWorksheet;

  const handleCreatePDFViewer = () => {
    finalWorksheet = handlePDF();
    return (
      <div>
        <PDFDownloadLink
          document={finalWorksheet}
          fileName={generalSelection.docTitle}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer
          className={generalSelection.docTitle}
          children={finalWorksheet}
          width={1000}
          height={1500}
        ></PDFViewer>
      </div>
    );
  };
  const handleCreateAssignment = (e) => {
    const fetchWorksheet = async () => {
      try {
        let data = {
          title: generalSelection.docTitle,
          docStyle: generalSelection.docStyle ? true : false,
          userSelection: userSelection,
          creator: userId,
        };
        console.log(data);
        await sendRequest(
          `http://localhost:5000/api/worksheets/${userId}`,
          "POST",
          JSON.stringify(data),
          {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }
        );
        // history.push(`/worksheets/${auth.userId}/`);
      } catch (err) {}
    };
    fetchWorksheet();
    setViewPDF(true);
  };
  // const handleCreatePDFData = () => {
  //   const fetchWorksheet = async () => {
  //     try {
  //       let data = { title: generalSelection.docTitle, docStyle: generalSelection.docStyle, userSelection: userSelection, creator: userId};
  //       await sendRequest(
  //         `http://localhost:5000/api/worksheets/${userId}`,
  //         "POST",
  //         JSON.stringify(data),
  //         { Authorization: "Bearer " + token, "Content-Type": "application/json"}
  //       );
  //       // history.push(`/worksheets/${auth.userId}/`);
  //     } catch (err) {}
  //   };
  //   fetchWorksheet();

  //   // handleCreatePDFViewer();
  // };
  return (
    <div className="main">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation handleClearSelections={handleClearSelections} />

        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route
            path="/concept-selection"
            render={(props) => (
              <ConceptSelection {...props} handleInput={handleInput} />
            )}
          />
          <Route
            path="/concept-customization"
            render={(props) => (
              <ConceptCustomization
                {...props}
                inputState={inputState}
                handleInput={handleInput}
                handleAddConcept={handleAddConcept}
                handleClearInput={handleClearInput}
              />
            )}
          />
          <Route
            path="/final-selections"
            render={(props) => (
              <FinalSelections
                {...props}
                handleInput={handleInput}
                inputState={inputState}
                userSelection={userSelection}
                generalSelection={generalSelection}
                handlePDFViewerTrigger={handlePDFViewerTrigger}
                handleCreateAssignment={handleCreateAssignment}
              />
            )}
          />
          <Route
            path="/display-assignment"
            render={(props) => (
              <div>
                <DisplayAssignment
                  {...props}
                  handleCreatePDFViewer={handleCreatePDFViewer}
                  handleClearSelections={handleClearSelections}
                  handlePDFViewerTrigger={handlePDFViewerTrigger}
                  userSelection={userSelection}
                  copyState={copyState}
                />
                {viewPDF ? handleCreatePDFViewer() : null}

                {/* {handleCreatePDFViewer()} */}
              </div>
            )}
          />
          <Route path="/auth" exact>
            <Authenticate />
          </Route>
          <Route path="/worksheets/:userId" exact>
            <UserWorksheets handleDuplicate={handleDuplicate} handleClearSelections={handleClearSelections} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AuthContext.Provider>

      <div>
        {userSelection.length > 0 ? (
          <DisplayUserSelection
            handleDeleteConcept={handleDeleteConcept}
            userSelection={userSelection}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
