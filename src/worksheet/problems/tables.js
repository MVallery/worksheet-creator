import { StyleSheet } from "@react-pdf/renderer";
  import {randWhole, shuffleArray, answerChoicesKey, randDec, roundDec
  } from './general.js'
  import Table from './Table';
// const styles = StyleSheet.create({
//   page: { flexDirection: "column", padding: 25 },
//   table: {
//     fontSize: 10,
//     width: 550,
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
const tstyles = StyleSheet.create({
  table: {
      display: "table",
       width: "200px",
       textAlign:'center',
  },
  row: {
      flexDirection: "row",
  },
  cell: {
      // padding: '3px'
    },
  header: {
    backgroundColor: 'grey'
  }
});

const cell_style = (row_index, col_index, data, direction) => {
  const borderLeftWidth = (col_index === 0) ? 1 : 0
  const borderTopWidth = (row_index === 0) ? 1 : 0
  const borderRightWidth = 1
  const borderBottomWidth = 1
  if (direction === 'vertical') {
    var backgroundColor = (row_index === 0) ? '#b6b6b6' : 'white'

  } else {
    backgroundColor = (col_index === 0) ? '#b6b6b6' : 'white'
  }

  return {
      // fontFamily: 'Arial', 
      width: '33%',
      borderLeftWidth, borderRightWidth,
      borderTopWidth, borderBottomWidth,
      borderStyle: "solid",
      backgroundColor,
  }
}
const randQuestion = () => {
  var questionArray = ['Which equation represents the pattern in the table above?',
                      'Which of the following equations best represents the pattern shown in the table above?',
                      'Which equation best represents the pattern shown in the table above?',
                      'The table above shows a pattern based on the x and y values. Which equation shows the same pattern?'
]
  return shuffleArray(questionArray)[0]
}


const tableNumbers = (userSelection) =>{ 
  var smallDec = [randDec(1,9,1), randDec(0.01,0.99,2), randDec(0.1,0.8,1), randDec(0.01,0.09,2) ]
  var largeDec = [randDec(1, 9,2), randDec(0.1,0.99,2)]
  var numArray = []
  var randNum = randWhole(2, 10)
  var randNum2 = randWhole(2, 10)
  var randMultiplier = randWhole(2, 9)
  var tableNumArray = [[randNum, randNum+randNum2, randNum+randNum2, randNum+randNum2], [1, 2, 3, 4], [randNum, randNum*randMultiplier, randNum*randMultiplier*2, randNum*randMultiplier*3], [randNum, randNum+1, randNum+2, randNum+3]]
  if (userSelection["Whole numbers"] || !('Whole numbers' in userSelection) && !('Decimals' in userSelection) && !('Integers' in userSelection)){
    numArray.push(randWhole(2,9))
  } if (userSelection["Whole numbers"] && userSelection.level ==='2'){
    numArray.push(randWhole(11,15))
  } if (userSelection["Whole numbers"] && userSelection.level === '3'){
    numArray.push(randWhole(16,38))
  } if (userSelection["Decimals"] && userSelection.level === '1'){
    numArray.push(shuffleArray(smallDec)[0])
    var dec = randDec(2, 9, 2)
    tableNumArray.push([dec, eval(dec+'+1'), eval(dec+'+2'), eval(dec+'+3')])
  } if (userSelection["Decimals"] && userSelection.level === '2'){
    numArray.push(shuffleArray(largeDec)[0])
    dec = randDec(2, 9, 2)
    tableNumArray.push([dec, roundDec(eval(dec+'+1'),2), roundDec(eval(dec+'+2'),2), roundDec(eval(dec+'+3'),2)])

  } if (userSelection["Decimals"] && userSelection.level === '3'){
    dec = randDec(2, 9, 2)
    numArray.push(shuffleArray(largeDec)[0])
    tableNumArray.push([dec, roundDec(eval(dec+'+0.1'),2), roundDec(eval(dec+'+1.5'),2), roundDec(eval(dec+'+2.7'),2)])

  } 
  var numList = shuffleArray(numArray)[0]
  var tableNumList = shuffleArray(tableNumArray)[0]
  var tableNumList2 = shuffleArray(tableNumArray)[0]
  return [numList, tableNumList, tableNumList2]
}
export const tableMultiply1 = (userSelection) => {
  var text = randQuestion()
  var [number, tableNum] = tableNumbers(userSelection) 

  var table1 = Table([
    ['x', 'y'],
    [tableNum[0], roundDec(tableNum[0]*number,2)],
    [tableNum[1], roundDec(tableNum[1]*number,2)],
    [tableNum[2], roundDec(tableNum[2]*number,2)],
    [tableNum[3], roundDec(tableNum[3]*number,2)],

  ], cell_style, tstyles, text, 'vertical')

var table2 = Table([
  ['x', tableNum[0], tableNum[1], tableNum[2], tableNum[3]],
  ['y', roundDec(tableNum[0]*number,2), roundDec(tableNum[1]*number,2), roundDec(tableNum[2]*number,2), roundDec(tableNum[3]*number,2)]
  
  ], cell_style, tstyles, text, 'horizontal')
  var answer = `y = ${number}x`
  var wrong1 = [`y = x + ${roundDec(Math.abs(eval(number*tableNum[0]+'-'+tableNum[0]),2))}`, 
                `y = x + ${roundDec(number/10,2)}`, 
                `y = ${roundDec(eval(number+'+2'),2)}x`
              ]
  var wrong2 = [`y = x + ${roundDec(eval(number+2),2)}`, 
                `y = x + ${roundDec(eval(number+'+'+randWhole(2,4)),2)}`,
                `y = ${roundDec(eval(number+'+1'),2)}x`]
  var wrong3 = [`y = ${roundDec(number*10,2)}x`, 
                `y = ${roundDec(eval(number+'+'+randWhole(2,4)),2)}x`,
                `y = ${roundDec(eval(number+'+1'),2)}x`]               
  var wrong = [wrong1, wrong2, wrong3][randWhole(0,2)]
  var randProb = [table1, table2][randWhole(0,1)]
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  var problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem

}


