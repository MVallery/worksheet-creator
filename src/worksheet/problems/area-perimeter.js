import {randWhole, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'
import Table from './Table';
import {
  StyleSheet,
} from "@react-pdf/renderer";
// const styles = StyleSheet.create({
//   page: { flexDirection: "column", padding: 25 },
//   table: {
//     fontSize: 10,
//     // width: 550,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignContent: "stretch",
//     flexWrap: "nowrap",
//     alignItems: "stretch"
//   },
//   row: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignContent: "stretch",
//     flexWrap: "nowrap",
//     alignItems: "stretch",
//     flexGrow: 0,
//     flexShrink: 0,
//     flexBasis: 35
//   },
//   cell: {
//     borderColor: "#cc0000",
//     borderStyle: "solid",
//     borderWidth: 2,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: "auto",
//     alignSelf: "stretch"
//   },
//   header: {
//     backgroundColor: "#eee"
//   },
//   headerText: {
//     fontSize: 11,
//     fontWeight: 1200,
//     color: "#1a245c",
//     margin: 8
//   },
//   tableText: {
//     margin: 10,
//     fontSize: 10,
//     color: 'blue'
//   }
// });

const cell_style_horizontal = (row_index, col_index, data, direction) => {
  const borderLeftWidth = (col_index === 0 ||  (col_index===1 && row_index ===1)) ? 0 : 1
  const borderTopWidth = (col_index === 0) ? 0 : 1
  const borderRightWidth = (row_index===0 && col_index===1) ? 1 : 0
  const borderBottomWidth = (row_index === 1 || col_index === 0) ? 0 : 1
  const backgroundColor = (row_index === 0 && col_index === 1) ? 'white' : 'white'
  const width = (col_index ===1) ? '100px' : '14px'
  const height = (row_index === 0) ? '50px' : '15px'
  // const height = (row_index === 0) ? `${randWhole(15, 70)}px` : '15px'
  // const width = (data[0][0] < 40) ? `${data[0][0]*10}px` : (data[0][0] > 200) ? '200px' : `${data[0][0]}px`
  // const height = (data[1][1] <100) ? `${data[1][1]*10}px` : (data[1][1] > 300) ? '300px' : `${data[1][1]}px`
  // const width = (data[0][0])

  return {
      // fontFamily: 'Arial', 
      width, height,
      borderLeftWidth, borderRightWidth,
      borderTopWidth, borderBottomWidth,
      borderStyle: "solid",
      backgroundColor,
  }
}
// const cell_style_vertical = (row_index, col_index, data, direction) => {
//   const borderLeftWidth = (col_index === 0) ? 1 : 0
//   const borderTopWidth = (row_index === 0) ? 1 : 0
//   const borderRightWidth = 1
//   const borderBottomWidth = 1
//   if (direction === 'vertical') {
//     var backgroundColor = (row_index === 0) ? '#b6b6b6' : 'white'

//   } else {
//     backgroundColor = (col_index === 0) ? '#b6b6b6' : 'white'
//   }

//   return {
//       // fontFamily: 'Arial', 
//       width: '33%',
//       borderLeftWidth, borderRightWidth,
//       borderTopWidth, borderBottomWidth,
//       borderStyle: "solid",
//       backgroundColor,
//   }
// }
// const cell_style_square = (row_index, col_index, data, direction) => {
//   const borderLeftWidth = (col_index === 0) ? 1 : 0
//   const borderTopWidth = (row_index === 0) ? 1 : 0
//   const borderRightWidth = 1
//   const borderBottomWidth = 1
//   if (direction === 'vertical') {
//     var backgroundColor = (row_index === 0) ? '#b6b6b6' : 'white'

//   } else {
//     backgroundColor = (col_index === 0) ? '#b6b6b6' : 'white'
//   }

//   return {
//       // fontFamily: 'Arial', 
//       width: '33%',
//       borderLeftWidth, borderRightWidth,
//       borderTopWidth, borderBottomWidth,
//       borderStyle: "solid",
//       backgroundColor,
//   }
// }
const tstyles = StyleSheet.create({
  table: {
      display: "table",
       textAlign:'center',
  },
  row: {
      flexDirection: "row",
  },
  cell: {
    },
  header: {
    backgroundColor: 'grey'
  }
});

export const area = (userSelection) => {
  var text = 'What is the area of the rectangle?'
  var numberS = randWhole (2,8)
  var numberL = randWhole (9, 19)
  var rectangle = Table([
    [numberS, ''],
    ['', numberL]
  
      ], cell_style_horizontal, tstyles, text, 'horizontal')
    var answer = numberS*numberL
  
             
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var randProb = [table1, table2][randWhole(0,1)]
    var problem = {text: rectangle,
    answerChoices: AC,
    correctAnswer: answer,
    }
    return problem
}


export const randArea = (userSelection) => {
  var probArray = [area]

  var randProb = shuffleArray(probArray)[0]
  return randProb(userSelection)
}
