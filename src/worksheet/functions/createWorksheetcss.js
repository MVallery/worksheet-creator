import {Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
export const styles = StyleSheet.create({
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
    height: '100%',
    // alignItems: 'center',

  },
  viewQuestion: {
    flexGrow: 1,

  }
});