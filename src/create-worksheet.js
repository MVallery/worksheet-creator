import './App.css';
import * as as from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import * as tb from './app-files/tables';
import {randWhole, shuffleArray} from './app-files/general';
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  // PDFViewer,
  // ReactPDF,
  PDFDownloadLink,
} from "@react-pdf/renderer";
// import PropTypes from 'prop-types';
import React, { 
  // Component
 } from 'react';

// import cw from './App.js'



const styles = StyleSheet.create({
  text: {
    margin: 0,
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
  questionAnswer: {
    flexDirection:'row',
    marginTop: 10,
    marginRight:10,
    fontSize: 14,
    textAlign: 'justify',
  },

  answerKey: {
    flexDirection:'row',
    marginTop: 10,
  }
});
export const handleCreateWorksheet = (userSelection, order) => {
  var answerKey = [];
  var [n,i,x] = [0,,];
  var [questionListOLD, question, questionArray] = [[],'','']
  var questionList = []
  const createAnswerChoices = (question) => { //For PDF
    questionList.push({
              question:<View ><Text style={styles.text}>{question.questionText} </Text> 
                          <Text>{question.answerChoices[0]} </Text> 
                          <Text>{question.answerChoices[1]} </Text> 
                          <Text>{question.answerChoices[2]} </Text> 
                          <Text>{question.answerChoices[3]} </Text>
                      </View>,
              answer: <Text>{question.answerChoices[4]}</Text>
    });
    console.log(questionList)

    //works but doesn't align with answer choices
    // questionList.push(<View wrap={false} ><Text style={styles.text}>{n + ") " + question.questionText} </Text> 
    // <Text>{question.answerChoices[0]} </Text> 
    //   <Text>{question.answerChoices[1]} </Text> 
    //     <Text>{question.answerChoices[2]} </Text> 
    //       <Text>{question.answerChoices[3]} </Text>
    // </View>
    // );


    // answerKey.push(<Text style={styles.ac}>{n + ") " + question.answerChoices[4]}</Text>);
  };
  const createACTable = (question) => {
    questionList.push(<Text style={styles.text}>{n + ") " + question.questionText}
      <Image src={question.img} defer style={{}} /></Text>
    
    );
  }
  const createAnswerChoicesOLD1224 = (question) => {
    questionList.push(
      <p>{n+ ') ' + question.questionText}</p>);
      for (var m = 0; m<4; m++) {
        questionList.push(<p>{question.answerChoices[m]}</p>);
      }
      answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);
  };
  const createAnswerChoicesTrypagedisplaypagebreak = (question) => {
      if ((questionList.length-1)%4 ===0 && questionList.length !== 0) {
        questionList.push(
          <p>{n+ ') ' + question.questionText}</p>);
          for (var m = 0; m<4; m++) {
            if (m<3){
              questionList.push(<p>{question.answerChoices[m]}</p>);
  
            } else {
              questionList.push(<p style={{pageBreakAfter:'always'}}>{question.answerChoices[m]}</p>);
  
            }
          }
          answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);

      }else {
        questionList.push(
          <p>{n+ ') ' + question.questionText}</p>);
          for (var m = 0; m<4; m++) {
            questionList.push(<p>{question.answerChoices[m]}</p>);
          }
          answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);
      }

    

    // if (questionList.length % 4 === 0) {
    //   questionList.push(
    //     <p>{n+ ') ' + question.questionText}</p>);
    //     for (var m = 0; m<4; m++) {
    //       if (m<3){
    //         questionList.push(<p>{question.answerChoices[m]}</p>);

    //       } else {
    //         questionList.push(<p style={{pageBreakAfter:'always'}}>{question.answerChoices[m]}</p>);

    //       }
    //     }
    //     answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);
    // } else {
    //   questionList.push(
    //     <p>{n+ ') ' + question.questionText}</p>);
    //     for (var m = 0; m<4; m++) {
    //       questionList.push(<p>{question.answerChoices[m]}</p>);
    //     }
    //     answerKey.push(<p>{n + ') ' + question.answerChoices[4]}</p>);
    // }

  };
  
  for (i = 0; i < userSelection.length; i++) {
    if (userSelection[i].concept === "add-whole") {
      questionArray = [as.addWhole, as.addWhole2, as.addWhole3, as.addWhole4, as.addWhole5]
      for (x = 0; x < userSelection[i].quantity; x++) {
        n += 1;
        question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})
        createAnswerChoices(question);
      }
      }else if (userSelection[i].concept === "sub-whole") {
        questionArray = [as.subWhole, as.subWhole2, as.subWhole3, as.subWhole4, as.subWhole5]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})
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
      }else if (userSelection[i].concept === "order-ops-dec") {
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = o.orderOps({
            level: userSelection[i].level,
            specify: "decimal",
          });
          createAnswerChoices(question);
        }
      }else if (userSelection[i].concept === "div-dec-alg") {
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
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})

          createAnswerChoices(question);
       }
      }else if (userSelection[i].concept === "add-dec-alg") {
        questionArray = [alg.addDecWhole, alg.addDecPV]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})

          // question = alg.divideDec({
          //   level: userSelection[i].level,
          // });
          createAnswerChoices(question);
        }
      }else if (userSelection[i].concept === "sub-dec-alg") {
        questionArray = [alg.subDecPV, alg.subDecWhole]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})

          createAnswerChoices(question);
        }
      }else if (userSelection[i].concept === "table") {
        questionArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})

          // question = alg.divideDec({
          //   level: userSelection[i].level,
          // });
          createACTable(question);
        }
      }else if (userSelection[i].concept === "tablev1") {
        questionArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          // question = questionArray[randWhole(0, questionArray.length)]({level:userSelection[i].level})
          // createAnswerChoices(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          // questionList.push(question.questionText)
          // answerKey.push(question.answerChoices[4])
          var dolphinImg = <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>;
          var probTextOnly = <Text>Hello this is react-pdf text from table</Text> //type mismatch
          var prob1 = `This is question stufffs and this is a pic: ${dolphinImg}` //shows up as [object:object]
          var prob2 = <Text>This is question stufffs and this is a pic: <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>answer choices</Text>// error mismatch type append child? 
          var prob = "hello this is working" //now this also gives type mismatch?
      
          var problem = {questionText: prob,
              answerChoices: "no answers yet",
              correctAnswer: 'correct answer'}
          questionList.push(prob2)
        }
        
      }else if (userSelection[i].concept === "tablev2") {
        questionArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = questionArray[randWhole(0, questionArray.length-1)]({level:userSelection[i].level})
          // createAnswerChoices(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          questionList.push(question.questionText)
          answerKey.push(question.answerChoices[4])
        }
        
      }
}
  if (order === 'mixed') {
    questionList = shuffleArray(questionList)
  }
  // setSele('')
  // setLevelState('')
  // setQuantityState('')
  // setConceptState('')
  // console.log(questionList);
  var newQuestionList = []
  var answerKey = []
  for (var k=0; k<questionList.length;k++){
    newQuestionList.push(<View wrap={false} style={styles.questionAnswer}><Text>{k+1})</Text>{questionList[k].question}</View>)
    answerKey.push(<View style={styles.answerKey}><Text>{k+1})</Text>{questionList[k].answer}</View>)
    console.log(newQuestionList)
    console.log(answerKey)
    // questionList[i].question = <View><Text>{i+1})</Text>{questionList[i]}</View> OLD questionList is an array not object

    // questionList[i] = <View><Text>{i+1})</Text>{questionList[i]}</View>
    
    // `${i+1})${questionList[i]}`
  }
  // return [questionList, answerKey];
  return [newQuestionList, answerKey];

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

