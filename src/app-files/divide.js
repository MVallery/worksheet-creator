import { to } from "mathjs";
import * as g from "./general";
import {randWhole, shuffleArray, answerChoicesKey, wrongOptions, cap} from './general'
import {verticalDivide} from './vertical-align'
var e = ['one', 'a', 'each'][randWhole(0,2)]


const divNumbers = (userSelection) => {
    var numArray = []
    if (userSelection['2 by 1 digit']) {
        numArray.push([randWhole(5, 10), randWhole(2, 9)],)
    } if (userSelection['3 by 1 digit']) {
        numArray.push(
            [randWhole(50, 99), randWhole(2, 9)],
            [randWhole(25, 50), randWhole(5, 9)],
            [randWhole(101, 166), randWhole(2, 6)],
            [randWhole(166, 249), randWhole(2, 4)],
        )
    } if (userSelection['4 by 1 digit']) {
        numArray.push(
            [randWhole(500, 999), randWhole(2, 9)],
            [randWhole(250, 500), randWhole(4, 9)],
            [randWhole(1000, 1660), randWhole(2, 6)],
            [randWhole(1660, 2490), randWhole(2, 4)],
        )
    } if (userSelection['3 by 2 digit']) { 
        numArray.push(
            [randWhole(7, 41), randWhole(15, 24)],
            [randWhole(3, 19), randWhole(35, 50)],
            [randWhole(15, 28), randWhole(21, 35)],
            [randWhole(3, 12), randWhole(50, 80)],
        )
    } if (userSelection['4 by 2 digit']) {
        numArray.push(
            [randWhole(67, 416), randWhole(15, 24)],
            [randWhole(28, 199), randWhole(35, 50)],
            [randWhole(48, 285), randWhole(21, 35)],
            [randWhole(20, 124), randWhole(50, 80)],
        )
    }
    console.log(numArray)
    var num = shuffleArray(numArray)
    
    var answer = num[0][0]

    var numberS = num[0][1]
    var numberL = answer*numberS
    return [answer, numberS, numberL]
}
export const divAlg = (userSelection) => {
    var numList = divNumbers(userSelection)
    var [answer, numberS, numberL] = [numList[0], numList[1], numList[2]]
    var wrong= wrongOptions(answer, 'divide', numberL, numberS) 
    console.log(answer)
    console.log(numberS)
    console.log(typeof numberS)
    console.log(numberL)
    wrong.push()
    wrong = shuffleArray(wrong)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    if (userSelection['Vertical']){
        var prob = verticalDivide(numberL.toLocaleString(), numberS.toLocaleString())
    } else {
        prob = `${numberL.toLocaleString()} ÷ ${numberS.toLocaleString()} = `
    }
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}
export const div1dig = (userSelection) => { // 1 digit divisor only
    var numberList = divNumbers(userSelection)
    var girl = shuffleArray(g.girlList)[0]
    var store = shuffleArray(g.storeList)[0]
    var item = shuffleArray(g.packageItemList)[0]
    var e = ['one', 'a', 'each'][randWhole(0,2)]


    var [answer, numberS, numberL] = [numberList[0], randWhole(2,6), numberList[2]]
    var wrong= wrongOptions(answer, 'divide', numberL, numberS) //wont be great wrong userSelection for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = `${girl} is going to ${store} to buy some ${item} for a party. It costs $${numberS} for ${e} `+
    `package of ${item}. After the cashier rang up her items, she had to give the cashier a total `+
    `of $${numberL}. How many packages of ${item} did she buy?`
    var prob2 = `${girl} wants to buy some ${item} at ${store} to prepare for a large family gathering.`+
    ` She ended up purchasing ${numberS} packages of ${item} which cost `+
    `$${numberL} altogether. How much does ${e} package of ${item} cost?`
    
    var randProb = [prob1, prob2][randWhole(0,1)]
    if (randProb === prob2) {
        AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    }
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    return problem
}

