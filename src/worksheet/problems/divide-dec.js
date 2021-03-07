import {randWhole, randDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'
import * as g from'./general'
import {verticalDivide} from './vertical-align'

let randEach = ['for one', 'for each', 'per',]

const divNumbers = (userSelection) =>{
    let numArrayDivisor = []
    let numArrayDividend = []
    if (userSelection['2 digit dividend']) {
        numArrayDividend.push([randDec(1, 9, 1), 2], [randDec(0.1,0.99,2),2])
        if (userSelection['Dividend can be a whole number']){
            numArrayDividend.push([randWhole(11,99),2])
        }
    } if (userSelection['3 digit dividend']) {
        numArrayDividend.push(
            [randDec(10, 99, 1),2], [randDec(1,9,2),2], [randDec(0.1, 0.999, 3),3])
        if (userSelection['Dividend can be a whole number']){
            numArrayDividend.push([randWhole(100,999),2])
        }
    } if (userSelection['4 digit dividend']) {
        numArrayDividend.push(
            [randDec(100, 999, 1),2], [randDec(20,99,2),2], [randDec(2, 9, 3),3], [randDec(0.2, 0.9999, 4),4])
        if (userSelection['Dividend can be a whole number']){
            numArrayDividend.push([randWhole(1000,9999),2])
        }
    } if (userSelection['1 digit whole number divisor']) {
        numArrayDivisor.push(randWhole(2,9))
    } if (userSelection['2 digit whole number divisor']) {
        numArrayDivisor.push(randWhole(11,99))
    } if (userSelection['1 digit decimal divisor']) {
        numArrayDivisor.push(randDec(0.1,0.9, 1), randDec(0.01, 0.09, 2))
    } if (userSelection['2 digit decimal divisor']) {
        numArrayDivisor.push(randDec(1,9,1), randDec(0.1,0.99, 2))
    }
    let dividendShuffle = shuffleArray(numArrayDividend)[0]
    let dividend = Number(dividendShuffle[0])
    let pv = dividendShuffle[1]
    let divisor = Number(shuffleArray(numArrayDivisor)[0])
    return [dividend, divisor, pv]
}
export const divideDecAlg = (userSelection) => {
    let [dividend,divisor, pv] = divNumbers(userSelection)
    let answer = dividend/divisor
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    if (userSelection['Vertical']){
        var prob = verticalDivide(dividend, divisor)
    } else if (userSelection['Horizontal']){
        prob = `${dividend} ÷ ${divisor} = `
    }
    let problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }

    return problem
}
export const divideDecBasic = (userSelection) => {
    let [dividend,divisor, pv] = divNumbers(userSelection)
    let answer = dividend/divisor
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    let probArray = []
    probArray.push(`What is the quotient when ${dividend} is divided by ${divisor}?`)
    probArray.push(`What is the quotient of ${dividend} and ${divisor}?`)


    let randProb = shuffleArray(probArray)[0]

    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }

    return problem
}

// f'What is the quotient when {Quotient*Divisor} is divided by {Divisor}'

