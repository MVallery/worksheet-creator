import '../../App.css';
import React, { useContext, useHistory } from "react";
import {randAddWhole, randSubWhole} from "../problems/add-sub";
import {randOrderOps} from "../problems/order-of-ops";
import {randAddDec, randSubDec} from '../problems/add-sub-dec';
import {randMultDec} from '../problems/multiply-dec';
import {randDivDec} from '../problems/divide-dec';
import {randTable}from '../problems/tables';
import * as asf from '../problems/add-sub-fract';
import {randMultWhole}from '../problems/multiply';
import {randDivWhole} from '../problems/divide';
import {shuffleArray} from '../problems/general';
import { AuthContext } from "../../shared/context/auth-context";
import {Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { randArea } from '../problems/area-perimeter';

Font.registerHyphenationCallback(word => [word]); //makes words not break/hyphenate
const styles = StyleSheet.create({
  question: {
    marginBottom:10,
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
    width: 230,
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
  answerLetter: {
    flexDirection:'row',
    padding: 10,
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
    var x
    for (x = 0; x < userSelection.quantity; x++) {
      // question = array[randWhole(0, array.length-1)]({level:userSelection.level, specify:userSelection.specify})
      question = randQuest(userSelection)
      questionAnswerList.push({
        question:<View ><Text style={styles.question}>{question.text} </Text> 
                    <Text>{question.answerChoices[0]} </Text> 
                    <Text>{question.answerChoices[1]} </Text> 
                    <Text>{question.answerChoices[2]} </Text> 
                    <Text>{question.answerChoices[3]} </Text>
                </View>,
        answer: <Text>{question.answerChoices[4]}</Text>
});
};
    }
const createQuestionAnswerListTable = (userSelection, randQuest) => {
  for (var x = 0; x <userSelection.quantity; x++) {
    question = randQuest(userSelection)
    if (typeof question.answerChoices[0] === 'string' ){
      questionAnswerList.push({
        question: <View>{question.text}<Text>{question.answerChoices[0]}</Text>
                                       <Text>{question.answerChoices[1]}</Text>
                                       <Text>{question.answerChoices[2]}</Text>
                                       <Text>{question.answerChoices[3]}</Text>
                  </View>,
        answer: <Text>{question.answerChoices[4]}</Text>
      })
    }else {
      if (userSelection.docStyle) { //columns & Table answer choices
        questionAnswerList.push({
          question: <View><Text>{question.text}</Text> 
                    <View style={styles.answerLetter}>{question.answerChoices[0]}</View>
                    <View style={styles.answerLetter}>{question.answerChoices[1]}</View>
                    <View style={styles.answerLetter}>{question.answerChoices[2]}</View>
                    <View style={styles.answerLetter}>{question.answerChoices[3]}</View>
                    
                    </View>,
          answer: question.answerChoices[4]
        })
      }else{
        questionAnswerList.push({
          question: <View><Text>{question.text}</Text> 
                    <View style={styles.answerLetter}>{question.answerChoices[0]}
                    {question.answerChoices[2]}</View>
                    <View style={styles.answerLetter}>{question.answerChoices[1]}
                    {question.answerChoices[3]}</View>
                    
                    </View>,
          answer: question.answerChoices[4]
        })
      }
    }
  }
}

  for (i = 0; i < userSelection.length; i++) {
    //loops through userSelection and based on the the concept selected by the user, 
    //  adds a random question from the conceptArray using createQuestionAnswerList function.
    if (userSelection[i].concept === "Adding Whole Numbers") {
      if (userSelection[i]['Vertical']){
        createQuestionAnswerListTable(userSelection[i], randAddWhole)
      } else {
        createQuestionAnswerList(userSelection[i], randAddWhole)
      }
      }else if (userSelection[i].concept === "Subtracting Whole Numbers") {
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randSubWhole)
        } else {
        createQuestionAnswerList(userSelection[i], randSubWhole)
        }
      }else if (userSelection[i].concept === "Multiplying Whole Numbers") {      
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randMultWhole)
        } else {
        createQuestionAnswerList(userSelection[i], randMultWhole)
        }
      }else if (userSelection[i].concept === "Dividing Whole Numbers") {
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randDivWhole)
        } else {
          createQuestionAnswerList(userSelection[i], randDivWhole)
        }
      }else if (userSelection[i].concept === "Order of Operations") {
        createQuestionAnswerList(userSelection[i], randOrderOps)
      }else if (userSelection[i].concept === "Dividing Decimals") {
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randDivDec)
        } else {
          createQuestionAnswerList(userSelection[i], randDivDec)
        }
      }else if (userSelection[i].concept === "Multiplying Decimals" || userSelection[i].concept === 'Mixed Multiplying Decimals' || userSelection[i].concept === 'Multiplying Decimals Application') {
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randMultDec)
        } else {
          createQuestionAnswerList(userSelection[i], randMultDec)
        }
      }else if (userSelection[i].concept === "Adding Decimals") {
        if (userSelection[i]['Vertical']){
          createQuestionAnswerListTable(userSelection[i], randAddDec)
        } else {
          createQuestionAnswerList(userSelection[i], randAddDec)
        }
      }else if (userSelection[i].concept === "Subtracting Decimals") {
        // conceptArray = [alg.subDecPV, alg.subDecWhole]
          if (userSelection[i]['Vertical']){
            createQuestionAnswerListTable(userSelection[i], randSubDec)
          } else {
            createQuestionAnswerList(userSelection[i], randSubDec)
          }
      }else if (userSelection[i].concept === "Adding Fractions") {
        createQuestionAnswerListTable(userSelection[i], asf.addFract)
      }else if (userSelection[i].concept === "Dividing Fractions") {
        createQuestionAnswerListTable(userSelection[i], asf.divideFract)
      }else if (userSelection[i].concept === "Multiplying Fractions") {
        createQuestionAnswerListTable(userSelection[i], asf.multFract)
      }else if (userSelection[i].concept === "Subtracting Fractions") {
        createQuestionAnswerListTable(userSelection[i], asf.subFract)
      }else if (userSelection[i].concept === "Input Output Tables") {
        createQuestionAnswerListTable(userSelection[i], randTable)
      }else if (userSelection[i].concept === "Area and Perimeter") {
        createQuestionAnswerListTable(userSelection[i], randArea)
      }
}

  if (userSelection.length>0){
    if (generalSelection.order===false) {
      questionAnswerList = shuffleArray(questionAnswerList)
    }
  }
 
  var questionList = [] //a list of only the questions text
  var questionAnswerViewList = []

  answerKey = [] 
  for (var num=0; num<questionAnswerList.length;num++) { 
    //loops through and adds question content only to questionList and answers only to answerKey formatted for react-pdf. 
    //Adds question Numbers (num) and styles based on docStyle into columns.
    if (generalSelection.docStyle) { 
      if (num+1>questionAnswerList.length-1){ //odd # questions /if num goes above the length of the array, only add one question.
        questionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{num+1})</Text>
            <View style={styles.columnQuestion}>
              {questionAnswerList[num].question}
            </View>
          </View>)
        answerKey.push(<View style={styles.answerKey}><Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)

      }else{ //even number of questions
        questionList.push(
        <View wrap={false} style={styles.column}>
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
    }else {
            questionAnswerViewList.push(<View wrap={false} style={styles.questionAnswer}>
                        <Text>{num+1})</Text>{questionAnswerList[num].question}</View>)
      // questionList.push(<View wrap={false} style={styles.questionAnswer}>
      //                   <Text>{num+1})</Text>{questionAnswerList[num].question}</View>)
      // answerKey.push(<View style={styles.answerKey}>
      //               <Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)

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
  
  if(!generalSelection.docStyle) {
    const generateList = (array) => {
      return <View style={styles.viewList} wrap={false}>{array}</View>
    }
    var newQuestionAnswerList = []
    var finalViewArray = []
      // for (var i=0; i<questionAnswerList.length; i+=4) {
      //   newQuestionAnswerList.push(questionAnswerViewList.slice(i, i+4))
      // }
      newQuestionAnswerList = spaceProblems(questionAnswerViewList)
      for (let i=0; i<newQuestionAnswerList.length;i++){
        finalViewArray.push(generateList(newQuestionAnswerList[i]))
      }
      questionList = finalViewArray

      }


  return [questionList, answerKey];

};


