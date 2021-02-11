import {randWhole, randDec, roundDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'

export const divideDec = (options) => {
    var answer = randDec(1, 9, 2)
    var divisor = randWhole(2, 11)
    var dividend = roundDec(answer*divisor, 2)

    if (options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(1, 9, 2)
    divisor = randWhole(2, 11)
    dividend = roundDec(answer*divisor, 2)

    } else if (options.level ==="3") {
        answer = randDec(1, 9, 2)
        divisor = randWhole(12, 50)
        dividend = roundDec(answer*divisor, 2)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}




export const divideDec2 = (options) => {
    var answer = randDec(0, 1, 3)
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(3)

    if (options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(1, 9, 3)
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(3)

    } else if (options.level ==="3") {
        answer = randDec(1, 9, 3)
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(3)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const divideDec3 = (options) => {
    var answer = randDec(10, 90, 1)
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(1)

    if (options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(100, 900, 1)
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(1)

    } else if (options.level ==="3") {
        answer = randDec(100, 900, 1)
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(1)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
    }
export const randDivDec = (options) => {
    var probArray = [divideDec, divideDec2, divideDec3]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}





















// f'What is the quotient when {Quotient*Divisor} is divided by {Divisor}'

// '{randGirl} is going to {randPlaceStore} to buy some {randomStuffPkgs}. She is buying {Divisor} '
// f'packages of {randomStuffPkgs}. After the cashier rang up her items, she had to give the cashier a '
// f'total of $ {Quotient*Divisor}. How much did it cost for each package of {randomStuffPkgs}?'


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

// a = (f'It costs ${round(Quotient*Divisor, 2)} for a {Divisor} ounce box of {randItem}. What is the price for each'
// f'ounce of {randItem}?')
// b = (f'It costs ${round(Quotient*Divisor, 2)} for a {Divisor} ounce box of {randItem}. What is the price per ounce'
// f' of {randItem}?')
// c = (f'A {Divisor} ounce box of {randItem} costs ${round(Quotient*Divisor, 2)}. What is the price per ounce'
// f' of {randItem}?')
// d = (f'A {Divisor} ounce box of {randItem} costs ${round(Quotient*Divisor, 2)}. What is the price for each ounce'
// f' of {randItem}?')


// a = (f'A piece of {randItem} was {Quotient*Divisor} {randMeasure} long. {randBoy} cut the {randItem} into {Divisor} pieces of '
// f'equal length. What was the length of each piece of {randItem} in {randMeasure}?')
// b = (f'A piece of {randItem} was {Quotient*Divisor} {randMeasure} long. {randBoy} cut the {randItem} into {Divisor} pieces of '
// f'equal length. What would be the length of one piece of {randItem} in {randMeasure}?')



// a = (f'It costs {randTeacher} ${Quotient*Divisor} for {Divisor} days of {randPet} food for her {randPet}s. '
// f'How much does it cost her each day?')
// b = (f'{randTeacher} spent a total of ${Quotient*Divisor} to buy {randPet} food for her {randPet}s for {Divisor} days. '
// f'How much does it cost her for one day?')

// tours = ['glacier', 'whale watching', 'ice cave', 'puffin viewing', 'castle']
// eventHire = ['caterer', 'photographer']
// each = ['for each', 'for one', 'per']
// Can = ['black beans', 'kidney beans', 'chick peas', 'spinach', 'pinto beans', 'sweet potatoes']
// constructionMaterials = ['maple wood', 'pipe', 'drywall', 'roof shingles', 'bricks']
// constructionBuild = ['house', 'apartment building', 'shed', 'tree house', 'library', 'store']

// a = (f'A {randTour} tour costs ${Quotient*Divisor} for {Divisor} hours. How much does it cost {randEach} hour of the tour?')
// b = (f'A {randTour} tour company offers {Divisor} hour long tours. It costs ${Quotient*Divisor} for the {Divisor} hour long tour.'
//      f' How much does it cost {randEach} hour of the tour?')

//      a = (f'A {randEventHire} charges ${Quotient*Divisor} for {Divisor} hours of work. What is the cost {randEach} hour?')

//      b = (f'A {randEventHire} charges ${Quotient*Divisor} for {Divisor} hours of work. How much does the {randEventHire} charge'
//           f' {randEach} hour?') 


//           a = (f'A construction crew is building a {randConstructBuild}. It costs them ${Quotient*Divisor} to buy {Divisor} feet of '
//           f'{randConstructMaterials}. How much does it cost for each foot of {randConstructMaterials}?')
//      b = (f'A construction crew is building a {randConstructBuild}. It costs them ${Quotient*Divisor} to buy {Divisor} feet of '
//           f'{randConstructMaterials}. How much does it cost for each foot of {randConstructMaterials}?') # edit more