import { StyleSheet } from "@react-pdf/renderer";
  import {randWhole, shuffleArray, answerChoicesKey, randDec, roundDec, multDecPV, largestDecPV
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
    var width = '33%'

  } else {
    backgroundColor = (col_index === 0) ? '#b6b6b6' : 'white'
    width = '22%'
  }

  return {
      // fontFamily: 'Arial', 
      width,
      borderLeftWidth, borderRightWidth,
      borderTopWidth, borderBottomWidth,
      borderStyle: "solid",
      backgroundColor,
  }
}


const randQEq= () => {
  var questionArray = ['Which equation represents the pattern in the table above?',
                      'Which of the following equations best represents the pattern shown in the table above?',
                      'Which equation best represents the pattern shown in the table above?',
                      'The table above shows a pattern based on the x and y values. Which equation shows the same pattern?'
]
  return shuffleArray(questionArray)[0]
}
const randQTable= (x) => {
  var questionArray = [`Which table represents the pattern 
                      ${x}?`,
                      `Which of the following tables best represents the equation 
                        ${x}?`,
                      `Which table best represents the equation
                       ${x}?`,
                      `The equation ${x} represents a pattern based on the x and y values. Which table shows the same pattern?`
]
  return shuffleArray(questionArray)[0]
}

const randDecPattern = (userSelection, rule) => {
  let addendArray = []
  if (userSelection.specify.numberType['Whole numbers']) {
    addendArray.push(randWhole(1,9))

  } if (userSelection.specify.numberType['Decimals']) {
    addendArray.push(randDec(1,9,1))

  }
  let addend = shuffleArray(addendArray)[0]
  let i = 0
  let numArray = []
  let newNum = rule
  while(i<5) {
    newNum = roundDec(Number(newNum)+Number(addend),2)
    numArray.push(newNum)
    i++;
  }
  return {tableNumArray:numArray, addend:addend}
}
const tableNumbers = (userSelection) =>{ 
  var smallDec = [randDec(1,9,1), randDec(0.01,0.99,2), randDec(0.1,0.8,1), randDec(0.01,0.09,2) ]
  var largeDec = [randDec(1, 9,2), randDec(0.1,0.99,2)]
  var numArray = []
  let patternNum = []
  if (userSelection.specify.numberType['Whole numbers']) {
    patternNum.push(randWhole(1,9),randWhole(1,9),randWhole(1,9),randWhole(1,9),randWhole(1,9))
  } 
  if (userSelection.specify.numberType['Decimals']) {
    patternNum = [...patternNum, ...smallDec, ...largeDec]
  }
  patternNum = shuffleArray(patternNum)[0]
  var tableNumList = randDecPattern(userSelection, Number(patternNum)).tableNumArray
  var tableNumList2 = randDecPattern(userSelection, Number(patternNum)).tableNumArray

  if (userSelection.specify.numberType["Whole numbers"] || !('Whole numbers' in userSelection) && !('Decimals' in userSelection) && !('Integers' in userSelection)){
    numArray.push(randWhole(2,9))
  } if (userSelection.specify.numberType["Whole numbers"] && userSelection.specify.numberSize['Small']){
    numArray.push(randWhole(11,15))
  } if (userSelection.specify.numberType["Whole numbers"] && userSelection.specify.numberSize['Medium']){
    numArray.push(randWhole(11,15))
  } if (userSelection.specify.numberType["Whole numbers"] && userSelection.specify.numberSize['Large']){
    numArray.push(randWhole(16,38))
  } if (userSelection.specify.numberType["Decimals"] && userSelection.specify.numberSize['Small']){
    numArray.push(shuffleArray(smallDec)[0])
  } if (userSelection.specify.numberType["Decimals"] && userSelection.specify.numberSize['Medium']){
    numArray.push(shuffleArray(largeDec)[0])
  } if (userSelection.specify.numberType["Decimals"] && userSelection.specify.numberSize['Large']){
    numArray.push(shuffleArray(largeDec)[0])

  } 
  var [rule, rule2] = shuffleArray(numArray)
  rule= Number(rule)
  let num2
  if (rule<1 && rule>0.1) {
    num2 = roundDec(rule+randDec(0.1,0.9,1),1)
  } else if (rule<0.1) {
    num2 = roundDec(rule+randDec(0.01, 0.09, 2),2)
  }else {
    num2 = roundDec(rule+randWhole(1,10),2)
  }

  return {rule:Number(rule), rule2:Number(rule2),num2:Number(num2), tableNum:tableNumList, tableNum2:tableNumList2, patternNum:Number(patternNum)}
}
export const tableMultiply1 = (userSelection, generalSelection) => {
  var text = randQEq()
  var {rule, num2, tableNum, patternNum} = tableNumbers(userSelection) 
  let rulePV = multDecPV(tableNum[0], rule)

  var table1 = Table([
    ['x', 'y'],
    [tableNum[0], roundDec(tableNum[0]*rule,rulePV)],
    [tableNum[1], roundDec(tableNum[1]*rule,rulePV)],
    [tableNum[2], roundDec(tableNum[2]*rule,rulePV)],
    [tableNum[3], roundDec(tableNum[3]*rule,rulePV)],

  ], cell_style, tstyles, text, 'vertical')

var table2 = Table([
  ['x', tableNum[0], tableNum[1], tableNum[2], tableNum[3]],
  ['y', roundDec(tableNum[0]*rule,rulePV), roundDec(tableNum[1]*rule,rulePV), roundDec(tableNum[2]*rule,rulePV), roundDec(tableNum[3]*rule,rulePV)]
  
  ], cell_style, tstyles, text, 'horizontal')
  var wrongNum = roundDec(rule+num2,2)
  var wrongNum2 = roundDec(Math.abs(rule-num2),2)
  var wrongNum3 = roundDec(rule*2,2)
  var answer = `y = ${rule}x`
  var wrong1 = [`y =${num2}x`, 
                `y = x + ${wrongNum}`, 
                `y = ${wrongNum2}x`
              ];
  var wrong2 = [`y = x + ${wrongNum2}`, 
                `y = x + ${wrongNum3}`,
                `y = ${patternNum}x`];
  var wrong3 = [`y = ${num2}x`, 
                `y = ${patternNum}x`,
                `y = ${wrongNum}x`];              
  var wrong = [wrong1, wrong2, wrong3][randWhole(0,2)]
  var randProb = [table1, table2][randWhole(0,1)]
  if (generalSelection.docStyle){
    randProb = table1
  }
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  var problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem

}


