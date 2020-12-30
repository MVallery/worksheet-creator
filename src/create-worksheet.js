import './App.css';
import * as as from "./app-files/add-sub";
import * as o from "./app-files/order-of-ops";
import * as alg from './app-files/algorithms';
import * as tb from './app-files/tables';
import * as asf from './app-files/add-sub-fract';
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

Font.registerHyphenationCallback(word => [word]);


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
export const handleCreateWorksheet = (userSelection, order, docStyle) => {
  var [n,i,x] = [0,,];
  var [answerKey, questionList, question, conceptArray] = [[],[],'','']
  const createQuestionList = (question) => { //react-pdf creates array of objects with question & answer choices
    questionList.push({
              question:<View ><Text style={styles.question}>{question.text} </Text> 
                          <Text>{question.answerChoices[0]} </Text> 
                          <Text>{question.answerChoices[1]} </Text> 
                          <Text>{question.answerChoices[2]} </Text> 
                          <Text>{question.answerChoices[3]} </Text>
                      </View>,
              answer: <Text>{question.answerChoices[4]}</Text>
    });
  };
  async function createQLTable(quest){
    var q = quest
    // var z = q
    var z = await q
    console.log(z)
    console.log(z.text+z.img+'This is insideQL')
    questionList.push({
              question:<View style={{}}><Text style={styles.text}>{z.text}</Text>
                          <Image src={z.img} defer style={{}} />
                      </View>,
              answer: <Text>No answers now</Text>
              // answer:<Text style={{}}>{z.answerChoices}</Text>
    
    });
    console.log(questionList)

  

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
    if (userSelection[i].concept === "add-whole") {
      conceptArray = [as.addWhole, as.addWhole2, as.addWhole3, as.addWhole4, as.addWhole5]
      console.log(as.addWhole)
      for (x = 0; x < userSelection[i].quantity; x++) {
        n += 1;
        question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
        createQuestionList(question);
      }
      }else if (userSelection[i].concept === "sub-whole") {
        conceptArray = [as.subWhole, as.subWhole2, as.subWhole3, as.subWhole4, as.subWhole5]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          createQuestionList(question);
        }
      }else if (userSelection[i].concept === "order-ops-whole") {
          for (x = 0; x < userSelection[i].quantity; x++) {
            n += 1;
            question = o.orderOps({
              level: userSelection[i].level,
              specify: "whole",
            });
            createQuestionList(question);
          }
      }else if (userSelection[i].concept === "order-ops-dec") {
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = o.orderOps({
            level: userSelection[i].level,
            specify: "decimal",
          });
          createQuestionList(question);
        }
      }else if (userSelection[i].concept === "div-dec-alg") {
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = alg.divideDec({
            level: userSelection[i].level,
          });
          createQuestionList(question);
        }
      }else if (userSelection[i].concept === "mult-dec-alg") {
        conceptArray = [alg.multDec, alg.multDec2];
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})

          createQuestionList(question);
       }
      }else if (userSelection[i].concept === "add-dec-alg") {
        conceptArray = [alg.addDecWhole, alg.addDecPV]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          createQuestionList(question);
        }
      }else if (userSelection[i].concept === "sub-dec-alg") {
        conceptArray = [alg.subDecPV, alg.subDecWhole]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})

          createQuestionList(question);
        }
      }else if (userSelection[i].concept === "table") {
        conceptArray = [asf.addFract] //testing fractions
        // conceptArray = [tb.table]

        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          createQuestionList(question); //testing fractions
          createQLTable(question); 

        }
      }else if (userSelection[i].concept === "tablev1") {
        conceptArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          n += 1;
          // question = conceptArray[randWhole(0, conceptArray.length)]({level:userSelection[i].level})
          // createQuestionList(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          // questionList.push(question.text)
          // answerKey.push(question.answerChoices[4])
          // var dolphinImg = <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>;
          // var probTextOnly = <Text>Hello this is react-pdf text from table</Text> //type mismatch
          // var prob1 = `This is question stufffs and this is a pic: ${dolphinImg}` //shows up as [object:object]
          var prob2 = <Text>This is question stufffs and this is a pic: <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>answer choices</Text>// error mismatch type append child? 
          var prob = "hello this is working" //now this also gives type mismatch?
      
          // var problem = {text: prob,
          //     answerChoices: "no answers yet",
          //     correctAnswer: 'correct answer'}
          questionList.push(prob2)
        }
        
      }else if (userSelection[i].concept === "tablev2") {
        conceptArray = [tb.table]
        for (x = 0; x < userSelection[i].quantity; x++) {
          // n += 1;
          question = conceptArray[randWhole(0, conceptArray.length-1)]({level:userSelection[i].level})
          // createQuestionList(question);
          // testing out trying to create react-pdf <text within the actual question to create the table
          questionList.push(question.text)
          answerKey.push(question.answerChoices[4])
        }
        
      }
}
  if (order === 'mixed') {
    questionList = shuffleArray(questionList)
  }

  var newQuestionList = []
  answerKey = []
  //old one now giving me "cannot read property question of undefined error"
  // for (var k=0; k<questionList.length;k++){
  //   console.log(questionList[k].question)
    
  //   if (docStyle === 'column') {  
  //     newQuestionList.push(<View wrap={false} style={styles.column}>
  //       <Text style={styles.num}>{k+1})</Text><View style={styles.columnQuestion}>{questionList[k].question}</View>
  //       <Text style={styles.num}>{k+2})</Text><View style={styles.columnQuestion}>{questionList[k+1].question}</View></View>)
  //   } else{
  //     newQuestionList.push(<View wrap={false} style={styles.questionAnswer}><Text>{k+1})</Text>{questionList[k].question}</View>)
  //   }
  //   answerKey.push(<View style={styles.answerKey}><Text>{k+1})</Text>{questionList[k].answer}</View>)



  // }




  for (var k=0; k<questionList.length;k++) {
    if (docStyle === 'column') { 
      if (k+1>questionList.length-1){ //odd # questions /if k goes above the length of the array, only add one question.
        newQuestionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{k+1})</Text><View style={styles.columnQuestion}>{questionList[k].question}</View></View>)
        answerKey.push(<View style={styles.answerKey}><Text>{k+1})</Text>{questionList[k].answer}</View>)

      }else{ //even number of questions
        newQuestionList.push(<View wrap={false} style={styles.column}>
          <Text style={styles.num}>{k+1})</Text><View style={styles.columnQuestion}>{questionList[k].question}</View>
          <Text style={styles.num}>{k+2})</Text><View style={styles.columnQuestion}>{questionList[k+1].question}</View></View>)
        answerKey.push(<View style={styles.answerKey}><Text>{k+1})</Text>{questionList[k].answer}</View>)
        answerKey.push(<View style={styles.answerKey}><Text>{k+2})</Text>{questionList[k+1].answer}</View>)
        k+=1
      }
    }else {
      console.log('inside the else')
      newQuestionList.push(<View wrap={false} style={styles.questionAnswer}><Text>{k+1})</Text>{questionList[k].question}</View>)
      answerKey.push(<View style={styles.answerKey}><Text>{k+1})</Text>{questionList[k].answer}</View>)

    }
  }




  console.log(newQuestionList)
  return [newQuestionList, answerKey];

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

