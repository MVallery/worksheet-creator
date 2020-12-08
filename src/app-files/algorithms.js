import {randWhole, randDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'

export const divideDec = (Options) => {
    var answer = randDec(1, 9, 2)
    var divisor = randWhole(2, 11)
    var dividend = (answer*divisor).toFixed(2)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    answer = randDec(1, 9, 2)
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(2)

    } else if (Options.level ==="3") {
        answer = randDec(1, 9, 2)
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(2)
    } 
    var wrong= wrongOptions(answer, 'decimal', dividend, divisor)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])

    var problem = {questionText:    (`${dividend} ÷ ${divisor} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const multDec = (Options) => {
    var numberS = randDec(1, 9, 2)
    var numberL = randWhole(1, 9)
    var answer = (numberS*numberL).toFixed(2)

    if (Options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    numberS = randDec(1, 9, 2)
    numberL = randWhole(11, 99)
    answer = (numberS*numberL).toFixed(2)

    } else if (Options.level ==="3") {
        numberS = randDec(1, 9, 2)
        numberL = randWhole(13,99)
        answer = (numberS*numberL).toFixed(2)
    } 
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {questionText:    (`${numberS} x ${numberL} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    console.log(problem)
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
    console.log(problem)
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
    console.log(problem)
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
    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
    }