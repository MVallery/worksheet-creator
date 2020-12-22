import './App.css';
import * as addsub from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import {randWhole} from './app-files/general';
// import PropTypes from 'prop-types';
import React, { 
  // Component
 } from 'react';
import { Page, 
  Text, 
  // View, 
  Document, 
  StyleSheet, 
  // PDFViewer 
}

   from '@react-pdf/renderer';
// import cw from './App.js'



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
export const handleCreateWorksheet = (userSelection) => {
  var answerKey = [];
  var [n,i,x] = [0,,];
  var [questionList, question, questionArray] = [[],'','']

  const createAnswerChoicesPDF = (question) => { //For PDF
    questionList.push(<Text style={styles.text}>{n + ") " + question.questionText}</Text>);
    for (var m = 0; m<4; m++){
      questionList.push(<Text style={styles.ac}>{question.answerChoices[m]}</Text>);
    }
    answerKey.push(<Text style={styles.ac}>{n + ") " + question.answerChoices[4]}</Text>);
  };
  const createAnswerChoices = (question) => {
    questionList.push(
      <p>{n+ ') ' + question.questionText}</p>);
      for (var m = 0; m<4; m++) {
        questionList.push(<p>{question.answerChoices[m]}</p>);
      }
      answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);
  };
  
  for (i = 0; i < userSelection.length; i++) {
    if (userSelection[i].concept === "add-whole") {
      questionArray = [addsub.addWhole, addsub.addWhole2]
      for (x = 0; x < userSelection[i].quantity; x++) {
        n += 1;
        question = addsub.addWhole(userSelection[i].level);
        createAnswerChoices(question);
      }
    }else if (userSelection[i].concept === "sub-whole") {
      questionArray = [addsub.subWhole, addsub.subWhole2, addsub.subWhole3]
      for (x = 0; x < userSelection[i].quantity; x++) {
        n += 1;
        question = questionArray[randWhole(0, questionArray.length)]({level:userSelection[i].level})
        createAnswerChoices(question);
      }
    }else if (userSelection[i].concept === "order-ops-whole") {
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


// var cw = handleCreateWorksheet();

// export const handlePDF = (title) => {
//   return (

//     <Document>
//       <Page style= {styles.body}>
//         <Text style= {styles.question}>
//         Name:____________________________________________ Date:____________ </Text>
//         <Text style= {styles.title}>
//           {title}
//         </Text>
//         {cw[0]}</Page>
//       <Page style= {styles.ac}>
//         <Text style={styles.ac}>Answer Key: </Text>
//         {cw[1]}
//       </Page>
//     </Document>
//   )


// };
class CreateWorksheet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
      return (
        <div>
        {this.props.displayQuestionList ? 
          <Document>
          <Page>
          {this.props.cw[0]}
          </Page>

          <Page>
          {this.props.cw[1]}
          </Page>
        </Document>
        :null}
        </div>
      )
  }
}

// function Problems() {
//   return (
//     <div className="App">
//     <p>7 + 2</p>

//     </div>
//   );
// }


export default CreateWorksheet;

