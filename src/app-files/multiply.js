import * as g from "./general";
import {randWhole, shuffleArray, answerChoicesKey, wrongOptions, cap} from './general'

const multNumbers = (options) =>{
    if (options.specify === '1 by 1 digit') {
        var [numberS, numberM, numberL] = [randWhole(2, 9), randWhole(2, 20), randWhole(2, 9)];

    } else if (options.specify === '2 by 1 digit') {
        
        [numberS, numberM, numberL] = [randWhole(2, 9), randWhole(12, 67), randWhole(10, 99)];

    } else if (options.specify === '3 by 1 digit') {
        [numberS, numberM, numberL] = [randWhole(2, 9), randWhole(12, 67), randWhole(100, 999)];

    } else if (options.specify === '4 by 1 digit') { //4 by 1
        [numberS, numberM, numberL] = [randWhole(2, 9), randWhole(12, 67), randWhole(1000, 9999)];

    }else if (options.specify === "2 by 2 digit") { // 2 by 2
    [numberS, numberM, numberL] = [randWhole(12, 49), randWhole(12, 67), randWhole(50, 99)];

    } else if (options.specify ==="3 by 2 digit") { // 3 by 2
    [numberS, numberM, numberL] = [randWhole(20, 99), randWhole(20, 90), randWhole(102, 999)];
    } else{
        [numberS, numberM, numberL] = [randWhole(20, 99), randWhole(20, 90), randWhole(102, 999)];

        // var randQ = [[randWhole(2,9), randWhole(1000,9999)] //error cannot read property (random number) of undefined
        //             [randWhole(20,99), randWhole(102,999)]
        //             [randWhole(12,49), randWhole(50,99)]]
        // var randArr = shuffleArray(randQ)
        // // [numberS, numberM, numberL] = [randArr[0][0],randWhole(12,90), randArr[0][1]]

    }
    return [numberS, numberM, numberL]
}

export const multWhole = (options) => { //basic product/sum/difference
    var numberList = multNumbers(options)
    var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    if (options.level === '1') {
        var prob1 = (`What is the product of ${numberS} and ${numberL}?`)
        var prob2 = (`What is the product of ${numberL} and ${numberS}?`)
        var prob3 = (`A number is ${numberL} times as large as ${numberS}. What is the number?`)
        var prob4 = (`A number is ${numberS} times as large as ${numberL}. What is the number?`)
        var randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
        var answer = numberS*numberL

    } else if (options.level === '2') {
        prob1 = (`What is the sum of ${numberM} and the product of ${numberL} and ${numberS}?`)
        prob2 = (`What is the sum of ${numberM} and the product of ${numberS} and ${numberL}?`)
        prob3 = (`What is the difference when ${numberM} is subtracted from the product of ${numberS} and ${numberL}?`)
        prob4 = (`What is the difference when ${numberM} is subtracted from the product of ${numberL} and ${numberS}?`)
        randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
        if (randProb === (prob1 || prob2)){ //maybe better to make problems into objects with answer 
            answer = numberM+numberL*numberS
        } else {
            answer = numberL*numberS-numberM
        }
    } else {
        var numberL2 = randWhole(111,99) //not going to change based on specify
        var numberS2 = randWhole(12,99)
        prob1 = (`What is the difference between the product of ${numberL} and ${numberS} and the product of ${numberS2} and ${numberL2}?`)
        prob2 = (`What is the sum of the product of ${numberL} and ${numberS} and the product of ${numberS2} and ${numberL2}?`)
        prob3 = (`A number is ${numberS} times as much as the sum of ${numberM} and ${numberS2}and ${numberS}. What is the number?`)
        randProb = [prob1, prob2, prob3][randWhole(0,2)]

        if (randProb === prob1){
            answer = numberL*numberS - numberS2*numberL2
        } else if (randProb === prob2){
            answer = numberL*numberS + numberS2*numberL2
        } else {
            answer = numberS*(numberM+numberS2+numberS)
        }
    }
    
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }




    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem     

}


