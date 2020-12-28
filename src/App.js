import React, { useState, 
  useEffect
 } from "react";
// import logo from "./logo.svg";
import "./App.css";
import * as addsub from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import * as docx from "docx";
import {table1} from './app-files/tables';
// import { Document, Packer, Paragraph, TextRun } from "docx";
import html2canvas from 'html2canvas';
import fs from 'fs';
import jsPDF from 'jspdf';

import Pdf from "react-to-pdf";
import {
  handleCreateWorksheet,
} from './create-worksheet';
import {
  Page,
  Text,
  // View,
  Document,
  StyleSheet,
  // PDFViewer,
  // ReactPDF,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { randWhole } from "./app-files/general";
// const ref = React.createRef();
// import CreateWorksheet from "./create-worksheet";
// const doc = new Document();
var tableSnap = React.createRef();
function App() {
  useEffect(() => {
    table1()
});
  const styles = StyleSheet.create({// styling for PDF react-pdf
    body: {
      marginTop:50,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 15,
      textAlign: 'center',
      // fontFamily: 'arial'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      // fontFamily: 'arial'
    },
    text: {
      margin: 25,
      fontSize: 14,
      textAlign: 'justify',
      // fontFamily: 'arial'

    },
    ac: {
      margin: 5,
      marginLeft: 40,
      fontSize: 14,
      // fontFamily: 'arial'

    },
    question: {
      margin: 5,
      marginLeft: 20,
      fontSize: 14,
      // fontFamily: 'arial'
    }
  });

  const [userSelection, setUserSelection] = useState([]);
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [order, setOrder] = useState('order')
  const [quantityState, setQuantityState] = useState("");
  const [levelState, setLevelState] = useState("");
  const [conceptState, setConceptState] = useState("");
  const [docTitle, setDocTitle] = useState("");


  const displayUserSelection = () => {
    var displayArray = [];
    const tableGenerator = () => {
      for (var i=0; i<userSelection.length;i++) {
        let x=i
          displayArray.push(
            <tr>
            <td>{userSelection[i].concept}</td>
            <td>{userSelection[i].quantity}</td>
            <td>{userSelection[i].level}</td>
            {/* does not work bc the index changes, then when trying to delete later it has the higher number */}
            <td><input 
                  type="checkbox"  
                  onChange={()=> handleSelect(x)}
                  checked={userSelection[i].isChecked} 
                  value={userSelection[i].isChecked}/></td>
            {/* checked={userSelection[i].isChecked} onChange={()=> {handleSelect(i)}} */}
          </tr>
          )
      }
      var table = (
        <div>
        <p>Concepts included:</p>
        <table>
          <tbody>
          <tr>
            <th>Concept</th>
            <th>Quantity</th>
            <th>Level</th>
            <th><button onClick={handleDeleteConcept}>Delete</button></th>
          </tr>

        {displayArray}
        </tbody>
        </table>
        </div>)
      return table
    }
   
    if (displayQuestionList === false) {
      console.log(tableGenerator)
      return tableGenerator()
    } else {
      return null
    }
  };
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
    var conceptSelect = conceptState;
    var quantitySelect = quantityState;
    var levelSelect = levelState;
    var conceptSelection = {
      concept: conceptSelect,
      level: levelSelect,
      quantity: quantitySelect,
      isChecked: false,
      order:false, //false = mixed //true = in order
    };
    
    // var  newList= []
    tempList.push(conceptSelection);
    setLevelState("")
    setQuantityState("")
    setConceptState("")
    setUserSelection(tempList);
    // console.log(userSelection);
    // console.log("This is concept state" + conceptState);
  };
  const handleDeleteConcept = (e) => {
    let temp = JSON.parse(JSON.stringify(userSelection));
    for (let x = 0; x < temp.length; x++) {
      if (temp[x].isChecked === true) {
        //temp[x].name = 0;
        temp.splice(x, 1);

      }
      setUserSelection(temp)
      
      //this.setState({nameList:temp})
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
  const handleDisplayQuestionList = (e) => {
    setDisplayQuestionList(true);
  };


  var image = []
  var cw = handleCreateWorksheet(userSelection, order);

  const handlePDF= () => { //react-pdf
    return (

      <Document>
        <Page style= {styles.body}>
          <Text style= {styles.question}>
            Name:____________________________________________ Date:____________ 
          </Text>
          <Text style= {styles.title}>
            {docTitle}
          </Text>
            {cw[0]}
        </Page>
        <Page style= {styles.ac}>
          <Text style={styles.ac}>Answer Key: </Text>
            {cw[1]}
        </Page>
      </Document>
    )


  };

  const handlePDF2 = () => {
    const pdf = new jsPDF();
    pdf.fromHTML(handleDisplayWorksheet());
    pdf.save('pdf')
  }
  // const handlePDFPdf = () => {
  //   <Pdf targetRef={ref} filename={docTitle}>
  //     {({toPdf}) => <button onClick={toPdf}>Generate PDF</button>}
  //   </Pdf>
  // }
  const handleCanvas = () => {
    html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
      // console.log('Finished')
      document.body.appendChild(canvas);
    });
  }
  const handleDisplayWorksheet = () => {
    return ( //// div had: ref={ref}
      <div > 
      <div className="name-title">
        <p>Name:_________________________________________________ Date_________________</p>
        <p>{docTitle}</p>
        <p className="worksheet">
          {cw[0]}
        </p>
      </div>
      <div className="answer-key">
        <p>Answer Key:</p>
        <p> {cw[1]}</p>
      </div>
      </div>    
    )
    
  }

  const handlePrintWorksheet = () => {
    {window.print()}
  }
  return (
    <div className="main">
      <div className="no-print">
      <h1 className="title-banner">Math Worksheet Creator</h1>
      <p>
        Create your own math worksheet by selecting your choice of concepts, and
        then determine how many questions you would like for that concept. You
        can also adjust the difficulty of the questions as needed.
      </p>
      {/* {table1} */}
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
          <option value="add-whole">Adding Whole Numbers</option>
          <option value="sub-whole">Subtracting Whole Numbers</option>
          <option value="add-dec">Adding Decimals Application</option>
          <option value="add-dec-alg">Adding Decimals Algorithm</option>
          <option value="sub-dec">Subtracting Decimals Application</option>
          <option value="sub-dec-alg">Subtracting Decimals Algorithm</option>
          <option value="order-ops-whole">Order of Operations Whole Numbers</option>
          <option value="order-ops-dec">Order of Operations Decimals</option>
          <option value="div-dec-alg">Dividing Decimals Algorithm</option>
          <option value="mult-dec-alg">Multiplying Decimals Algorithm</option>
          <option value="table">Input Output Tables</option>

        </select>
        <label for="quantity">Quantity:</label>

        <input
          type="number"
          id="quantity"
          onChange={handleInputQuantity}
          value={quantityState}
          name="quantity"
          min="1"
          max="50"
        />

        <label htmlFor="level">Difficulty:</label>
        <input
          type="number"
          id="level"
          value={levelState}
          onChange={handleInputLevel}
          name="level"
          min="1"
          max="3"
        />
        <label htmlFor="order">Mix up the questions:</label>
        <input 
                  type="checkbox"  
                  id="order"
                  onChange={()=> handleOrder()}
                  value={order}/>

        <label htmlFor="submit"></label>

        <button type="button" id="submit" onClick={handleAddConcept}>
          Add Questions
        </button>
      </form>

      <div>
        {userSelection.length>0 ? displayUserSelection(): null}
        {/* {displayUserSelection()} */}
        <div id="display-user-selection"></div>
      </div>


      <button type="button" onClick={handleDisplayQuestionList}>
        Create Worksheet
      </button>
      <button type="button" onClick={handlePDF}>
        Display PDF
      </button>
      <button type="button" onClick={handlePrintWorksheet}>
        Print Worksheet
      </button>
      <button type="button" onClick={handleCanvas}>
        Table to Img
      </button>
      </div>
      {/* <CreateWorksheet cw={cw} displayQuestionList= {displayQuestionList} /> */}
     
        {displayQuestionList ? 
        <div className="section-to-print">
        <div>
            <PDFDownloadLink document={handlePDF()} fileName={docTitle}>
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
        <div>
        {/* <Pdf targetRef={ref} filename={docTitle}>
      {({toPdf}) => <button onClick={toPdf}>Generate PDF</button>}
    </Pdf> */}
          <div className="worksheet-display">
          {/* {handleDisplayWorksheet()} */}
         
          </div>

        </div>
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


// const handleCreateWorksheetOLD = (e) => {
//   var questionList = [];
//   var answerKey = [];
//   var n = 0;

//   const createAnswerChoices = (question) => {
//     questionList.push(
//       <div>
//         <p>{n + ") " + question.questionText}</p>
//       </div>
//     );
//     questionList.push(
//       <div className="ac">
//         <p>{question.answerChoices[0]}</p>
//       </div>
//     );
//     questionList.push(
//       <div className="ac">
//         <p>{question.answerChoices[1]}</p>
//       </div>
//     );
//     questionList.push(
//       <div className="ac">
//         <p>{question.answerChoices[2]}</p>
//       </div>
//     );
//     questionList.push(
//       <div className="ac">
//         <p>{question.answerChoices[3]}</p>
//       </div>
//     );
//     answerKey.push(
//       <div>
//         <p>{n + ") " + question.answerChoices[4]}</p>
//       </div>
//     );
//   };
//   for (var i = 0; i < userSelection.length; i++) {
//     if (userSelection[i].concept === "add-whole") {
//       for (var x = 0; x < userSelection[i].quantity; x++) {
//         n += 1;
//         var question = addsub.addWhole(userSelection[i].level);
//         createAnswerChoices(question);
//       }
//     } else if (userSelection[i].concept === "order-ops-whole") {
//       for (x = 0; x < userSelection[i].quantity; x++) {
//         n += 1;
//         var question = o.orderOps({
//           level: userSelection[i].level,
//           specify: "whole",
//         });
//         createAnswerChoices(question);
//       }
//     }
//   }
//   // console.log(questionList);
//   return [questionList, answerKey];
// };