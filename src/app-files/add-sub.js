// import * as gen from './general.js'
import {randWhole, shuffleArray, wrongOptions, answerChoicesKey,
        boyList, boyList2, sportList} from './general.js'

export const addWhole = (Options) => {
    var boy = boyList[randWhole(0, boyList.length)]
    var boy2 = boyList2[randWhole(0, boyList2.length)]
    var sport = sportList[randWhole(0, sportList.length)]
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];


    } else if (Options.level ==="3") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    
    var problem = {questionText:    (`${boy} played ${sport} for ${(numberS).toLocaleString()} minutes last year. ${boy2} 
                 played ${sport} for ${(numberL).toLocaleString()} minutes last year. How many minutes did 
                 ${boy} and ${boy2} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }
    

    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}
export const addWhole2 = (Options) => {
    var boy = boyList[randWhole(0, boyList.length)]
    var boy2 = boyList2[randWhole(0, boyList2.length)]
    var sport = sportList[randWhole(0, sportList.length)]
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];

    if (Options === "2") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    
    var problem = {questionText:    (boy + " played " + sport + " for " + (numberS).toLocaleString() + " minutes last year. " + boy2 +
                 " played " + sport + " for " + (numberL).toLocaleString() + " minutes last year. How many minutes did "
                + boy + " and " + boy2 + ' play altogether?'),
                answerChoices: AC,
                correctAnswer:answer,
                }
    

    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}
export const addDec = (Options) => {
    var boy = boyList[randWhole(0, boyList.length)]
    var boy2 = boyList2[randWhole(0, boyList2.length)]
    var sport = sportList[randWhole(0, sportList.length)]
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];
    // var f = 'format'
    var answer= (numberL + numberS);
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'add', numberL, numberS))
    // var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    // var AC = gen.shuffleArray(tempAC)
    var problem = { questionText: (`${boy} played ${sport} for ${(numberS).toString()} minutes last year. ${boy2} 
                played ${sport} for${(numberL).toString()} minutes last year. How many minutes did 
                ${boy} and ${boy2} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }

    console.log(problem)
    return problem
    
}

export const subDec = (Options) => {
    var boy = boyList[randWhole(boyList.length, 0)]
    var boy2 = boyList2[randWhole(boyList2.length, 0)]
    var sport = sportList[randWhole(sportList.length, 0)]
    // var f = 'format'
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];

    var answer= (numberL - numberS);
    var wrong = shuffleArray(wrongOptions(answer, 'sub', numberL, numberS))
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var sub1 = (`${boy} played ${sport} for ${(numberS).toString()} minutes last year. ${boy2} 
    played ${sport} for ${(numberL).toString()} minutes last month. How many more minutes did 
     ${boy2} play than ${boy}?`)
    var sub2 = (`${boy} played ${sport} for ${(numberS).toString()} minutes last year. ${boy2} 
     played ${sport} for ${(numberL).toString()} minutes last month. What is the difference between 
    the number of minutes ${boy2} played and the number of minutes ${boy} played?`)
    var randSub = [sub1, sub2][Math.floor(Math.random())]
    var problem = {questionText: randSub,
                answerChoices: AC,
                correctAnswer: answer}
    return problem
}

export const subWhole = (Options) => {
    var boy = boyList[randWhole(boyList.length, 0)]
    var boy2 = boyList2[randWhole(boyList2.length, 0)]
    var sport = sportList[randWhole(sportList.length, 0)]
    // var f = 'format'
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];

    if (Options.level === "2") {
        [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    
    } else if (Options.level === "3") {
        [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    }
    var answer= (numberL - numberS);
    var wrong = shuffleArray(wrongOptions(answer, 'sub', numberL, numberS))
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var sub1 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. How many more minutes did "
    + boy2 + " play than " + boy + "?")
    var sub2 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. What is the difference between " +
    "the number of minutes " + boy2 + " played and the number of minutes " + boy + " played?")
    var randSub = [sub1, sub2][Math.floor(Math.random())]
    var problem = {questionText: randSub,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

}