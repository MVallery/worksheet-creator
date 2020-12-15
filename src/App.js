import React, { useState, 
  // useEffect
 } from "react";
// import logo from "./logo.svg";
import "./App.css";
import * as addsub from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import {
  // handleCreateWorksheet,
  // handlePDF,
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
// import CreateWorksheet from "./create-worksheet";


function App() {
  
  const styles = StyleSheet.create({
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
  // useEffect(() => {
  //   o.orderOps({specify:"decimal", level:"2" })

  //   addsub.addWhole({specify:"whole", specify2:"add", level:"2" })
  // }, []);
  const [userSelection, setUserSelection] = useState([]);
  // const [questionList, setQuestionList] = useState([])
  const [displayQuestionList, setDisplayQuestionList] = useState(false);
  const [quantityState, setQuantityState] = useState("");
  const [levelState, setLevelState] = useState("");
  const [conceptState, setConceptState] = useState("");
  const [docTitle, setDocTitle] = useState("");


  const displayUserSelection = () => {
    // for (var i=0; i<userSelection.length;i++) {
    //   for (var item in userSelection[i]) {
    //     document.getElementById("display-user-selection").innerHTML +=

    //     <div><p>{JSON.parse(JSON.stringify(userSelection[item]))}</p></div>
    //     console.log(JSON.stringify(userSelection[item]))
    //   }
    // }
    
    var displayArray = [];
    const tableGenerator = () => {
      for (var i=0; i<userSelection.length;i++) {
            displayArray.push(
              <tr>
              <td>{userSelection[i].concept}</td>
              <td>{userSelection[i].quantity}</td>
              <td>{userSelection[i].level}</td>
            </tr>
            )
      }
      var table = (
        <table>
          <tbody>
          <tr>
            <th>Concept</th>
            <th>Quantity</th>
            <th>Level</th>
          </tr>

        {displayArray}
        </tbody>
        </table>)
      return table
    }
   
    if (displayQuestionList === false) {
      return tableGenerator()
    } else {
      return null
    }
    // displayQuestionList==='false' ? displayArray: null
    // return displayArray;
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
  const handleDisplayQuestionList = (e) => {
    setDisplayQuestionList(true);
  };
  const handleCreateWorksheet = (e) => {
    var questionList = [];
    var answerKey = [];
    var n = 0;
    var i;
    var x;
    var question = ''
    var questionArray = ''
    const createAnswerChoices = (question) => {
      questionList.push(<Text style={styles.text}>{n + ") " + question.questionText}</Text>);
      for (var m = 0; m<4; m++){
        questionList.push(<Text style={styles.ac}>{question.answerChoices[m]}</Text>);
      }
      answerKey.push(<Text style={styles.ac}>{n + ") " + question.answerChoices[4]}</Text>);
    };
    
    for (i = 0; i < userSelection.length; i++) {
      if (userSelection[i].concept === "add-whole") {
        questionArray = [addsub.addWhole, addsub.addWhole2]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = addsub.addWhole(userSelection[i].level);
          createAnswerChoices(question);
        }
      } else if (userSelection[i].concept === "order-ops-whole") {
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = o.orderOps({
              level: userSelection[i].level,
              specify: "whole",
            });
            createAnswerChoices(question);
          }
      } else if (userSelection[i].concept === "div-dec-alg") {
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = alg.divideDec({
              level: userSelection[i].level,
            });
            createAnswerChoices(question);
          }
        }else if (userSelection[i].concept === "mult-dec-alg") {
          questionArray = [alg.multDec, alg.multDec2];
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = questionArray[randWhole(0, questionArray.length)]({level:userSelection[i].level})

            createAnswerChoices(question);
         }
        }else if (userSelection[i].concept === "add-dec-alg") {
          questionArray = [alg.addDecWhole, alg.addDecPV]
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = questionArray[randWhole(0, questionArray.length)]({level:userSelection[i].level})

            // question = alg.divideDec({
            //   level: userSelection[i].level,
            // });
            createAnswerChoices(question);
          }
        }else if (userSelection[i].concept === "sub-dec-alg") {
          questionArray = [alg.subDecPV, alg.subDecWhole]
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = questionArray[randWhole(0, questionArray.length)]({level:userSelection[i].level})

            createAnswerChoices(question);
          }
        }
  }
    // setSele('')
    // setLevelState('')
    // setQuantityState('')
    // setConceptState('')
    // console.log(questionList);

    return [questionList, answerKey];
  };


  var cw = handleCreateWorksheet(userSelection);

  const handlePDF= (docTitle) => {
    return (

      <Document>
        <Page style= {styles.body}>
          <Text style= {styles.question}>
          Name:____________________________________________ Date:____________ </Text>
          <Text style= {styles.title}>
            {docTitle}
          </Text>
          {cw[0]}</Page>
        <Page style= {styles.ac}>
          <Text style={styles.ac}>Answer Key: </Text>
          {cw[1]}
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
        <label htmlFor="concept-dropdown">Select your concept</label>
        <select
          id="concept-dropdown"
          name="concept"
          value={conceptState}
          onChange={handleInputConcept}
        >
          <option value="">--Please select a concept --</option>
          <option value="add-whole">Adding Whole Numbers</option>
          <option value="sub-whole">Subtracting Whole Numbers</option>
          <option value="add-dec">Adding Decimals Application</option>
          <option value="add-dec-alg">Adding Decimals Algorithm</option>

          <option value="sub-dec">Subtracting Decimals Application</option>
          <option value="sub-dec-alg">Subtracting Decimals Algorithm</option>

          <option value="order-ops-whole">
            Order of Operations Whole Numbers
          </option>
          <option value="order-ops-dec">Order of Operations Decimals</option>
          <option value="div-dec-alg">Dividing Decimals Algorithm</option>
          <option value="mult-dec-alg">Multiplying Decimals Algorithm</option>

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

        <label htmlFor="level">Level of difficulty:</label>
        <input
          type="number"
          id="level"
          value={levelState}
          onChange={handleInputLevel}
          name="level"
          min="1"
          max="3"
        />
        <label htmlFor="level">Document Title:</label>
        <input
          type="text"
          id="docTitle"
          value={docTitle}
          onChange={handleInputTitle}
          name="title"
        />
        <label htmlFor="submit">Add Concepts</label>

        <button type="button" id="submit" onClick={handleAddConcept}>
          Add Question
        </button>
      </form>

      <div>
        <p>Concepts Added:</p>
        {displayUserSelection()}
        <div id="display-user-selection"></div>
      </div>

      <button type="button" onClick={handleDisplayQuestionList}>
        Create Worksheet
      </button>
      {/* <CreateWorksheet cw={cw} displayQuestionList= {displayQuestionList} /> */}
     
        {displayQuestionList ? 
        <div>
            <PDFDownloadLink document={handlePDF()} fileName={docTitle}>
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
      :null}

    </div>
  );
}

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