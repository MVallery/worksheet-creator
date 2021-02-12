import {randWhole, decPV, randDec, shuffleArray, wrongOptions, answerChoicesKey} from './general'
import {StyleSheet, View, Text} from "@react-pdf/renderer";
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
      },
    bottom: {
        marginBottom:10,
        fontSize: 12,
        textAlign: 'justify',
        // fontFamily: 'arial'
      },

  });

const multNumbers = (userSelection) =>{
    var numArray = []
    if (userSelection['Decimal x Whole Number']) {
        numArray.push(
            [randWhole(2, 9), randDec(0.1, 0.9, 1)],
            [randWhole(2, 9), randDec(0.1, 0.9, 2)],
            [randWhole(2, 9), randDec(1, 9, 1)],
            [randWhole(2, 9), randDec(1, 9, 2)],
            [randWhole(2, 9), randDec(10,99, 1)],
        )
    } if (userSelection['3 by 1 digit']) {
        var randDecimal = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        numArray.push(
            [randWhole(2, 9), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randDecimal],
            [randDec(0.2, 0.9, 1), randWhole(100,999) ],
            [randDec(0.02, 0.09, 2), randDecimal],
            [randDec(0.02, 0.09, 2), randWhole(100,999) ],
        )
    } if (userSelection['4 by 1 digit']) {
        randDecimal = [randDec(100, 999, 1), randDec(20,99,2), randDec(2, 9, 3), randDec(0.2, 0.9999, 4)][randWhole(0,3)]
        numArray.push(
            [randWhole(2, 9), randDecimal],
            [randDec(0.2,0.9, 1), randWhole(1000,9999)],
            [randDec(0.2,0.9,1), randDecimal],
            [randDec(0.02,0.09,2), randDecimal],
            [randDec(0.02,0.09,2), randWhole(1000,9999)],
        )
    } if (userSelection['2 by 2 digit']) {
        randDecimal = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]

        numArray.push(
            [randWhole(11, 99), randDecimal],
            [randWhole(11, 99), randDecimal],
            [randDecimal, randDecimal2],
            [randDecimal, randDecimal2],
            [randDec(1, 9, 1), randDec(0.2,0.99,2)],
            [randDec(1, 9, 1), randDec(0.2,0.99,2)],

        )
    } if (userSelection['3 by 2 digit']) {
        var randDecimal3 = [randDec(10, 99, 1), randDec(2,9,2), randDec(0.2, 0.999, 3)][randWhole(0,2)]
        var randDecimal2 = [randDec(1, 9, 1), randDec(0.2,0.99,2)][randWhole(0,1)]
        numArray.push(
            [randWhole(11, 99), randDecimal3],
            [randDecimal2, randWhole(100,999)],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3],
            [randDecimal2, randDecimal3],

        )
    }
    var num = shuffleArray(numArray)[0]
    // var [num1pv, num2pv] = [decPV(num[0]), decPV(num[1])] 
    return [num[0], randWhole(9,100), num[1]]
}

export const multDecAlg = (userSelection) => {
    var numList = multNumbers(userSelection)
    var [numberS, numberL] = [numList[0], numList[2]]
    var multPV = decPV(numberS)+decPV(numberL)

    var answer = Number((numberL*numberS).toFixed(multPV))
    if (userSelection.probStyle === 'Vertical') {
        var prob = `${numberL} × ${numberS} = `
    } else {
        prob = <View style={styles.probContainer}>
            {/* <View style={styles.top}>{`    ${numberL}`}</View>
            <View style={styles.bottom}>{`× ${numberS}`}</View> */}
            <Text style={styles.top}>{`    ${numberL}`}</Text>
            <Text style={styles.bottom}>{`× ${numberS}`}</Text>
        </View>
    }

    var wrong= wrongOptions(answer, 'decimal', numberL, numberS, multPV)    
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


export const randMultDec = (userSelection) => {
    var probArray = []
    if (userSelection.concept === 'Multiplying Decimals Algorithm' || userSelection.concept === 'Mixed Multiplying Decimals'){
        probArray.push(multDecAlg)
    } else if (userSelection.concept === "Multiplying Decimals Application" || userSelection.concept=== 'Mixed Multiplying Decimals'){
        probArray.push()
    }

    var randProb = shuffleArray(probArray)[0]
    return randProb(userSelection)
}
