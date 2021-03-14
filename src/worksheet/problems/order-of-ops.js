import {randWhole, shuffleArray, answerChoicesKey, randDec, roundDec
    } from './general.js'

var simpleQArray = shuffleArray(['What is the value of the expression? \n',
                  'An expression is shown below, what value is equivalent to the expression?\n',
                  'Which value is equivalent to the expression below? \n'])

const orderOpsNumbers = (userSelection) => {
    var numArray = []
    if (userSelection['Whole numbers'] || (!('Whole numbers' in userSelection) && !('Decimals' in userSelection) && !('Integers' in userSelection))){
        if (userSelection.level === '2') {
            numArray.push([randWhole(2,9), randWhole(2,9),randWhole(10,20),
                randWhole(10,20),randWhole(21,30),randWhole(21,30)])

        } else if (userSelection.level === '3') {
            numArray.push([randWhole(20,50), randWhole(20,50), randWhole(30,70), 
                randWhole(30,70), randWhole(51,70), randWhole(51,70)])
        } else {
            numArray.push([randWhole(2,5), randWhole(2,5), randWhole(2,9), 
                randWhole(2,9),randWhole(6,9),randWhole(6,9)])
        }

    } if (userSelection['Decimals']) {
        var smallDec = [randDec(1,4,1), randDec(1,4,2), randDec(0.01,0.99,2), 
                        randDec(0.01,0.9,1), randDec(0.01,0.1,2) ]
        var largeDec = [randDec(10, 20,1), randDec(10,20,2)]
        if (userSelection.level === '2') {
            numArray.push([smallDec[randWhole(0, smallDec.length-1)], 
            smallDec[randWhole(0, smallDec.length-1)], 
            randWhole(7,12),randWhole(7,12),randWhole(7,12),randWhole(7,12)])

        } else if (userSelection.level === '3') {
            numArray.push([largeDec[randWhole(0, largeDec.length-1)], 
            largeDec[randWhole(0, largeDec.length-1)],
            randWhole(10,19), randWhole(10,19),randWhole(21,30),randWhole(21,30)])
        } else {
            numArray.push([smallDec[randWhole(0, smallDec.length-1)], 
            smallDec[randWhole(0, smallDec.length-1)], 
            randWhole(2,9),randWhole(2,9),randWhole(5,9),randWhole(5,9)])
        }

    } if (userSelection['Integers']){
        if (userSelection.level === '2') {
            numArray.push([randWhole(-12,-2), randWhole(-12,-2), randWhole(-12, 12), randWhole(-9,12), randWhole(5,15),randWhole(5,15)])
 
        } else if (userSelection.level === '3') {
            numArray.push([randWhole(-15,-2), randWhole(-15,-2), randWhole(-15, 15), randWhole(-15,15), randWhole(5,20),randWhole(5,20)])

        } else {
            numArray.push([randWhole(-9,-2), randWhole(-9,-2), randWhole(-9, 9), randWhole(-9,9), randWhole(2,10),randWhole(2,10)])
        }
    } 
  
    var numList = shuffleArray(numArray)[0]

return numList
}                  
export const orderOps = (userSelection) => { //oooA
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(userSelection) 
    var [numberL, numberL2, numberS] = [numList[4], numList[5], numList[2]]
    var [numberM, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberL2*numberS

    var probArray = []
    if (userSelection['3 steps']) {
        var OoOA = `${numberL} + (${dividend} ÷ ${numberS} - ${numberS2})` //10 + (40÷8 - 2)
        var OoOB = `(${dividend} ÷ ${numberS} - ${numberS2}) + ${numberL} ` //(40÷8 - 9) +10
        var OoOC = `${numberL} + ${dividend} ÷ ${numberS} - ${numberS2}` //10 + 40÷8 - 2
        var answer = numberL+(dividend/numberS-numberS2)
        var wrong = [Math.floor(((numberL+dividend)/numberS)-numberS2), answer-1,
                     answer+2, answer+1]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection['4 steps']) {
        OoOA = `${numberL} + (${dividend} ÷ ${numberS} - ${numberS2}) × ${numberM2}` //10 + (40÷8 - 9) × 10
        OoOB = `${numberL} + ${numberM2}(${dividend} ÷ ${numberS} - ${numberS2}) `   //10 + 10(40÷8 - 9)
        OoOC = `${numberM2}(${dividend} ÷ ${numberS} - ${numberS2}) + ${numberL} `  //10(40÷8 - 9)+10
        answer = numberL+(dividend/numberS-numberS2)*numberM2
        wrong = [Math.abs(numberL+dividend/numberS-numberS2*numberM2), answer-1,answer+1,       
                (Math.floor((numberL+dividend)/numberS)-numberS2)*numberM2, answer+5,
                   ]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection['5 steps'])  { //no selection/5
        OoOA = `${numberM2} + (${dividend} ÷ ${numberS} - ${numberS2}) × ${numberL} - ${numberM}` //10 + (40÷8-9) x 10 - 2 
        OoOB = `${numberM2} + ${numberL}(${dividend} ÷ ${numberS} - ${numberS2}) - ${numberM}` //10 + 10(40÷8-9) - 2 
        OoOC = `${numberL}(${dividend} ÷ ${numberS} - ${numberS2}) - ${numberM} + ${numberM2}` //10(40÷8-9) - 2 + 10
        answer = numberM2+((dividend/numberS-numberS2)*numberL)-numberM
        wrong = [Math.abs((numberL+dividend)/numberS-numberS2*numberL-numberM), answer+1, answer-1,       
            (Math.floor(((numberM2+numberL)*dividend)/numberS)-numberS2-numberM),
            (((numberM2+dividend)/numberS)-numberS2)*numberL-numberM,
            Math.abs((numberM2+dividend/numberS-numberS2)*numberL-numberM+1)]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

    }
    var randProbObj = shuffleArray(probArray)[0]
    wrong=shuffleArray(randProbObj.wrong)
    var randProb = shuffleArray(randProbObj.prob)[0]
    var AC = answerChoicesKey(randProbObj.answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: randProbObj.answer}
    return problem
}

export const orderOps2 = (userSelection) => { //oooB
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(userSelection) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = roundDec(numberM2*numberS2, 2)
    var probArray = []

    if (userSelection["3 steps"]) { 
        var OoOA = `${numberM} × (${numberL}-${dividend} ÷ ${numberM2})` // 8 x (9- 40/5)
        var OoOB = `(${numberL} - ${dividend} ÷ ${numberM2}) × ${numberM}` //(9-40/5)x8
        var OoOC = `${numberM}(${numberL}-${dividend} ÷ ${numberM2})` //8(9-40/5)
        var answer = numberM*(numberL-(dividend/numberM2))
        var wrong = [numberM*numberL-dividend/numberM2, 
                    Math.abs(Math.floor(numberM*((numberL-dividend)/numberM2))), answer-1, answer+1,
        Math.floor(((numberM*numberL+1)-dividend)/numberM2)]
        if (userSelection.specify === 'Decimals') {
            wrong.push(Math.abs(numberM*((numberL-dividend)/numberM2), ((numberM*numberL+1)-dividend)/numberM2))
        }
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection["4 steps"]) { 
        OoOA = `${numberM}(${numberL}-${dividend} ÷ ${numberM2}) + ${numberL2}` //8(9 - 40/5) + 9
        OoOB = `(${numberL} - ${dividend} ÷ ${numberM2}) × ${numberM} + ${numberL2}` // (9-40/5)x8 +9
        OoOC = `${numberL2} +  ${numberM}(${numberL}-${dividend} ÷ ${numberM2})` //9+ 8(9-40/5)
        answer = numberM*(numberL-(dividend/numberM2))+numberL2
        wrong = [numberM*numberL-dividend/numberM2+numberL2, answer-1,
                (numberL2+numberM)*numberL-(dividend/numberM2),
                Math.floor((((numberM*numberL)-dividend)/numberM2)+numberL2)]
                probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection["5 steps"]) { 
        OoOA = `${numberM} (${numberS} × ${numberL} - ${dividend} ÷ ${numberM2}) + ${numberL2}` //8 (5 x 9 - 40/5) + 9
        OoOB = `${numberM} (${numberL} × ${numberS} - ${dividend} ÷ ${numberM2}) + ${numberL2}` //8 (9 x 5- 40/5) +9
        OoOC = `${numberL2} + ${numberM} (${numberS} × ${numberL} - ${dividend} ÷ ${numberM2})` //9 + 8( 5 x 9 - 40/5)

        answer = numberM*(numberS*numberL-(dividend/numberM2))+numberL2
        wrong = [numberM*numberS*numberL-numberS2*numberM2/numberM2+numberL2, 
                numberM*numberS*(numberL-(numberS2*numberM2/numberM2)+numberL2),
                Math.floor((((numberM*numberS*numberL)-numberS2)*numberM2))+numberL2,
                answer-1]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

    }        
    var randProbObj = shuffleArray(probArray)[0]
    wrong=shuffleArray(randProbObj.wrong)
    var randProb = shuffleArray(randProbObj.prob)[0]
    var AC = answerChoicesKey(randProbObj.answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: randProbObj.answer}
    return problem
}

export const orderOps3 = (userSelection) => { //oooC
    
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(userSelection) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var probArray = []

    if (userSelection["3 steps"]) { 
        var OoOA = `(${numberL} - ${numberS2}) + (${numberL2} + ${numberM2})` //(9-2)+(8+5)
        var OoOB = `(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2})` //(8+5)+(9-2)
        var OoOC = `${numberM2} + ${numberL2} + (${numberL} - ${numberS2})` //5+8+(9-2)
        var answer = (numberL-numberS2)+(numberL2+numberM2)
        var wrong = [numberL-numberS2+numberL2-numberM2, 
            answer+3, answer-1,
            (numberL+numberS2)+numberL2+numberM2
        ]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})


      } if (userSelection["4 steps"]) {  
        OoOA = `(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})` // (9-4) + 5(8+2)
        OoOB = `${numberM}(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2})` //5(8+2) + (9-4) 
        OoOC = `(${numberM2} + ${numberL2}) × ${numberM} + (${numberL} - ${numberS2})` //(8+2)x5 + (9-4)
        answer = (numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberL-numberS2+numberM*numberL2+numberM2, answer+1,answer-1,
            (numberL-numberS2+numberM)*(numberL2+numberM2),
            ((numberL-numberS2+numberM)*numberL2)+numberM2
        ]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection["5 steps"]) { 
        OoOA = `${numberS}(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})` //2(9-4) + 5(8+2)
        OoOB = `${numberM}(${numberL2} + ${numberM2}) + ${numberS}(${numberL} - ${numberS2}) ` //5(8+2) + 2(9-4)
        OoOC = `${numberM}(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2}) × ${numberS} ` //5(8+2) + (9-4) x 2
        answer = numberS*(numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberS*numberL-numberS2+numberM*numberL2+numberM2, 
            (Math.floor(((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2,
            (((numberS*numberL-numberS2)+numberM)*numberL2)+numberM2, answer-1
        ]
        if (userSelection.specify==='Integers'){
            wrong.push(answer*-1, 
                numberS*(numberL-numberS2*-1)+numberM*(numberL2+numberM2),
                numberS*-1*(numberL-numberS2*-1)+numberM*(numberL2+numberM2),
                )
        } else if (userSelection.specify==='Decimals') {
            wrong.push(answer/10, answer*10, answer+0.1, answer+0.01,
                numberS*(numberL-numberS2/10)+numberM*(numberL2+numberM2),
                )
        }
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})


    }        
    var randProbObj = shuffleArray(probArray)[0]
    wrong=shuffleArray(randProbObj.wrong)
    var randProb = shuffleArray(randProbObj.prob)[0]
    var AC = answerChoicesKey(randProbObj.answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: randProbObj.answer}
    return problem
}

export const orderOps4 = (userSelection) => { //oooD
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(userSelection) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberM2*numberS2
    var probArray = []

    if (userSelection["3 steps"]) { 
        var OoOA = `[${numberL2} + (${numberL} - ${numberS})] × ${numberM2}` //[40+(30-10)]x20
        var OoOB = `${numberM2}[${numberL2} + (${numberL} - ${numberS})]` // 20[40+(30-10)]
        var OoOC = `${numberM2}(${numberL} - ${numberS} + ${numberL2})` // 20[30-10+40]
        var answer = (numberL2+(numberL-numberS))*numberM2
        var wrong = [(numberL2+(numberL-numberS))*(numberM2+1), 
                    Math.abs(numberL2*numberL-numberS*numberM2), 
                    numberL2*numberM2+Math.abs(numberL-numberS),   
                    (numberL2+numberL-numberS+1)*numberM2, answer+1,answer-1]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } if (userSelection["4 steps"]) { 
        OoOA = `[${numberL2} + (${numberS2} × ${numberL} - ${numberS})] × ${numberM2}` // [100+(8x40-10)]x40
        OoOB = `${numberM2}[${numberL2} + (${numberS2} × ${numberL} - ${numberS})]` // 40[100+(8x40-10)]
        OoOC = `${numberM2}[(${numberS2} × ${numberL} - ${numberS}) + ${numberL2}]` //40[(8x40-10)+100]
        answer = (numberL2+(numberS2*numberL-numberS))*numberM2
        wrong = [(numberL2+(numberS2*numberL-numberS))*eval(numberM2+1), 
                (numberL2+numberS2)*numberL-numberS,
                 numberL2+Math.abs(numberS2*numberL-numberS*numberM2),   
                 (((numberL2+numberS2)*numberL)-numberS)*numberM2, answer+1,answer-1]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})
        
      } if (userSelection["5 steps"]) { //
        OoOA = `${numberM2}[${numberL2} + (${numberM} + ${numberS2} × ${numberL} - ${numberS})]` // 40[100+(30+8x40-10)]
        OoOB = `${numberM2}[${numberL2} + (${numberS2} × ${numberL} - ${numberS} + ${numberM})]` // 40[100+(8x40-10+30)]
        OoOC = `[${numberL2} + (${numberM} + ${numberS2} × ${numberL} - ${numberS})] × ${numberM2} ` // [100+(30+8x40-10)] x 40
        answer = (numberL2+(numberM+numberS2*numberL-numberS))*numberM2
        wrong = [(numberL2+(numberM+numberS2*numberL-numberS))*numberM2+1, 
                (Math.floor(numberL2+numberM+numberS2)*numberL-numberS),
                 Math.floor(numberL2+numberM+Math.abs(numberS2*numberL-numberS*numberM2)),   
                 Math.floor((((numberL2+numberS2+numberM)*numberL)-numberS)*numberM2),
                answer-1, answer+1] 
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})
        
    }        
    var randProbObj = shuffleArray(probArray)[0]
    wrong=shuffleArray(randProbObj.wrong)
    var randProb = shuffleArray(randProbObj.prob)[0]
    var AC = answerChoicesKey(randProbObj.answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: randProbObj.answer}
    return problem
}