export const tableMultiply2 = (userSelection) => {
  var [number, tableNum, tableNum2] = tableNumbers(userSelection) 
  var text = ''
  var answer = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*number,2)],
      [tableNum[1], roundDec(tableNum[1]*number,2)],
      [tableNum[2], roundDec(tableNum[2]*number,2)],
      [tableNum[3], roundDec(tableNum[3]*number,2)],
  
  ], cell_style, tstyles, text, 'vertical')
  var wrong1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*(number),2)],
      [tableNum[1], roundDec(tableNum[1]*(eval(number+'+1')),2)],
      [tableNum[2], roundDec(tableNum[2]*(eval(number+'+2')),2)],
      [tableNum[3], roundDec(tableNum[3]*(eval(number+'+3')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong2 = Table([
      ['x', 'y'],
      [tableNum2[0]*2, roundDec(tableNum2[0]*2*(eval(number+'+1')),2)],
      [tableNum2[1]*2, roundDec(tableNum2[1]*2*(eval(number+'+1')),2)],
      [tableNum2[2]*2, roundDec(tableNum2[2]*2*(eval(number+'+1')),2)],
      [tableNum2[3]*2, roundDec(tableNum2[3]*2*(eval(number+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong3 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(eval(tableNum[0]+'+'+number),2)],
      [tableNum[1], roundDec(eval(tableNum[1]+'+'+number),2)],
      [tableNum[2], roundDec(eval(tableNum[2]+'+'+number),2)],
      [tableNum[3], roundDec(eval(tableNum[3]+'+'+number),2)],

  ], cell_style, tstyles, text, 'vertical')
  if (userSelection.specify === 'Decimals') {
    var wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(eval(tableNum2[0]*number*0.1),2)],
      [tableNum2[1], roundDec(eval(tableNum2[1]*number*0.1),2)],
      [tableNum2[2], roundDec(eval(tableNum2[2]*number*0.1),2)],
      [tableNum2[3], roundDec(eval(tableNum2[3]*number*0.1),2)],

  ], cell_style, tstyles, text, 'vertical')
  } else {
    wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(Math.abs(eval(tableNum2[0]*number+'-'+tableNum2[0]),2))],
      [tableNum2[1], roundDec(Math.abs(eval(tableNum2[1]*number+'-'+tableNum2[1]),2))],
      [tableNum2[2], roundDec(Math.abs(eval(tableNum2[2]*number+'-'+tableNum2[2]),2))],
      [tableNum2[3], roundDec(Math.abs(eval(tableNum2[3]*number+'-'+tableNum2[3]),2))],

  ], cell_style, tstyles, text, 'vertical')
  }


  var text = `Which table shows the same pattern as the equation y = ${number}x`

  
  var wrong = shuffleArray([wrong1, wrong2, wrong3, wrong4])
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  // var AC = shuffleArray([answer, wrong1, wrong2, wrong3])
  
  var problem = {text: text,
  answerChoices: AC, //hard coded answer, wrong1, wrong2, wrong3 works
  correctAnswer: answer,
  }
  return problem

}



