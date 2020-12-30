import {randWhole, shuffleArray, answerChoicesKey,
    } from './general.js'
// var simpleQArray = ['What is the value of the expression? \n',
// 'An expression is shown below, what value is equivalent to the expression?\n',
// 'Which value is equivalent to the expression below? \n']
var simpleQArray = shuffleArray(['What is the value of the expression? \n',
                  'An expression is shown below, what value is equivalent to the expression?\n',
                  'Which value is equivalent to the expression below? \n'])
export const orderOps = (Options) => {


    if (Options.specify === "whole") {
        var [numberL, numberL2, numberM] = [randWhole(10, 20), randWhole(10, 20), randWhole(2, 11)];
        var [numberS, numberS2, numberM2] = [randWhole(2, 8), randWhole(2, 8), randWhole(2, 11)];

      if (Options.level === "2") {
        [numberL, numberL2, numberM] = [randWhole(20, 50), randWhole(20, 50), randWhole(10, 19)];
        [numberS, numberS2, numberM2] = [randWhole(2, 9), randWhole(2, 9), randWhole(10, 19)];
      } else if (Options.level === "3") {
        [numberL, numberL2, numberM] = [randWhole(50, 200), randWhole(50, 200), randWhole(20, 100)];
        [numberS, numberS2, numberM2] = [randWhole(7, 19), randWhole(7, 19), randWhole(20, 100)];
      }
    }
    else if (Options.specify === "decimal") {
        var DecimalH = (Math.random()).toFixed(2)
        // var [f, r] = ['roundFormat', 2]



        // var DecimalOT = (Math.random()*9 + 1).toFixed(1) 
        // var DecimalT = (Math.random()*9 + 1).toFixed(1)
                // var decTwoDigit =  gen.shuffleArray[DecimalOT, DecimalH]
        // var decTwoDigit =  [DecimalOT, DecimalH] 
        var DecimalHTOT = (Math.random()*99 + 10).toFixed(2)
        var DecimalTOTH = (Math.random()*99 + 10).toFixed(2)
        // var decLarge = gen.shuffleArray[DecimalHTOT, DecimalTOTH]
        var decLarge = [DecimalHTOT, DecimalTOTH]

        [numberL, numberL2, numberM] = [randWhole(2, 7), randWhole(2, 11), randWhole(10, 20)];
        [numberS, numberS2, numberM2] = [randWhole(2, 6), DecimalH, randWhole(10, 20)];

      if (Options.level === "2") {
        [numberL, numberL2, numberM] = [randWhole(12, 17), decLarge[0], randWhole(20, 50)];
        [numberS, numberS2, numberM2] = [randWhole(2, 2), DecimalH, randWhole(20, 50)];
      } else if (Options.level === "3") {
        [numberL, numberL2, numberM] = [randWhole(7, 19), randWhole(20, 100), randWhole(50, 200)];
        [numberS, numberS2, numberM2] = [randWhole(12, 39), DecimalH, decLarge[0]];
      }
    }
    //100 + (40÷8 - 9) × 11)
  
    var OoOA = `${simpleQArray[randWhole(simpleQArray.length, 0)]}           ${numberL} + (${numberS * numberL2} ÷ ${numberS} - ${numberS2}) × ${numberM2}`

    var OoOB = `${simpleQArray[randWhole(simpleQArray.length, 0)]}           ${numberM} × (${numberL} - ${numberS*numberM2} ÷ ${numberS}) + ${numberL2}`
    
    var OoOC = `${simpleQArray[randWhole(simpleQArray.length, 0)]}           ${numberS}(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})`
    
    var OoOD = `${simpleQArray[randWhole(simpleQArray.length, 0)]}           [${numberL2} + (${numberS2} × ${numberM} - ${numberS})] × ${numberM2}`
    
    var OoOE = `${simpleQArray[randWhole(simpleQArray.length, 0)]}           ${numberL2}[${numberL} + ${numberM}(${numberM2+numberS} - ${numberS})]`
    var problems = [OoOA, OoOB, OoOC, OoOD, OoOE]
    var randProb = problems[randWhole(problems.length, 0)]
    // console.log(randProb)
    var answer = ""
    var wrong = ""
        //100 + (40÷8 - 9) × 11)
    if  (randProb === OoOA) {
        answer = numberL+((numberS*numberL2/numberS-numberS2)*numberM2)
        wrong = [Math.abs(numberL+(numberS*numberL2)/numberS-numberS2*numberM2),        (Math.floor(((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2,
            ((((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2, Math.abs(numberL+(numberS*numberL2)/numberS-(numberS2*numberM2))]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer/10, numberL+((numberS*numberL2/numberS-numberS2*10)*numberM2)))
        } else {
            wrong.push((answer+1, answer-2))
        }
        // console.log(wrong)
//40 x ( 100 - 50 ÷ 5 ) + 100
    }else if  (randProb === OoOB) {
        answer = numberM*(numberL-(numberS*numberM2/numberS)+numberL2)
        wrong = [numberM*numberL-numberS*numberM2/numberS+numberL2, numberM*numberL-(numberS*numberM2/numberS)+numberL2,
            Math.floor((((numberM*numberL)-numberS)*numberM2)/numberS)+numberL2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer/10))
        } else {
            wrong.push((answer+1, answer-2))

        }
        // console.log(wrong)

//10(100 - 8) + 40(100 + 40)
    }else if  (randProb === OoOC) {
        answer = numberS*(numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberS*numberL-numberS2+numberM*numberL2+numberM2, (Math.floor(((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer*100, answer/10))
            // wrong = gen.shuffleArray(wrong)
        } else {
            wrong.push((answer+1, answer-2, answer+3))
            // wrong = gen.shuffleArray(wrong)
        }
        // console.log(wrong)

  //[100+(8x40-10)]x40
    }else if  (randProb === OoOD) {
        answer = (numberL2+(numberS2*numberM-numberS))*numberM2
        wrong = [(numberL2+(numberS2*numberM-numberS))*numberM2+1, (numberL2+numberS2)*numberM-numberS,
                 numberL2+Math.abs(numberS2*numberM-numberS*numberM2),   (((numberL2+numberS2)*numberM)-numberS)*numberM2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10))
            // wrong = gen.shuffleArray(wrong)
        } else {
            wrong.push((answer+1))
            // wrong = gen.shuffleArray(wrong)
        }
        // console.log(wrong)

//[100+(8x40-10)]x40
    }else if  (randProb === OoOE) {
        answer = numberL2*(numberL+numberM*(numberM2))
        wrong = [numberL2+(numberL+numberM+(numberM2+numberM2+numberM2)), numberL2*(numberL+numberM*(numberM2)),
                numberL2*numberL + numberM*numberM2, (numberL2*numberL+numberM)*numberM2+numberS-numberS]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10))
            // wrong = gen.shuffleArray(wrong)
        } else {
            wrong.push((answer+1, answer-2))
            // wrong = gen.shuffleArray(wrong)
        }       
    }else {
        answer = 0
        wrong = [0, 0, 0]
    }
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

}


