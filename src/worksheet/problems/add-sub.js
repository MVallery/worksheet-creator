// import * as gen from './general.js'
import {randWhole, shuffleArray, wrongOptions, answerChoicesKey,
        boyList, girlList, nameList, cityList, disasterList, sportList, candyList, forestAnimal, lakeAnimal, desertAnimal} from './general.js'
import {verticalAlign} from './vertical-align'

export const asNumbers = (userSelection) => {
    var numArray = []
    if (userSelection['1 digit numbers']){
        numArray.push([randWhole(2,9), randWhole(2,9), randWhole(2,9)]);

    } if (userSelection['2 digit numbers']){
        numArray.push([randWhole(2, 99), randWhole(10, 99), randWhole(10,99)]);

    } if (userSelection['3 digit numbers']) {
        numArray.push([randWhole(10, 999), randWhole(100, 999), randWhole(100, 999)]);

    } if (userSelection['4 digit numbers']){
        numArray.push([randWhole(100, 9999), randWhole(1000, 9999), randWhole(1000, 9999)]);

    } if (userSelection['5 digit numbers']){
        numArray.push([randWhole(100, 99999), randWhole(10000, 99999), randWhole(10000, 99999)]);

    } if (userSelection['6 digit numbers']){
        numArray.push([randWhole(1000, 999999), randWhole(100000, 999999),randWhole(100000, 999999)]);

    } if (userSelection['7 digit numbers']) {
        numArray.push([randWhole(10000, 9999999), randWhole(1000000, 9999999),randWhole(1000000, 9999999)]);
    }
    var numList = shuffleArray(numArray)[0].sort((a,b) => a-b)

return {numberS:numList[0], numberM: numList[1], numberL: numList[2]}
}  
var addWord = ['altogether', 'in total', 'combined']

export const addAlg = (userSelection) => {
    var {numberS, numberL} = asNumbers(userSelection)
    var answer = numberL+numberS
    var wrong= wrongOptions(answer, 'add', numberL, numberS) 
    wrong.push()
    wrong = shuffleArray(wrong)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    if (userSelection.probStyle==='Vertical') {
        var prob = verticalAlign(numberL.toLocaleString(), '+', numberS.toLocaleString()) 
    } else {
        prob =`${numberL.toLocaleString()} + ${numberS.toLocaleString()} = `
    }
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const subAlg = (userSelection) => {
    var {numberS, numberL} = asNumbers(userSelection)
    var answer = numberL-numberS
    var wrong= wrongOptions(answer, 'sub', numberS, numberL,)
        wrong.push()
    wrong = shuffleArray(wrong)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    if (userSelection.probStyle==='Vertical') {
        var prob = verticalAlign(numberL.toLocaleString(), '-  ', numberS.toLocaleString()) 
    } else {
        prob =`${numberL.toLocaleString()} - ${numberS.toLocaleString()} = `
    }
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }

    return problem
}

