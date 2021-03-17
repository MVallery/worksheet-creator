import React, { useContext, useHistory } from "react";
import {Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import {shuffleArray} from '../problems/general';
import {conceptCheck} from './conceptCheck';
import '../../App.css';


Font.registerHyphenationCallback(word => [word]); //makes words not break/hyphenate
const styles = StyleSheet.create({
  question: {
    marginBottom:30,
    fontSize: 12,
    textAlign: 'justify',
    // fontFamily: 'arial'
  },
  questionAnswer: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom:20,
    marginRight:40,
    fontSize: 12,
    marginLeft:40,
    textAlign: 'justify',
  },
  column: {
    flexDirection:'row',
    marginTop: 10,
    marginRight:20,
    fontSize:12,
    textAlign:'justify',
    paddingRight:50,
    paddingBottom:10,
    flexGrow: 1,
  },
  columnQuestion: {
    display:'flex',
    flexDirection:'column',
    width: '50%',
    marginRight:20,
  },
  num: {
    width:25,
    marginLeft:10,
  },
  answerKey: {
    flexDirection:'row',
    marginTop: 10,
  },
  answerchoices: {
    padding:50,
  },
  answerLetter: {
    flexDirection:'row',
    padding: 10,
    margin: 10,
  },
  viewList: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',

  },
  viewQuestion: {
    flexGrow: 1,

  }
});
export const handleCreateWorksheet = (userSelection, generalSelection) => { 
//creates the worksheet using react-pdf based on userSelection (array of objects: {level:, specify:, quantity:,})  

var i
  var [answerKey, questionAnswerList, question] = [[],[],'']
  const createQuestionAnswerList = (userSelection, randQuest) => { 
    //populates the questionAnswerList with react-pdf styled combinations of question+answer choices, and a separate answer key.
    //checks for type of question to determine if styling needs be a <Text> or <View> also styles table answer choices based on columns
    for (var x = 0; x < userSelection.quantity; x++) {
      question = randQuest(userSelection)
      if (typeof question.text === 'string' && typeof question.answerChoices[0]==='string') {
        questionAnswerList.push({
          question:<View ><Text style={styles.question}>{question.text} </Text> 
                      <Text>{question.answerChoices[0]} </Text> 
                      <Text>{question.answerChoices[1]} </Text> 
                      <Text>{question.answerChoices[2]} </Text> 
                      <Text>{question.answerChoices[3]} </Text>
                  </View>,
          answer: <Text>{question.answerChoices[4]}</Text>
      });

      } else if (typeof question.text === 'string') { //table answer choices
        if (generalSelection.docStyle) { //table answers columns 
          questionAnswerList.push({
            question: <View><Text>{question.text}</Text> 
                      <View style={styles.answerLetter}>{question.answerChoices[0]}</View>
                      <View style={styles.answerLetter}>{question.answerChoices[1]}</View>
                      <View style={styles.answerLetter}>{question.answerChoices[2]}</View>
                      <View style={styles.answerLetter}>{question.answerChoices[3]}</View>
                      
                      </View>,
            answer: <View>{question.answerChoices[4]}</View>
          })
        }else{ // table answers no columns
          questionAnswerList.push({
            question: <View><Text>{question.text}</Text> 
                      <View style={styles.answerLetter}>{question.answerChoices[0]}
                      {question.answerChoices[2]}</View>
                      <View style={styles.answerLetter}>{question.answerChoices[1]}
                      {question.answerChoices[3]}</View>
                       
                      </View>,
            answer: <View>{question.answerChoices[4]}</View>
          })
        }
      } else if (typeof question.answerChoices[0] === 'string') { //table question
        questionAnswerList.push({
          question: <View debug='true'><View style={styles.question}>{question.text}</View><Text>{question.answerChoices[0]}</Text>
                                         <Text>{question.answerChoices[1]}</Text>
                                         <Text>{question.answerChoices[2]}</Text>
                                         <Text>{question.answerChoices[3]}</Text>
                    </View>,
          answer: <Text>{question.answerChoices[4]}</Text>
        })
      }
    };
  }

  for (i = 0; i < userSelection.length; i++) {
    //loops through userSelection and based on the the concept selected by the user, 
    // adds a random question using createQuestionAnswerList function.
    createQuestionAnswerList(userSelection[i], conceptCheck(userSelection[i]))

  }

  if (userSelection.length>0){
    if (generalSelection.order===false) {
      questionAnswerList = shuffleArray(questionAnswerList)
    }
  }
 
  var questionList = []
  var questionAnswerViewList = []

  answerKey = [] 
  for (var num=0; num<questionAnswerList.length;num++) { 
    //loops through and numbers questions and adds content only to questionList and answers only to answerKey formatted for react-pdf. 
    //Styles docStyle into columns.
    if (generalSelection.docStyle) { 
      if (num+1>questionAnswerList.length-1){ //columns and odd # questions /if num goes above the length of the array, only add one question.

        questionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{num+1})</Text>
            <View style={styles.columnQuestion}>
              {questionAnswerList[num].question}
            </View>
          </View>)
        answerKey.push(<View style={styles.answerKey}><Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)

      }else{ //columns and even number of questions
        questionList.push(
        <View  wrap={false} style={styles.column}>
          <Text style={styles.num}>{num+1})</Text>
            <View style={styles.columnQuestion}>
              {questionAnswerList[num].question}
            </View>
          <Text style={styles.num}>{num+2})</Text>
            <View style={styles.columnQuestion}>
              {questionAnswerList[num+1].question}
            </View>
        </View>
        )
        answerKey.push(<View style={styles.answerKey}><Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)
        answerKey.push(<View style={styles.answerKey}><Text>{num+2})</Text>{questionAnswerList[num+1].answer}</View>)
        num+=1
      }
    }else { //no columns
      answerKey.push(<View style={styles.answerKey}>
                    <Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)
      questionList.push(<View wrap={false} style={styles.questionAnswer}>
                        <Text>{num+1})</Text>{questionAnswerList[num].question}</View>)


    }
  } 

  const spaceProblems = (array) => {
    var newArray = []
    if (array.length<6){
      newArray.push(array.splice(0))
    }else if (array.length%4 === 3){
      
      newArray.push(array.splice(0,3))
    }else if (array.length%4 === 2) {
   
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    } else if (array.length%4 === 1) {      
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    }
    for (let i=0; i<array.length; i++){
      newArray.push(array.splice(0,4))
    }
    return newArray
  }
  
  // if(!generalSelection.docStyle) {
  //   const generateList = (array) => {
  //     return <View style={styles.viewList} wrap={false}>{array}</View>
  //   }
  //   var newQuestionAnswerList = []
  //   var finalViewArray = []
  //     // for (var i=0; i<questionAnswerList.length; i+=4) {
  //     //   newQuestionAnswerList.push(questionAnswerViewList.slice(i, i+4))
  //     // }
  //     newQuestionAnswerList = spaceProblems(questionAnswerViewList)
  //     for (let i=0; i<newQuestionAnswerList.length;i++){
  //       finalViewArray.push(generateList(newQuestionAnswerList[i]))
  //     }
  //     questionList = finalViewArray

  //     }

  return [questionList, answerKey];

};


