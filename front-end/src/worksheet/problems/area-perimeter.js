import {randWhole, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'
import Table from './Table';
import {multNumbers} from './multiply';
import {multNumbers as decMultNumbers } from './multiply-dec' 
import {asNumbers} from './add-sub'
import {asNumbers as decAddNumbers} from './add-sub-dec'
import { StyleSheet } from "@react-pdf/renderer";


const cell_style_horizontal = (row_index, col_index, data, direction) => {
  const rectHeight = Math.floor(Number(data[0][0].replace(/[^.0-9]+/g, ""))+1)
  const rectWidth = Math.floor(Number(data[1][1].replace(/[^.0-9]+/g, ""))+1)
  const borderLeftWidth = (col_index === 0 ||  (col_index===1 && row_index ===1)) ? 0 : 1
  const borderTopWidth = (col_index === 0) ? 0 : 1
  const borderRightWidth = (row_index===0 && col_index===1) ? 1 : 0
  const borderBottomWidth = (row_index === 1 || col_index === 0) ? 0 : 1
  const backgroundColor = (row_index === 0 && col_index === 1) ? 'white' : 'white'
  if (rectHeight>rectWidth){
    var [maxh, maxw] = [180, 160]
  } else {
    [maxh, maxw] = [160, 180]
  }
  const height = (row_index ===1)? 50: 
      (rectHeight<3 && rectWidth>3)||(rectHeight>3 && rectWidth<3) ? rectHeight*20:
      (rectHeight<5 && rectWidth>5)||(rectHeight>5 && rectWidth<5) ? rectHeight*12:

      (rectHeight<10 && rectWidth>10)||(rectHeight>10 && rectWidth<10) ? rectHeight*10:
      (rectHeight<20 && rectWidth>20)||(rectHeight>20 && rectWidth<20) ? rectHeight*5:

      (rectHeight <120 && rectHeight>20) ? rectHeight : 
      (rectHeight > 100) ? maxh :
      (rectHeight > 5 && rectWidth>5) ? rectHeight*5: rectHeight*20
  const width = (col_index=== 0) ? 60: 
      (rectHeight<3 && rectWidth>3)||(rectHeight>3 && rectWidth<3) ? rectWidth*20:
      (rectHeight<5 && rectWidth>5)||(rectHeight>5 && rectWidth<5) ? rectWidth*12:

      (rectHeight<10 && rectWidth>10)||(rectHeight>10 && rectWidth<10) ? rectWidth*10:
      (rectHeight<20 && rectWidth>20)||(rectHeight>20 && rectWidth<20) ? rectWidth*5:

      (rectWidth <120 && rectWidth>20) ? rectWidth : 
      (rectWidth > 120) ? maxw : 
      (rectWidth>5 && rectHeight>5)? rectWidth*5: rectWidth*20

  const display = (col_index===0) ? 'flex':null
  const justifyContent=(col_index===0)?'center':null
  const alignItems=(col_index===0)?'center':null

  return {
      width, height, borderLeftWidth, borderRightWidth,
      borderTopWidth, borderBottomWidth, borderStyle: "solid",
      backgroundColor, display, justifyContent, alignItems, maxWidth:maxw, maxHeight:maxh, 
  }
}
const cell_style_exponent = (row_index, col_index, data, direction) => {
  const backgroundColor = (row_index === 0 && col_index === 1) ? 'white' : 'white'
  const display = (col_index===1) ? 'flex':null
  const justifyContent=(col_index===1)?'flexStart':null
  const alignItems=(col_index===1)?'flexStart':null
  const textAlign=(col_index===1)? 'top':null

  return {
      backgroundColor, display, justifyContent, alignItems, textAlign, width:50, height:50
  }
}

const createExponent = (num, pow) => {
  return (Table([
    [num, pow],
    ], cell_style_exponent, tstyles, null))
}

const tstyles = StyleSheet.create({
  table: {
      display: "table",
      textAlign:'center',
  },
  row: {
      flexDirection: "row",
  },
  header: {
    backgroundColor: 'grey'
  }
});
let measurement = ['cm','in','mm','m','ft','yd']
let areaTextArray = ['What is the area of the rectangle?', 'What would be the area of the rectangle?', 'What area does the rectangle have?']
export const area = (userSelection) => {
  let numbers = []
  if (userSelection.specify.numberType['Whole Numbers']){
    numbers.push(multNumbers(userSelection))
  }
  if (userSelection.specify.numberType['Decimals']) {
    numbers.push(decMultNumbers(userSelection))
  }
  let measure = shuffleArray(measurement)[0]
  let {numberS, numberL} = shuffleArray(numbers)[0]
  let text = shuffleArray(areaTextArray)[0]
  let rectangle1 = Table([
                  [`${numberS}${measure}`, ''],
                  ['', `${numberL}${measure}`]

                  ], cell_style_horizontal, tstyles, text, 'horizontal')
  let rectangle2 = Table([
                  [`${numberL}${measure}`, ''],
                  ['', `${numberS}${measure}`]
                
                    ], cell_style_horizontal, tstyles, text, 'horizontal')
  let answer = numberS*numberL

  let randProb = shuffleArray([rectangle1, rectangle2])[0]
  let wrong= wrongOptions(answer, 'multiply', numberL, numberS)   
  let perimeterWrong = numberS*2+numberL*2
  if (perimeterWrong === answer) {
    perimeterWrong = perimeterWrong+measure
  } else {
    perimeterWrong = perimeterWrong+measure
  }
  wrong.push(numberS*2+numberL*2) 
  let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], measure)
  let problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
    return problem
}
export const area2 = (userSelection) => {
  let numbers = []
  if (userSelection.specify.numberType['Whole Numbers']){
    numbers.push(multNumbers(userSelection))
  }
  if (userSelection.specify.numberType['Decimals']) {
    numbers.push(decMultNumbers(userSelection))
  }
  let {numberS, numberL} = shuffleArray(numbers)[0]
  let text = shuffleArray(areaTextArray)[0]
  let measure = shuffleArray(measurement)[0]

  let prob1 = `What is the area of a rectangle with a length of ${numberL}${measure} and a width of ${numberS}${measure}?`
  let prob2 = `What is the area of a rectangle with a width of ${numberS}${measure} and a height of ${numberL}${measure}?`
  let prob3 = `A rectangle has a width of ${numberS}${measure} and a length of ${numberL}${measure}. ${text}`
  let prob4 = `A rectangle has a length of ${numberL}${measure} and a width of ${numberS}${measure}. ${text}`
  let prob5 = `A rectangle has 2 sides that measure ${numberL}${measure} and 2 sides that measure ${numberS}${measure}. ${text}`
  let prob6 = `A rectangle has 2 sides that measure ${numberS}${measure} and 2 sides that measure ${numberL}${measure}. ${text}`
  let prob7 = `There is a rectangle with a length of ${numberL}${measure} and a width of ${numberS}${measure}. ${text}`
  let prob8 = `There is a rectangle with a width of ${numberS}${measure} and a length of ${numberL}${measure}. ${text}`

  let randProb = shuffleArray([prob1, prob2, prob3, prob4, prob5, prob6, prob7, prob8])[0]
  let answer = numberS*numberL

            
  let wrong= wrongOptions(answer, 'multiply', numberL, numberS)    
  let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
  let problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem
}


