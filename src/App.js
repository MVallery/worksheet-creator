import React, { useState, 
  useEffect
 } from "react";
import "./App.css";
import DisplayUserSelection from './components/display-user-selection'
import {table1} from './app-files/tables';
import UserInput from './components/user-inputs.js'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  useEffect(() => {
    table1()
});
  const styles = StyleSheet.create({// styling for PDF react-pdf
    body: {
      marginTop:20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight:50,
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
    level: '',
    docTitle: '',
    quantity: '',
    specify: '',
    isChecked: false,
    order: false,
    docStyle:false, //true = columns
  };
  const [userSelection, setUserSelection] = useState([]);
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [inputState, setInputState] = useState(initialValues);

  const handleInput =(e) => {
    const { name, value } = e.target;
    if (name === 'docStyle') {
      setInputState({
        ...inputState,
        [name]: !inputState.docStyle
      })
    } else if (name=== 'order') {
      setInputState({
        ...inputState,
        [name]: !inputState.order
      })
    } else {
      setInputState({
        ...inputState,
        [name]: value,
      })
    }
    // console.log(name)
    // console.log(value)

  };

  const handleAddConcept = (e) => {
    e.preventDefault();
    var tempList = JSON.parse(JSON.stringify(userSelection));
    var tempInput = JSON.parse(JSON.stringify(inputState))
    tempList.push(tempInput)
    console.log(tempInput)
    console.log(tempList)
    setInputState(initialValues)
    setUserSelection(tempList)
  }

  const handleDeleteConcept = (e) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    for (let x = 0; x < temp.length; x++) {
      if (temp[x].isChecked === true) {
        temp.splice(x, 1);
      }
      setUserSelection(temp)
    }
  }

  const handleSelect = (i) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    temp[i].isChecked = !temp[i].isChecked;
    setUserSelection(temp)
  }

  const handleDisplayQuestionList = (e) => {
    setDisplayQuestionList(true);
  };

   //handleCreateWorksheet returns an array [questionList, answerKey]. Using variable to store
  // the array to use in handlePDF
  var createWorksheet = handleCreateWorksheet(userSelection); 

  const handlePDF= () => { //react-pdf
    return (
      <Document>
        <Page style= {styles.body}>
          <Text style= {styles.question} wrap={false}>
            Name:____________________________________________ Date:____________ 
          </Text>
          <Text style= {styles.title}>
            {userSelection[0].docTitle}
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

  return (
    <div className="main">
      <h1 className="title-banner">Math Worksheet Creator</h1>
      <p>
        Create your own math worksheet by selecting your choice of concepts, and
        then determine how many questions you would like for that concept. You
        can also adjust the difficulty of the questions as needed.
      </p>
      <form action={handleAddConcept}>
        <UserInput 
          handleInput = {handleInput}
          inputState = {inputState}
        />
        <label htmlFor="submit"></label>
          <button type="button" id="submit" onClick={handleAddConcept}>
            Add Questions
          </button>
      </form>

      <div>
        {userSelection.length>0 ? 
          <DisplayUserSelection 
            displayQuestionList = {displayQuestionList} 
            handleSelect = {handleSelect} 
            handleDeleteConcept = {handleDeleteConcept} 
            userSelection = {userSelection} 
          /> : null }
      </div>
        <button type="button" onClick={handleDisplayQuestionList}>
          Create Worksheet
        </button>   
        {displayQuestionList ? 
          <div>
              <PDFDownloadLink document={handlePDF()} fileName={userSelection[0].docTitle}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
              </PDFDownloadLink>
              <PDFViewer className= {userSelection[0].docTitle} children={handlePDF()} width= {1000} height= {1500}>
              </PDFViewer>
          </div>
        :null}

    </div>
    
  );
}


tableSnap = React.createRef();



export default App;
