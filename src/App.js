import React, { useState, 
  useEffect
 } from "react";
 import {Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import './components/customize.css';
import DisplayUserSelection from './components/DisplayUserSelection'
import UserInput from './components/user-inputs.js'
import DisplayAssignment from './components/DisplayAssignment'
import ConceptSelection from './components/ConceptSelection'
import ConceptCustomization from './components/ConceptCustomization'
import FinalSelections from './components/FinalSelections'
import Home from './components/home.js'
import {
  handleCreateWorksheet,
} from './create-worksheet';
import {
  Page,
  Text,
  // View,
  Document,
  StyleSheet,
  PDFViewer,
  // ReactPDF,
  PDFDownloadLink,
} from "@react-pdf/renderer";

var tableSnap = React.createRef();
function App() {
  const styles = StyleSheet.create({// styling for PDF react-pdf
    body: {
      marginTop:20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight:50,
      paddingLeft: 20,
      marginRight:50,
      // paddingHorizontal: 30,
    },
    title: {
      fontSize: 13,
      textAlign: 'center',
      // fontFamily: 'arial'
    },
    text: {
      // margin: 25,
      fontSize: 12,
      textAlign: 'justify',
      // fontFamily: 'arial'
    },
    ac: {
      margin: 5,
      marginLeft: 40,
      fontSize: 12,
      // fontFamily: 'arial'
    },
    question: {
      margin: 5,
      marginLeft: 20,
      marginRight:20,
      fontSize: 12,
      // fontFamily: 'arial'
    }
  });
  const initialValues = {
    concept: '',
    probStyle:'',
    level: '1',
    quantity: '',
    specify: [],
    isChecked: false,

  };
  const initialGenValues = {
    order: true,
    docStyle:false, //true = columns
    docTitle: '',

  }
  const [userSelection, setUserSelection] = useState([]);
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [inputState, setInputState] = useState(initialValues);
  const [generalSelection, setGeneralSelection] = useState(initialGenValues)
  const [error, setError] = React.useState(false);


  const handleInput =(e) => {
    console.log('handleInput onchange')
    const { name, value } = e.target;
    if (name === 'docStyle' || name=== 'order') {
      setGeneralSelection({
        ...generalSelection,
        [name]: !generalSelection[name]
      })
    } else if (name === 'docTitle') {
      setGeneralSelection({
        ...generalSelection,
        [name]: value,
      })
    } else if (name === 'specify') {
      setInputState({ ...inputState, [value]: e.target.checked })

      console.log('inside specify else if')


    }else {
      setInputState({
        ...inputState,
        [name]: value,
      })
    } 

 
console.log(inputState)
  };
  const handleConcept = (name, value) => {
    setInputState({
      ...inputState,
      [name]:value,
    })

  }
  const handleAddConcept = (e) => {
    // e.preventDefault();
    let tempList = JSON.parse(JSON.stringify(userSelection));
    let tempInput = JSON.parse(JSON.stringify(inputState))
    tempList.push(tempInput)
    console.log(tempInput)
    console.log(tempList)
    setInputState(initialValues)
    setUserSelection(tempList)
  }

  const handleDeleteConcept = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection))
    temp.splice(i, 1)
    setUserSelection(temp)
  }

  const handleSelect = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    temp[i].isChecked = !temp[i].isChecked;
    setUserSelection(temp)
  }

  const handleCreateAssignment = (e) => {
    // let tempList = JSON.parse(JSON.stringify(userSelection));
    // let tempInput = JSON.parse(JSON.stringify(generalSelection))
    // tempList.push(tempInput)
    // setUserSelection(tempList)
    setDisplayQuestionList(true);
  };
  const handleClearSelections = ()=>{
        setUserSelection([])
        setGeneralSelection(initialValues)
        setInputState(initialValues)
        setDisplayQuestionList(false);

  }
  const handleClearInput = () => {
    setInputState(initialValues)
  }


  const handlePDF= () => { //react-pdf general PDF creation

    let createWorksheet = handleCreateWorksheet(userSelection, generalSelection); 
       //handleCreateWorksheet returns an array [questionList, answerKey]. 
    return (
      <Document>
        <Page style= {styles.body}>
          <Text style= {styles.question} wrap={false}>
            Name:____________________________________________ Date:____________ 
          </Text>
          <Text style= {styles.title}>
            {generalSelection.docTitle}
          </Text>
            {createWorksheet[0]}
        </Page>
        <Page style= {styles.ac}>
          <Text style={styles.ac}>Answer Key: </Text>
            {createWorksheet[1]}
        </Page>
      </Document>
    )
  };
  const handleCreatePDFViewer = () => {
    return(
      <div>
        <PDFDownloadLink document={handlePDF()} fileName={generalSelection.docTitle}>
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
        <PDFViewer className= {generalSelection.docTitle} children={handlePDF()} width= {1000} height= {1500}>
        </PDFViewer>
    </div>
    )
  }
  const handlePDFViewerClick = () => {
    handleCreatePDFViewer()
  }
  return (
    <div className="main">
        <Switch>
          <Route exact path="/"
              render={(props) => (
                <Home/>
              )}
          />
          <Route path="/concept-selection" 
            render={(props) => (
            <ConceptSelection {...props} 
            handleConcept={handleConcept} 
            />
          )}
          />
          <Route path="/concept-customization" 
            render={(props) => (
              <ConceptCustomization {...props} 
              handleConcept={handleConcept} 
              inputState={inputState}
              handleInput = {handleInput}
              handleAddConcept = {handleAddConcept}
              handleClearInput = {handleClearInput}
              />
            )}
          
          />
          <Route path="/final-selections" 
            render={(props) => (
              <FinalSelections {...props} 
                handleInput = {handleInput}
                inputState = {inputState}
                handleSelect = {handleSelect}
                handleDeleteConcept = {handleDeleteConcept}
                userSelection = {userSelection}
                generalSelection = {generalSelection}
                handleCreateAssignment = {handleCreateAssignment}  
                handlePDF={handlePDF}
              />
            )}          
          />
          <Route path="/custom-assignment" 
            render={(props) => (
              <div>
              <DisplayAssignment {...props} 
              handleConcept={handleConcept} 
              handlePDF = {handlePDF}
              userSelection= {userSelection}
              handleClearSelections={handleClearSelections}
              handlePDFViewerClick = {handlePDFViewerClick}
              />
              {handleCreatePDFViewer()}
     
              </div>
            )}          
          />
        </Switch>



      <div>
        {userSelection.length>0 ? 
          <DisplayUserSelection 
            displayQuestionList = {displayQuestionList} 
            handleSelect = {handleSelect} 
            handleDeleteConcept = {handleDeleteConcept} 
            userSelection = {userSelection} 
            handlePDF = {handlePDF}
          /> : null }
      </div> 
  


    </div>
    
  );
}


tableSnap = React.createRef();



export default App;
