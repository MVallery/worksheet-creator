import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useHistory,
} from "react";
import { useHttpClient } from "./shared/hooks/http-hook";

import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
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
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [inputState, setInputState] = useState(initialValues);
  const [generalSelection, setGeneralSelection] = useState(initialGenValues);
  // const [error, setError] = React.useState(false);

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);
  const [viewPDF, setViewPDF] = useState(false);

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


  // const history = useHistory();

  // useEffect(() => {
  //   const fetchWorksheet = async () => {
  //     try {
  //       let data = { title: generalSelection.docTitle, docStyle: generalSelection.docStyle, userSelection: userSelection, creator: userId };
  //       const responseData = await sendRequest(
  //         `http://localhost:5000/api/worksheets/${userId}`,
  //         "POST",
  //         data,
  //         { Authorization: "Bearer " + auth.token }
  //       );
  //       // history.push(`/worksheets/${auth.userId}/`);
  //     } catch (err) {}
  //   };
  //   fetchWorksheet();
  // }, [displayQuestonList, responseData]);

  const handleInput = (e) => {
    console.log("handleInput onchange");
    const { name, value } = e.target;
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
      setInputState({ ...inputState, [value]: e.target.checked });

      console.log("inside specify else if");
    } else {
      setInputState({
        ...inputState,
        [name]: value,
      });
    }

    console.log(inputState);
  };
  const handleConcept = (name, value) => {
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  const handleAddConcept = (e) => {
    let tempList = JSON.parse(JSON.stringify(userSelection));
    let tempInput = JSON.parse(JSON.stringify(inputState));
    tempList.push(tempInput);
    console.log(tempInput);
    console.log(tempList);
    setInputState(initialValues);
    setUserSelection(tempList);
  };

  const handleDeleteConcept = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    temp.splice(i, 1);
    setUserSelection(temp);
  };

  const handleSelect = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    temp[i].isChecked = !temp[i].isChecked;
    setUserSelection(temp);
  };
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const handleCreateAssignment = (e) => {
    console.log('thisishandleCreateAssignment')
    const fetchWorksheet = async () => {
      try {
        
        let data = { title: generalSelection.docTitle, docStyle: generalSelection.docStyle ? true: false, userSelection: userSelection, creator: userId };
        console.log(data)
        await sendRequest(
          `http://localhost:5000/api/worksheets/${userId}`,
          "POST",
          JSON.stringify(data),
          { Authorization: "Bearer " + token,  "Content-Type": "application/json" }
        );
        // history.push(`/worksheets/${auth.userId}/`);
      } catch (err) {}
    };
    fetchWorksheet();
    setViewPDF(true)
    setDisplayQuestionList(true);
    
    // const fetchWorksheet = async () => {
    //   try {
    //     let data = { title: generalSelection.docTitle, docStyle: generalSelection.docStyle, userSelection: userSelection, creator: userId };
    //     console.log(data)
    //     await sendRequest(
    //       `http://localhost:5000/api/worksheets/${userId}`,
    //       "POST",
    //       JSON.stringify(data),
    //       { Authorization: "Bearer " + token }
    //     );
    //     // history.push(`/worksheets/${auth.userId}/`);
    //   } catch (err) {}
    // };
    // fetchWorksheet();
  };
  const handleClearSelections = () => {
    setUserSelection([]);
    setGeneralSelection(initialValues);
    setInputState(initialValues);
    setDisplayQuestionList(false);
  };
  const handleClearInput = () => {
    setInputState(initialValues);
  };

  const handlePDF = () => {

    //react-pdf general PDF creation
    handleCreateAssignment()
    console.log(userSelection)
    console.log(generalSelection)
    let createWorksheet = handleCreateWorksheet(
      userSelection,
      generalSelection
    );
    //handleCreateWorksheet returns an array [questionList, answerKey].
    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.question} wrap={false}>
            Name:____________________________________________ Date:____________
          </Text>
          <Text style={styles.title}>{generalSelection.docTitle}</Text>
          {createWorksheet[0]}
        </Page>
        <Page style={styles.ac}>
          <Text style={styles.ac}>Answer Key: </Text>
          {createWorksheet[1]}
        </Page>
      </Document>
    );
  };
  // const handleCreatePDFViewer = useEffect(() => {
  //   return (
  //     <div>
  //       <PDFDownloadLink
  //         document={handlePDF()}
  //         fileName={generalSelection.docTitle}
  //       >
  //         {({ blob, url, loading, error }) =>
  //           loading ? "Loading document..." : "Download now!"
  //         }
  //       </PDFDownloadLink>
  //       <PDFViewer
  //         className={generalSelection.docTitle}
  //         children={handlePDF()}
  //         width={1000}
  //         height={1500}
  //       ></PDFViewer>
  //     </div>
  //   );
  // }, [viewPDF])
  const handleCreatePDFViewer = () => {
    return (
      <div>
        <PDFDownloadLink
          document={handlePDF()}
          fileName={generalSelection.docTitle}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer
          className={generalSelection.docTitle}
          children={handlePDF()}
          width={1000}
          height={1500}
        ></PDFViewer>
      </div>
    );
  };
  const handlePDFViewerClick = () => {
    const fetchWorksheet = async () => {
      try {
        let data = { title: generalSelection.docTitle, docStyle: generalSelection.docStyle, userSelection: userSelection, creator: userId };
        console.log(data)
        await sendRequest(
          `http://localhost:5000/api/worksheets/${userId}`,
          "POST",
          JSON.stringify(data),
          { Authorization: "Bearer " + token, "Content-Type": "application/json"}
        );
        // history.push(`/worksheets/${auth.userId}/`);
      } catch (err) {}
    };
    fetchWorksheet();
    setViewPDF(true)

    // handleCreatePDFViewer();
  };
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
        <MainNavigation />

        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route
            path="/concept-selection"
            render={(props) => (
              <ConceptSelection {...props} handleConcept={handleConcept} />
            )}
          />
          <Route
            path="/concept-customization"
            render={(props) => (
              <ConceptCustomization
                {...props}
                handleConcept={handleConcept}
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
                handleSelect={handleSelect}
                handleDeleteConcept={handleDeleteConcept}
                userSelection={userSelection}
                generalSelection={generalSelection}
                handleCreateAssignment={handleCreateAssignment}
                handlePDF={handlePDF}
              />
            )}
          />
          <Route
            path="/custom-assignment"
            render={(props) => (
              <div>
                <DisplayAssignment
                  {...props}
                  handleConcept={handleConcept}
                  handlePDF={handlePDF}
                  userSelection={userSelection}
                  generalSelection={generalSelection}
                  handleClearSelections={handleClearSelections}
                  handlePDFViewerClick={handlePDFViewerClick}
                />
                {/* {handleCreatePDFViewer()} */}
              </div>
            )}
          />
          <Route path="/auth" exact>
            <Authenticate />
          </Route>
          <Route path="/worksheets/:userId" exact>
            <UserWorksheets/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </AuthContext.Provider>

      <div>
        {userSelection.length > 0 ? (
          <DisplayUserSelection
            displayQuestionList={displayQuestionList}
            handleSelect={handleSelect}
            handleDeleteConcept={handleDeleteConcept}
            userSelection={userSelection}
            handlePDF={handlePDF}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
