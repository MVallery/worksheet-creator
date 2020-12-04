import * as gen from './general.js'
// var simpleQArray = ['What is the value of the expression? \n',
// 'An expression is shown below, what value is equivalent to the expression?\n',
// 'Which value is equivalent to the expression below? \n']
var simpleQArray = gen.shuffleArray(['What is the value of the expression? \n',
                  'An expression is shown below, what value is equivalent to the expression?\n',
                  'Which value is equivalent to the expression below? \n'])
export const orderOps = (Options) => {


    if (Options.specify === "whole") {
        var [numberL, numberL2, numberM] = [Math.floor(Math.random()*20 + 10), Math.floor(Math.random()*20+10), Math.floor(Math.random()*11+2)];
        var [numberS, numberS2, numberM2] = [Math.floor(Math.random()*8 + 2), Math.floor(Math.random()*8+2), Math.floor(Math.random()*11+2)];

      if (Options.level === "2") {
        [numberL, numberL2, numberM] = [Math.floor(Math.random()*50 + 20), Math.floor(Math.random()*50+20), Math.floor(Math.random()*19+10)];
        [numberS, numberS2, numberM2] = [Math.floor(Math.random()*9 + 2), Math.floor(Math.random()*9+2), Math.floor(Math.random()*19+10)];
      } else if (Options.level === "3") {
        [numberL, numberL2, numberM] = [Math.floor(Math.random()*200 + 50), Math.floor(Math.random()*200+50), Math.floor(Math.random()*100+20)];
        [numberS, numberS2, numberM2] = [Math.floor(Math.random()*19 + 7), Math.floor(Math.random()*19+7), Math.floor(Math.random()*100+20)];
      }
    }
    else if (Options.specify === "decimal") {
        var [f, r] = ['roundFormat', 2]
        var DecimalH = (Math.random()).toFixed(2)
        var DecimalOT = (Math.random()*9 + 1).toFixed(1) 
        var DecimalT = (Math.random()*9 + 1).toFixed(1) 

        // var decTwoDigit =  gen.shuffleArray[DecimalOT, DecimalH]
        var decTwoDigit =  [DecimalOT, DecimalH]

        var DecimalHTOT = (Math.random()*99 + 10).toFixed(2)
        var DecimalTOTH = (Math.random()*99 + 10).toFixed(2)
        // var decLarge = gen.shuffleArray[DecimalHTOT, DecimalTOTH]
        var decLarge = [DecimalHTOT, DecimalTOTH]

        [numberL, numberL2, numberM] = [Math.floor(Math.random()*7 + 2), Math.floor(Math.random()*11+2), Math.floor(Math.random()*20+10)];
        [numberS, numberS2, numberM2] = [Math.floor(Math.random()*6+2), DecimalH, Math.floor(Math.random()*20+10)];

      if (Options.level === "2") {
        [numberL, numberL2, numberM] = [Math.floor(Math.random()*17 + 12), decLarge[0], Math.floor(Math.random()*50+20)];
        [numberS, numberS2, numberM2] = [Math.floor(Math.random()*9+2), DecimalH, Math.floor(Math.random()*50+20)];
      } else if (Options.level === "3") {
        [numberL, numberL2, numberM] = [Math.floor(Math.random()*19 + 7), Math.floor(Math.random()*100+20), Math.floor(Math.random()*200+50)];
        [numberS, numberS2, numberM2] = [Math.floor(Math.random()*39+12), DecimalH, decLarge[0]];
      }
    }
    //100 + (40÷8 - 9) × 11)
  
    var OoOA = `${simpleQArray[Math.floor(Math.random()*simpleQArray.length)]}           ${numberL} + (${numberS * numberL2} ÷ ${numberS} - ${numberS2}) × ${numberM2}`

    var OoOB = `${simpleQArray[Math.floor(Math.random()*simpleQArray.length)]}           ${numberM} × (${numberL} - ${numberS*numberM2} ÷ ${numberS}) + ${numberL2}`
    
    var OoOC = `${simpleQArray[Math.floor(Math.random()*simpleQArray.length)]}           ${numberS}(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})`
    
    var OoOD = `${simpleQArray[Math.floor(Math.random()*simpleQArray.length)]}           [${numberL2} + (${numberS2} × ${numberM} - ${numberS})] × ${numberM2}`
    
    var OoOE = `${simpleQArray[Math.floor(Math.random()*simpleQArray.length)]}           ${numberL2}[${numberL} + ${numberM}(${numberM2+numberS} - ${numberS})]`
    var problems = [OoOA, OoOB, OoOC, OoOD, OoOE]
    var randomProblem = problems[Math.floor(Math.random()*problems.length)]
    console.log(randomProblem)
    var answer = ""
    var wrong = ""
        //100 + (40÷8 - 9) × 11)
    if  (randomProblem === OoOA) {
        answer = numberL+((numberS*numberL2/numberS-numberS2)*numberM2)
        wrong = [numberL+numberS*numberL2/numberS-numberS2*numberM2,        ((((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2,
            ((((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2, numberL+numberS*numberL2/numberS-(numberS2*numberM2)]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer/10, numberL+((numberS*numberL2/numberS-numberS2*10)*numberM2)))
        } else {
            wrong.push((answer+1, answer-2))
        }
        console.log(wrong)
//40 x ( 100 - 50 ÷ 5 ) + 100
    }else if  (randomProblem === OoOB) {
        answer = numberM*(numberL-(numberS*numberM2/numberS)+numberL2)
        wrong = [numberM*numberL-numberS*numberM2/numberS+numberL2, numberM*numberL-(numberS*numberM2/numberS)+numberL2,
            ((((numberM*numberL)-numberS)*numberM2)/numberS)+numberL2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer/10))
        } else {
            wrong.push((answer+1, answer-2))

        }
        console.log(wrong)

//10(100 - 8) + 40(100 + 40)
    }else if  (randomProblem === OoOC) {
        answer = numberS*(numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberS*numberL-numberS2+numberM*numberL2+numberM2, ((((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10, answer*100, answer/10))
            // wrong = gen.shuffleArray(wrong)
        } else {
            wrong.push((answer+1, answer-2, answer+3))
            // wrong = gen.shuffleArray(wrong)
        }
        console.log(wrong)

  //[100+(8x40-10)]x40
    }else if  (randomProblem === OoOD) {
        answer = (numberL2+(numberS2*numberM-numberS))*numberM2
        wrong = [(numberL2+(numberS2*numberM-numberS))*numberM2, (numberL2+numberS2)*numberM-numberS,
                 numberL2+(numberS2*numberM-numberS*numberM2),   (((numberL2+numberS2)*numberM)-numberS)*numberM2]
        if (Options.specify === 'decimal') {
            wrong.push((answer*10))
            // wrong = gen.shuffleArray(wrong)
        } else {
            wrong.push((answer+1))
            // wrong = gen.shuffleArray(wrong)
        }
        console.log(wrong)

//[100+(8x40-10)]x40
    }else if  (randomProblem === OoOE) {
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
        console.log(wrong)

          
    }else {
        answer = 0
        wrong = [0, 0, 0]
    }
    

    // wrong = gen.shuffleArray(wrong)
    console.log(wrong)
    // var AC = gen.shuffleArray(answer, wrong[0], wrong[1], wrong[2])
    var AC = [answer, wrong[0], wrong[1], wrong[2]]

    console.log(`${randomProblem} \n    ${AC[0]}  \n    ${AC[1]}  \n    ${AC[2]}  \n    ${AC[3]}`)


}


