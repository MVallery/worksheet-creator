import {randWhole, randDec, roundDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'

export const divideDec = (Options) => {
    var answer = randDec(1, 9, 2)
    var divisor = randWhole(2, 11)
    var dividend = roundDec(answer*divisor, 2)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(1, 9, 2)
    divisor = randWhole(2, 11)
    dividend = roundDec(answer*divisor, 2)

    } else if (Options.level ==="3") {
        answer = randDec(1, 9, 2)
        divisor = randWhole(12, 50)
        dividend = roundDec(answer*divisor, 2)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const multDec = (Options) => {
    var numberS = randDec(1, 9, 2)
    var numberL = randWhole(1, 9)
    var answer = roundDec(numberS*numberL, 2)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    numberS = randDec(1, 9, 2)
    numberL = randWhole(11, 99)
    answer = roundDec(numberS*numberL, 2)

    } else if (Options.level ==="3") {
        numberS = randDec(1, 9, 2)
        numberL = randWhole(13,99)
        answer = roundDec(numberS*numberL, 2)
    } 
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {questionText:    (`${numberS} x ${numberL} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const multDec2 = (Options) => {
    var pv = randWhole(1, 2)
    var numberS = randDec(1, 9, pv)
    var numberL = randDec(0, 1, pv)
    var answer = roundDec(numberS*numberL, 2)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    numberS = randDec(1, 9, pv)
    numberL = randDec(11, 99, pv)
    answer = roundDec(numberS*numberL, 2)

    } else if (Options.level ==="3") {
        numberS = randDec(1, 9, pv)
        numberL = randDec(13, 99, pv)
        answer = roundDec(numberS*numberL, 2)
    } 
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {questionText:    (`${numberS} x ${numberL} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}

export const divideDec2 = (Options) => {
    var answer = randDec(0, 1, 3)
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(3)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(1, 9, 3)
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(3)

    } else if (Options.level ==="3") {
        answer = randDec(1, 9, 3)
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(3)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const divideDec3 = (Options) => {
    var answer = randDec(10, 90, 1)
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(1)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(100, 900, 1)
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(1)

    } else if (Options.level ==="3") {
        answer = randDec(100, 900, 1)
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(1)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
    }








export const divideDecOLD = (Options) => {
    var [dec1, dec2, dec3] = [randDec(1, 9, 2), randDec(0, 1, 3), randDec (10, 90, 1)]
    var x
    // var shuffleDecimals = shuffleArray([randDec(1, 9, 2), randDec(0, 1, 3), randDec (10, 90, 1)])
    var shuffleDecimals = shuffleArray([dec1, dec2, dec3])
    if (shuffleDecimals[0] === dec1){
        x = 2
    } else if (shuffleDecimals[1] === dec2) {
        x = 3
    } else {
        x = 1
    }
    var answer = shuffleDecimals[0] 
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(x)

    if (Options === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    var shuffleDecimals = shuffleArray([randDec(10, 90, 2), randDec(1, 9, 3), randDec (100, 900, 1)])
    answer = shuffleDecimals[0]
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(x)

    } else if (Options ==="3") {
        var shuffleDecimals = shuffleArray([randDec(10, 90, 2), randDec(1, 9, 3), randDec (100, 900, 1)])
        answer = shuffleDecimals[0]
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(x)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
    }




export const addDecPV = (Options) => {
    var xArray = shuffleArray([1, 2, 3])
    var[x, y] = [xArray[0], xArray[1]]
    if (x>y) {
        var w = x
    } else {
        var w = y
    }
    var combo = [{numberS:randDec(1, 5, x), numberL: randDec(5, 9, y)},
                {numberS:randDec(1, 9, x), numberL: randDec(50, 90, y)},
                ]

    if (Options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randDec(50, 90, y)},
                {numberS:randDec(10, 90, x), numberL: randDec(90, 300, y)}]

    } else if (Options.level ==="3") {
        combo = [{numberS:randDec(100, 499, x), numberL: randDec(500, 900, y)},
                {numberS:randDec(10, 499, x), numberL: randDec(500, 900, y)},
                {numberS:randDec(11, 99, x), numberL: randDec(100,900, y)}]
    } 
    var randNums = combo[randWhole(0, combo.length)]

    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL+numberS, w)
    // console.log(numberL+numberS)
    // console.log(answer)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${numberL} + ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}

export const addDecWhole = (Options) => {
    var xArray = shuffleArray([1, 2, 3])
    var x = xArray[0]

    var combo = [{numberS:randDec(1, 5, x), numberL: randWhole(6,20)},
                {numberS:randWhole(1, 9), numberL: randDec(9,15, x)},
                ]

    if (Options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randWhole(50,90)},
                {numberS:randWhole(10, 90), numberL: randDec(90,300, x)}]

    } else if (Options.level ==="3") {
        combo = [{numberS:randWhole(100, 499), numberL: randDec(500, 900, x)},
                {numberS:randDec(10, 499, x), numberL: randWhole(500, 900)},
                {numberS:randDec(11, 99, x), numberL: randWhole(100,900)}]
    } 
    var randNums = combo[randWhole(0, combo.length)]
    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL+numberS, x)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${numberL} + ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}


export const subDecWhole = (Options) => {
    var xArray = shuffleArray([1, 2, 3])
    var x = xArray[0]

    var combo = [{numberS:randDec(1, 5, x), numberL: randWhole(6,20)},
                    {numberS:randWhole(1, 9), numberL: randDec(10,15, x)},
                ]

    if (Options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randWhole(50,90)},
            {numberS:randWhole(10, 90), numberL: randDec(91,300, x)}]

    } else if (Options.level ==="3") {
        combo = [{numberS:randWhole(100, 499), numberL: randDec(500, 900, x)},
            {numberS:randDec(10, 499, x), numberL: randWhole(500, 900)},
            {numberS:randDec(11, 99, x), numberL: randWhole(100,900)}]
    } 
    var randNums = combo[randWhole(0, combo.length)]
    var numberS = randNums.numberS
    var numberL = randNums.numberL
    var answer = roundDec(numberL-numberS, x)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${numberL} - ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const subDecPV = (Options) => {
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

    if (Options.level === "2") {
        combo = [{numberS:randDec(1, 9, x), numberL: randDec(50,90, y)},
            {numberS:randDec(10, 90, x), numberL: randDec(91,300, y)}]

    } else if (Options.level ==="3") {
        combo = [{numberS:randDec(100, 499, x), numberL: randDec(500, 900, y)},
            {numberS:randDec(10, 499, x), numberL: randDec(500, 900, y)},
            {numberS:randDec(11, 99, x), numberL: randDec(100,900, y)}]
    } 
    var randNums = combo[randWhole(0, combo.length)]
    var numberS = Number(randNums.numberS)
    var numberL = Number(randNums.numberL)
    var answer = roundDec(numberL-numberS, w)
    var wrong= wrongOptions(answer, 'decimal', numberS, numberL)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${numberL} - ${numberS} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}