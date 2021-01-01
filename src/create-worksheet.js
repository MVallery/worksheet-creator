import './App.css';
import * as as from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import * as tb from './app-files/tables';
import * as asf from './app-files/add-sub-fract';
import * as mw from './app-files/multiply';
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
    marginTop: 10,
    marginRight:40,
    fontSize: 12,
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
  }
});
export const handleCreateWorksheet = (userSelection) => { 
//creates the worksheet using react-pdf based on userSelection (array of objects: {level:, specify:,order:, docStyle:, quantity:,}), order, and docStyle. 
  var [n,i,x] = [0,,];
  var [answerKey, questionAnswerList, question, conceptArray] = [[],[],'','']

  const createQuestionAnswerList = (array, userSelection) => { 
    var x
    for (x = 0; x < userSelection.quantity; x++) {
      question = array[randWhole(0, array.length-1)]({level:userSelection.level, specify:userSelection.specify})
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

  async function createQLImage(quest){ //react-pdf takes question input and pushes object into questionList with question that contains an image & answer choices styled with react-pdf
    var q = quest
    // var z = q
    var z = await q
    console.log(z)
    console.log(z.text+z.img+'This is insideQL')
    questionAnswerList.push({
              question:<View style={{}}><Text style={styles.text}>{z.text}</Text>
                          <Image src={z.img} defer style={{}} />
                      </View>,
              answer: <Text>No answers now</Text>
              // answer:<Text style={{}}>{z.answerChoices}</Text>
    
    });
    console.log(questionAnswerList)
    

  

  }
  // const createACTable1228212 = (question) => {
  //   console.log(question)
  //   console.log(question.text+question.img+'This is insideQL')
  //   questionList.push({question:<View style={{}}><Text style={styles.text}>{question.text}
  //     <Image src={question.img} defer style={{}} /></Text></View>,
  //     answer:<Text style={{}}>{question.answerChoices}</Text>
    
  //   });
  // }
  for (i = 0; i < userSelection.length; i++) {
    //loops through userSelection and based on the the concept selected by the user, 
    //  adds a random question from the conceptArray using createQuestionAnswerList function.
    if (userSelection[i].concept === "add-whole") {
      conceptArray = [as.addWhole, as.addWhole2, as.addWhole3, as.addWhole4, as.addWhole5]
      createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "sub-whole") {
        conceptArray = [as.subWhole, as.subWhole2, as.subWhole3, as.subWhole4, as.subWhole5]
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "mult-whole") {
        conceptArray = [mw.multWhole, mw.multWhole2, mw.multWhole3, mw.multWhole4]
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "order-ops-whole") {
        conceptArray = [o.orderOps]
        userSelection[i].specify = "whole"
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "order-ops-dec") {
        conceptArray = [o.orderOps]
        userSelection[i].specify = "decimal"
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "div-dec-alg") {
        conceptArray = [alg.divideDec]
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "mult-dec-alg") {
        conceptArray = [alg.multDec, alg.multDec2];
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "add-dec-alg") {
        conceptArray = [alg.addDecWhole, alg.addDecPV]
        createQuestionAnswerList(conceptArray, userSelection[i])

      }else if (userSelection[i].concept === "sub-dec-alg") {
        conceptArray = [alg.subDecPV, alg.subDecWhole]
          createQuestionAnswerList(conceptArray, userSelection[i])
      }else if (userSelection[i].concept === "table") {
        conceptArray = [asf.addFract] //testing fractions
        // conceptArray = [tb.table]

        for (x = 0; x < userSelection[i].quantity; x++) {
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          createQuestionAnswerList(question); //testing fractions
          createQLImage(question); 

        }
      }else if (userSelection[i].concept === "tablev1") {
        conceptArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          // question = conceptArray[randWhole(0, conceptArray.length)]({level:userSelection[i].level})
          // createQuestionAnswerList(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          // questionList.push(question.text)
          // answerKey.push(question.answerChoices[4])
          // var dolphinImg = <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>;
          // var probTextOnly = <Text>Hello this is react-pdf text from table</Text> //type mismatch
          // var prob1 = `This is question stufffs and this is a pic: ${dolphinImg}` //shows up as [object:object]
          var prob2 = <Text>This is question stufffs and this is a pic: <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?ito=isS-TJcM"/>answer choices</Text>// error mismatch type append child? 
          var prob = "hello this is working" //now this also gives type mismatch?
      
          // var problem = {text: prob,
          //     answerChoices: "no answers yet",
          //     correctAnswer: 'correct answer'}
          questionAnswerList.push(prob2)
        }
        
      }else if (userSelection[i].concept === "tablev2") {
        conceptArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          // createQuestionAnswerList(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          questionAnswerList.push(question.text)
          answerKey.push(question.answerChoices[4])
        }
        
      }
}



  if (userSelection.length>0){
    if (userSelection[0].order === 'mixed') {
      questionAnswerList = shuffleArray(questionAnswerList)
    }
  }
 

  var questionList = [] //a list of only the questions text
  answerKey = [] 
  for (var questNum=0; questNum<questionAnswerList.length;questNum++) { 
    //loops through and adds question content only to questionList and answers only to answerKey formatted for react-pdf. 
    //Adds question Numbers (questNum) and styles based on docStyle into columns.
    if (userSelection[0].docStyle === 'column') { 
      if (questNum+1>questionAnswerList.length-1){ //odd # questions /if questNum goes above the length of the array, only add one question.
        questionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{questNum+1})</Text>
          <View style={styles.columnQuestion}>{questionAnswerList[questNum].question}</View></View>)
        answerKey.push(<View style={styles.answerKey}><Text>{questNum+1})</Text>{questionAnswerList[questNum].answer}</View>)

      }else{ //even number of questions
        questionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{questNum+1})</Text><View style={styles.columnQuestion}>{questionAnswerList[questNum].question}</View>
          <Text style={styles.num}>{questNum+2})</Text><View style={styles.columnQuestion}>{questionAnswerList[questNum+1].question}</View></View>)
        answerKey.push(<View style={styles.answerKey}><Text>{questNum+1})</Text>{questionAnswerList[questNum].answer}</View>)
        answerKey.push(<View style={styles.answerKey}><Text>{questNum+2})</Text>{questionAnswerList[questNum+1].answer}</View>)
        questNum+=1
      }
    }else {
      console.log('inside the else')
      questionList.push(<View wrap={false} style={styles.questionAnswer}><Text>{questNum+1})</Text>{questionAnswerList[questNum].question}</View>)
      answerKey.push(<View style={styles.answerKey}><Text>{questNum+1})</Text>{questionAnswerList[questNum].answer}</View>)

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

// function Problems() {
//   return (
//     <div className="App">
//     <p>7 + 2</p>

//     </div>
//   );
// }


export default CreateWorksheet;