export const tableMultiply2 = (userSelection) => {
  var {rule, num2, patternNum, tableNum, tableNum2} = tableNumbers(userSelection) 
  var wrongNum = roundDec(rule+num2,2)
  var wrongNum2 = roundDec(Math.abs(rule-num2),2)
  let rulePV = multDecPV(tableNum[0], rule)
  let rulePVadd = largestDecPV(tableNum[0], rule)
  let wrongNum2PV = multDecPV(tableNum[0], wrongNum2)
  let num2PV = multDecPV(tableNum[0], num2)
  let wrongNumPV = multDecPV(tableNum[0], wrongNum)
  var answer = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]*rule,rulePV)],
      [tableNum[2], roundDec(tableNum[2]*rule,rulePV)],
      [tableNum[3], roundDec(tableNum[3]*rule,rulePV)],
  
  ], cell_style, tstyles, text, 'vertical');
  var wrong1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]*wrongNum,wrongNumPV)],
      [tableNum[2], roundDec(tableNum[2]*wrongNum,wrongNumPV)],
      [tableNum[3], roundDec(tableNum[3]*wrongNum,wrongNumPV)],

  ], cell_style, tstyles, text, 'vertical');
  var wrong2 = Table([
      ['x', 'y'],
      [tableNum2[0]*2, roundDec(tableNum2[0]*2*rule,rulePV)],
      [tableNum2[1]*2, roundDec(tableNum2[1]*2*num2,num2PV)],
      [tableNum2[2]*2, roundDec(tableNum2[2]*2*num2,num2PV)],
      [tableNum2[3]*2, roundDec(tableNum2[3]*2*num2,num2PV)],

  ], cell_style, tstyles, text, 'vertical');
  var wrong3 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]+rule,rulePVadd)],
      [tableNum[1], roundDec(tableNum[1]+rule,rulePVadd)],
      [tableNum[2], roundDec(tableNum[2]+rule,rulePVadd)],
      [tableNum[3], roundDec(tableNum[3]+rule,rulePVadd)],

  ], cell_style, tstyles, text, 'vertical')
  if (userSelection.specify === 'Decimals') {
    var wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(tableNum2[0]*wrongNum2,wrongNum2PV)],
      [tableNum2[1], roundDec(tableNum2[1]*wrongNum2,wrongNum2PV)],
      [tableNum2[2], roundDec(tableNum2[2]*wrongNum2,wrongNum2PV)],
      [tableNum2[3], roundDec(tableNum2[3]*wrongNum2,wrongNum2PV)],

  ], cell_style, tstyles, text, 'vertical')
  } else {
    wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(tableNum2[0]*rule,2)],
      [tableNum2[1], roundDec(tableNum2[1]*rule,2)],
      [tableNum2[2], roundDec(tableNum2[2]*wrongNum,2)],
      [tableNum2[3], roundDec(tableNum2[3]*num2,2)],

  ], cell_style, tstyles, text, 'vertical')
  }

  var text = randQTable(`y = ${rule}x `)
  var wrong = shuffleArray([wrong1, wrong2, wrong3, wrong4])
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  
  var problem = {text: text,
  answerChoices: AC, //hard coded answer, wrong1, wrong2, wrong3 works
  correctAnswer: answer,
  }
  return problem

}



