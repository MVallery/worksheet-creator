import './App.css';
import * as as from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/dec-alg';
import * as asdec from './app-files/add-sub-dec';
import * as mdec from './app-files/multiply-dec';
import * as ddec from './app-files/divide-dec';
import * as tb from './app-files/tables';
import * as asf from './app-files/add-sub-fract';
import * as mw from './app-files/multiply';
import * as d from './app-files/divide';
import {randWhole, shuffleArray} from './app-files/general';
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,

  // PDFViewer,
  // ReactPDF,
  PDFDownloadLink,
} from "@react-pdf/renderer";
// import PropTypes from 'prop-types';
import React, { 
  // Component
 } from 'react';

// import cw from './App.js'

Font.registerHyphenationCallback(word => [word]); //makes words not break/hyphenate
const styles = StyleSheet.create({
  question: {
    marginBottom:10,
    fontSize: 12,
    textAlign: 'justify',
    // fontFamily: 'arial'
  },
  questionAnswer: {
    flexDirection:'row',
    flexGrow: 1,
    marginTop: 10,
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
  }
});
export const handleCreateWorksheet = (userSelection, generalSelection) => { 
//creates the worksheet using react-pdf based on userSelection (array of objects: {level:, specify:,order:, docStyle:, quantity:,}) 
  var [n,i,x] = [0,,];
  var [answerKey, questionAnswerList, question, conceptArray] = [[],[],'','']

  const createQuestionAnswerList = (array, userSelection, randQuest) => { 
    var x
    for (x = 0; x < userSelection.quantity; x++) {
      // question = array[randWhole(0, array.length-1)]({level:userSelection.level, specify:userSelection.specify})
      question = randQuest(userSelection)
      console.log(question)
      console.log(randQuest(userSelection))
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
const createQuestionAnswerListTable = (array, userSelection, randQuest) => {
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
const createQAListTableAnswers = (array, userSelection, randQuest) => {
  var x 
  console.log(userSelection)
  for (x = 0; x <userSelection.quantity; x++) {
    question = randQuest(userSelection)
    questionAnswerList.push({
      question: <View>{question.text} {question.answerChoices[0]}{question.answerChoices[1]}{question.answerChoices[2]}{question.answerChoices[3]}</View>,
      answer: question.answerChoices[4]
    })
  }
}


  for (i = 0; i < userSelection.length; i++) {
    //loops through userSelection and based on the the concept selected by the user, 
    //  adds a random question from the conceptArray using createQuestionAnswerList function.
    if (userSelection[i].concept === "Adding Whole Numbers") {
      conceptArray = [as.addWhole, as.addWhole2, as.addWhole3, as.addWhole4, as.addWhole5]
      createQuestionAnswerList(conceptArray, userSelection[i], as.randAddWhole)

      }else if (userSelection[i].concept === "Subtracting Whole Numbers") {
        conceptArray = [as.subWhole, as.subWhole2, as.subWhole3, as.subWhole4, as.subWhole5]
        createQuestionAnswerList(conceptArray, userSelection[i], as.randSubWhole)

      }else if (userSelection[i].concept === "Multiplying Whole Numbers") {
        conceptArray = [mw.multWhole, mw.multWhole2, mw.multWhole3]
        
        createQuestionAnswerList(conceptArray, userSelection[i], mw.randMultWhole)

      }else if (userSelection[i].concept === "Dividing Whole Numbers") {
        // conceptArray = [d.divWhole, d.divWhole2, d.divWhole3, d.divWhole4]
        createQuestionAnswerList(conceptArray, userSelection[i], d.randDivWhole)

      }else if (userSelection[i].concept === "Order of Operations") {
        conceptArray = [o.orderOps]
        createQuestionAnswerList(conceptArray, userSelection[i], o.randOrderOps)

      }else if (userSelection[i].concept === "Dividing Decimals Algorithm") {
        // conceptArray = [alg.divideDec]
        createQuestionAnswerList(conceptArray, userSelection[i], ddec.randDivDec)

      }else if (userSelection[i].concept === "Multiplying Decimals Algorithm" || userSelection[i].concept === 'Mixed Multiplying Decimals' || userSelection[i].concept === 'Multiplying Decimals Application') {
        // conceptArray = [alg.multDec, alg.multDec2];
        createQuestionAnswerList(conceptArray, userSelection[i], mdec.randMultDec)

      }else if (userSelection[i].concept === "Adding Decimals Algorithm") {
        // conceptArray = [alg.addDecWhole, alg.addDecPV]
        createQuestionAnswerList(conceptArray, userSelection[i], asdec.randAddDec)

      }else if (userSelection[i].concept === "Subtracting Decimals Algorithm") {
        // conceptArray = [alg.subDecPV, alg.subDecWhole]
          createQuestionAnswerList(conceptArray, userSelection[i], asdec.randSubDec)
      }else if (userSelection[i].concept === "Adding Fractions") {
        conceptArray = [asf.addFract] 
        createQuestionAnswerListTable(conceptArray, userSelection[i], asf.addFract)
      }else if (userSelection[i].concept === "Dividing Fractions") {
        conceptArray = [asf.divideFract] 
        createQuestionAnswerListTable(conceptArray, userSelection[i], asf.divideFract)
      }else if (userSelection[i].concept === "Multiplying Fractions") {
        conceptArray = [asf.divideFract] 
        createQuestionAnswerListTable(conceptArray, userSelection[i], asf.multFract)
      }else if (userSelection[i].concept === "Subtracting Fractions") {
        conceptArray = [asf.divideFract] 
        createQuestionAnswerListTable(conceptArray, userSelection[i], asf.subFract)
      }else if (userSelection[i].concept === "Input Output Tables") {
        conceptArray = [tb.randTable]
        createQuestionAnswerListTable(conceptArray, userSelection[i], tb.randTable)
      }
}

  if (userSelection.length>0){
    if (generalSelection.order=false) {
      questionAnswerList = shuffleArray(questionAnswerList)
    }
  }
 
  var questionList = [] //a list of only the questions text
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
      questionList.push(<View wrap={false} style={styles.questionAnswer}>
                        <Text>{num+1})</Text>{questionAnswerList[num].question}</View>)
      answerKey.push(<View style={styles.answerKey}>
                    <Text>{num+1})</Text>{questionAnswerList[num].answer}</View>)

    }
  }
  console.log(questionList)
  return [questionList, answerKey];

};

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

export default CreateWorksheet;

