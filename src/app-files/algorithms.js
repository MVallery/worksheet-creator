import {randWhole, randDec, roundDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'
import {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
    Font,
  
    // PDFViewer,
    // ReactPDF,
    PDFDownloadLink,
  } from "@react-pdf/renderer";
  const styles = StyleSheet.create({
    top: {
      marginBottom:10,
      fontSize: 12,
      textAlign: 'justify',
      // fontFamily: 'arial'
    },
    probContainer: {
        display:'flex',
        flexDirection:'column',
        // fontFamily: 'arial'
      },
    bottom: {
        marginBottom:10,
        fontSize: 12,
        textAlign: 'justify',
        // fontFamily: 'arial'
      },

  });
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
export const multDec = (options) => {
    if (options.specify === 'Decimal x Whole Number') {
        var numArray = [
            [randWhole(2, 9), randDec(0.1, 0.9, randWhole(1,2))],
            [randWhole(2, 9), randDec(1, 9, randWhole(1,2))],
            [randWhole(2, 9), randDec(10,99, 1)],
        ]

    } else if (options.specify === '3 by 1 digit') {
        var randDecimal = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        numArray = [
            [randWhole(2, 9), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randWhole(100,999) ],
            [randDec(0.02, 0.09, 2), randDecimal],
            [randDec(0.02, 0.09, 2), randDecimal],
            [randDec(0.02, 0.09, 2), randWhole(100,999) ],
        ]

    } else if (options.specify === '4 by 1 digit') {
        randDecimal = [randDec(100, 999, 1), randDec(20,99,2), randDec(2, 9, 3), randDec(0.2, 0.9999, 4)][randWhole(0,3)]
        numArray = [
            [randWhole(2, 9), randDecimal],
            [randDec(0.2,0.9, 1), randWhole(1000,9999)],
            [randDec(0.2,0.9,1), randDecimal],
            [randDec(0.02,0.09,2), randDecimal],
            [randDec(0.02,0.09,2), randWhole(1000,9999)],


        ]
    } else if (options.specify === '2 by 2 digit') {
        randDecimal = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]

        numArray = [
            [randWhole(11, 99), randDecimal],
            [randDecimal, randDecimal2],
            [randDec(1, 9, 1), randDec(0.2,0.99,2)],

        ]
    } else if (options.specify === '3 by 2 digit') {
        var randDecimal3 = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        var randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        numArray = [
            [randWhole(11, 99), randDecimal3],
            [randDecimal2, randWhole(100,999)],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3],

        ]
    }
    var num = shuffleArray(numArray)
    var numberS = num[0][0]
    var numberL = num[0][1]
    var answer = numberL*numberS
    if (options.probStyle === 'Vertical') {
        var prob = `${numberL} × ${numberS} = `
    } else {
        prob = <View style={styles.probContainer}>
            {/* <View style={styles.top}>{`    ${numberL}`}</View>
            <View style={styles.bottom}>{`× ${numberS}`}</View> */}
            <Text style={styles.top}>{`    ${numberL}`}</Text>
            <Text style={styles.bottom}>{`× ${numberS}`}</Text>
        </View>
    }

    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {text: prob,
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const multDec2 = (options) => {
    var pv = randWhole(1, 2)
    var numberS = randDec(1, 9, pv)
    var numberL = randDec(0, 1, pv)
    var answer = roundDec(numberS*numberL, 2)

    if (options.level === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    numberS = randDec(1, 9, pv)
    numberL = randDec(11, 99, pv)
    answer = roundDec(numberS*numberL, 2)

    } else if (options.level ==="3") {
        numberS = randDec(1, 9, pv)
        numberL = randDec(13, 99, pv)
        answer = roundDec(numberS*numberL, 2)
    } 
    var wrong= wrongOptions(answer, 'decimal', numberL, numberS)    
    var AC = answerChoicesKey(answer, wrong[0], wrong[1], wrong[2])
    // var order = (numberS, numberL)
    var problem = {text:    (`${numberS} × ${numberL} = `),
                answerChoices: AC,
                correctAnswer:answer,
                }
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem
}
export const randMultDec = (options) => {
    var probArray = [multDec]
    if (options.specify === '3by1' || '4by1') {
        probArray.push()
    } //else if (options.specify === '2by2') {

    // } else {//3by2

    // }
    var randProb = shuffleArray(probArray)[0]
    return randProb(options)
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









export const divideDecOLD = (options) => {
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

    if (options === "2") {
    // [numberS, numberL] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001)];
    shuffleDecimals = shuffleArray([randDec(10, 90, 2), randDec(1, 9, 3), randDec (100, 900, 1)])
    answer = shuffleDecimals[0]
    divisor = randWhole(2, 11)
    dividend = (answer*divisor).toFixed(x)

    } else if (options ==="3") {
        shuffleDecimals = shuffleArray([randDec(10, 90, 2), randDec(1, 9, 3), randDec (100, 900, 1)])
        answer = shuffleDecimals[0]
        divisor = randWhole(12, 50)
        dividend = (answer*divisor).toFixed(x)
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
    // console.log(numberL+numberS)
    // console.log(answer)
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
