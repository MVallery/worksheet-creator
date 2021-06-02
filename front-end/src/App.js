import React, {useState,  useEffect, useRef, useCallback} from "react";

import { useHttpClient } from "./shared/hooks/http-hook";

import { useHistory, Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";

import "./worksheet/pages/CustomizeGeneral.css";
import DisplayUserSelection from "./worksheet/components/DisplayUserSelection";
import DisplayAssignment from "./worksheet/pages/DisplayAssignment";
import ConceptSelection from "./worksheet/pages/ConceptSelection";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import ConceptCustomization from "./worksheet/pages/ConceptCustomization";
import FinalSelections from "./worksheet/pages/FinalSelections";
import Home from "./general/pages/Home";
import Parents from "./general/pages/Parents";
import Teachers from "./general/pages/Teachers";
import Schools from "./general/pages/Schools";
import DraftBackground from './app-files/images/draft-background.jpg'

import uuid from 'react-uuid'

import { handleCreateWorksheet } from "./worksheet/functions/createWorksheet";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer, Image
  
} from "@react-pdf/renderer";
import Authenticate from "./user/pages/Authenticate";
import { AuthContext } from "./shared/context/auth-context";
import UserWorksheets from "./worksheet/pages/UserWorksheets";
import { cap } from "./worksheet/problems/general";
function App() {
  const styles = StyleSheet.create({
    body: {
      marginTop: 20,
      marginBottom:30,
      paddingTop: 10,
      paddingBottom: 30,
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
      margin: 40,
      padding:30,
      fontSize: 12,
    },
    question: {
      margin: 5,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 12,
    },
    draft: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
    },
    footer: {
      color: "grey",
      position:"fixed",
      left:20,
      bottom:20,
      fontSize:12,
    }
  });
  const initialValues = {
    concept: "",
    specify: {},//{numbers:{}, probType:{}, probStyle: '', level:'1', quantity:1}
    isChecked: false,
    key: null
  };
  const initialGenValues = {
    order: false,
    docStyle: false, //true = columns
    docTitle: "",
    key: null
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
  const history = useHistory();

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
    history.push('/concept-selection')
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
    history.push('/')

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
  let location = useLocation()
  
  const handleSpecifyInput = (e) => {
    const { name, value, checked } = e.target;
    let tempInput = JSON.parse(JSON.stringify(inputState));
    if (name === "probStyle" || name==='level' || name==='quantity') {
      tempInput.specify[name]=value;
      if (name==='quantity'){
      tempInput.specify[name]=parseInt(value);

      }
      setInputState(tempInput);
    } else {
      tempInput.specify[name]={...tempInput.specify[name], [value]:checked};
      setInputState(tempInput);
    }
  }
  const handleInput = (e) => {
    const { name, value, checked } = e.target;
    if (name === "docStyle" || name === "mixed") {
      setGeneralSelection({ ...generalSelection, [name]: checked });
    } else if (name === "docTitle") {
      setGeneralSelection({
        ...generalSelection,
        [name]: value,
        key: uuid(),
      });
    } else {
      setInputState({
        ...inputState,
        [name]: value,
        key: uuid(),
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
    setGeneralSelection(initialGenValues);
    setInputState(initialValues);
    setCreatedWorksheetState([])
  };
  const handleClearInput = () => {
    setInputState(initialValues);
  };
  let oldLocation
  const handleDuplicate = (handle, us, generalSelection, questAnswerList) => {
    if (handle==='copy'){
      setCreatedWorksheetState(JSON.parse(questAnswerList));
      setGeneralSelection(generalSelection);
      setViewPDF(true)
    } else {
      setUserSelection(us);
      setGeneralSelection(generalSelection);
      let createdWorksheet = handleCreateWorksheet(us, generalSelection);
      setCreatedWorksheetState(createdWorksheet);
      setViewPDF(true)

    }
  }




  const handleCreateStoreWorksheetData = () => {
    let worksheetCreated = new Date().toLocaleString()
    let createdWorksheet = handleCreateWorksheet(
      userSelection,
      generalSelection
    );
    setCreatedWorksheetState(createdWorksheet)
    const fetchWorksheet = async () => {
      try {
        let data = {
          generalSelection:generalSelection,
          // title: generalSelection.docTitle,
          // docStyle: generalSelection.docStyle ? true : false,
          userSelection: userSelection,
          creator: userId,
          questAnswerList: createdWorksheet,
          created: worksheetCreated
        };
        await sendRequest(
          `/api/worksheets/${userId}`,
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
  }
  let finalWorksheet;
  const handlePDFViewerTrigger = (handle) => {
    if (handle==='copy'){
      setViewPDF(true);

    } else {
      handleCreateStoreWorksheetData()
      setViewPDF(true);
    }

  };

  const handlePDF = () => {
    debugger;
    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.question} wrap={false}>
            Name:____________________________________________ Date:____________
          </Text>
          <Text style={styles.title}>{cap(generalSelection.docTitle)}</Text>
          {/* <Image src={DraftBackground} fixed style={styles.draft} /> */}
              {createdWorksheetState[0]}
        <Text style={styles.footer} fixed> Made by Infinite Math </Text>

        </Page>
        <Page style={styles.ac}>
          <Text>Answer Key: </Text>
              {createdWorksheetState[1]}
        </Page>
      </Document>
    );
  };
  const handleCreatePDFViewer = () => {
    finalWorksheet = handlePDF();
    return (
      <div style={{backgroundColor:'white', width:'100%',height:'100vh'}}>
        <PDFViewer
          className={generalSelection.docTitle}
          children={finalWorksheet}
          width='100%'
          height='100%'
        ></PDFViewer>
      </div>
    );
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
        <MainNavigation handleClearSelections={handleClearSelections} />

        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/parents" render={(props) => <Parents />} />
          <Route exact path="/teachers" render={(props) => <Teachers />} />
          <Route exact path="/schools" render={(props) => <Schools />} />

          <Route
            path="/concept-selection"
            render={(props) => (
              <ConceptSelection {...props} userSelection={userSelection} handleInput={handleInput} handleDeleteConcept={handleDeleteConcept}  />
            )}
          />
          <Route
            path="/concept-customization"
            render={(props) => (
              <ConceptCustomization
                {...props}
                inputState={inputState}
                handleInput={handleInput}
                handleSpecifyInput={handleSpecifyInput}
                handleDeleteConcept={handleDeleteConcept}
                userSelection={userSelection}
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
                handleDeleteConcept={handleDeleteConcept}
                inputState={inputState}
                userSelection={userSelection}
                generalSelection={generalSelection}
                handlePDFViewerTrigger={handlePDFViewerTrigger}
                // handleCreateAssignment={handleCreateAssignment}
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
                  createdWorksheetState={createdWorksheetState}
                  userSelection={userSelection}
                  copyState={copyState}
                  oldLocation = {oldLocation}
                />
                <div className='pdf-viewer'>
                {viewPDF ? handleCreatePDFViewer() : null}
                </div>
                {/* {handleCreatePDFViewer()} */}
              </div>
            )}
          />
          <Route path="/auth" exact>
            <Authenticate />
          </Route>
          <Route path="/signup" exact>
            <Authenticate />
          </Route>
          <Route path="/myworksheets" exact>
            <UserWorksheets userSelectionState={userSelection} createdWorksheetState= {createdWorksheetState} handleDuplicate={handleDuplicate} handleClearSelections={handleClearSelections} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