export const tableAdd1 = (userSelection) => {
    var text = ''

    console.log(userSelection)
    var [number, tableNum, tablNum2] = tableNumbers(userSelection) 

    var table1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(eval(tableNum[0]+'+'+number),2)],
      [tableNum[1], roundDec(eval(tableNum[1]+'+'+number),2)],
      [tableNum[2], roundDec(eval(tableNum[2]+'+'+number),2)],
      [tableNum[3], roundDec(eval(tableNum[3]+'+'+number),2)],

  ], cell_style, tstyles, text, 'vertical')

  var table2 = Table([
    ['x', tableNum[0], tableNum[1], tableNum[2], tableNum[3]],
    ['y', roundDec(eval(tableNum[0]+'+'+number),2), roundDec(eval(tableNum[1]+'+'+number),2),
          roundDec(eval(tableNum[2]+'+'+number),2), roundDec(eval(tableNum[3]+'+'+number),2)],

      ], cell_style, tstyles, text, 'horizontal')
        var answer = `y = x + ${number}`

    var wrong1 = [`y = x + ${roundDec(eval(number+'+1'),2)}`, 
                  `y = x + ${roundDec(number/10,2)}`, 
                  `y = ${roundDec(eval(tableNum[0]*(tableNum[0]+number)),2)}x`
                ]
    var wrong2 = [`y = x + ${roundDec(number*2,2)}`, 
                  `y = x + ${roundDec(eval(number+'+'+randWhole(2,4)),2)}`,
                  `y = ${roundDec(eval(tableNum[0]*(tableNum[0]+number)),2)}x`]
    var wrong3 = [`y = ${roundDec(eval(tableNum[0]*(tableNum[0]+number)),2)}x`, 
                  `y = ${roundDec(eval(number+'+'+randWhole(2,4)),2)}x`,
                  `y = ${roundDec(eval(number+'+1'),2)}x`]               
    var wrong = [wrong1, wrong2, wrong3][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var randProb = [table1, table2][randWhole(0,1)]
    var problem = {text: randProb,
    answerChoices: AC,
    correctAnswer: answer,
    }
    return problem

}



export const tableAdd2 = (userSelection) => {
  var text = ''
  // var number = tableNumbers(userSelection) //userSelection is undefined
  var [number, tableNum] = tableNumbers(userSelection) 
  var answer = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(eval(tableNum[0]+'+'+number),2)],
      [tableNum[1], roundDec(eval(tableNum[1]+'+'+number),2)],
      [tableNum[2], roundDec(eval(tableNum[2]+'+'+number),2)],
      [tableNum[3], roundDec(eval(tableNum[3]+'+'+number),2)],
  
  ], cell_style, tstyles, text, 'vertical')
  var wrong1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(eval(tableNum[0]+'+'+number),2)],
      [tableNum[1], roundDec(eval(tableNum[1]+'+'+eval(number+'+1')),2)],
      [tableNum[2], roundDec(eval(tableNum[2]+'+'+eval(number+'+1')),2)],
      [tableNum[3], roundDec(eval(tableNum[3]+'+'+eval(number+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var randAddend = randWhole(2,10)
  var wrong2 = Table([
      ['x', 'y'],
      [eval(tableNum[0]+randAddend), roundDec(eval(tableNum[0]+'+'+number),2)],
      [eval(tableNum[1]+randAddend), roundDec(eval(tableNum[0]+'+'+eval(number+'+1')),2)],
      [eval(tableNum[2]+randAddend), roundDec(eval(tableNum[2]+'+'+eval(number+'+1')),2)],
      [eval(tableNum[3]+randAddend), roundDec(eval(tableNum[3]+'+'+eval(number+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong3 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*number,2)],
      [tableNum[1], roundDec(tableNum[1]*number,2)],
      [tableNum[2], roundDec(tableNum[2]*number,2)],
      [tableNum[3], roundDec(tableNum[3]*number,2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong4 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(eval(tableNum[0]+'+'+number+'+1'),2)],
      [tableNum[1], roundDec(eval(tableNum[1]+'+'+number+'+1'),2)],
      [tableNum[2], roundDec(eval(tableNum[2]+'+'+number+'+1'),2)],
      [tableNum[3], roundDec(eval(tableNum[3]+'+'+number+'+1'),2)],

  ], cell_style, tstyles, text, 'vertical')

  text = `Which table shows the same pattern as the equation y = x + ${number}`

  
  var wrong = shuffleArray([wrong1, wrong2, wrong3, wrong4])
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  // var AC = shuffleArray([answer, wrong1, wrong2, wrong3])
  
  var problem = {text: text,
  answerChoices: AC, //hard coded answer, wrong1, wrong2, wrong3 works
  correctAnswer: answer,
  }
  return problem

}
export const randTable = (userSelection) => {
  var probArray = [tableMultiply1, tableMultiply2, tableAdd1, tableAdd2]

  var randProb = shuffleArray(probArray)[0]
  return randProb(userSelection)
}