export const tableAdd1 = (userSelection, generalSelection) => {
    var {rule, num2, patternNum, tableNum, tablNum2} = tableNumbers(userSelection) 
    var text= randQEq()
    var wrongNum = roundDec(rule+num2,2)
    var wrongNum2 = roundDec(Math.abs(rule-num2),2)
    var wrongNum3 = roundDec(rule*2,2)
    let rulePV = largestDecPV(tableNum[0], rule)

    var table1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]+rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]+rule,rulePV)],
      [tableNum[2], roundDec(tableNum[2]+rule,rulePV)],
      [tableNum[3], roundDec(tableNum[3]+rule,rulePV)],

  ], cell_style, tstyles, text, 'vertical')

  var table2 = Table([
    ['x', tableNum[0], tableNum[1], tableNum[2], tableNum[3]],
    ['y', roundDec(tableNum[0]+rule,rulePV), roundDec(tableNum[1]+rule,rulePV),
          roundDec(tableNum[2]+rule,rulePV), roundDec(tableNum[3]+rule,rulePV)],

      ], cell_style, tstyles, text, 'horizontal')
        var answer = `y = x + ${rule}`

    var wrong1 = [`y = x + ${num2}`, 
                  `y = x + ${wrongNum}`, 
                  `y = ${patternNum}x`
                ]
    var wrong2 = [`y = x + ${num2}`, 
                  `y = x + ${wrongNum2}`,
                  `y = ${rule}x`]
    var wrong3 = [`y = ${num2}x`, 
                  `y = ${wrongNum3}x`,
                  `y = ${rule}x`]               
    var wrong = [wrong1, wrong2, wrong3][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var randProb = [table1, table2][randWhole(0,1)]
    if (generalSelection.docStyle){
      randProb = table1
    }
    var problem = {text: randProb,
    answerChoices: AC,
    correctAnswer: answer,
    }
    return problem

}



