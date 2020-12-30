import {Fraction} from 'fraction.js'
import {randWhole, cap} from './general.js'
// import * as math from 'mathjs'
const { create, all } = require('mathjs')

const config = {
    // Default type of number
    // Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'Fraction'
  }
const math = create(all, config)

export const addFract = () => {
    var fract1 = math.fraction('1/2')
    var fract2 = math.fraction('3/4')
    var answer = math.format(math.add(fract1, fract2))
    console.log(fract1)
    console.log(math.fraction('1/2'))

    // var f = 'format'
    var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']
    var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    var randProb = [prob1.toString(), prob2.toString()][randWhole(0,1)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

