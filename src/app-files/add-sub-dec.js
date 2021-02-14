import {randWhole, randDec, roundDec, shuffleArray, wrongOptions, answerChoicesKey,
        largestDecPV, splitDec, decPV, removeDec,
} from './general.js'
import {verticalAlign, verticalAlignDec} from './vertical-align'
const asNumbers = (userSelection) =>{
    var numArray = []
    if (userSelection['1-3 digits to the hundredths']) {
        if (userSelection['Same decimal place values']){
            numArray.push(
                [randDec(1,9,2), randDec(1,9,2)],
                [randDec(1,9,2), randDec(0.1,0.99,2)],
                [randDec(1,9,1), randDec(1,9,1)],
                [randDec(1,9,1), randDec(0.1,0.9,1)],        
            )
        }
        if (userSelection['Different decimal place values']){
            numArray.push(
                [randDec(1,9,2), randDec(1,9,1)],
                [randDec(1,9,2), randDec(0.1,0.9,1)],
                [randDec(1,9,1), randDec(0.11,0.99,2)],
                [randDec(1,9,1), randDec(0.11,0.99,2)],
                [randDec(1,9,2), randDec(1,9,1)],
                [randDec(1,9,2), randDec(0.1,0.9,1)],
                [randWhole(10,20), randDec(1,9,1)],
                [randWhole(10,20), randDec(0.1,0.9,1)],
                [randWhole(1,9), randDec(1,9,2)],
                [randWhole(1,9), randDec(0.10,0.99,2)],
                [randWhole(1,9), randDec(10,99,1)],
            
            )
        } 
    } if (userSelection['3-4 digits to the hundredths']) {
        if (userSelection['Same decimal place values']){
            numArray.push(
                [randDec(1,9,2), randDec(1,9,2)],
                [randDec(1,9,2), randDec(10,99,2)],
                [randDec(10,99,1), randDec(10,99,1)],
                [randDec(10,99,2), randDec(10,99,2)],   
                [randDec(10,99,1), randDec(100,999,1)],
                [randDec(100,999,1), randDec(100,999,1)],       
            )
        }
        if (userSelection['Different decimal place values']){
            numArray.push(
                [randDec(1,9,2), randDec(10,99,1)],
                [randDec(1,9,2), randDec(100,999,1)],
                [randDec(10,99,1), randDec(10,99,2)],
                [randDec(100,999,1), randWhole(2,1000)],
                [randDec(10,99,1), randWhole(10,99)],   
                [randDec(10,99,1), randWhole(2,1000)],
                [randDec(1,9,2), randWhole(10,99)],   
                [randDec(1,9,2), randWhole(2,1000)],   
            )
        } 
    } if (userSelection['4-5 digits to the hundredths']) {
        if (userSelection['Same decimal place values']){
            numArray.push(
                [randDec(100,999,2), randDec(10,99,2)], 
                [randDec(100,999,2), randDec(100,999,2)],
                [randDec(100,999,1), randDec(100,999,1)],
                [randDec(100,999,1), randDec(1000,9999,1)],   
                [randDec(10,99,2), randDec(10,99,2)],      
            )
        }
        if (userSelection['Different decimal place values']){
            numArray.push(
                [randDec(10,99,2), randDec(100,999,1)], 
                [randDec(100,999,1), randWhole(2,1000)],
                [randDec(1000,9999,1), randWhole(2,10000)],
                [randDec(10,99,2), randWhole(2,1000)],
                [randDec(10,99,2), randDec(109,999,1)],       
            )
        } 
    } if (userSelection['4-5 digits to the thousandths']) {
        if (userSelection['Same decimal place values']){
            numArray.push(
                [randDec(100,999,2), randDec(10,99,2)], 
                [randDec(100,999,2), randDec(100,999,2)],
                [randDec(100,999,1), randDec(100,999,1)],
                [randDec(100,999,1), randDec(1000,9999,1)],   
                [randDec(10,99,2), randDec(10,99,2)],
                [randDec(1,9,3), randDec(10,99,3)],
                [randDec(10,99,3), randDec(10,99,3)],
                [randDec(1,9,3), randDec(1,9,3)],
            )
        }
        if (userSelection['Different decimal place values']){
            numArray.push( 
                [randDec(100,999,1), randWhole(2,1000)], 
                [randDec(10,99,2), randWhole(2,1000)],
                [randDec(10,99,2), randDec(100,999,1)], 
                [randDec(10,99,2), randDec(10,99,3)], 
                [randDec(10,99,2), randDec(1,9,3)],
                [randWhole(2,10), randDec(10,99,3)],
                [randDec(100,999,1), randDec(10,99,3)], 
                [randDec(100,999,1), randDec(10,99,2)], 
                [randDec(100,999,1), randDec(1,9,3)], 
                [randWhole(2,99), randDec(1,9,3)],
                [randDec(1000,9999,1), randWhole(2,10000)], 
            )
        } 
    } 
    console.log(numArray)
    var numList = shuffleArray(numArray)[0]
    console.log(numList)
    var [numS, numL] = [Math.min(numList[0], numList[1]), Math.max(numList[0], numList[1])]
    var [pvS, pvL] = [decPV(numS), decPV(numL)] 


    return {numS: numS, pvS: pvS, numL: numL, pvL:pvL}

}

export const addDecAlg = (userSelection) => {
    var numList = asNumbers(userSelection)
    var [pvS, pvL] = [numList.pvS, numList.pvL]
    var [numberS, numberL] = [numList.numS, numList.numL]
    var pv = largestDecPV(numberS, numberL)
    var answer = roundDec(numberL+numberS, pv)
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS,pv) 
    wrong.push(numberL-numberS, (removeDec(numberL)+removeDec(numberS))/Math.pow(10, pv))
    wrong = shuffleArray(wrong)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    console.log(numberL)
    console.log(pvL)
    console.log(numberL.toFixed(pvL))
    if (userSelection['Vertical']) {
        var prob = verticalAlignDec(numberL, '+', numberS)
    } else {
        prob = `${numberL.toFixed(pvL)} + ${numberS.toFixed(pvS)} = `
    }
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}


export const randAddDec = (userSelection) => {
    var probArray = [addDecAlg]



    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}

export const subDecAlg = (userSelection) => {
    var numList = asNumbers(userSelection)
    var [pvS, pvL] = [numList.pvS, numList.pvL]
    var [numberS, numberL] = [numList.numS, numList.numL]
    var pv = largestDecPV(numberS, numberL)
    var answer = roundDec(numberL-numberS, pv)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL, pv)
        wrong.push(numberS+numberL, Math.abs((removeDec(numberL)-removeDec(numberS))/Math.pow(10, pv)))
    wrong = shuffleArray(wrong)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var problem = {text:    (`${numberL.toFixed(pvL)} - ${numberS.toFixed(pvS)} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }

    return problem
}


export const randSubDec = (options) => {
    var probArray = [subDecAlg]

    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}