export const tableAdd2 = (userSelection) => {
  var {rule, num2, patternNum, tableNum, tableNum2} = tableNumbers(userSelection) 
  var wrongNum = roundDec(rule+num2,2)
  var wrongNum2 = roundDec(Math.abs(rule-num2),2)
  var wrongNum3 = roundDec(rule*2,2)
  num2= Number(num2)

  let rulePV = largestDecPV(tableNum[0], rule)
  let num2PV = largestDecPV(tableNum[0], num2)
  let wrongNum3PV = largestDecPV(tableNum[0], wrongNum3)


  var answer = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]+rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]+rule,rulePV)],
      [tableNum[2], roundDec(tableNum[2]+rule,rulePV)],
      [tableNum[3], roundDec(tableNum[3]+rule,rulePV)],
  
  ], cell_style, tstyles, text, 'vertical')
  var wrong1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]+rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]+num2,num2PV)],
      [tableNum[2], roundDec(tableNum[2]+num2,num2PV)],
      [tableNum[3], roundDec(tableNum[3]+num2,num2PV)],

  ], cell_style, tstyles, text, 'vertical')
  var randAddend = randWhole(2,10)
  var wrong2 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(tableNum[0]+wrongNum3,wrongNum3PV)],
      [tableNum2[1], roundDec(tableNum[0]+wrongNum3,wrongNum3PV)],
      [tableNum2[2], roundDec(tableNum[2]+wrongNum3,wrongNum3PV)],
      [tableNum2[3], roundDec(tableNum[3]+wrongNum3,wrongNum3PV)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong3 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*rule,rulePV)],
      [tableNum[1], roundDec(tableNum[1]*rule,rulePV)],
      [tableNum[2], roundDec(tableNum[2]*rule,rulePV)],
      [tableNum[3], roundDec(tableNum[3]*rule,rulePV)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong4 = Table([
      ['x', 'y'],
      [roundDec(tableNum[0]+rule,rulePV), tableNum[0]],
      [roundDec(tableNum[1]+rule,rulePV), tableNum[1]],
      [roundDec(tableNum[2]+rule,rulePV), tableNum[2]],
      [roundDec(tableNum[3]+rule,rulePV), tableNum[3]],

  ], cell_style, tstyles, text, 'vertical')

  var text = randQTable(`y = x + ${rule}`)

  
  var wrong = shuffleArray([wrong1, wrong2, wrong3, wrong4])
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  
  var problem = {text: text,
  answerChoices: AC, //hard coded answer, wrong1, wrong2, wrong3 works
  correctAnswer: answer,
  }
  return problem

}

