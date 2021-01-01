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
// import { Document, Packer, Paragraph, TextRun } from "docx";

// import { randWhole } from "./app-files/general";
// const ref = React.createRef();
// import CreateWorksheet from "./create-worksheet";
// const doc = new Document();
// import * as addsub from "./app-files/add-sub";
// import * as o from "./app-files/order-of-ops";
// import * as alg from './app-files/algorithms';
// import * as docx from "docx";
// import Pdf from "react-to-pdf";
// import fs from 'fs';
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

  const [userSelection, setUserSelection] = useState([]);
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [order, setOrder] = useState('order')
  const [quantityState, setQuantityState] = useState("");
  const [levelState, setLevelState] = useState("");
  const [conceptState, setConceptState] = useState("");
  const [specifyState, setSpecifyState] = useState('')
  const [docTitle, setDocTitle] = useState("");
  const [docStyle, setDocStyle] = useState('')

  const handleInputLevel = (e) => {
    e.preventDefault();
    setLevelState(e.target.value);
    // console.log("this is level: " + levelState);
  };
  const handleInputQuantity = (e) => {
    e.preventDefault();
    setQuantityState(e.target.value);
    // console.log("this is quantity: " + quantityState);
  };
  const handleInputConcept = (e) => {
    e.preventDefault();
    setConceptState(e.target.value);
    // console.log("this is concept: " + conceptState);
  };
  const handleInputTitle = (e) => {
    e.preventDefault();
    setDocTitle(e.target.value);
  }
  const handleAddConcept = (e) => {
    e.preventDefault();
    var tempList = JSON.parse(JSON.stringify(userSelection));
    var conceptSelection = {
      concept: conceptState,
      level: levelState,
      docTitle: docTitle,
      quantity: quantityState,
      specify: specifyState,
      isChecked: false,
      order: order,
      docStyle:docStyle,
    };
    tempList.push(conceptSelection);
    setLevelState("")
    setQuantityState("")
    setConceptState("")
    setUserSelection(tempList);

  };
  const handleDeleteConcept = (e) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    for (let x = 0; x < temp.length; x++) {
      if (temp[x].isChecked === true) {
        temp.splice(x, 1);

      }
      setUserSelection(temp)
    }

  }

  const handleSelectOLD = () => { //changes all of them when one is changed but with (index) it wasn't working
    let temp = JSON.parse(JSON.stringify(userSelection));
    for (var i=0; i <temp.length; i++){
      temp[i].isChecked = !temp[i].isChecked;
    }
    console.log(userSelection)
    setUserSelection(temp)
  }
  const handleSelect = (i) => {
    console.log(i)
    let temp = JSON.parse(JSON.stringify(userSelection));
    console.log(temp)
    console.log(temp[i])
    temp[i].isChecked = !temp[i].isChecked;

    console.log(userSelection)
    setUserSelection(temp)
  }
  const handleOrder = (i) => {
    setOrder('mixed')
  }
  const handleDocStyle = () => { //change later to handle many options
    setDocStyle('column')
  }
  const handleDisplayQuestionList = (e) => {
    setDisplayQuestionList(true);
  };


  var image = []

  //handleCreateWorksheet returns an array [questionList, answerKey]. Using variable so that I can store
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
            {docTitle}
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
      <div className="no-print">
      <h1 className="title-banner">Math Worksheet Creator</h1>
      <p>
        Create your own math worksheet by selecting your choice of concepts, and
        then determine how many questions you would like for that concept. You
        can also adjust the difficulty of the questions as needed.
      </p>
      <div id="table-snap">
        <table>
          <tr>
            <td>This is a table</td>
            <td>Hello</td>
            <td>What</td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>David</td>
            <td>Melissa</td>
    
          </tr>
        </table>
      </div>
      
      <form action={handleAddConcept}>
        <p>
      <label htmlFor="level">Document Title:</label>
        <input
          type="text"
          id="docTitle"
          value={docTitle}
          onChange={handleInputTitle}
          name="title"
        /></p>
        <label htmlFor="concept-dropdown"></label>
        <select
          id="concept-dropdown"
          name="concept"
          value={conceptState}
          onChange={handleInputConcept}
        >
          <option value="">--Select a concept --</option>
          <option value="add-whole">Add Whole Numbers Application</option>
          <option value="sub-whole">Subtract Whole Numbers Application</option>
          <option value="mult-whole">Multiply Whole Numbers Application</option>
          <option value="add-dec">Add Decimals Application</option>
          <option value="sub-dec">Subtracting Decimals Application</option>
          <option value="add-dec-alg">Add Decimals Algorithm</option>
          <option value="sub-dec-alg">Subtracting Decimals Algorithm</option>
          <option value="div-dec-alg">Dividing Decimals Algorithm</option>
          <option value="mult-dec-alg">Multiplying Decimals Algorithm</option>
          <option value="order-ops-whole">Order of Operations Whole Numbers</option>
          <option value="order-ops-dec">Order of Operations Decimals</option>
          <option value="table">Input Output Tables</option>

        </select>
        <UserInput 
          handleInputQuantity= {handleInputQuantity} 
          quantityState={quantityState} 
          levelState={levelState} 
          handleInputLevel = {handleInputLevel} 
          order={order} 
          handleOrder={handleOrder}
          docStyle={docStyle}
          handleDocStyle={handleDocStyle}
        />
        <label htmlFor="submit"></label>
          <button type="button" id="submit" onClick={handleAddConcept}>
            Add Questions
          </button>
      </form>

      <div>
      {userSelection.length>0 ? 
      <DisplayUserSelection displayQuestionList = {displayQuestionList} handleSelect = {handleSelect} handleDeleteConcept = {handleDeleteConcept} userSelection = {userSelection} /> : null }
        {/* {displayUserSelection()} */}
        <div id="display-user-selection"></div>
      </div>

        <button type="button" onClick={handleDisplayQuestionList}>
          Create Worksheet
        </button>

      </div>
      {/* <CreateWorksheet createWorksheet={createWorksheet} displayQuestionList= {displayQuestionList} /> */}
     
        {displayQuestionList ? 
          <div>
              <PDFDownloadLink document={handlePDF()} fileName={docTitle}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
              </PDFDownloadLink>
              <PDFViewer className= {docTitle} children={handlePDF()} width= {500} height= {800}>
               
              </PDFViewer>
          </div>
        :null}

    </div>
    
  );
}


// html2canvas(document.querySelector('#table-snap')).then(function(canvas) {
//   document.body.appendChild(canvas);
// });
tableSnap = React.createRef();


// html2canvas(document.getElementsByClassName("table-snap")).then(function(canvas) {
//   document.body.appendChild(canvas);
// });
export default App;