export const divideDec = (userSelection) => {
    let itemPkg = shuffleArray(g.itemPkgList)[0]
    let girl = shuffleArray(g.girlList)[0]
    let boy = shuffleArray(g.boyList)[0]
    let store = shuffleArray(g.storeList)[0]
    if (userSelection['3 digit dividend'] && userSelection['2 digit whole number divisor']){
        var [dividend,divisor, pv] = [randDec(6,9,2), randWhole(10,20),2]
    } else if (userSelection['3 digit dividend'] && userSelection['1 digit whole number divisor']){
        [dividend,divisor, pv] = [randDec(6,9,2), randWhole(2,5),2]
    } else if (userSelection['4 digit dividend'] && userSelection['2 digit whole number divisor']){
        [dividend, divisor, pv] = [randDec(10, 99, 2), randWhole(10,20),2]
    } else {
        return randDivDec(userSelection)
    }
    let answer = dividend/divisor
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')

    let probArray = []
    probArray.push(`${girl} is going to ${store} to buy some ${itemPkg}. She is buying ${divisor} `+
        `packages of ${itemPkg}. After the cashier rang up her items, she had to give the cashier a `+
        `total of $ ${dividend}. How much did it cost for each package of ${itemPkg}?`)
    probArray.push(`${girl} wants to buy some ${itemPkg} at ${store}. She is buying ${divisor} `+
        `packages of ${itemPkg}. She ended up owing the cashier a total of $${dividend} for all the ${itemPkg}. `+
        `What is the price for one package of ${itemPkg}?`)
    probArray.push(`${boy} is buying ${divisor} packages of ${itemPkg} at ${store}. The total price of all `+
        `the ${itemPkg} was $${dividend}. What is the price for one package of ${itemPkg}?`)
    probArray.push(`${boy} is going to ${store} to buy ${divisor} packages of ${itemPkg}. He owes the cashier `+
        `a total of $${dividend} for all the ${itemPkg}. How much is the cost of each package of ${itemPkg}?`)

    let randProb = shuffleArray(probArray)[0]
    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

// use regex to find s in plural and remove it.
export const divideDec2 = (userSelection) => { //selling lemonade
    let name = shuffleArray(g.nameList)[0]
    let sport = shuffleArray(g.sportList)[0]
    let itemBuy = shuffleArray(g.itemList400_1500)[0]
    let itemSell = shuffleArray(['cups of lemonade','chocolates', 'pet rocks','cups of orange juice', 'cups of sweet tea', 'cups of fresh watermelon', 
    'homemade brownies', 'cookies', 'cupcakes', 'homemade candles', 'squares of fudge', 'necklaces',
    'earrings',])[0]
    let reason = shuffleArray([`for their ${sport} team`, `to buy a new ${itemBuy}`, `for their fundraiser`])[0]
    if (userSelection['4 digit dividend'] && userSelection['2 digit whole number divisor']) {
        var [dividend,divisor, pv] = [randDec(100,300,1), randWhole(70,99),2]
    } else if (userSelection['4 digit dividend'] && userSelection['1 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(10,30,2), randWhole(6,9),2]
    } else {
        return randDivDec(userSelection)
    }
    [dividend, divisor, pv] = [randDec(10,99,1), randWhole(10,20),2]

    let answer = dividend/divisor
    let wrong = wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')

    let probArray = []
    probArray.push(`${name} is selling ${itemSell} as a way to raise money ${reason}.`+
    `${name} made a total of $${dividend} by selling ${divisor} ${itemSell}. How much was ${name} selling `+
    `each ${itemSell.replace(/s$/,'').replace(/s\s/, ' ')} for?`)
    probArray.push(`${name} is raising money ${reason} by selling ${itemSell}. So far ${name} has sold `+
    `${divisor} ${itemSell} and made $${dividend}. How much did each ${itemSell.replace(/s$/,'').replace(/s\s/, ' ')} cost? `)
    probArray.push(`${name} is selling ${itemSell} for a school economy project. So far ${name} has sold `+
    `${divisor} ${itemSell} and made $${dividend}. How much did ${name} sell each ${itemSell.replace(/s$/,'').replace(/s\s/, ' ')} for? `)

    let randProb = shuffleArray(probArray)[0]
    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const divideDec3 = (userSelection) => { //ounces of pkg item
    let item = shuffleArray(g.itemPkgList)[0]
    let each = shuffleArray(randEach)[0]

    if (userSelection['4 digit dividend'] && userSelection['2 digit whole number divisor']) {
        var [dividend,divisor, pv] = [randDec(10,14,2), randWhole(50,99),2]
    } else if (userSelection['4 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randDec(10,14,2), randDec(6,9),1]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randWhole(10,50),2]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randWhole(10,50),2]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randDec(6,9),1]
    } else {
        return randDivDec(userSelection)
    }
    if (dividend>5){
        item = shuffleArray(['pecans', 'walnuts', 'pistachios', 'cashews','chicken','chocolates'])[0]

    }
    if (RegExp(divisor).test(/8.|11./)){
        var a = 'an'
    } else {
        a = 'a'
    }
    let answer = dividend/divisor
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')

    let probArray = []
    probArray.push(`It costs $${dividend} for ${a} ${divisor} ounce package of ${item}. What is the price ${each} `+
            `ounce of ${item}?`)
    probArray.push(`The price for ${a} ${divisor} ounce package of ${item} is $${dividend}. What is the price ${each} `+
            `ounce of ${item}?`)
    probArray.push(`${g.cap(a)} ${divisor} ounce box of ${item} costs ${dividend}. What is the price ${each} ounce `+
        `of ${item}?`)
    probArray.push(`What is the price ${each} ounce of ${item} if ${a} ${divisor} ounce package costs ${dividend}?`)
    let randProb = shuffleArray(probArray)[0]
    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const divideDec4 = (userSelection) => { //cut string/rope
    let item = shuffleArray(g.itemLong)[0]
    let measure = shuffleArray(g.measureList)[0]
    let boy = shuffleArray(g.boyList)[0]

    if (userSelection['4 digit dividend'] && userSelection['2 digit whole number divisor']) {
        var [dividend,divisor, pv] = [randDec(10,14,2), randWhole(50,99),2]
    } else if (userSelection['4 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randDec(10,14,2), randDec(6,9),1]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randWhole(10,50),2]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randWhole(10,50),2]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randDec(1,5,2), randDec(6,9),1]
    } else if (userSelection['2 digit dividend'] && userSelection['2 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(6,9,1), randWhole(10,20),2]

    } else if (userSelection['2 digit dividend'] && userSelection['1 digit whole number divisor']) {
        [dividend,divisor, pv] = [randDec(6,9,1), randWhole(2,9),2]

    } else {
        return randDivDec(userSelection)
    }

    let answer = dividend/divisor
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    let probArray = []
    probArray.push(`A piece of ${item} was ${dividend} ${measure} long. ${boy} cut the ${item} into ${divisor} pieces of `+
        `equal length. What was the length of each piece of ${item} in ${measure}?`)
    probArray.push(`${boy} cut a ${item} that was ${dividend} ${measure} long into ${divisor} `+
        `equal sized pieces. What would be the length of one piece of ${item} in ${measure}?`)

    let randProb = shuffleArray(probArray)[0]
    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const divideDec5 = (userSelection) => { //tour
    let each = shuffleArray(randEach)[0]
    let tour = shuffleArray(g.tourList)[0]

    if (userSelection['4 digit dividend'] && userSelection['1 digit whole number divisor']) {
        var [dividend,divisor, pv] = [randWhole(1000,1500), randWhole(2,7),2]
    } else if (userSelection['3 digit dividend'] && userSelection['1 digit whole number divisor']) {
        [dividend,divisor, pv] = [randWhole(500,999), randWhole(2,7),2]
    } else if (userSelection['3 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randWhole(500,999), randDec(2,7),1]
    } else if (userSelection['4 digit dividend'] && userSelection['2 digit decimal divisor']) {
        [dividend,divisor, pv] = [randWhole(1000,1500), randDec(2,7),1]
    }    else {
        return randDivDec(userSelection)
    }
    let answer = dividend/divisor
    if (Number.isInteger(answer)){
        return divideDec5(userSelection)
    }
    let wrong= wrongOptions(answer, 'decimal', dividend, divisor, pv)    
    let AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2], '$')

    let probArray = []
    probArray.push(`A ${tour} tour costs $${dividend} for ${divisor} hours. How much 
        does it cost ${each} hour of the tour?`)
    probArray.push(`A ${tour} tour company offers ${divisor} hour long tours. It costs $${dividend} 
        for the ${divisor} hour long tour. How much does it cost ${each} hour of the tour?`)

    let randProb = shuffleArray(probArray)[0]
    let problem = {text: randProb,
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}


export const randDivDec = (userSelection) => {
    let probArray = []
    if (userSelection['Algorithm']){
        probArray.push(divideDecAlg, divideDecAlg, divideDecAlg, divideDecAlg, divideDecAlg, divideDecAlg)
    } if (userSelection['Application']){
        probArray.push(divideDecBasic, divideDec, divideDec2, divideDec3, divideDec4, divideDec5)
    }
    let randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}



















// f'{randBoy} played {randSport} for a total of {round(Quotient*Divisor, 2)} minutes last year. He played '
// f'{randSport} for {Divisor} days last year for an equal number of minutes each day. How many minutes did'
// f' {randBoy} play {randSport} each day?

// a = (f'It costs ${round(Quotient*Divisor, 2)} for {Divisor} {randItemsExp}s. How much would it cost for each {randItemsExp}'
// f' ? \n    {AC[0]}  \n    {AC[1]}  \n    {AC[2]}  \n    {AC[3]}')

// b = (f'It costs $ {round(Quotient*Divisor, 2)} to buy {Divisor} {randItemsExp}s. How much would it cost to buy one ' 
// f'{randItemsExp} \n    {AC[0]}  \n    {AC[1]}  \n    {AC[2]}  \n    {AC[3]}?')

// a = (f'A recipe for {randDessert} requires {round(Quotient*Divisor, 2)} cups of {randIngredient} for {Divisor} servings. '
// f' How much {randIngredient} is in each serving?')

// b = (f'A recipe for {randDessert} requires {round(Quotient*Divisor, 2)} cups of {randIngredient} for {Divisor} servings. '
// f' How much {randIngredient} is in just one serving')




// a = (f'A piece of {randItem} was {Quotient*Divisor} {randMeasure} long. {randBoy} cut the {randItem} into {Divisor} pieces of '
// f'equal length. What was the length of each piece of {randItem} in {randMeasure}?')
// b = (f'A piece of {randItem} was {Quotient*Divisor} {randMeasure} long. {randBoy} cut the {randItem} into {Divisor} pieces of '
// f'equal length. What would be the length of one piece of {randItem} in {randMeasure}?')



// a = (f'It costs {randTeacher} ${Quotient*Divisor} for {Divisor} days of {randPet} food for her {randPet}s. '
// f'How much does it cost her each day?')
// b = (f'{randTeacher} spent a total of ${Quotient*Divisor} to buy {randPet} food for her {randPet}s for {Divisor} days. '
// f'How much does it cost her for one day?')

// tours = ['glacier', 'whale watching', 'ice cave', 'puffin viewing', 'castle', ]
// eventHire = ['caterer', 'photographer']
// each = ['for each', 'for one', 'per']
// Can = ['black beans', 'kidney beans', 'chick peas', 'spinach', 'pinto beans', 'sweet potatoes']
// constructionMaterials = ['maple wood', 'pipe', 'drywall', 'roof shingles', 'bricks']
// constructionBuild = ['house', 'apartment building', 'shed', 'tree house', 'library', 'store']



//      a = (f'A {randEventHire} charges ${Quotient*Divisor} for {Divisor} hours of work. What is the cost {randEach} hour?')

//      b = (f'A {randEventHire} charges ${Quotient*Divisor} for {Divisor} hours of work. How much does the {randEventHire} charge'
//           f' {randEach} hour?') 


//           a = (f'A construction crew is building a {randConstructBuild}. It costs them ${Quotient*Divisor} to buy {Divisor} feet of '
//           f'{randConstructMaterials}. How much does it cost for each foot of {randConstructMaterials}?')
//      b = (f'A construction crew is building a {randConstructBuild}. It costs them ${Quotient*Divisor} to buy {Divisor} feet of '
//           f'{randConstructMaterials}. How much does it cost for each foot of {randConstructMaterials}?') # edit more