export const subWhole = (userSelection) => { //sport
    var name = shuffleArray(nameList)
    var sport = sportList[randWhole(0, sportList.length-1)]
    var {numberS, numberL} = asNumbers(userSelection)

    if (numberL < 100) {
        var time = 'yesterday'
    } else if (numberL <1000) {
        time = 'last week'
    } else if (numberL < 10000) {
        time = 'last year'
    } else if (numberL > 9999) {
        time = 'total'
    }
    var answer= (numberL - numberS);
    var wrong = shuffleArray(wrongOptions(answer, 'sub', numberL, numberS))
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${name[0]} played ${sport} for ${numberS.toLocaleString()} minutes ${time}. ${name[1]} ` +
    `played ${sport} for ${numberL.toLocaleString()} minutes ${time}. How many more minutes did `+
    `${name[1]} play than ${name[0]}?`)
    var prob2 = (`${name[0]} played ${sport} for ${numberS.toLocaleString()} minutes ${time}. ${name[1]} `+
    `played ${sport} for ${numberL.toLocaleString()} minutes ${time}. What is the difference between ` +
    `the number of minutes ${name[1]} played and the number of minutes ${name[0]} played?`)
    var prob3 = (`${name[0]} loves ${sport} and watched ${numberS.toLocaleString()} minutes ${time}. ${name[1]} `+
    `also likes ${sport} and has watched ${numberL.toLocaleString()} minutes ${time}. What is the difference between ` +
    `the number of minutes ${name[1]} and ${name[0]} watched ${sport}?`)
    var randProb = [prob1, prob2, prob3][randWhole(0,2)]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

}
export const addWhole = (userSelection) => { //sports 
    var name = shuffleArray(nameList)
    var sport = sportList[randWhole(0, sportList.length-1)]
    var addWord = shuffleArray(['total','altogether'])[0]
    var {numberS, numberL} = asNumbers(userSelection)

    if (numberL < 100) {
        var time = 'yesterday'
    } else if (numberL <1000) {
        time = 'last week'
    } else if (numberL < 10000) {
        time = 'last year'
    } else if (numberL > 9999) {
        time = 'total'
    }

    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var prob1 = (`${name[0]} loves playing ${sport} with ${name[1]}. He played ${(numberL).toLocaleString()} `+
        `minutes ${time}. ${name[1]} played ${sport} for ${(numberS).toLocaleString()} minutes `+
        `more than ${name[0]} ${time}. How many minutes did ${name[1]} play ${time}?`)
    var prob2 = (`${name[0]} played ${sport} for ${(numberS).toLocaleString()} minutes ${time}. `+
        `${name[1]} played ${sport} for ${(numberL).toLocaleString()} minutes ${time}. How many minutes did ` +
        `${name[0]} and ${name[1]} play ${addWord}?`)

        // (`${name[0]} loves playing ${sport} with his brother. He played ${(numberL).toLocaleString()} `+
        // `minutes ${time}. His brother ${name[1]} played ${sport} for ${(numberS).toLocaleString()} minutes `+
        // `more than ${name[0]} ${time}. How many minutes did ${name[0]} and ${name[1]} play altogether?`) // good for multi-step 
        var randProb = shuffleArray([prob1, prob2])[0]
        var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer,
        }

    return problem        
}
export const subWhole2 = (userSelection) => { //candy
    var name = nameList[randWhole(0, nameList.length-1)]
    var disaster = disasterList[randWhole(0, disasterList.length-1)]
    var girl = shuffleArray(girlList)
    var boy = shuffleArray(boyList)

    var candy = shuffleArray(candyList)
    var {numberS, numberM, numberL} = asNumbers(userSelection)

    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`In a jar there are three different types of candies. There are ${numberS.toLocaleString()} ${candy[0]} `+
        `, ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. What is the difference between `+ 
        `the number of ${candy[0]} and the number of ${candy[2]} in the jar?`)
    probArray.push(`${name} has a basket of candies. There are ${numberS} ${candy[0]}, `+
        `${numberS.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. How many more `+
        `${candy[2]} are in the basket than ${candy[0]} ?`)
    probArray.push(`${girl[0]} loves ${candy[0]} so much that she ate ${numberS.toLocaleString()} in the past month. `+
        `This brought her total number of ${candy[0]} eaten in her life to ${numberL.toLocaleString()}. How much was `+
        `her total ${candy[0]} eaten before this past month?`)
    probArray.push(`${boy[0]} is obsessed with ${candy[0]} so he decides to stock up in case of a ${disaster} coming soon.`+
        `He buys ${numberL.toLocaleString()} ${candy[0]} but then on the way home he got really hungry so he ate `+
        `${numberS.toLocaleString()} of the ${candy[0]}. How many ${candy[0]} does he have now?`)
    probArray.push(`${boy[0]} is obsessed with ${candy[0]} so he decides to stock up by purchasing ${numberL.toLocaleString()} in case of `+
        `a ${disaster} coming soon. He decided that he had way too many and ended up giving ${numberS.toLocaleString()} of the ${candy[0]} `+
        `to his friend ${boy[1]}. How many ${candy[0]} does he have left?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    return problem
            


}
export const addWhole2 = (userSelection) => { //candy
    var name = shuffleArray(nameList)
    var girl = shuffleArray(girlList)
    var boy = shuffleArray(boyList)
    var disaster = disasterList[randWhole(0, disasterList.length-1)]

    var candy = shuffleArray(candyList)
    var {numberS, numberM, numberL} = asNumbers(userSelection)


    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`There are three different types of candies in a jar. There are ${numberS.toLocaleString()} ${candy[0]}`+
    `, ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. How many total ${candy[0]} and ${candy[2]} are in the jar?`)
    probArray.push(`${name[0]} has a jar with three different types of candies inside. There are ${numberS.toLocaleString()} `+
    `${candy[0]},  ${numberM.toLocaleString()} ${candy[1]}, and ${numberL.toLocaleString()} ${candy[2]}. `+
    ` How many ${candy[2]} and ${candy[1]} are in the jar altogether?`)
    probArray.push(`${girl[0]} loves ${candy[0]} so much that she has already eaten ${numberL.toLocaleString()} in her life. `+
    `If she eats ${numberS.toLocaleString()} more by the end of the year, how many total ${candy[0]} will she have eaten?`)
    probArray.push(`${boy[0]} is obsessed with ${candy[0]} so he already has ${numberS.toLocaleString()} in his pantry at home. `+
    `He begins to worry about a ${disaster} coming soon, so he decides `+
    `to stock up by purchasing ${numberL.toLocaleString()} ${candy[0]} just in case. How many ${candy[0]} does he have now?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem        
}

export const subWhole3 = (userSelection) => { //animals
    var randForestAnimal = shuffleArray(forestAnimal)
    var randDesertAnimal = shuffleArray(desertAnimal)
    var randLakeAnimal = shuffleArray(lakeAnimal)
    var randAnimal = shuffleArray([randDesertAnimal, randForestAnimal, randLakeAnimal])
    var {numberS, numberL} = asNumbers(userSelection)


    var place
    if (randAnimal[0] === randDesertAnimal) {
        place = 'desert'
    }else if (randAnimal[0] === randForestAnimal) {
        place = 'forest'
    }else if (randAnimal[0] === randLakeAnimal) {
        place = 'lake'
    }
 
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`There are ${numberL.toLocaleString()} ${randAnimal[0][0]}s and ${randAnimal[0][1]}s in the `+
        `${place}. If there are ${numberS.toLocaleString()} ${randAnimal[0][0]}s in the ${place}, `+
        `how many ${randAnimal[0][1]}s are in the ${place}?`)
    probArray.push(`In the ${place} there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s and `+
        `${numberL.toLocaleString()} ${randAnimal[0][0]}s. What is the difference beween the number of `+
        `${randAnimal[0][0]}s and ${randAnimal[0][1]}s in the ${place}?`)
    probArray.push(`Researchers are surveying the ${place}. They found a total of ${numberL.toLocaleString()} `+ 
        `${randAnimal[0][1]}s, and a total of ${numberS.toLocaleString()} ${randAnimal[0][0]}s. How many more `+
        `${randAnimal[0][1]}s are there in the ${place} than ${randAnimal[0][0]}s?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem

            
}
export const addWhole3 = (userSelection) => { //animals
    var randForestAnimal = shuffleArray(forestAnimal)
    var randDesertAnimal = shuffleArray(desertAnimal)
    var randLakeAnimal = shuffleArray(lakeAnimal)
    var randAnimal = shuffleArray([randDesertAnimal, randForestAnimal, randLakeAnimal])
    var {numberS, numberL} = asNumbers(userSelection)

    var place
    if (randAnimal[0] === randDesertAnimal) {
        place = 'desert'
    }else if (randAnimal[0] === randForestAnimal) {
        place = 'forest'
    }else if (randAnimal[0] === randLakeAnimal) {
        place = 'lake'
    }
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    probArray.push(`There are ${numberL.toLocaleString()} ${randAnimal[0][0]}s in the ${place}. If there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s `+
        `in the ${place} , how many total ${randAnimal[0][0]}s and ${randAnimal[0][1]} are in the ${place}?`)
    probArray.push(`In the ${place} there are ${numberS.toLocaleString()} ${randAnimal[0][1]}s and ${numberL.toLocaleString()} ${randAnimal[0][0]}s. `+ 
        `How m any ${randAnimal[0][0]}s and ${randAnimal[0][1]}s are in the ${place} ${addWord}?`)
    probArray.push(`Researchers are surveying the ${place}. They found a total of ${numberL.toLocaleString()} `+
        `${randAnimal[0][1]}s, and a total of ${numberS.toLocaleString()} ${randAnimal[0][0]}s. How many animals did the researchers `+
        `find at the ${place} ${addWord}?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    return problem

            
}


export const addWhole4 = (userSelection) => { //youtube
    var boy = shuffleArray(boyList)
    var girl = shuffleArray(girlList)
    var {numberS, numberL} = asNumbers(userSelection)


    var videoAdj = ['hilarious', 'funny', 'silly', 'popular', 'viral'][randWhole(0,4)]
    var videoTopic = ['dog', 'fashion', 'cat', 'music', 'tutorial', 'cooking' ][randWhole(0,6)]
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []

    probArray.push(`${boy[0]} had ${numberL.toLocaleString()} subscribers on his youtube channel as of last month. This month so far he has gained `+
                `${numberS.toLocaleString()} subscribers after making a ${videoAdj} video. How many subscribers does his channel have?`)
    probArray.push(`${girl[0]} had ${numberL.toLocaleString()} subscribers on her youtube channel as of last month. This month her subscriber count has increased by `+
                `${numberS.toLocaleString()} after she made a very popular ${videoTopic} video. How many subscribers does her channel have now?`)
    probArray.push(`${boy[0]} got ${numberL.toLocaleString()} views on his latest ${videoTopic} video. His previous video got ${numberS.toLocaleString()} views. How `+
                `many combined views did the two videos get?`)
    probArray.push(`${girl[0]} currently has ${numberS.toLocaleString()} subscribers on her channel. Her goal is to reach ${numberL.toLocaleString()} subscribers by `+
                `the end of the year. How many more subscribers will she need to get in order to reach her goal?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // return <div><p>{problem} </p></div>
    return problem        
}

export const subWhole4 = (userSelection) => { //youtube
    var boy = shuffleArray(boyList)
    var girl = shuffleArray(girlList)
    var {numberS, numberL} = asNumbers(userSelection)

    var reason = [`hasn't been making new videos`, `hasn't been actively making videos`, 
                `has been inactive recently`, `made a video that the subscribers did not like`][randWhole(0,3)]
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []

    probArray.push(`${boy[0]} had ${numberL.toLocaleString()} subscribers on his youtube channel as of last month. This month so far he has lost `+
                `${numberS.toLocaleString()} subscribers because he ${reason}. How many subscribers does his channel have now?`)
    probArray.push(`${girl[0]} had ${numberL.toLocaleString()} subscribers on her youtube channel as of last month. This month she has lost `+
                `${numberS.toLocaleString()} subscribers because she ${reason}. How many subscribers does her channel have?`)
    probArray.push(`${boy[0]} got ${numberL.toLocaleString()} views on his latest video. His previous video got ${numberS.toLocaleString()} views. How `+
                `many more views did his latest video get than his previous video?`)
    probArray.push(`${girl[0]} got ${numberS.toLocaleString()} views on her latest video. Her other video went viral last week and got ${numberL.toLocaleString()} views. How `+
                `many more views did her viral video get than her latest video?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem        
}
export const addWhole7dig = (userSelection) => { //population
    var city = shuffleArray(cityList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), city[1].pop, city[0].pop];
    if (userSelection === "2") {
        [numberS, numberM, numberL] = [randWhole(100000, 300000), randWhole(300000, 500000), city[0].pop];
    
        }
    var year = randWhole(2015,2019)
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []

    probArray.push(`${city[0].city} had a population of ${numberL.toLocaleString()} as of the end of the year ${year}. Since `+
                `then the city has increased in population by ${numberS.toLocaleString()}. What is the current population of ${city[0].city}?`)
    probArray.push(`The population of ${city[0].city} has increased by ${numberS.toLocaleString()} since the end of the year ${year}. `+
                `the population before then was ${numberL.toLocaleString()}. What is the new population of ${city[0].city}?`)
    probArray.push(`Since the beginning of the year ${year} the population of ${city[0].city} has increased by ${numberS.toLocaleString()}. `+
                `If the population started off ${year} at ${numberL.toLocaleString()}, how much is the current population?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem        
}

export const subWhole7dig = (userSelection) => { //population
    var city = shuffleArray(cityList)
    var [numberS, numberM, numberL] = [randWhole(10000, 30000), city[1].pop, city[0].pop];
    if (userSelection === "2") {
        [numberS, numberM, numberL] = [randWhole(100000, 300000), randWhole(300000, 500000), city[0].pop];
    
        }
    var year = randWhole(2015,2019)
    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []

    probArray.push(`${city[0].city} had a population of ${numberL.toLocaleString()} as of the end of the year ${year}. Since `+
                `then the city has decreased in population by ${numberS.toLocaleString()}. What is the current population of ${city[0].city}?`)
    probArray.push(`The population of ${city[0].city} has decreased by ${numberS.toLocaleString()} since the end of the year ${year}. `+
                `the population before then was ${numberL.toLocaleString()}. What is the new population of ${city[0].city}`)
    probArray.push(`Since the beginning of the year ${year} the population of ${city[0].city} has decreased by ${numberS.toLocaleString()}. `+
                `If the population started off ${year} at ${numberL.toLocaleString()}, how much is the current population?`)
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // return <div><p>{problem} </p></div>
    return problem        
}

var badguyList = ['orcs','ogres', 'trolls','goblins', 'undead']
var goodguyList = ['elves','hobbits','humans']

export const subWhole5 = (userSelection) => { //elves and goblins
    var badguys = shuffleArray(badguyList)[0]
    var goodguys = shuffleArray(goodguyList)[0]
    var {numberS, numberL} = asNumbers(userSelection)
    var answer = (numberL+numberS)
    var wrong= wrongOptions(answer, 'add', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    if (numberL > 99) {
        probArray.push(`An army of ${numberS} ${goodguys} had to defeat an army of ${numberL} ${badguys} `+
        `that were trying to invade their city. How many more ${badguys} were there than ${goodguys}?`)
       probArray.push(`An army of ${numberL} ${badguys} were trying to invade a city of ${numberS} ${goodguys} ` +
               `How many more ${badguys} were there than ${goodguys}?`)
       probArray.push(`An army of ${numberL} ${badguys} were trying to invade a city of ${numberS} ${goodguys}. ` +
               `How many more ${badguys} were there than ${goodguys}?`
       )
    } else {
        probArray.push(`A group of ${numberL} ${badguys} stumbled upon on a group of ${numberS} ${goodguys} ` +
        `at their campsite. How many more ${badguys} were there than ${goodguys}?`)
        probArray.push(`While walking through the forest a group of ${numberS} ${goodguys} found a group of ` +
        `${numberL} ${badguys}. How many more ${badguys} were there than ${goodguys}?`)
    }
    // multi-step = two armies combined against orcs
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}
    return problem        
}
export const addWhole5 = (userSelection) => { //elves and goblins 
    var badguys = shuffleArray(badguyList)[0]
    var goodguys = shuffleArray(goodguyList)
    var {numberS, numberL} = asNumbers(userSelection)

    var answer = (numberL-numberS)
    var wrong= wrongOptions(answer, 'sub', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    var probArray = []
    if (numberL > 99) {
        probArray.push(`An army of ${numberL} ${goodguys[0]} and ${numberS} ${goodguys[1]} had to defeat an army of ${badguys} `+
        `that were trying to invade their city. How many ${goodguys[0]} and ${goodguys[1]} were there ${addWord}?`)
       probArray.push(`An army of ${badguys} were trying to invade a city of ${numberS} ${goodguys[0]} ` +
               `and ${numberL} ${goodguys[1]}. How many ${goodguys[0]} and ${goodguys[1]} were there ${addWord} in the forest?`)
    } else {
        probArray.push(`A group of ${badguys} stumbled upon on a group of ${numberL} ${goodguys[0]} ` +
        `and ${numberS} ${goodguys[1]} at their campsite. How many ${goodguys[0]} and ${goodguys[1]} were there ${addWord}?`)
        probArray.push(`While walking through the forest a group of ${numberS} ${goodguys[0]} found a group of ` +
        `${numberL} ${goodguys[1]}. How many ${goodguys[0]} and ${goodguys[1]} were there ${addWord} in the forest?`)
    }
    var randProb = shuffleArray(probArray)[0]
    var problem = {text: randProb,
        answerChoices: AC,
        correctAnswer: answer}

    // return <div><p>{problem} </p></div>
    return problem        
}
//Problem ideas: space distance? elves army of goblins, factory producing products, movies making money, tourists that visit a city/country, city = smaller numbers, country = larger. 
// pts in a video




export const addDec = (userSelection) => { //sport
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
    var randProb 
    var problem = { text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }

    return problem
    
}

export const subDec = (userSelection) => { //sport
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

    var randProb = shuffleArray([sub1, sub2])[0]
    var problem = {text: randProb,
                answerChoices: AC,
                correctAnswer: answer}
    return problem
}
export const randAddWhole = (userSelection) => {
    var probArray = []
    if (userSelection['Algorithm']) {
        probArray.push(addAlg,addAlg,addAlg, addAlg, addAlg, addAlg)
    } if (userSelection['Application']) {
        if (userSelection['7 digit number']){
            probArray.push(addWhole7dig)
        }
        probArray.push(addWhole, addWhole2, addWhole3, addWhole4,addWhole5)
    }
    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}
export const randSubWhole = (userSelection) => {
    var probArray = []
    if (userSelection['Algorithm']) {
        probArray.push(subAlg, subAlg, subAlg, subAlg, subAlg, subAlg, subAlg)
    } if (userSelection['Application']) {
        if (userSelection['7 digit numbers']){
            probArray.push(subWhole7dig)
        }
        probArray.push(subWhole, subWhole2, subWhole3, subWhole4, subWhole5 )
    }
    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}