export const div2dig= (userSelection) => { //playing sports 2 digit only
    var numberList = divNumbers(userSelection)
    var boy = shuffleArray(g.boyList)[0]
    var sport = shuffleArray(g.sportList)[0]
    var [answer, numberS, numberL] = [numberList[0], numberList[1], numberList[2]]
    var wrong= wrongOptions(answer, 'divide', numberL, numberS) //wont be great wrong userSelection for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = `${boy} plays ${sport} for a total of ${numberL} minutes last year. He played ${sport} `+
    `for ${numberS} minutes each day. How many days did ${boy} play ${sport} last year? `
    var prob2 = `${boy} plays ${sport} for a total of ${numberL} minutes last year. He played ${sport} `+
    `for ${numberS} days last year for an equal amount of time each day. How many minutes did ${boy} play ${sport} each day last year? `
    var randProb = [prob1, prob2][randWhole(0,1)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    return problem
}

export const divWhole = (userSelection) => { //simple purchase items
    var numberList = divNumbers(userSelection)
    var item = shuffleArray(g.itemList1020)[0]
    var e = ['one', 'a', 'each'][randWhole(0,2)]
    if (userSelection.specify === '2by1') { //4 by 1
        var [answer, numberS] = [randWhole(2,9), randWhole(5,8)];
       var numberL= answer*numberS
   }else if (userSelection.specify === '3by1'){
       var [answer, numberS] = [randWhole(23,40), randWhole(6,9)];
       var numberL = answer*numberS
   } else if (userSelection.specify === '4by1'){
        var [answer, numberS] = [randWhole(167,250), randWhole(6,9)];
        var numberL = answer*numberS
    } else{
        var [answer, numberS] = [randWhole(23,89), randWhole(20,40)];
        var numberL = answer*numberS
        var item = shuffleArray(g.itemList2060)[0]
    } 
    var [answer, numberS, numberL] = [numberList[0], numberList[1], numberList[2]]
    var wrong= wrongOptions(answer, 'divide', numberL, numberS) //wont be great wrong userSelection for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    var prob1 = `It costs $${numberL} to buy ${numberS} ${item}s. How much would it cost to buy one `+
    `${item}?`
    var prob2 = `How much would it cost to buy ${e} ${item} if it costs $${numberL} to buy ${numberS} ${item}s?`
    var randProb = [prob1, prob2][randWhole(0,1)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    return problem
}

export const div1dig2 = (userSelection) => { //teacher buying items
    var teacher = shuffleArray(g.teacherList)[0]
    var theme = shuffleArray(g.themeList)[0]
    var item = shuffleArray(['pencil','marker','pen','journal','notebook','decoration'])[0]
    var e = ['one', 'a', 'each'][randWhole(0,2)]
    if (userSelection.specify === '2by1') { 
         var [answer, numberS] = [randWhole(2,9), randWhole(5,8)];
        var numberL= answer*numberS
    }else { //3by1
        var [answer, numberS] = [randWhole(15,15), randWhole(6,9)];
        var numberL = answer*numberS
    } 
    var wrong= wrongOptions(answer, 'divide', numberL, numberS)
    var prob1 = `${teacher} bought ${numberS} ${theme} ${item}s for a total of $${numberL} `+
    `. If each ${item} costs the same amount, how much did ${teacher} spend on each ${theme} ${item}? `
    var prob2 = `${teacher} has a total of $${numberL} to spend on ${item}s. She wants to buy ${theme} `+
        ` ${item}s for her classroom. If ${e} package of ${theme} ${item}s costs $${numberS}, how many packagess can she buy?`
    var randProb = [prob1, prob2][randWhole(0,1)]
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    if (randProb === prob1) {
        AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')
    } 
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    return problem
}

// export const randDivideWhole = () => {
//     var randProb = shuffleArray([
    
//     ])[0]
// }


    // var prob1 = `${girl} has ${numberL} ${theme} themed ${schoolItem}. She wants to split them equally `+
    //             ` between her friends. If she has ${numberS} friends, how many ${schoolItem} can each friend get?`
    // var prob2 = `${boy} has ${numberL} ${theme} themed ${schoolItem}. If he gives each friend ${numberS} `+
    //             `${schoolItem}, how many friends can he give them to?`

    // var prob1 = `${girl} has ${numberL} ${noun} saved up. She decides that she has way too many ${noun} and she `+
    //             `$wants to give them all away to her friends. She wants to give each friend the same amount of ${noun}. `+
    //             `${girl} has ${numberS} friends that she would like to give the ${noun} to. How many ${noun} would each friend get?`
    // var prob2 = `${boy} has too many ${noun} saved up. He decides to split them equally between each of his ${numberS} friends. `+
    //             `How many ${noun} will each friend get?`



    // var prob1 = `${boy} has ${numberL} ${noun}. He wants to split them equally into ${group}s. If ${boy} puts ${numberS} `+
    //             `${noun} into each ${group}, how many ${group}s can ${boy} fill?`
    // var prob2 = `${girl} wants to split their ${numberL} ${noun} into equal ${group}s. If she makes ${numberS} `+
    //             `${group}s, how many ${noun}s fit in ${e} ${group}?`


    // var prob1 = `${boy} has ${numberL} ${candy}. He would like to share these ${candy} equally with ${numberS} friends. How `+
    //             `many ${candy} will each friend get?`
    // var prob2 = `${girl} has ${numberL} ${candy}. She wants to give each friend ${numberS} ${candy}. How many friends will `+
    //             `she be able to give ${candy} to?`

    // var prob1 = `A ${food} company can fit ${numberS} packages of ${food} in ${e} box. How many boxes are needed to fill an `+
    //             `order for ${numberL} packages of ${food}?`
    // var prob2 = `A ${food} company needs to put ${numberL} packages of ${food} into boxes to fill an order. They can fit ${numberS} `+
    //             `packages of ${food} in ${e} box. How many boxes will they need to fill the order?`

    // var dogNameList = ['Zoey','Bowser','Spot','Snickerdoodle','Sir Fluffyboy', 'Chuggington', 'Bella', 'Max','Daisy','Bitsy','Archie','Barkley','Baxter','Chewy','Izzy','Murphy','Pippin','Waffles','Wiggleton','Ziggy']
    // var prob1 = `${girl} walks her dog ${dogName} ${numberS} minutes each day they go for a walk. If they walk for a total of `+
    //             `${numberL} minutes last month, how many days did she take ${dogName} for a walk?`
    // var prob2 = `${boy} walks his dog ${dogName} for a total of ${numberL} minutes last month. Each time he takes ${dogName} `+
    //             `on a walk for ${numberS} minutes. How many days did he take ${dogName} for a walk last month? `
    // var prob3 = `${girl} took her dog ${dogName} on a walk ${numberS} times last month. They walked for a total of ${numberL} `+
    //             `minutes. If each walk lasted the same amount of time, how long was each walk? `
    
    // var prob1 = `${dogName} the dog eats ${numberS} ounces of dog food each week. ${dogName}'s pet parent has stocked up with `+
    //             `${numberL} ounces of dog food. How many weeks will the food last?`
    // var prob2 = `${boy} bought a large bag of dog food so now he has ${numberL} ounces. He gives his dog ${dogName} ${numberS} `+
    //             `ounces of food each week. How many weeks will the food last until he runs out?`


    export const randDivWhole = (userSelection) => {
        var probArray = []

        if (userSelection['Algorithm']){
            probArray.push(divAlg)
        } if (userSelection['Application']) {
            probArray.push(divWhole)
            if (userSelection['3 by 1 digit'] || userSelection['4 by 1 digit']) {
                probArray.push(div1dig, div1dig2)
            } else  { //4 by 2
                probArray.push(div2dig)
            } 
        }
        var randProb = shuffleArray(probArray)[0]
        return randProb(userSelection)
    }