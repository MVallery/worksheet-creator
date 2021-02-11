import {
    // Page,
    Text,
    View,
    Image,
    // Document,
    StyleSheet,
    // PDFViewer,
    // ReactPDF,
    // PDFDownloadLink,
  } from "@react-pdf/renderer";
  import {randWhole, shuffleArray, answerChoicesKey, randDec, roundDec
  } from './general.js'
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 25 },
  table: {
    fontSize: 10,
    width: 550,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35
  },
  cell: {
    borderColor: "#cc0000",
    borderStyle: "solid",
    borderWidth: 2,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch"
  },
  header: {
    backgroundColor: "#eee"
  },
  headerText: {
    fontSize: 11,
    fontWeight: 1200,
    color: "#1a245c",
    margin: 8
  },
  tableText: {
    margin: 10,
    fontSize: 10,
    color: 'blue'
  }
});
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
export const sanitize_block = (block) => {
  if (typeof(block) === 'string' || typeof(block) === "number") {
      return <Text>{block}</Text>
  } else {
      return block
  }
}
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
export const Table = (data, style_function=(() => {}), style={}, text, direction) => {
  return (
    <View style={[tstyles.table, style]}>
        {data.map((row, row_index) =>
      <View key={row_index} style={tstyles.row}  wrap={false}>
        {row.map( (cell, col_index) =>
                      <View key={col_index} style={[tstyles.cell, style_function(row_index, col_index, data, direction)]}>
                        {sanitize_block(cell)}
                      </View>
                )
        }
      </View>
    )
    }
    <Text>{text}</Text>
    </View>
    )
}

