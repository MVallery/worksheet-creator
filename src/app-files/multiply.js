import { randWhole, cap, massList, groupList, itemList } from "./general";

const multNumbers = (options) =>{
    if (options.specify === '1') { //4 by 1
        var [numberS, numberM, numberL] = [randWhole(2, 9), randWhole(12, 67), randWhole(1000, 9999)];

    }else if (options.specify === "2") { // 2 by 2
    [numberS, numberM, numberL] = [randWhole(12, 49), randWhole(12, 67), randWhole(50, 99)];

    } else if (options.specify ==="3") { // 3 by 2
    [numberS, numberM, numberL] = [randWhole(20, 99), randWhole(20, 90), randWhole(102, 999)];
    } else{
        var randQ = [[randWhole(2,9),randWhole(1000,9999)]
                    [randWhole(20,99), randWhole(102,999)]
                    [randWhole(12,49), randWhole(50,99)]]
        var randArr = shuffleArray(randQ)
        [numberS, numberM, numberL] = [randArr[0][0],randWhole(12,90), randArr[0][1]]
    }
    return [numberS, numberM, numberL]
}

export const multWhole = (options) => { //basic product/sum/difference
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    if (options.level === '1') {
        var prob1 = (`What is the product of ${numberS} and ${numberL}?`)
        var prob2 = (`What is the product of ${numberL} and ${numberS}?`)
        var prob3 = (`A number is ${numberL} times as large as ${numberS}. What is the number?`)
        var prob4 = (`A number is ${numberS} times as large as ${numberL}. What is the number?`)
        randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
        answer = numberS*numberL

    } else if (options.level === '2') {
        prob1 = (`What is the sum of ${numberM} and the product of ${numberL} and ${numberS}?`)
        prob2 = (`What is the sum of ${numberM} and the product of ${numberS} and ${numberL}?`)
        prob3 = (`What is the difference when ${numberM} is subtracted from the product of ${numberS} and ${numberL}?`)
        prob4 = (`What is the difference when ${numberM} is subtracted from the product of ${numberL} and ${numberS}?`)
        randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
        if (randProb === prob1 || prob2){ //maybe better to make problems into objects with answer 
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


export const multWhole2 = (options) => {
    [group, item, mass] = [shuffleArray(groupList), shuffleArray(itemList), shuffleArray(massList)]
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    e = [one, a, each][randWhole(0,2)]

    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    if (options.level === '1') {
        var prob1 = `${cap(e)} ${group[0]} of ${item[0]} has a mass of ${numberS} ${mass[0]}. What is the mass of `+
        `${numberL} ${group[0]}s of ${item[0]} in ${mass[0]}?`
        var prob3 = `There are ${numberL} ${group[0]} of ${item[0]}. If ${e} ${group[0]} of ${item[0]} `+
        `has a mass of ${numberS}, what is the weight of all these ${item[0]}s?`
    } else {
        var prob1 = `${cap(e)} ${group[0]} of ${item[0]} has a mass of ${numberS} ${mass[0]}. ${cap(e)} ${group[0]} of `+
        `${item[1]} has a mass of ${numberM} ${mass[0]}. What is the mass of ${numberL} ${group[0]}s of ${item[0]} in ${mass[0]}?`
    }

    var prob2
    problem = {text:

    }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem   
}

export const multWhole3 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
    var wrong= wrongOptions(answer, 'multiply', numberL, numberS) //wont be great wrong options for the level 3 Quetions   
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer
    }
    problem = (`One ${randItemsExp} costs ${numberS}. How much would it cost to buy ${format(numberL, ",")} ${randItemsExp}`
    `s?`)
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem   
}
export const multWhole4 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole5 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole6 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole7 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole8 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole9 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole10 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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
export const multWhole11 = (options) => {
    numberList = multNumbers(options)
    [numberS, numberM, numberL] = [numberList[0], numberList[1], numberList[2]]
    
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



  

    problem = (`${randGirl} 's ${randPetBig} weighs ${format(numberL, ',')} pounds. {randBoy}'s {randPetBig} weighs {NumberS}`
    ` times as much as {randGirl}'s ${randPetBig}. What does ${randBoy}'s ${randPetBig} weigh in pounds?`) //2 by 2 only

    problem = (`${randBoy} is preparing for a ${randDisaster}. He wants to buy a lot of ${randFood}s so that he does not`
    ` run out. Each package of ${randFood} costs ${numberS}. How much would it cost him to buy `
    `${format(numberL,",")} packages of ${randFood}?`)

    problem = (`${randBoy} buys ${format(numberL, ",")} large bags of ${randCandy} for Halloween. It costs `
    `${numberS}$ for each bag of ${randCandy}. How much would it cost him to buy all the bags?`)

    problem = (`${randSchool} ordered ${format(numberL, ",")} cases of ${randSubject} textbooks. Each case holds ${numberS}`
    ` textbooks. How many textbooks did the school buy?`)

    problem = (`A ${randSize} bag of ${randFood}'s contains ${format(numberL, ',')} calories. How many calories are in ` 
    `${numberS} ${randSize} bags of ${randFood}s?`)