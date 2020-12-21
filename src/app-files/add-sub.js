// import * as gen from './general.js'
import {randWhole, shuffleArray, wrongOptions, answerChoicesKey,
        boyList, girlList, nameList, sportList, candyList, forestAnimal, lakeAnimal, desertAnimal} from './general.js'

export const addWhole = (Options) => {
    var boy = shuffleArray(boyList)
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
    
    var problem = {questionText:    (`${boy[0]} played ${sport} for ${(numberS).toLocaleString()} minutes last year. ${boy[1]}
                 played ${sport} for ${(numberL).toLocaleString()} minutes last year. How many minutes did 
                 ${boy[0]} and ${boy[1]} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }
    

    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}
export const subWhole2 = (Options) => {
    var name = nameList[randWhole(0, nameList.length)]
    var randCandy = shuffleArray(candyList)
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];

    if (Options === "2") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    
    var prob1 = (`In a jar there are three different types of candies. There are ${numberS} ${randCandy[0]} 
        , ${numberS} ${randCandy[1]}, and ${numberL} ${randCandy[2]}. What is the difference between 
        the number of ${randCandy[0]} and the number of ${randCandy[2]} in the jar?`)
    var prob2 = (`${name} has a basket of candies. There are ${numberS}) ${randCandy[0]}, 
        ${numberS} ${randCandy[1]}, and ${numberL} ${randCandy[2]}. How many more 
        ${randCandy[2]} are in the basket than ${randCandy[0]} ?`)
    var randProb = [prob1, prob2][Math.floor(Math.random())]
    var problem = {questionText: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}
export const addWhole2 = (Options) => {
    var name = nameList[randWhole(0, nameList.length)]
    var randCandy = shuffleArray(candyList)
    var [numberS, numberM, numberL] = [randWhole(100, 300), randWhole(300, 500), randWhole(500, 999)];

    if (Options === "2") {
    [numberS, numberM, numberL] = [randWhole(1000, 3000), randWhole(3000, 5000), randWhole(5001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberM, numberL] = [randWhole(1000, 3000), randWhole(3000, 5000), randWhole(5001, 9999)];
    } 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`There are three different types of candies in a jar. There are ${numberM} ${randCandy[0]}
    , ${numberL} ${randCandy[1]}, and ${numberL} ${randCandy[2]}
    . How many total ${randCandy[0]} and ${randCandy[2]} are in the jar?`)
    var prob2 = (`${name} has a jar with three different types of candies inside. There are ${numberS} 
    ${randCandy[0]},  ${numberM} ${randCandy[1]}, and ${numberL} ${randCandy[2]} 
    ". How many ${randCandy[2]} and ${randCandy[1]} are in the jar altogether?`)
    var randProb = [prob1, prob2][Math.floor(Math.random())]
    var problem = {questionText: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole3 = (Options) => {
    var randForestAnimal = shuffleArray(forestAnimal)
    var randDesertAnimal = shuffleArray(desertAnimal)
    var randLakeAnimal = shuffleArray(lakeAnimal)
    var randAnimal = shuffleArray([randDesertAnimal, randForestAnimal, randLakeAnimal])
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];
    var place
    if (randAnimal === randDesertAnimal) {
        place = 'desert'
    }else if (randAnimal === randForestAnimal) {
        place = 'forest'
    }else if (randAnimal === randLakeAnimal) {
        place = 'lake'
    }
    if (Options === "2") {
    var [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    } else if (Options ==="3") {
    var [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`There are ${numberL} ${randAnimal[0]}s and ${randAnimal[1]}s in the 
        place. If there are ${numberS} ${randAnimal[1]}s in the ${place} 
        , how many ${randAnimal[0]}s are in the ${place}?`)
    var prob2 = (`In the ${place} there are ${numberS} ${randAnimal[1]}s and 
        ${numberL} ${randAnimal[0]}s. What is the difference beween the number of 
        ${randAnimal[0]}s and ${randAnimal[1]}s in the ${place}?`)
    var prob3 = (`Researchers are surveying the ${place}. They found a total of ${numberL} 
        ${randAnimal[1]}s, and a total of ${numberS} ${randAnimal[0]}s. How many more
        ${randAnimal[1]}s are there in the ${place} than ${randAnimal[0]}s?`)
    var randProb = [prob1, prob2, prob3][Math.floor(Math.random()*3)]
    var problem = {questionText: randProb,
        answerChoices: AC,
        correctAnswer: answer}

        
    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}






export const addDec = (Options) => {
    var boy = shuffleArray(boyList)
    var sport = sportList[randWhole(0, sportList.length)]
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];
    // var f = 'format'
    var answer= (numberL + numberS);
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'add', numberL, numberS))
    // var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    // var AC = gen.shuffleArray(tempAC)
    var problem = { questionText: (`${boy[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${boy[1]} 
                played ${sport} for${(numberL).toString()} minutes last year. How many minutes did 
                ${boy[0]} and ${boy[1]} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }

    console.log(problem)
    return problem
    
}

export const subDec = (Options) => {
    var boy = shuffleArray(boyList)
    var sport = sportList[randWhole(sportList.length, 0)]
    // var f = 'format'
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];

    var answer= (numberL - numberS);
    var wrong = shuffleArray(wrongOptions(answer, 'sub', numberL, numberS))
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var sub1 = (`${boy[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${boy[1]} 
    played ${sport} for ${(numberL).toString()} minutes last month. How many more minutes did 
     ${boy[1]} play than ${boy[0]}?`)
    var sub2 = (`${boy[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${boy[1]} 
     played ${sport} for ${(numberL).toString()} minutes last month. What is the difference between 
    the number of minutes ${boy[1]} played and the number of minutes ${boy[0]} played?`)
    var randSub = [sub1, sub2][Math.floor(Math.random())]
    var problem = {questionText: randSub,
                answerChoices: AC,
                correctAnswer: answer}
    return problem
}

export const subWhole = (Options) => {
    var boy = shuffleArray(boyList)
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
    var prob1 = (boy[0] + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy[1] +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. How many more minutes did "
    + boy[1] + " play than " + boy[0] + "?")
    var prob2 = (boy[0] + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy[1] +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. What is the difference between " +
    "the number of minutes " + boy[1] + " played and the number of minutes " + boy[0] + " played?")
    var randProb = [prob1, prob2][Math.floor(Math.random())]
    var problem = {questionText: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

}