const tableNumbers = (userSelection) =>{ 
  console.log(userSelection)
  var smallDec = [randDec(1,9,1), randDec(0.01,0.99,2), randDec(0.1,0.8,1), randDec(0.01,0.09,2) ]
  var largeDec = [randDec(1, 9,2), randDec(0.1,0.99,2)]
  if (userSelection.specify["Whole numbers"]){
    var multiplier = randWhole(2,9)
  } else if (userSelection.specify["Whole numbers"] && userSelection.level === 2){
    multiplier = randWhole(11,15)
  } else if (userSelection.specify["Whole numbers"] && userSelection.level === 3){
    multiplier = randWhole(16,38)
  } else if (userSelection.specify["Decimals"]){
    multiplier = shuffleArray(smallDec)[0]
  } else if (userSelection.specify["Decimals"] && userSelection.level === 2){
    multiplier = shuffleArray(largeDec)[0]
  } else if (userSelection.specify["Decimals"] && userSelection.level === 3){
    multiplier = shuffleArray(largeDec)[0]
  } else {
    multiplier = randWhole(2,9)
  }
  console.log(multiplier)
  return multiplier
}
export const tableMultiply1 = (userSelection) => {

  console.log(userSelection)
  var text = randQuestion()
  var multiplier = tableNumbers(userSelection) 
  var num1 = randWhole(2,10)
  var randMult = randWhole(2,5)
  var randomMultNum = randWhole(1,10)
  if (randomMultNum > 8) {
    var [num2, num3, num4] = [num1*randMult, num1*randMult*2, num1*randMult*3]
  } else if (randomMultNum > 5) {
    [num2,num3,num4] = [num1+randMult, num1+randMult+1, num1+randMult+2]
  } else if (randomMultNum >2) {
    [num2, num3, num4] = [num1*randMult, num1*(randMult+1), num1*(randMult+2)]
  } else {
    [num1, num2, num3, num4] = [1, 2, 3, 4]
  }
  // var multiplier = randWhole(2, 40)

  var table1 = Table([
    ['x', 'y'],
    [num1, roundDec(num1*multiplier,2)],
    [num2, roundDec(num2*multiplier,2)],
    [num3, roundDec(num3*multiplier,2)],
    [num4, roundDec(num4*multiplier,2)],

  ], cell_style, tstyles, text, 'vertical')

var table2 = Table([
  ['x', num1, num2, num3, num4],
  ['y', roundDec(num1*multiplier,2), roundDec(num2*multiplier,2), roundDec(num3*multiplier,2), roundDec(num4*multiplier,2)]
  
  ], cell_style, tstyles, text, 'horizontal')
  var answer = `y = ${multiplier}x`
console.log(roundDec(1*multiplier,2))
console.log(eval('10 + '+ multiplier))
console.log(roundDec(eval('1+'+multiplier),2))

  var wrong1 = [`y = x + ${roundDec(eval(multiplier*num1+'-'+num1),2)}`, 
                `y = x + ${roundDec(multiplier/10,2)}`, 
                `y = ${roundDec(eval(multiplier+'+2'),2)}x`
              ]
  var wrong2 = [`y = x + ${roundDec(eval(multiplier+2),2)}`, 
                `y = x + ${roundDec(eval(multiplier+'+'+randWhole(2,4)),2)}`,
                `y = ${roundDec(eval(multiplier+'+1'),2)}x`]
  var wrong3 = [`y = ${roundDec(randMult*10,2)}x`, 
                `y = ${roundDec(eval(multiplier+'+'+randWhole(2,4)),2)}x`,
                `y = ${roundDec(eval(multiplier+'+1'),2)}x`]               
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
  var multiplier = tableNumbers(userSelection) 
  var num1 = randWhole(2,10)
  var randMult = randWhole(2,5)
  var randomMultNum = randWhole(1,10)
  if (randomMultNum > 8) {
    var [num2, num3, num4] = [num1*randMult, num1*randMult*2, num1*randMult*3]
  } else if (randomMultNum > 5) {
    [num2,num3,num4] = [num1+randMult, num1+randMult+1, num1+randMult+2]
  } else if (randomMultNum >2) {
    [num2, num3, num4] = [num1*randMult, num1*(randMult+1), num1*(randMult+2)]
  } else {
    [num1, num2, num3, num4] = [1, 2, 3, 4]
  }
  var text = ''
  // var multiplier = tableNumbers(userSelection) //userSelection is undefined
  var answer = Table([
      ['x', 'y'],
      [num1, roundDec(num1*multiplier,2)],
      [num2, roundDec(num2*multiplier,2)],
      [num3, roundDec(num3*multiplier,2)],
      [num4, roundDec(num4*multiplier,2)],
  
  ], cell_style, tstyles, text, 'vertical')
  var wrong1 = Table([
      ['x', 'y'],
      [num1, roundDec(num1*(multiplier),2)],
      [num2, roundDec(num2*(eval(multiplier+'+1')),2)],
      [num3, roundDec(num3*(eval(multiplier+'+2')),2)],
      [num4, roundDec(num4*(eval(multiplier+'+3')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong2 = Table([
      ['x', 'y'],
      [num1*2, roundDec(num1*2*(eval(multiplier+'+1')),2)],
      [num2*2, roundDec(num2*2*(eval(multiplier+'+1')),2)],
      [num3*2, roundDec(num3*2*(eval(multiplier+'+1')),2)],
      [num4*2, roundDec(num4*2*(eval(multiplier+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong3 = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1+'+'+multiplier),2)],
      [num2, roundDec(eval(num2+'+'+multiplier),2)],
      [num3, roundDec(eval(num3+'+'+multiplier),2)],
      [num4, roundDec(eval(num4+'+'+multiplier),2)],

  ], cell_style, tstyles, text, 'vertical')
  if (userSelection.specify === 'Decimals') {
    var wrong4 = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1*multiplier*0.1),2)],
      [num2, roundDec(eval(num2*multiplier*0.1),2)],
      [num3, roundDec(eval(num3*multiplier*0.1),2)],
      [num4, roundDec(eval(num4*multiplier*0.1),2)],

  ], cell_style, tstyles, text, 'vertical')
  } else {
    wrong4 = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1*multiplier+'-'+num1),2)],
      [num2, roundDec(eval(num2*multiplier+'-'+num2),2)],
      [num3, roundDec(eval(num3*multiplier+'-'+num3),2)],
      [num4, roundDec(eval(num4*multiplier+'-'+num4),2)],

  ], cell_style, tstyles, text, 'vertical')
  }


  var text = `Which table shows the same pattern as the equation y = ${multiplier}x`

  
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
  console.log(userSelection)
  var text = randQuestion()
  var num1 = randWhole(2,10)
  var randMult = randWhole(2,5)
  var randomMultNum = randWhole(1,10)
  if (randomMultNum > 8) {
    var [num2, num3, num4] = [num1*randMult, num1*randMult*2, num1*randMult*3]
  } else if (randomMultNum > 5) {
    [num2,num3,num4] = [num1+randMult, num1+randMult+1, num1+randMult+2]
  } else if (randomMultNum >2) {
    [num2, num3, num4] = [num1*randMult, num1*(randMult+1), num1*(randMult+2)]
  } else {
    [num1, num2, num3, num4] = [1, 2, 3, 4]
  }
  var addend = tableNumbers(userSelection) 

  var table1 = Table([
    ['x', 'y'],
    [num1, roundDec(eval(num1+'+'+addend),2)],
    [num2, roundDec(eval(num2+'+'+addend),2)],
    [num3, roundDec(eval(num3+'+'+addend),2)],
    [num4, roundDec(eval(num4+'+'+addend),2)],

], cell_style, tstyles, text, 'vertical')