let perimeterTextArray = ['What is the perimeter of the rectangle?', 'How long is the entire length around the perimeter of the rectangle?', 'How long is the perimeter of the rectangle?', "What is the length of the rectangle's perimeter?"]

export const perimeter = (userSelection) => {
  let numbers = []
  if (userSelection.specify.numberType['Whole Numbers']){
    numbers.push(asNumbers(userSelection))
  }
  if (userSelection.specify.numberType['Decimals']) {
    numbers.push(decAddNumbers(userSelection))
  }
  let {numberS, numberL} = shuffleArray(numbers)[0]
  let measure = shuffleArray(measurement)[0]

  let [numberSF, numberLF] = [numberS.toLocaleString(), numberL.toLocaleString()]
  let text = shuffleArray(perimeterTextArray)[0]
  let rectangle1 = Table([
                  [numberSF+measure, ''],
                  ['', numberLF+measure]

                  ], cell_style_horizontal, tstyles, text, 'horizontal')
  let rectangle2 = Table([
                  [numberLF+measure, ''],
                  ['', numberSF+measure]
                
                    ], cell_style_horizontal, tstyles, text, 'horizontal')
  let answer = numberS*2+numberL*2

  let randProb = shuffleArray([rectangle1, rectangle2])[0]
  let wrong= [numberS*numberL, answer+randWhole(1,5), numberS+numberL, numberS+numberL+numberL, numberL*2, numberS*2]
  wrong = shuffleArray(wrong)
  let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], measure)
  let problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
    return problem
}


export const perimeter2 = (userSelection) => {
  let numbers = []
  if (userSelection.specify.numberType['Whole Numbers']){
    numbers.push(asNumbers(userSelection))
  }
  if (userSelection.specify.numberType['Decimals']) {
    numbers.push(decAddNumbers(userSelection))
  }
  let {numberS, numberL} = shuffleArray(numbers)[0]
  let text = shuffleArray(perimeterTextArray)[0]
  let measure = shuffleArray(measurement)[0]
  let [numberSF, numberLF] = [numberS.toLocaleString(), numberL.toLocaleString()]

  let prob1 = `What is the perimeter of a rectangle with a length of ${numberLF}${measure} and a width of ${numberSF}${measure}?`
  let prob2 = `What is the perimeter of a rectangle with a width of ${numberSF}${measure} and a height of ${numberLF}${measure}?`
  let prob3 = `A rectangle has a width of ${numberSF}${measure} and a length of ${numberLF}${measure}. ${text}`
  let prob4 = `A rectangle has a length of ${numberLF}${measure} and a width of ${numberSF}${measure}. ${text}`
  let prob5 = `A rectangle has 2 sides that measure ${numberLF}${measure} and 2 sides that measure ${numberSF}${measure}. ${text}`
  let prob6 = `A rectangle has 2 sides that measure ${numberSF}${measure} and 2 sides that measure ${numberLF}${measure}. ${text}`
  let prob7 = `There is a rectangle with a length of ${numberLF}${measure} and a width of ${numberSF}${measure}. ${text}`
  let prob8 = `There is a rectangle with a width of ${numberSF}${measure} and a length of ${numberLF}${measure}. ${text}`

  let randProb = shuffleArray([prob1, prob2, prob3, prob4, prob5, prob6, prob7, prob8])[0]
  let answer = numberS*2+numberL*2

  let wrong= [answer+randWhole(1,5), numberS+numberL, numberS+numberL+numberL, numberL*2, numberS*2]
  if (numberS <100 && numberL < 100) {
    wrong.push(numberS*numberL)
  }
  wrong = shuffleArray(wrong)  
  let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], measure)
  let problem = {text: randProb,
  answerChoices: AC,
  correctAnswer: answer,
  }
  return problem
}

export const randArea = (userSelection) => {
  let probArray = [area, area2]
  let randProb = shuffleArray(probArray)[0]
  return randProb(userSelection)
}
export const randPerimeter = (userSelection) => {
  let probArray = [perimeter, perimeter2]
  let randProb = shuffleArray(probArray)[0]
  return randProb(userSelection)
}