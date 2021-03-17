import {randWhole, shuffleArray} from './general.js'
import {cell_style_fraction, tstyles, horizontalFractions, verticalFractions } from './fract-shared'
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

export const fractionNumbers = (userSelection) => {
    var numerator1 = randWhole(1,8)
    var denominator1 = randWhole(numerator1+1,10)
    var numden2 = []
    if (userSelection['Common Denominators']) {
      var numerator2 = randWhole(1, denominator1-1)
      numden2.push([numerator2,denominator1])
    }
    if (userSelection['Uncommon Denominators']) {
      if (denominator1 > 5) {
          var denominator2 = denominator1-randWhole(1,4)
      } else if (denominator1 === 5) {
          denominator2 = denominator1-randWhole(1,3)
      } else {
        denominator2 = denominator1+randWhole(1, 5)
      }
      numerator2 = randWhole(1, denominator2-1)
      numden2.push([numerator2,denominator2])
    }
    [numerator2, denominator2] = shuffleArray(numden2)[0]

  return [numerator1, denominator1, numerator2, denominator2]      
}

export const addFract = (userSelection) => {
    var numberList = fractionNumbers(userSelection)
    var whole = randWhole(1,4)
    var [num1, denom1, num2, denom2] = [numberList[0], numberList[1], numberList[2], numberList[3]]
    var fract1 = math.fraction(`${num1}/${denom1}`)
    var fract2 = math.fraction(`${num2}/${denom2}`)
    var answer = math.format(math.add(fract1, fract2))

    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)
    var styledFract2 = Table([[num2],[denom2]], cell_style_fraction, tstyles)
    // var mixedNumber1 = Table([['hi', num1],[whole, denom1]], cell_style_mixednumber, tstyles)

    // var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']
    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{styledFract1}<Text>+</Text>{styledFract2}</View>
    if (userSelection.probStyle==='Vertical') {
        var prob1 = verticalFractions(styledFract1, styledFract2, <Text>+</Text>)
    } else {
        var prob1 = horizontalFractions(styledFract1, styledFract2, <Text>+</Text>)

    }
    // var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    // var randProb = [prob1.toString(), prob2.toString()][randWhole(0,1)]
    
    var problem = {text: prob1,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}
export const subFract = (userSelection) => {
    var numberList = fractionNumbers(userSelection)
    var whole = randWhole(1,4)
    var [num1, denom1, num2, denom2] = [numberList[0], numberList[1], numberList[2], numberList[3]]
    var fract1 = math.fraction(`${num1}/${denom1}`)
    var fract2 = math.fraction(`${num2}/${denom2}`)
    // var answer = math.format(math.subtract(fract1, fract2))
    // var answer = math.format(math.subtract(fract1, fract2))
    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)
    var styledFract2 = Table([[num2],[denom2]], cell_style_fraction, tstyles)
    if (math.compare(fract1, fract2) === 1) {
        var answer = math.format(math.subtract(fract1, fract2))
        if (userSelection.probStyle==='Vertical') {
            var prob1 = verticalFractions(styledFract1, styledFract2, <Text>-</Text>)
        } else {
            prob1 = horizontalFractions(styledFract1, styledFract2, <Text>-</Text>)
        }

    } else {
        answer = math.format(math.subtract(fract2, fract1))
        if (userSelection.probStyle==='Vertical') {
            prob1 = verticalFractions(styledFract2, styledFract1, <Text>-</Text>)
        } else {
            prob1 = horizontalFractions(styledFract2, styledFract1, <Text>-</Text>)
        }

    }

    var prob1 = horizontalFractions(styledFract1, styledFract2, <Text>-</Text>)
   
    var problem = {text: prob1,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}

export const randAddFract = (userSelection) => {
    var probArray = [addFract]
    
    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}

export const randSubFract = (userSelection) => {
    var probArray = [subFract]
    
    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}
