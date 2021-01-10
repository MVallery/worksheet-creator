// import * as gen from './general.js'
import {randWhole, shuffleArray, wrongOptions, answerChoicesKey,
        boyList, girlList, nameList, cityList, disasterList, sportList, candyList, forestAnimal, lakeAnimal, desertAnimal} from './general.js'


export const subWhole = (Options) => { //sport
    var name = shuffleArray(nameList)
    var sport = sportList[randWhole(0, sportList.length-1)]
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
    var prob1 = (`${name[0]} played ${sport} for ${numberS.toLocaleString()} minutes last year. ${name[1]} ` +
    `played ${sport} for ${numberL.toLocaleString()} minutes last year. How many more minutes did `+
    `${name[1]} play than ${name[0]}?`)
    var prob2 = (`${name[0]} played ${sport} for ${numberS.toLocaleString()} minutes last year. ${name[1]} `+
    `played ${sport} for ${numberL.toLocaleString()} minutes last year. What is the difference between ` +
    `the number of minutes ${name[1]} played and the number of minutes ${name[0]} played?`)
    var randProb = [prob1, prob2][randWhole(0,1)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

}
export const addWhole = (Options) => { //sports
    var name = shuffleArray(nameList)
    var sport = sportList[randWhole(0, sportList.length-1)]
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
    
    var problem = {text:    (`${name[0]} played ${sport} for ${(numberS).toLocaleString()} minutes last year. ${name[1]} `+
                 `played ${sport} for ${(numberL).toLocaleString()} minutes last year. How many minutes did ` +
                 `${name[0]} and ${name[1]} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }
    

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}
export const subWhole2 = (Options) => { //candy
    var name = nameList[randWhole(0, nameList.length-1)]
    var disaster = disasterList[randWhole(0, disasterList.length-1)]
    var girl = shuffleArray(girlList)
    var boy = shuffleArray(boyList)

    var candy = shuffleArray(candyList)
    var [numberS, numberM, numberL] = [randWhole(100, 500), randWhole(500, 699), randWhole(700, 999)];

    if (Options === "2") {
    [numberS, numberM, numberL] = [randWhole(1000, 4000), randWhole(4000, 7000), randWhole(7001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberM, numberL] = [randWhole(1000, 4000), randWhole(4000, 7000), randWhole(7001, 9999)];
    } 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    
    var prob1 = (`In a jar there are three different types of candies. There are ${numberS.toLocaleString()} ${candy[0]} `+
        `, ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. What is the difference between `+ 
        `the number of ${candy[0]} and the number of ${candy[2]} in the jar?`)
    var prob2 = (`${name} has a basket of candies. There are ${numberS} ${candy[0]}, `+
        `${numberS.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. How many more `+
        `${candy[2]} are in the basket than ${candy[0]} ?`)
    var prob3 = (`${girl[0]} loves ${candy[0]} so much that she ate ${numberS.toLocaleString()} in the past month. `+
        `This brought her total number of ${candy[0]} eaten in her life to ${numberL.toLocaleString()}. How much was `+
        `her total ${candy[0]} eaten before this past month?`)
    var prob4 = (`${boy[0]} is obsessed with ${candy[0]} so he decides to stock up in case of a ${disaster} coming soon.`+
        `He buys ${numberL.toLocaleString()} ${candy[0]} but then on the way home he got really hungry so he ate `+
        `${numberS.toLocaleString()} of the ${candy[0]}. How many ${candy[0]} does he have now?`)
    var prob5 = (`${boy[0]} is obsessed with ${candy[0]} so he decides to stock up by purchasing ${numberL.toLocaleString()} in case of `+
        `a ${disaster} coming soon.He decided that he had way too many and ended up giving ${numberS.toLocaleString()} of the ${candy[0]} `+
        `to his friend ${boy[1]}. How many ${candy[0]} does he have left?`)
    var randProb = [prob1, prob2, prob3, prob4, prob5][randWhole(0, 4)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
        console.log(problem)
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
            


}
export const addWhole2 = (Options) => { //candy
    var name = shuffleArray(nameList)
    var girl = shuffleArray(girlList)
    var boy = shuffleArray(boyList)
    var disaster = disasterList[randWhole(0, disasterList.length-1)]

    var candy = shuffleArray(candyList)
    var [numberS, numberM, numberL] = [randWhole(100, 300), randWhole(300, 500), randWhole(500, 999)];

    if (Options === "2") {
    [numberS, numberM, numberL] = [randWhole(1000, 3000), randWhole(3000, 5000), randWhole(5001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberM, numberL] = [randWhole(1000, 3000), randWhole(3000, 5000), randWhole(5001, 9999)];
    } 
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`There are three different types of candies in a jar. There are ${numberS.toLocaleString()} ${candy[0]}`+
    `, ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. How many total ${candy[0]} and ${candy[2]} are in the jar?`)
    var prob2 = (`${name[0]} has a jar with three different types of candies inside. There are ${numberS.toLocaleString()} `+
    `${candy[0]},  ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. `+
    ` How many ${candy[2]} and ${candy[1]} are in the jar altogether?`)
    var prob3 = (`${girl[0]} loves ${candy[0]} so much that she has already eaten ${numberL.toLocaleString()} in her life. `+
    `If she eats ${numberS.toLocaleString()} more by the end of the year, how many total ${candy[0]} will she have eaten?`)
    var prob4 = (`${boy[0]} is obsessed with ${candy[0]} so he already has ${numberS.toLocaleString()} in his pantry at home. `+
    `He begins to worry about a ${disaster} coming soon, so he decides`+
    `to stock up by purchasing ${numberL.toLocaleString()} ${candy[0]} just in case. How many ${candy[0]} does he have now?`)
    var randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole3 = (Options) => { //animals
    var randForestAnimal = shuffleArray(forestAnimal)
    var randDesertAnimal = shuffleArray(desertAnimal)
    var randLakeAnimal = shuffleArray(lakeAnimal)
    var randAnimal = shuffleArray([randDesertAnimal, randForestAnimal, randLakeAnimal])
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];
    var place
    if (randAnimal[0] === randDesertAnimal) {
        place = 'desert'
    }else if (randAnimal[0] === randForestAnimal) {
        place = 'forest'
    }else if (randAnimal[0] === randLakeAnimal) {
        place = 'lake'
    }
    if (Options === "2") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    } else if (Options ==="3") {
    [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`There are ${numberL.toLocaleString()} ${randAnimal[0][0]}s and ${randAnimal[0][1]}s in the `+
        `${place}. If there are ${numberS.toLocaleString()} ${randAnimal[0][0]}s in the ${place}, `+
        `how many ${randAnimal[0][1]}s are in the ${place}?`)
    var prob2 = (`In the ${place} there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s and `+
        `${numberL.toLocaleString()} ${randAnimal[0][0]}s. What is the difference beween the number of `+
        `${randAnimal[0][0]}s and ${randAnimal[0][1]}s in the ${place}?`)
    var prob3 = (`Researchers are surveying the ${place}. They found a total of ${numberL.toLocaleString()} `+ 
        `${randAnimal[0][1]}s, and a total of ${numberS.toLocaleString()} ${randAnimal[0][0]}s. How many more `+
        `${randAnimal[0][1]}s are there in the ${place} than ${randAnimal[0][0]}s?`)
    var randProb = [prob1, prob2, prob3][Math.floor(Math.random()*2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}


    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}
export const addWhole3 = (Options) => { //animals
    var randForestAnimal = shuffleArray(forestAnimal)
    var randDesertAnimal = shuffleArray(desertAnimal)
    var randLakeAnimal = shuffleArray(lakeAnimal)
    var randAnimal = shuffleArray([randDesertAnimal, randForestAnimal, randLakeAnimal])
    var [numberS, numberL] = [randWhole(100, 500), randWhole(500, 999)];
    var place
    if (randAnimal[0] === randDesertAnimal) {
        place = 'desert'
    }else if (randAnimal[0] === randForestAnimal) {
        place = 'forest'
    }else if (randAnimal[0] === randLakeAnimal) {
        place = 'lake'
    }
    if (Options === "2") {
        [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];

    } else if (Options ==="3") {
        [numberS, numberL] = [randWhole(1000, 4000), randWhole(4001, 9999)];
    } 
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`There are ${numberL.toLocaleString()} ${randAnimal[0][0]}s in the ${place}. If there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s `+
        `in the ${place} , how many total ${randAnimal[0][0]}s and ${randAnimal[0][1]} are in the ${place}?`)
    var prob2 = (`In the ${place} there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s and ${numberL.toLocaleString()} ${randAnimal[0][0]}s. `+ 
        `How many ${randAnimal[0][0]}s and ${randAnimal[0][1]}s are in the ${place} combined?`)
    var prob3 = (`Researchers are surveying the ${place}. They found a total of ${numberL.toLocaleString()} `+
        `${randAnimal[0][1]}s, and a total of ${numberS.toLocaleString()} ${randAnimal[0][0]}s. How many animals did the researchers `+
        `find at the ${place} combined?`)
    var randProb = [prob1, prob2, prob3][randWhole(0,2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

            
}


export const addWhole4 = (Options) => { //youtube
    var boy = shuffleArray(boyList)
    var girl = shuffleArray(girlList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), randWhole(30000, 50000), randWhole(50000, 99900)];

    if (Options === "2") {
    [numberS, numberM, numberL] = [randWhole(100000, 300000), randWhole(300000, 500000), randWhole(500100, 999900)];

    } else if (Options ==="3") {
    [numberS, numberM, numberL] = [randWhole(1000000, 3000000), randWhole(3000000, 5000000), randWhole(5001000, 9999000)];
    } 
    var videoAdj = ['hilarious', 'funny', 'silly', 'popular', 'viral'][randWhole(0,4)]
    var videoTopic = ['dog', 'fashion', 'cat', 'music', 'tutorial', 'cooking' ][randWhole(0,6)]
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${boy[0]} had ${numberL.toLocaleString()} subscribers on his youtube channel as of last month. This month so far he has gained `+
                `${numberS.toLocaleString()} subscribers after making a ${videoAdj} video. How many subscribers does his channel have?`)
    var prob2 = (`${girl[0]} had ${numberL.toLocaleString()} subscribers on her youtube channel as of last month. This month her subscriber count has increased by `+
                `${numberS.toLocaleString()} after she made a very popular ${videoTopic} video. How many subscribers does her channel have now?`)
    var prob3 = (`${boy[0]} got ${numberL.toLocaleString()} views on his latest ${videoTopic} video. His previous video got ${numberS.toLocaleString()} views. How `+
                `many combined views did the two videos get?`)
    var prob4 = (`${girl[0]} currently has ${numberS.toLocaleString()} subscribers on her channel. Her goal is to reach ${numberL.toLocaleString()} subscribers by `+
                `the end of the year. How many more subscribers will she need to get in order to reach her goal?`)
    var randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole4 = (Options) => { //youtube
    var name = nameList[randWhole(0, nameList.length-1)]
    var boy = shuffleArray(boyList)
    var girl = shuffleArray(girlList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), randWhole(30000, 50000), randWhole(50000, 99900)];

    if (Options === "2") {
    [numberS, numberM, numberL] = [randWhole(10000, 300000), randWhole(300000, 500000), randWhole(500100, 999900)];

    } else if (Options ==="3") {
    [numberS, numberM, numberL] = [randWhole(1000000, 3000000), randWhole(3000000, 5000000), randWhole(5001000, 9999000)];
    } 
    var reason = [`hasn't been making new videos`, `hasn't been actively making videos`, 
                `has been inactive recently`, `made a video that the subscribers did not like`][randWhole(0,3)]
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${boy[0]} had ${numberL.toLocaleString()} subscribers on his youtube channel as of last month. This month so far he has lost `+
                `${numberS.toLocaleString()} subscribers because he ${reason}. How many subscribers does his channel have now?`)
    var prob2 = (`${girl[0]} had ${numberL.toLocaleString()} subscribers on her youtube channel as of last month. This month she has lost `+
                `${numberS.toLocaleString()} subscribers because she ${reason}. How many subscribers does her channel have?`)
    var prob3 = (`${boy[0]} got ${numberL.toLocaleString()} views on his latest video. His previous video got ${numberS.toLocaleString()} views. How `+
                `many more views did his latest video get than his previous video?`)
    var prob4 = (`${girl[0]} got ${numberS.toLocaleString()} views on her latest video. Her other video went viral last week and got ${numberL.toLocaleString()} views. How `+
                `many more views did her viral video get than her latest video?`)
    var randProb = [prob1, prob2, prob3, prob4][randWhole(0,3)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}
export const addWhole5 = (Options) => { //population
    // var name = nameList[randWhole(0, nameList.length-1)]
    var city = shuffleArray(cityList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), city[1].pop, city[0].pop];
    if (Options === "2") {
        [numberS, numberM, numberL] = [randWhole(100000, 300000), randWhole(300000, 500000), city[0].pop];
    
        }
    var year = randWhole(2015,2019)
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${city[0].city} had a population of ${numberL.toLocaleString()} as of the end of the year ${year}. Since `+
                `then the city has increased in population by ${numberS.toLocaleString()}. What is the current population of ${city[0].city}?`)
    var prob2 = (`The population of ${city[0].city} has increased by ${numberS.toLocaleString()} since the end of the year ${year}. `+
                `the population before then was ${numberL.toLocaleString()}. What is the new population of ${city[0].city}?`)
    var prob3 = (`Since the beginning of the year ${year} the population of ${city[0].city} has increased by ${numberS.toLocaleString()}. `+
                `If the population started off ${year} at ${numberL.toLocaleString()}, how much is the current population?`)
    var randProb = [prob1, prob2, prob3][randWhole(0,2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole5 = (Options) => { //population
    // var name = nameList[randWhole(0, nameList.length-1)]
    var city = shuffleArray(cityList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), city[1].pop, city[0].pop];
    if (Options === "2") {
        [numberS, numberM, numberL] = [randWhole(100000, 300000), randWhole(300000, 500000), city[0].pop];
    
        }
    var year = randWhole(2015,2019)
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${city[0].city} had a population of ${numberL.toLocaleString()} as of the end of the year ${year}. Since `+
                `then the city has decreased in population by ${numberS.toLocaleString()}. What is the current population of ${city[0].city}?`)
    var prob2 = (`The population of ${city[0].city} has decreased by ${numberS.toLocaleString()} since the end of the year ${year}. `+
                `the population before then was ${numberL.toLocaleString()}. What is the new population of ${city[0].city}`)
    var prob3 = (`Since the beginning of the year ${year} the population of ${city[0].city} has decreased by ${numberS.toLocaleString()}. `+
                `If the population started off ${year} at ${numberL.toLocaleString()}, how much is the current population?`)
    var randProb = [prob1, prob2, prob3][randWhole(0,2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole6 = (Options) => { //space distances, elves army of goblins invades, 
    // var name = nameList[randWhole(0, nameList.length-1)]
    var city = shuffleArray(cityList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), city[1].pop, city[0].pop];
    if (Options === "2") {
        [numberS, numberM, numberL] = [randWhole(100000, 300000), city[1].pop, city[0].pop];
    
        }
    var year = randWhole(2015,2019)
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (``)
    var prob2 = (``)
    var prob3 = (``)
    var randProb = [prob1, prob2, prob3][randWhole(0,2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem        
}

//Problem ideas: space distance? elves army of goblins, factory producing products, movies making money, tourists that visit a city/country, city = smaller numbers, country = larger. 






export const addDec = (Options) => { //sport
    var name = nameList[randWhole(0, nameList.length-1)]
    var sport = sportList[randWhole(0, sportList.length-1)]
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];
    // var f = 'format'
    var answer= (numberL + numberS);
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'add', numberL, numberS))
    // var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    // var AC = gen.shuffleArray(tempAC)
    var problem = { text: (`${name[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${name[1]} `+
                `played ${sport} for${(numberL).toString()} minutes last year. How many minutes did `+
                `${name[0]} and ${name[1]} play altogether?`),
                answerChoices: AC,
                correctAnswer:answer,
                }

    // console.log(problem)
    return problem
    
}

export const subDec = (Options) => { //sport
    var name = nameList[randWhole(0, nameList.length-1)]
    var sport = sportList[randWhole(0, sportList.length-1)]
    // var f = 'format'
    var [numberS, numberL] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2)];

    var answer= (numberL - numberS);
    var wrong = shuffleArray(wrongOptions(answer, 'sub', numberL, numberS))
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var sub1 = (`${name[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${name[1]} `+
    `played ${sport} for ${(numberL).toString()} minutes last month. How many more minutes did `+
     `${name[1]} play than ${name[0]}?`)
    var sub2 = (`${name[0]} played ${sport} for ${(numberS).toString()} minutes last year. ${name[1]} `+
     `played ${sport} for ${(numberL).toString()} minutes last month. What is the difference between `+
    `the number of minutes ${name[1]} played and the number of minutes ${name[0]} played?`)

    var randSub = [sub1, sub2][Math.floor(Math.random())]
    var problem = {text: randSub,
                answerChoices: AC,
                correctAnswer: answer}
    return problem
}
export const randAddWhole = (options) => {
    var probArray = [addWhole, addWhole2, addWhole3, addWhole4, addWhole5]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}
export const randSubWhole = (options) => {
    var probArray = [subWhole, subWhole2, subWhole3, subWhole4, subWhole5, subWhole6]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}