export const table2step = (userSelection, generalSelection) => {
  var text = randQEq()
  var {rule, rule2, num2, patternNum, tableNum, tablNum2} = tableNumbers(userSelection) 
  var wrongNum = roundDec(rule*num2,2)
  var wrongNum2 = roundDec(Math.abs(rule*num2-num2),2)
  var wrongNum3 = roundDec(rule*2,2)
  var table1 = Table([
    ['x', 'y'],
    [tableNum[0], roundDec(tableNum[0]*rule+rule2,2)],
    [tableNum[1], roundDec(tableNum[1]*rule+rule2,2)],
    [tableNum[2], roundDec(tableNum[2]*rule+rule2,2)],
    [tableNum[3], roundDec(tableNum[3]*rule+rule2,2)],

], cell_style, tstyles, text, 'vertical')

var table2 = Table([
  ['x', tableNum[0], tableNum[1], tableNum[2], tableNum[3]],
  ['y', roundDec(tableNum[0]*rule+rule2,2), roundDec(tableNum[1]*rule+rule2,2),
        roundDec(tableNum[2]*rule+rule2,2), roundDec(tableNum[3]*rule+rule2,2)],

    ], cell_style, tstyles, text, 'horizontal')
      var answer = `y = ${rule}x + ${rule2}`
  if (rule2 === rule) {
    rule2= rule2+1
  }
  var wrong1 = [`y = ${rule}x`, 
                `y = ${rule}x + ${num2}`, 
                `y = ${patternNum}x+${rule2}`
              ]
  var wrong2 = [`y = ${rule2}x + ${rule}`, 
                `y = x + ${wrongNum2}`,
                `y = ${rule}x + ${patternNum}`]
  var wrong3 = [`y = ${num2}x + ${rule2}`, 
                `y = ${wrongNum3}x + ${rule}`,
                `y = ${rule}x`]               
  var wrong = [wrong1, wrong2, wrong3][randWhole(0,2)]
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  var randProb = [table1, table2][randWhole(0,1)]
  if (generalSelection.docStyle) {
    randProb = table1
  }
  var problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem

}
export const table2step2 = (userSelection) => {
  var {rule, rule2, num2, patternNum, tableNum, tableNum2} = tableNumbers(userSelection) 
  var text = ''
  var wrongNum = roundDec(rule+num2,2)
  var wrongNum2 = roundDec(Math.abs(rule-num2),2)
  var wrongNum3 = roundDec(rule*2,2)

  var answer = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*rule+rule2,2)],
      [tableNum[1], roundDec(tableNum[1]*rule+rule2,2)],
      [tableNum[2], roundDec(tableNum[2]*rule+rule2,2)],
      [tableNum[3], roundDec(tableNum[3]*rule+rule2,2)],
  
  ], cell_style, tstyles, text, 'vertical');
  var wrong1 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]*rule+rule2,2)],
      [tableNum[1], roundDec(tableNum[1]*wrongNum+rule2,2)],
      [tableNum[2], roundDec(tableNum[2]*wrongNum+rule2,2)],
      [tableNum[3], roundDec(tableNum[3]*wrongNum+rule2,2)],

  ], cell_style, tstyles, text, 'vertical');
  var wrong2 = Table([
      ['x', 'y'],
      [tableNum2[0]*2, roundDec(tableNum2[0]*2*rule+rule2,2)],
      [tableNum2[1]*2, roundDec(tableNum2[1]*2*num2+rule2,2)],
      [tableNum2[2]*2, roundDec(tableNum2[2]*2*num2+rule2,2)],
      [tableNum2[3]*2, roundDec(tableNum2[3]*2*num2+rule2,2)],

  ], cell_style, tstyles, text, 'vertical');
  var wrong3 = Table([
      ['x', 'y'],
      [tableNum[0], roundDec(tableNum[0]+rule*rule2,2)],
      [tableNum[1], roundDec(tableNum[1]+rule*rule2,2)],
      [tableNum[2], roundDec(tableNum[2]+rule*rule2,2)],
      [tableNum[3], roundDec(tableNum[3]+rule*rule2,2)],

  ], cell_style, tstyles, text, 'vertical')
  if (userSelection.specify === 'Decimals') {
    var wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec((tableNum2[0]+rule2)*rule,2)],
      [tableNum2[1], roundDec((tableNum2[1]+rule2)*rule,2)],
      [tableNum2[2], roundDec((tableNum2[2]+rule2)*rule,2)],
      [tableNum2[3], roundDec((tableNum2[3]+rule2)*rule,2)],

  ], cell_style, tstyles, text, 'vertical')
  } else {
    wrong4 = Table([
      ['x', 'y'],
      [tableNum2[0], roundDec(tableNum2[0]*rule+rule2,2)],
      [tableNum2[1], roundDec(tableNum2[1]*rule+rule2,2)],
      [tableNum2[2], roundDec(tableNum2[2]*wrongNum+rule2,2)],
      [tableNum2[3], roundDec(tableNum2[3]*num2+rule2,2)],

  ], cell_style, tstyles, text, 'vertical')
  }

  var text = randQTable(` y = ${rule}x + ${rule2}`)
  var wrong = shuffleArray([wrong1, wrong2, wrong3, wrong4])
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  
  var problem = {text: text,
  answerChoices: AC, //hard coded answer, wrong1, wrong2, wrong3 works
  correctAnswer: answer,
  }
  return problem

}










export const randTable = (userSelection, generalSelection) => {
  let probArray = []
  if(userSelection.specify.steps['One-step']) {
    probArray.push(tableMultiply1, tableAdd1)
    if (!generalSelection.docStyle){
      probArray.push(tableMultiply2, tableAdd2)
    }
  }
  if(userSelection.specify.steps['Two-steps']) {
    probArray.push(table2step, table2step)
    if (!generalSelection.docStyle){
      probArray.push(table2step2, table2step2)
    }
  }

  var randProb = shuffleArray(probArray)[0]
  return randProb(userSelection, generalSelection)
}

