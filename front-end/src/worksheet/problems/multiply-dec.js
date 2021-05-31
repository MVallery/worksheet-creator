import {randWhole, decPV, randDec, shuffleArray, wrongOptions, answerChoicesKey} from './general'
import * as g from './general'
import {verticalAlign} from './vertical-align'
import {StyleSheet} from "@react-pdf/renderer";
//   const styles = StyleSheet.create({
//     top: {
//       marginBottom:10,
//       fontSize: 12,

//       // fontFamily: 'arial'
//     },
//     probContainer: {
//         display:'flex',
//         flexDirection:'column',
//         justifyContent: 'flexEnd',
//         backgroundColor: 'blue',
//       },
//     bottom: {
//         marginBottom:10,
//         fontSize: 12,
//         backgroundColor: 'yellow',
//         // fontFamily: 'arial'
//       },

//   });

export const multNumbers = (userSelection) =>{
    var numArray = []
    let numbers
    // if (userSelection.concept==='Tables' || userSelection.concept==='Area'||userSelection.concept==='Perimeter'){
    //     numbers='decimals'
    // } else {
    //     numbers='numbers'
    // }
    if (userSelection.specify['numbers']['Decimal x Whole Number']) {
        numArray.push(
            [randWhole(2, 9), randDec(0.1, 0.9, 1)],
            [randWhole(2, 9), randDec(0.1, 0.9, 2)],
            [randWhole(2, 9), randDec(1, 9, 1)],
            [randWhole(2, 9), randDec(1, 9, 2)],
            [randWhole(2, 9), randDec(10,99, 1)]
        )
    } if (userSelection.specify['numbers']['3 by 1 digit']) {
        var randDecimal = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        numArray.push(
            [randWhole(2, 9), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randWhole(100,999) ],
            [randDec(0.02, 0.09, 2), randDecimal],
            [randDec(0.02, 0.09, 2), randWhole(100,999) ]
        )
    } if (userSelection.specify['numbers']['4 by 1 digit']) {
        randDecimal = [randDec(100, 999, 1), randDec(20,99,2), randDec(2, 9, 3), randDec(0.2, 0.9999, 4)][randWhole(0,3)]
        numArray.push(
            [randWhole(2, 9), randDecimal],
            [randDec(0.2,0.9, 1), randWhole(1000,9999)],
            [randDec(0.2,0.9,1), randDecimal],
            [randDec(0.02,0.09,2), randDecimal],
            [randDec(0.02,0.09,2), randWhole(1000,9999)]
        )
    } if (userSelection.specify['numbers']['2 by 2 digit']) {
        randDecimal = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        var randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]

        numArray.push(
            [randWhole(11, 99), randDecimal],
            [randWhole(11, 99), randDecimal],
            [randDecimal, randDecimal2],
            [randDecimal, randDecimal2],
            [randDec(1, 9, 1), randDec(0.2,0.99,2)],
            [randDec(1, 9, 1), randDec(0.2,0.99,2)]

        )
    } if (userSelection.specify['numbers']['3 by 2 digit']) {
        var randDecimal3 = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        var randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        numArray.push(
            [randWhole(11, 99), randDecimal3],
            [randDecimal2, randWhole(100,999)],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3]

        )
    }
    var num = shuffleArray(numArray)[0]
        // var [num1pv, num2pv] = [decPV(num[0]), decPV(num[1])] 
    return {numberS:Math.min(...num), numberM:randWhole(9,100), numberL:Math.max(...num)}
}

export const multDecAlg = (userSelection) => {
    var {numberS, numberL} = multNumbers(userSelection)
    var multPV = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(multPV))
    var firstNum = numberL.length>numberS.length? numberL:numberS
    var secondNum = numberS.length>numberL.length? numberS:numberL
    if (userSelection.specify.probStyle==='Horizontal') {
        var prob = `${numberL} × ${numberS} = `
    } else{
        prob = verticalAlign(firstNum, '×', secondNum) 
    }

    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, multPV)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const multDecBasic = (userSelection) => {
    var {numberS, numberL} = multNumbers(userSelection)
    var multPV = decPV(numberS)+decPV(numberL)
    var answer = Number((numberL*numberS).toFixed(multPV))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, multPV)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`What is the product of ${numberL} and ${numberS}?`)
    probArray.push(`What is the product of ${numberS} and ${numberL}?`)
    probArray.push(`What is ${numberS} times as much as ${numberL}?`)

    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}
export const multDec = (userSelection) => {
    var girl = shuffleArray(g.girlList)[0]
    var boy = shuffleArray(g.boyList)[0]
    
    var pet = shuffleArray(g.bigPetList)[0]

    if (userSelection.specify.numbers['4 by 1 digit']) {
        var [numberS, numberL] = [randDec(0.2, 0.9, 1), randDec(10,50, 2)]
    } else if (userSelection.specify.numbers['3 by 1 digit']) {
        [numberS, numberL] = [randDec(0.2, 0.9, 1), randDec(10,50, 1)]
    } else if (userSelection.specify.numbers['2 by 2 digit']) {
        [numberS, numberL] = [randDec(2, 5, 1), randDec(1,3, 1)]
        pet = shuffleArray(g.smallPetList)[0]
    } else if (userSelection.specify.numbers['3 by 2 digit']) {
        [numberS, numberL] = [randDec(2, 4, 1), randDec(1, 5, 2)]
        pet = shuffleArray(g.smallPetList)[0]
    }
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`${girl}'s ${pet} weighs ${numberL} pounds. ${boy}'s ${pet} weighs ${numberS} `+   
    ` times as much as ${girl}'s ${pet}. What does ${boy}'s ${pet} weigh in pounds?`)
    // probArray.push(``)
    // probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}



