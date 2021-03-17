import {randWhole, shuffleArray} from './general.js'
import {cell_style_fraction, tstyles, horizontalFractions, divMultFractNumbers } from './fract-shared'

import './problems.css';
import Table from './Table.js'
import {Text,View,StyleSheet,} from "@react-pdf/renderer";
  const { create, all } = require('mathjs')
const config = {
// Default type of number
// Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'Fraction'
}
const math = create(all, config)


export const multFract = (userSelection) => {
  var {number1, number2} = divMultFractNumbers(userSelection)
  console.log(number1)
  console.log(number2)
  if (Number.isInteger(number1)) {
      var styledNumber1 = <View><Text>{number1}</Text></View>
      number1 = number1
  } else {
      styledNumber1 = Table([[number1.num1],[number1.denom1]], cell_style_fraction, tstyles)
      number1 = math.fraction(`${number1.num1}/${number1.denom1}`)
  }
  var styledNumber2 = Table([[number2.num2],[number2.denom2]], cell_style_fraction, tstyles)

  number2 = math.fraction(`${number2.num2}/${number2.denom2}`)
  console.log(number2)
  var prob1 = horizontalFractions(styledNumber1, styledNumber2, <Text>×</Text>)
  var prob2 = horizontalFractions(styledNumber2, styledNumber1, <Text>×</Text>)

  var randProb = [prob1, prob2][randWhole(0,1)]
  var answer = math.format(math.multiply(number1, number2))

  var problem = {text: randProb,
      answerChoices: ['','','','', answer],
      correctAnswer: answer}
  return problem
}

export const randMultFract = (userSelection) => {
  var probArray = [multFract]
  
  var randProb = shuffleArray(probArray)[0]
  return randProb(userSelection)
}