export const multWhole2 = (options) => { //mass
    var [group, item, mass] = [shuffleArray(g.groupList), shuffleArray(g.itemList)]
    var e = ['one', 'a', 'each'][randWhole(0,2)]
    var numberList = multNumbers(options)
    var [numberS, numberM, numberL, numberL2] = [numberList[0], numberList[1], numberList[2], randWhole(12, 55)]


    if (options.level === '1') {
        var prob1 = `${cap(e)} ${group[0]} of ${item[0]} has a mass of ${numberS} grams. What is the mass of `+
        `${numberL} ${group[0]}s of ${item[0]} in grams?`
        var prob2 = `There are ${numberL} ${group[0]}s of ${item[0]}. If ${e} ${group[0]} of ${item[0]} `+
        `has a mass of ${numberS} grams, what is the mass of all these ${item[0]}s?`
    } else {
        var prob1 = `${cap(e)} ${group[0]} of ${item[0]} has a mass of ${numberS} grams. ${cap(e)} ${group[0]} of `+
        `${item[1]} has a mass of ${numberM} grams. What is the mass of ${numberL} ${group[0]}s of ${item[0]} in grams?`
        var prob2 = `There are ${numberL} ${group[0]}s of ${item[0]} and there are ${numberM} ${group[0]}s of `+
        `${item[1]}. What is the mass of all the ${group[0]}s of ${item[0]} if ${e} has a mass of ${numberS} grams? `
    }
    var randProb = [prob1, prob2][randWhole(0,1)]
    var answer = numberS*numberL
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], 'grams')
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem   
}

export const multWhole3 = (options) => { //simple buying items
    var [expItem, girl] = [shuffleArray(g.itemList2060), shuffleArray(g.girlList)]
    var e = ['one', 'a', 'each'][randWhole(0,2)]
    var numberList = multNumbers(options)
    var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
    var prob1 = `${cap(e)} ${expItem[0]} costs $${numberS}. How much would it cost to buy ${numberL} ${expItem[0]}s?`
    var prob2 = `${girl[0]} buys ${numberL} ${expItem[0]}s which cost $${numberS} each. How much would it cost her to buy 
                ${numberL} ${expItem[0]}s?`
    var randProb = [prob1, prob2][randWhole(0,1)]
    var answer =numberS*numberL
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem   
}
export const multWholeby1 = (options) => { //by1 digit only Disaster
    var [food, boy, girl, disaster] = [shuffleArray(g.disasterFoodList)[0], shuffleArray(g.boyList)[0], shuffleArray(g.girlList)[0],shuffleArray(g.disasterList)[0]]
    var e = ['one', 'a', 'each'][randWhole(0,2)]
    var numberList = multNumbers(options)
    var [numberS, numberM, numberL] = [randWhole(2,7), numberList[1], numberList[2]]
    var prob1 = (`${boy} is preparing for a ${disaster}. He wants to buy a lot of his favorite food so that he does not `+
    `run out. ${cap(e)} box of ${food} costs $${numberS}. How much would it cost him to buy `+
    `${numberL} boxes?`)
    var prob2 = (`${girl} is getting ready in case of a ${disaster}. She wants stock up on ${food} so she purchases `+
    `${numberL} boxes. ${cap(e)} box of ${food} costs $${numberS}. How much would it cost her to buy `+
    `all the boxes?`)
    var randProb = [prob1, prob2][randWhole(0,1)]
    var answer =numberS*numberL
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem   
}
// export const multWhole5 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole6 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole7 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole8 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole9 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole10 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }
// export const multWhole11 = (options) => {
//     var numberList = multNumbers(options)
//     var [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
//     var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
//     var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
//     var problem = {text: randProb,
//         answerChoices: AC,
//         correctAnswer: answer
//     }

//     // console.log(problem)
//     // return <div><p>{problem} </p></div>
//     return problem   
// }



  

    // problem = (`${randGirl} 's ${randPetBig} weighs ${numberL} pounds. ${randBoy}'s ${randPetBig} weighs ${NumberS}`
    // ` times as much as ${randGirl}'s ${randPetBig}. What does ${randBoy}'s ${randPetBig} weigh in pounds?`) //2 by 2 only



    // problem = (`${randBoy} buys ${numberL} large bags of ${randCandy} for Halloween. It costs `
    // `${numberS}$ for each bag of ${randCandy}. How much would it cost him to buy all the bags?`)

    // problem = (`${randSchool} ordered ${numberL} cases of ${randSubject} textbooks. ${cap(e)} case holds ${numberS}`
    // ` textbooks. How many textbooks did the school buy?`)

    // problem = (`A ${randSize} bag of ${randFood}'s contains ${numberL} calories. How many calories are in ` 
    // `${numberS} ${randSize} bags of ${randFood}s?`)




    export const randMultWhole = (options) => {
        var probArray = [multWhole, multWhole2, multWhole3]
        if (options.specify === '3by1' || '4by1') {
            probArray.push(multWholeby1)
        } //else if (options.specify === '2by2') {

        // } else {//3by2

        // }
        var randProb = shuffleArray(probArray)[0]
        return randProb(options)
    }