export const multDec2 = (userSelection) => {
    var woman = shuffleArray(g.womanList)[0]
    var pet = shuffleArray(g.smallPetList)[0]
    if (userSelection.specify.numbers['4 by 1 digit']) {
        var [numberS, numberL] = [randWhole(2,9), randDec(10,50,2)]
        var time = {s:'month', p:'months'}
    } else if (userSelection.specify.numbers['3 by 1 digit']){
        [numberS, numberL] = [randWhole(2, 9), randDec(1, 5,2)]
        time = {s:'week', p:'weeks'}
    } else if (userSelection.specify.numbers['2 by 2 digit']){
        [numberS, numberL] = [randWhole(12, 99), randDec(0.20, 0.75,2)]
        time = {s:'day', p:'days'}
    } else if (userSelection.specify.numbers['3 by 2 digit']){
        [numberS, numberL] = [randWhole(100, 999), randDec(0.20, 0.75,2)]
        time = {s:'day', p:'days'}
    }
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))

    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var probArray = []
    probArray.push(`It costs ${woman} $${numberL} to buy food for her ${pet}s each ${time.s}. How much `+
    `does it cost her for ${numberS} ${time.p} of ${pet} food?`)

    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}


export const multDec3 = (userSelection) => {
    var tour = shuffleArray(g.tourList)[0]
    if (userSelection.specify.numbers['4 by 1 digit']) {
        var [numberS, numberL] = [randWhole(2,6), randDec(15,50,2)]
        
    } if (userSelection.specify.numbers['3 by 1 digit']) {
        [numberS, numberL] = [randWhole(2,6), randDec(7,9,2)]
            
    } if (userSelection.specify.numbers['2 by 2 digit']) {
        [numberS, numberL] = [randDec(2,6,1), randWhole(12,50)]
                
    } if (userSelection.specify.numbers['3 by 2 digit']) {
        [numberS, numberL] = [randDec(2,4,1), randWhole(100,200)] 
        }
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var probArray = []
    probArray.push(`The ${tour} tour costs $${numberL} for each hour. How much does it cost `+
    `for a ${numberS} hour tour?`)
    // probArray.push(``)
    // probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

                   




export const multDec4 = (userSelection) => {
    var disaster = shuffleArray(g.disasterList)[0]
    var boy = shuffleArray(g.boyList)[0]
    if (userSelection.specify.numbers['4 by 1 digit']) {
        var [numberS, numberL] = [randDec(10, 15, 2), randWhole(5, 9), ]
        var food = shuffleArray(['chicken','pecans','peanut butter','popscicles','chocolate','pasta'])[0]
    
    } if (userSelection.specify.numbers['3 by 1 digit']) {
        [numberS, numberL] = [randDec(1,5,2),randWhole(5,9)]
        food = shuffleArray(g.disasterFoodList)[0]
            
    } if (userSelection.specify.numbers['2 by 2 digit']) {
        [numberS, numberL] = [randDec(0.2,0.99,2), randWhole(12,99)]
        food = shuffleArray(['ramen','beans','bananas','popscicles','chocolate','pasta'])[0]
    } if (userSelection.specify.numbers['3 by 2 digit']) {
        [numberS, numberL] = [randDec(0.2,0.99,2), randWhole(100, 400)] 
        food = shuffleArray(['ramen','beans','bananas','popscicles','chocolate','pasta'])[0]

        }
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var probArray = []
    probArray.push(`${boy} is preparing for a ${disaster}. He wants to buy a lot of ${food} so that he does `+
    `not run out. Each package of ${food} costs $${numberS}. How much would it cost him to buy `+
    `${numberL} packages of ${food}?`)
    // probArray.push(``)
    // probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}
                   


export const multDec5 = (userSelection) => {
    if (userSelection['']) {
        
    }
    var [numberS, numberL] = []
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(``)
    probArray.push(``)
    probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}


                //    '{randGirl} worked {Decimal} hours this week at her job working as a {randJob}. She earns $'
                //    f'{Decimal2} per hour. How much money did she earn this week?


export const multDec6 = (userSelection) => {

    if (userSelection['']) {
        
    }
    var [numberS, numberL] = []
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(``)
    probArray.push(``)
    probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}


            //        f'One ounce of {randCan}  has {Decimal} grams of protein. How many grams of protein are in {Decimal2}'
            //    f'ounce can of {randCan}?')
export const multDec7 = (userSelection) => {

    if (userSelection['']) {
        
    }
    var [numberS, numberL] = []
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(``)
    probArray.push(``)
    probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

// (f'{randBoy} needs to buy {Number1} {randItemsExp}s. Each {randItemsExp} costs ${Decimal}. How much'
//                    f' would {randBoy} spend to buy {Number1} {randItemsExp}?
export const multDec8 = (userSelection) => {

    if (userSelection['']) {
        
    }
    var [numberS, numberL] = []
    var pv = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(pv))


    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, pv)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2],)
    var probArray = []
    probArray.push(``)
    probArray.push(``)
    probArray.push(``)


    var randProb = shuffleArray(probArray)[0]    
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}
            //    It costs ${whole} for a flight to {randCountry[0]}. A flight to {randCountry[1]} costs {Decimal} times'
            //    f'as much as the flight to {randCountry[0]}. How much does the flight to {randCountry[1]} cost?'



export const randMultDec = (userSelection) => {
    var probArray = []
    if (userSelection.specify.probType['Algorithm']){
        probArray.push(multDecAlg, multDecAlg, multDecAlg, multDecAlg, multDecAlg)
    } if (userSelection.specify.probType['Application']){
        probArray.push(multDecBasic, multDec, multDec2, multDec3, multDec4)
    }

    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}