var table2 = Table([
  ['x', num1, num2, num3, num4],
  ['y', roundDec(eval(num1+'+'+addend),2), roundDec(eval(num2+'+'+addend),2), roundDec(eval(num3+'+'+addend),2), roundDec(eval(num4+'+'+addend),2)],

], cell_style, tstyles, text, 'horizontal')
  var answer = `y = x + ${addend}`

  var wrong1 = [`y = x + ${roundDec(eval(addend+'+1'),2)}`, 
                `y = x + ${roundDec(addend/10,2)}`, 
                `y = ${roundDec(eval(num1*(num1+addend)),2)}x`
              ]
  var wrong2 = [`y = x + ${roundDec(addend*2,2)}`, 
                `y = x + ${roundDec(eval(addend+'+'+randWhole(2,4)),2)}`,
                `y = ${roundDec(eval(num1*(num1+addend)),2)}x`]
  var wrong3 = [`y = ${roundDec(eval(num1*(num1+addend)),2)}x`, 
                `y = ${roundDec(eval(addend+'+'+randWhole(2,4)),2)}x`,
                `y = ${roundDec(eval(addend+'+1'),2)}x`]               
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
  // var multiplier = tableNumbers(userSelection) //userSelection is undefined
  var addend = tableNumbers(userSelection) 
  var num1 = randWhole(2,10)
  var randMult = randWhole(2,5)
  var randomMultNum = randWhole(1,10)
  if (randomMultNum > 8) {
    var [num2, num3, num4] = [num1*randMult, num1*randMult*2, num1*randMult*3]
  } else if (randomMultNum > 5) {
    [num2,num3,num4] = [num1+randMult, num1+randMult+1, num1+randMult+2]
  } else if (randomMultNum >2) {
    [num2, num3, num4] = [num1*randMult, num1*(randMult+1), num1*(randMult+2)]
  } else {
    [num1, num2, num3, num4] = [1, 2, 3, 4]
  }
  var answer = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1+'+'+addend),2)],
      [num2, roundDec(eval(num2+'+'+addend),2)],
      [num3, roundDec(eval(num3+'+'+addend),2)],
      [num4, roundDec(eval(num4+'+'+addend),2)],
  
  ], cell_style, tstyles, text, 'vertical')
  var wrong1 = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1+'+'+addend),2)],
      [num2, roundDec(eval(num2+'+'+eval(addend+'+1')),2)],
      [num3, roundDec(eval(num3+'+'+eval(addend+'+1')),2)],
      [num4, roundDec(eval(num4+'+'+eval(addend+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var randAddend = randWhole(2,10)
  var wrong2 = Table([
      ['x', 'y'],
      [eval(num1+randAddend), roundDec(eval(num1+'+'+addend),2)],
      [eval(num2+randAddend), roundDec(eval(num1+'+'+eval(addend+'+1')),2)],
      [eval(num3+randAddend), roundDec(eval(num3+'+'+eval(addend+'+1')),2)],
      [eval(num4+randAddend), roundDec(eval(num4+'+'+eval(addend+'+1')),2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong3 = Table([
      ['x', 'y'],
      [num1, roundDec(num1*addend,2)],
      [num2, roundDec(num2*addend,2)],
      [num3, roundDec(num3*addend,2)],
      [num4, roundDec(num4*addend,2)],

  ], cell_style, tstyles, text, 'vertical')
  var wrong4 = Table([
      ['x', 'y'],
      [num1, roundDec(eval(num1+'+'+addend+'+1'),2)],
      [num2, roundDec(eval(num2+'+'+addend+'+1'),2)],
      [num3, roundDec(eval(num3+'+'+addend+'+1'),2)],
      [num4, roundDec(eval(num4+'+'+addend+'+1'),2)],

  ], cell_style, tstyles, text, 'vertical')

  var text = `Which table shows the same pattern as the equation y = x + ${addend}`

  
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

