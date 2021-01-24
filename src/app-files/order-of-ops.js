import {randWhole, shuffleArray, answerChoicesKey, randDec
    } from './general.js'
// var simpleQArray = ['What is the value of the expression? \n',
// 'An expression is shown below, what value is equivalent to the expression?\n',
// 'Which value is equivalent to the expression below? \n']
var simpleQArray = shuffleArray(['What is the value of the expression? \n',
                  'An expression is shown below, what value is equivalent to the expression?\n',
                  'Which value is equivalent to the expression below? \n'])

const orderOpsNumbers = (options) => {
    var smallDec = [randDec(1,9,1), randDec(1,9,2), randDec(0.01,2), randDec(0.01,1,1), randDec(0.01,0.1,2) ]
    var largeDec = [[randDec(10, 20,1), randDec(10,20,2)]]
    if (options.specify === 'Whole numbers'){
        if (options.level === 1) {
            var numList = [randWhole(2,5), randWhole(2,5), randWhole(2,9), randWhole(2,9),randWhole(6,9),randWhole(6,9)]
        } else if (options.level === 2) {
            numList = [randWhole(2,9), randWhole(2,9),randWhole(10,20),randWhole(10,20),randWhole(21,30),randWhole(21,30)]
        } else if (options.level === 3) {
            numList = [randWhole(20,50), randWhole(20,50), randWhole(30,70), randWhole(30,70), randWhole(51,70), randWhole(51,70)]
        }

    } else if (options.specify === 'Decimals') {
        if (options.level === 1) {
            numList = [smallDec[randWhole(0, smallDec.length-1)], smallDec[randWhole(0, smallDec.length-1)], 
            randWhole(2,9),randWhole(2,9),randWhole(2,9),randWhole(2,9)]
        } else if (options.level === 2) {
            numList = [smallDec[randWhole(0, smallDec.length-1)], smallDec[randWhole(0, smallDec.length-1)], 
            randWhole(7,12),randWhole(7,12),randWhole(7,12),randWhole(7,12)]
        } else if (options.level === 3) {
            numList = [largeDec[randWhole(0, largeDec.length-1)], largeDec[randWhole(0, smallDec.length-1)],
            randWhole(10,19), randWhole(10,19),randWhole(10,30),randWhole(10,30),randWhole(20,30),randWhole(20,30)]
        }

    } else if (options.specify === 'Integers'){
        if (options.level === 1) {
            numList = [randWhole(-9,-1), randWhole(-9,-1), randWhole(-9, 9), randWhole(-9,9), randWhole(1,10),randWhole(1,10)]

        } else if (options.level === 2) {
            numList = [randWhole(-12,-1), randWhole(-12,-1), randWhole(-12, 12), randWhole(-9,12), randWhole(5,15),randWhole(5,15)]

        } else if (options.level === 3) {
            numList = [randWhole(-15,-1), randWhole(-15,-1), randWhole(-15, 15), randWhole(-15,15), randWhole(5,20),randWhole(5,20)]

        }
    } else {
        numList = [5, 5, 5, 5, 5, 5]
    }

    // var numList = [{
    //   sWhole: [randWhole(2,9), randWhole(2,9), randWhole(2,9), randWhole(2,9),randWhole(2,9),randWhole(2,9)],
    //   mWhole:[randWhole(10,30), randWhole(10,30),randWhole(10,30),randWhole(10,30),randWhole(10,30),randWhole(10,30)],
    //   lWhole:[randWhole(30,70), randWhole(30,70), randWhole(30,70), randWhole(30,70), randWhole(30,70), randWhole(30,70)],
    //   xlWhole: [randWhole(70,200), randWhole(70,200),randWhole(70,200),randWhole(70,200),randWhole(70,200),randWhole(70,200)],
    //   sDecimal: [randDec(1,9,1), randDec(1,9,2), randDec(0,1,2), randDec(0,1,1), randDec(0,0.1,2) ],
    //                 //     OT           OTH             TH                  T                   H     
    //   lDecimal: [randDec(10, 20,1), randDec(10,20,2)],
    //   sNegative:[randWhole(-9,-1), randWhole(-9,-1), randWhole(-9,-1), randWhole(-9,-1), randWhole(-9,-1), randWhole(-9,-1)],
    // //   mNegative:[randWhole]
    // }]


return numList
}                  
export const orderOps = (options) => { //oooA
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(options) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberL2*numberS
    if (options.steps === "3") {
        var OoOA = `${numberL} + (${dividend} ÷ ${numberS} - ${numberS2})` //10 + (40÷8 - 2)
        var OoOB = `(${dividend} ÷ ${numberS} - ${numberS2}) + ${numberL} ` //(40÷8 - 9) +10
        var OoOC = `${numberL} + ${dividend} ÷ ${numberS} - ${numberS2}` //10 + 40÷8 - 2
        var answer = numberL+(numberS*numberL2/numberS-numberS2)
        var wrong = [Math.abs(numberL+dividend/numberS-numberS2),        
            Math.floor(((numberL+dividend)/numberS)-numberS2), answer*-1,
            Math.floor((numberL+dividend)/(numberS-numberS2)), answer+1]

      } else if (options.steps === '4') {
        OoOA = `${numberL} + (${dividend} ÷ ${numberS} - ${numberS2}) × ${numberM2}` //10 + (40÷8 - 9) × 10
        OoOB = `${numberL} + ${numberM2}(${dividend} ÷ ${numberS} - ${numberS2}) `   //10 + 10(40÷8 - 9)
        OoOC = `${numberM2}(${dividend} ÷ ${numberS} - ${numberS2}) + ${numberL} `  //10(40÷8 - 9)+10
        answer = numberL+((dividend/numberS-numberS2)*numberM2)
        wrong = [Math.abs(numberL+(dividend)/numberS-numberS2*numberM2),        
            (Math.floor(((numberL+dividend))/numberS)-numberS2)*numberM2,
            (((numberL+dividend)/numberS)-numberS2)*numberM2,
            Math.abs(numberL+dividend/numberS-(numberS2*numberM2))]

      } else  { //no selection/5
        OoOA = `${numberM2} + (${dividend} ÷ ${numberS} - ${numberS2}) × ${numberL} - ${numberM}` //10 + (40÷8-9) x 10 - 2 
        OoOB = `${numberM2} + ${numberL}(${dividend} ÷ ${numberS} - ${numberS2}) - ${numberM}` //10 + 10(40÷8-9) - 2 
        OoOC = `${numberL}(${dividend} ÷ ${numberS} - ${numberS2}) - ${numberM} + ${numberM2}` //10(40÷8-9) - 2 + 10
        answer = numberM2+((dividend/numberS-numberS2)*numberL)-numberM
        wrong = [Math.abs((numberL+dividend)/numberS-numberS2*numberL-numberM),        
            (Math.floor(((numberM2+numberL)*dividend)/numberS)-numberS2-numberM),
            (((numberM2+dividend)/numberS)-numberS2)*numberL-numberM,
            Math.abs((numberM2+dividend/numberS-numberS2)*numberL-numberM+1)]

    }
    var randProb = [OoOA, OoOB, OoOC][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

export const orderOps2 = (options) => { //oooB
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(options) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberM2*numberS2
    if (options.steps === "3") { // 8 x (9- 40/5)
        var OoOA = `${numberM} × (${numberL}-${dividend} ÷ ${numberM2})`
        var OoOB = `(${numberL} - ${dividend} ÷ ${numberM2}) × ${numberM}`
        var OoOC = `${numberM}(${numberL}-${dividend} ÷ ${numberM2})`
        var answer = numberM*(numberL-(dividend/numberM2))
        var wrong = [numberM*numberL-numberS2*numberM2/numberM2, 
            numberM*numberL-(numberS2*numberM2/numberM2), answer*-1,
            Math.floor((((numberM*numberL)-numberS2)*numberM2)/numberM2)]

      } else if (options.steps === '4') { //8(9 - 40/5) + 9
        OoOA = `${numberM}(${numberL}-${dividend} ÷ ${numberM2}) + ${numberL2}`
        OoOB = `(${numberL} - ${dividend} ÷ ${numberM2}) × ${numberM} + ${numberL2}`
        OoOC = `${numberL2} + (${numberL}-${dividend} ÷ ${numberM2}) × ${numberM}`
        answer = numberM*(numberL-(dividend/numberM2)+numberL2)
        wrong = [numberM*numberL-numberS2*numberM2/numberM2+numberL2, answer*-1,
                numberM*numberL-(numberS2*numberM2/numberM2)+numberL2,
                Math.floor((((numberM*numberL)-numberS2)*numberM2)/numberM2)+numberL2]

      } else { //8 (5 x 9-40/5) + 9
        OoOA = `${numberM} (${numberS} × ${numberL} - ${dividend} ÷ ${numberM2}) + ${numberL2}`
        OoOB = `${numberM} (${numberL} × ${numberS} - ${dividend} ÷ ${numberM2}) + ${numberL2}`
        OoOC = `${numberL2} + ${numberM} (${numberS} × ${numberL} - ${dividend} ÷ ${numberM2})`

        answer = numberM*(numberS*numberL-(dividend/numberM2))+numberL2
        wrong = [numberM*numberS*numberL-numberS2*numberM2/numberM2+numberL2, 
                numberM*numberS*(numberL-(numberS2*numberM2/numberM2)+numberL2),
                Math.floor((((numberM*numberS*numberL)-numberS2)*numberM2))+numberL2,
                answer*-1]
    }        

    var randProb = [OoOA, OoOB, OoOC][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

export const orderOps3 = (options) => { //oooC
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(options) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberM2*numberS2
    if (options.steps === "3") { //(9-2)+(8+5)
        var OoOA = `(${numberL} - ${numberS2}) + (${numberL2} + ${numberM2})`
        var OoOB = `(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2})`
        var OoOC = `(${numberM2} + ${numberL2}) + (${numberL} - ${numberS2})`
        var answer = (numberL-numberS2)+(numberL2+numberM2)
        var wrong = [numberL-numberS2+numberL2-numberM2, 
            answer+3, answer*-1,
            (numberL+numberS2)+numberL2+numberM2
        ]

      } else if (options.steps === '4') { // (9-4) + 5(8+2)  or 5(8+2) + (9-4) or (8+2)x5 + (9-4)
        OoOA = `(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})`
        OoOB = `${numberM}(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2})`
        OoOC = `(${numberM2} + ${numberL2}) × ${numberM} + (${numberL} - ${numberS2})`
        answer = (numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberL-numberS2+numberM*numberL2+numberM2, 
            (numberL-numberS2+numberM)*(numberL2+numberM2),
            ((numberL-numberS2+numberM)*numberL2)+numberM2
        ]
      } else  { // 2(9-4) + 5(8+2)
        OoOA = `${numberS}(${numberL} - ${numberS2}) + ${numberM}(${numberL2} + ${numberM2})`
        OoOB = `${numberM}(${numberL2} + ${numberM2}) + ${numberS}(${numberL} - ${numberS2}) `
        OoOC = `${numberM}(${numberL2} + ${numberM2}) + (${numberL} - ${numberS2}) × ${numberS} `


        answer = numberS*(numberL-numberS2)+numberM*(numberL2+numberM2)
        wrong = [numberS*numberL-numberS2+numberM*numberL2+numberM2, 
            (Math.floor(((numberL+numberS)*numberL2)/numberS)-numberS2)*numberM2,
            (((numberS*numberL-numberS2)+numberM)*numberL2)+numberM2, answer*-1
        ]
    }        

    var randProb = [OoOA, OoOB, OoOC][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

export const orderOps4 = (options) => { //oooD
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(options) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberM2*numberS2
    if (options.steps === "3") { //[10+(40-10)]x40
        var OoOA = `[${numberL2} + (${numberL} - ${numberS})] × ${numberM2}`
        var OoOB = `${numberM2}[${numberL2} + (${numberL} - ${numberS})]`
        var OoOC = `${numberM2}(${numberL} - ${numberS} + ${numberL2})`
        var answer = (numberL2+(numberL-numberS))*numberM2
        var wrong = [(numberL2+(numberL-numberS))*numberM2+1, 
                    (numberL2)*numberL-numberS,
                    numberL2+Math.abs(numberL-numberS*numberM2),   
                    (((numberL2)*numberL)-numberS)*numberM2, answer*-1]

      } else if (options.steps === '4') { // [100+(8x40-10)]x40
        OoOA = `[${numberL2} + (${numberS2} × ${numberL} - ${numberS})] × ${numberM2}`
        OoOB = `${numberM2}[${numberL2} + (${numberS2} × ${numberL} - ${numberS})]`
        OoOC = `${numberM2}[(${numberS2} × ${numberL} - ${numberS}) + ${numberL2}]`
        answer = (numberL2+(numberS2*numberL-numberS))*numberM2
        wrong = [(numberL2+(numberS2*numberL-numberS))*numberM2+1, 
                (numberL2+numberS2)*numberL-numberS,
                 numberL2+Math.abs(numberS2*numberL-numberS*numberM2),   
                 (((numberL2+numberS2)*numberL)-numberS)*numberM2, answer*-1]
      } else  { //
        OoOA = `${numberM2}[${numberL2} + (${numberM} + ${numberS2} × ${numberL} - ${numberS})]`
        OoOB = `${numberM2}[${numberL2} + (${numberS2} × ${numberL} - ${numberS} + ${numberM})]`
        OoOC = `[${numberL2} + (${numberS2} × ${numberL} - ${numberS} + ${numberM})] × ${numberM2} `
        answer = (numberL2+(numberM+numberS2*numberL-numberS))*numberM2
        wrong = [(numberL2+(numberM+numberS2*numberL-numberS))*numberM2+1, 
                (Math.floor(numberL2+numberM+numberS2)*numberL-numberS),
                 Math.floor(numberL2+numberM+Math.abs(numberS2*numberL-numberS*numberM2)),   
                 Math.floor((((numberL2+numberS2+numberM)*numberL)-numberS)*numberM2),
                answer*-1] 
    }        

    var randProb = [OoOA, OoOB, OoOC][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

export const orderOps5 = (options) => { //oooE
    var randQuest = simpleQArray[randWhole(simpleQArray.length, 0)]
    var numList = orderOpsNumbers(options) 
    var [numberL, numberL2, numberM] = [numList[4], numList[5], numList[2]]
    var [numberS, numberS2, numberM2] = [numList[0], numList[1], numList[3]]
    var dividend = numberM2*numberS2
    if (options.steps === "3") { //5[9+(7-2)]
        var OoOA = `${numberL2}[${numberL} + (${numberM2} - ${numberS2})]`
        var OoOB = `${numberL2}[(${numberM2} - ${numberS2}) + ${numberL}]`
        var OoOC = `[${numberL} + (${numberM2} - ${numberS2})] × ${numberL2}`
        var answer = numberL2*(numberL+(numberM2-numberS2))
        var wrong = [numberL2+(numberL+(numberM2+numberM2+numberM2-numberS2)), 
                    numberL2*(numberL+(numberM2-numberS2)),
                    numberL2*numberL + numberM2, 
                    (numberL2*numberL)*numberM2-numberS2]

      } else if (options.steps === '4') { // 5[9+6(7-2)]
        OoOA = `${numberL2}[${numberL} + ${numberM}(${numberM2} - ${numberS2})]`
        OoOB = `${numberL2}[${numberM}(${numberM2} - ${numberS2}) + ${numberL}]`
        OoOC = `${numberL2} × [${numberL} + ${numberM}(${numberM2} - ${numberS2})]`
        answer = numberL2*(numberL+numberM*(numberM2-numberS2))
        wrong = [numberL2+(numberL+numberM+(numberM2-numberS2)), 
                numberL2*(numberL+numberM)*(numberM2-numberS2),
                numberL2*numberL + (numberM*numberM2-numberS2), 
                ((numberL2*numberL+numberM)*numberM2)-numberS2]
      } else { // 5[9+6(7x3-2)]
        OoOA = `${numberL2}[${numberL} + ${numberM}(${numberM2} × ${numberS} - ${numberS2})]`
        OoOB = `${numberL2}[${numberM}(${numberM2} × ${numberS} - ${numberS2}) + ${numberL}]`
        OoOC = `${numberL2} × [${numberM}(${numberS} × ${numberM2} - ${numberS2}) + ${numberL}]`
        answer = numberL2*(numberL+numberM*(numberM2*numberS-numberS2))
        wrong = [numberL2+(numberL+numberM+(numberM2*numberS-numberS2)), 
                numberL2*(numberL+numberM)*(numberM2*numberS-numberS2),
                numberL2*numberL + (numberM*numberM2*numberS-numberS2), 
                ((numberL2*numberL+numberM)*numberM2*numberS)-numberS2]
    }        

    var randProb = [OoOA, OoOB, OoOC][randWhole(0,2)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text: randQuest + randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

export const randOrderOps = (options) => {
    var probArray = [orderOps, orderOps2, orderOps3, orderOps4, orderOps5]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}
//ideas: 
//make order of op problems the answer choices and have them select the one that is or is not the same as a given answer. 

// give two problems asking if the given problems have the same answer. (make it 50/50)

//make it show student solving and they identify what step was messed up.

