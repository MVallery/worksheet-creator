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
  import {randWhole, shuffleArray, answerChoicesKey, randDec
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
const cell_style = (row_index, col_index) => {
  const borderLeftWidth = (col_index === 0) ? 1 : 0
  const borderTopWidth = (row_index === 0) ? 1 : 0
  const borderRightWidth = 1
  const borderBottomWidth = 1
  const backgroundColor = (row_index === 0) ? '#b6b6b6' : 'white'

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
export const Table = (data, style_function=(() => {}), style={}, text) => {
  return (
    <View style={[tstyles.table, style]}>
        {data.map((row, row_index) =>
      <View key={row_index} style={tstyles.row}  wrap={false}>
        {row.map( (cell, col_index) =>
                      <View key={col_index} style={[tstyles.cell, style_function(row_index, col_index, data)]}>
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

const tableNumbers = (options) =>{ 
  var smallDec = [randDec(1,9,1), randDec(1,9,2), randDec(0.01,2), randDec(0.01,1,1), randDec(0.01,0.1,2) ]
  var largeDec = [randDec(10, 20,1), randDec(10,20,2)]
  if (options.specify === "whole" && options["level"] === "1"){
    var multiplier = randWhole(2,9)
  } else if (options["specify"] === "whole" && options["level"] === "2"){
    multiplier = randWhole(11,15)
  } else if (options["specify"] === "whole" && options["level"] === "3"){
    multiplier = randWhole(16,38)
  } else if (options["specify"] === "decimal" && options["level"] === "1"){
    multiplier = shuffleArray(smallDec)[0]
  } else if (options["specify"] === "decimal" && options["level"] === "2"){
    multiplier = shuffleArray(largeDec)[0]
  } else if (options["specify"] === "decimal" && options["level"] === "3"){
    multiplier = shuffleArray(largeDec)[0]
  } else {
    multiplier = randWhole(2,9)
  }
  return multiplier
}
export const table1 = (options) => {
  var text = randQuestion()
  // var multiplier = tableNumbers(options) //options is undefined

  var multiplier = randWhole(2,10)

  var table = Table([
      ['x', 'y'],
      [1, 1*multiplier],
      [2, 2*multiplier],
      [3, 3*multiplier],
      [4, 4*multiplier],

  ], cell_style, tstyles, text)
  var answer = `y = ${multiplier}x`

  var wrong1 = [`y = x + ${multiplier+1}`, 
                `y = x + ${multiplier/10}`, 
                `y = ${multiplier+2}x`
              ]
  var wrong2 = [`y = x + ${multiplier}`, 
                `y = x + ${multiplier-1}`,
                `y = ${multiplier+1}x`]
  var wrong = [wrong1, wrong2][randWhole(0,1)]
  var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  var problem = {text: table,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem

}


export const table2 = (options) => {
  var text = ''
  // var multiplier = tableNumbers(options) //options is undefined
  var multiplier = randWhole(2,10)
  var answer = Table([
      ['x', 'y'],
      [1, 1*multiplier],
      [2, 2*multiplier],
      [3, 3*multiplier],
      [4, 4*multiplier],
  
  ], cell_style, tstyles, text)
  var wrong1 = Table([
      ['x', 'y'],
      [1, 1*(multiplier-1)],
      [2, 2*(multiplier-1)],
      [3, 3*(multiplier-1)],
      [4, 4*(multiplier-1)],

  ], cell_style, tstyles, text)
  var wrong2 = Table([
      ['x', 'y'],
      [1, 1*(multiplier+1)],
      [2, 2*(multiplier+1)],
      [3, 3*(multiplier+1)],
      [4, 4*(multiplier+1)],

  ], cell_style, tstyles, text)
  var wrong3 = Table([
      ['x', 'y'],
      [1, 1+multiplier],
      [2, 2+multiplier],
      [3, 3+multiplier],
      [4, 4+multiplier],

  ], cell_style, tstyles, text)
  var wrong4 = Table([
      ['x', 'y'],
      [1, 1+multiplier+1],
      [2, 2+multiplier+1],
      [3, 3+multiplier+1],
      [4, 4+multiplier+1],

  ], cell_style, tstyles, text)

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
export const randTable = (options) => {
  var probArray = [table1, table2]

  var randProb = shuffleArray(probArray)[0]
  return randProb(options)
}
