import {randWhole, randDec, shuffleArray, wrongOptions, answerChoicesKey} from './general.js'
// import {

//     StyleSheet,

//   } from "@react-pdf/renderer";
  // const styles = StyleSheet.create({
  //   top: {
  //     marginBottom:10,
  //     fontSize: 12,
  //     textAlign: 'justify',
  //     // fontFamily: 'arial'
  //   },
  //   probContainer: {
  //       display:'flex',
  //       flexDirection:'column',
  //       // fontFamily: 'arial'
  //     },
  //   bottom: {
  //       marginBottom:10,
  //       fontSize: 12,
  //       textAlign: 'justify',
  //       // fontFamily: 'arial'
  //     },

  // });


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
    // return <div><p>{problem} </p></div>
    return problem
    }



