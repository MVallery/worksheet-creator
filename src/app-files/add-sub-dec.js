import {randWhole, randDec, roundDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'

export const addDecPV = (options) => {
    var xArray = shuffleArray([1, 2, 3])
    var[x, y] = [xArray[0], xArray[1]]
    if (x>y) {
        var w = x
    } else {
        w = y
    }
    var combo = [{numberS:randDec(1, 5, x), numberL: randDec(5, 9, y)},
                {numberS:randDec(1, 9, x), numberL: randDec(50, 90, y)},
                ]
    if (options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randDec(50, 90, y)},
                {numberS:randDec(10, 90, x), numberL: randDec(90, 300, y)}]

    } else if (options.level ==="3") {
        combo = [{numberS:randDec(100, 499, x), numberL: randDec(500, 900, y)},
                {numberS:randDec(10, 499, x), numberL: randDec(500, 900, y)},
                {numberS:randDec(11, 99, x), numberL: randDec(100,900, y)}]
    } 
    var randNums = combo[randWhole(0, combo.length-1)]

    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL+numberS, w)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${numberL} + ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    return problem
}

export const addDecWhole = (options) => {
    var xArray = shuffleArray([1, 2, 3])
    var x = xArray[0]

    var combo = [{numberS:randDec(1, 5, x), numberL: randWhole(6,20)},
                {numberS:randWhole(1, 9), numberL: randDec(9,15, x)},
                ]

    if (options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randWhole(50,90)},
                {numberS:randWhole(10, 90), numberL: randDec(90,300, x)}]

    } else if (options.level ==="3") {
        combo = [{numberS:randWhole(100, 499), numberL: randDec(500, 900, x)},
                {numberS:randDec(10, 499, x), numberL: randWhole(500, 900)},
                {numberS:randDec(11, 99, x), numberL: randWhole(100,900)}]
    } 
    var randNums = combo[randWhole(0, combo.length-1)]
    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL+numberS, x)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${numberL} + ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}

export const randAddDec = (options) => {
    var probArray = [addDecWhole, addDecPV]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}



export const subDecWhole = (options) => {
    var xArray = shuffleArray([1, 2, 3])
    var x = xArray[0]

    var combo = [{numberS:randDec(1, 5, x), numberL: randWhole(6,20)},
                    {numberS:randWhole(1, 9), numberL: randDec(10,15, x)},
                ]

    if (options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randWhole(50,90)},
            {numberS:randWhole(10, 90), numberL: randDec(91,300, x)}]

    } else if (options.level ==="3") {
        combo = [{numberS:randWhole(100, 499), numberL: randDec(500, 900, x)},
            {numberS:randDec(10, 499, x), numberL: randWhole(500, 900)},
            {numberS:randDec(11, 99, x), numberL: randWhole(100,900)}]
    } 
    var randNums = combo[randWhole(0, combo.length-1)]
    var numberS = randNums.numberS
    var numberL = randNums.numberL
    var answer = roundDec(numberL-numberS, x)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${numberL} - ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const subDecPV = (options) => {
    var xArray = shuffleArray([1, 2, 3])
    var[x, y] = [xArray[0], xArray[1]]
    if (x>y) {
        var w = x
    } else {
        var w = y
    }
    var combo = [{numberS:randDec(1, 5, x), numberL: randDec(6, 11, y)},
                    {numberS:randDec(1, 9, x), numberL: randDec(50,90, y)},
                ]

    if (options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randDec(50,90, y)},
            {numberS:randDec(10, 90, x), numberL: randDec(91,300, y)}]

    } else if (options.level ==="3") {
        combo = [{numberS:randDec(100, 499, x), numberL: randDec(500, 900, y)},
            {numberS:randDec(10, 499, x), numberL: randDec(500, 900, y)},
            {numberS:randDec(11, 99, x), numberL: randDec(100,900, y)}]
    } 
    var randNums = combo[randWhole(0, combo.length-1)]
    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL-numberS, w)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {text:    (`${numberL} - ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}

export const randSubDec = (options) => {
    var probArray = [subDecPV, subDecWhole]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
}