export const orderOps5 = (userSelection) => { //oooE
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(userSelection) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    numberM2 = eval(numberM2+'+'+numberS2)
    var probArray = []

    if (userSelection["3 steps"]) { 
        var OoOA = `${numberL2}[${numberL} + (${numberM2} - ${numberS2})]` //5[9+(7-2)]
        var OoOB = `${numberL2}[(${numberM2} - ${numberS2}) + ${numberL}]` //5[(7-2)+9]
        var OoOC = `[${numberL} + (${numberM2} - ${numberS2})] × ${numberL2}` //[9+(7-2)]x5
        var answer = numberL2*(numberL+(numberM2-numberS2))
        var wrong = [numberL2+(numberL+(numberM2+numberM2+numberM2-numberS2)), 
                    answer+1, answer-1,
                    numberL2*numberL + numberM2, 
                    (numberL2*numberL)*numberM2-numberS2]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})

      } else if (userSelection['4 steps']) { 
        OoOA = `${numberL2}[${numberL} + ${numberM}(${numberM2} - ${numberS2})]` // 5[9+6(7-2)]
        OoOB = `${numberL2}[${numberM}(${numberM2} - ${numberS2}) + ${numberL}]` // 5[6(7-2)+9]
        OoOC = `${numberL2} × [${numberL} + ${numberM}(${numberM2} - ${numberS2})]` //5x[9+6(7-2)]
        answer = numberL2*(numberL+numberM*(numberM2-numberS2))
        wrong = [numberL2+(numberL+numberM+(numberM2-numberS2)), answer+1,answer-1,
                numberL2*(numberL+numberM)*(numberM2-numberS2),
                numberL2*numberL + (numberM*numberM2-numberS2), 
                ((numberL2*numberL+numberM)*numberM2)-numberS2]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})
        
      } if (userSelection['5 steps']){ 
        OoOA = `${numberL2}[${numberL} + ${numberM}(${numberM2} × ${numberS} - ${numberS2})]` // 5[9+6(7x3-2)]
        OoOB = `${numberL2}[${numberM}(${numberM2} × ${numberS} - ${numberS2}) + ${numberL}]` //5[6(7x3-2)+9]
        OoOC = `[${numberM}(${numberL} + ${numberS} × ${numberM2} - ${numberS2})] × ${numberL}` //[9+6(3x7-2)]x5
        answer = numberL2*(numberL+numberM*(numberM2*numberS-numberS2))
        wrong = [numberL2+(numberL+numberM+(numberM2*numberS-numberS2)), answer+1,answer-1,
                numberL2*(numberL+numberM)*(numberM2*numberS-numberS2),
                numberL2*numberL + (numberM*numberM2*numberS-numberS2), 
                ((numberL2*numberL+numberM)*numberM2*numberS)-numberS2]
        probArray.push({prob:[OoOA, OoOB, OoOC], answer: answer, wrong: wrong})
        
    }        
    var randProbObj = shuffleArray(probArray)[0]
    wrong=shuffleArray(randProbObj.wrong)
    var randProb = shuffleArray(randProbObj.prob)[0]
    var AC = answerChoicesKey(randProbObj.answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: randProbObj.answer}
    return problem
}

export const randOrderOps = (userSelection) => {
    var probArray = [orderOps, orderOps2, orderOps3, orderOps4, orderOps5]
    if (userSelection.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (userSelection.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}
//ideas: 
//make order of op problems the answer choices and have them select the one that is or is not the same as a given answer. 

// give two problems asking if the given problems have the same answer. (make it 50/50)

//make it show student solving and they identify what step was messed up.

