import {randWhole} from './general.js'
import './problems.css';
import Table from './Table.js'
import {Text,View,StyleSheet,} from "@react-pdf/renderer";
  const { create, all } = require('mathjs')
  var tstyles = StyleSheet.create({
    table: {
        display: "table",
         width: "200px",
         textAlign:'center',
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        // padding: '3px'
      },
    header: {
      backgroundColor: 'grey'
    }
  });
  const styles = StyleSheet.create({
    verticalFractionContainer: {
        display:'flex',
        flexDirection:'column',
    },
    fractionProblemContainer: {
        // margin:'0px 0px 0px 150px',
        marginLeft: '45px',
        width:'50px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        // borderBottom: 2,
    },
    problemLine: {
        borderBottom:0.5,
        width: '50px',
        flexDirection: 'row',
        alignItems:'center',

    },
    horizontalFractionContainer: {
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    fraction: {
        paddingRight: '0px',
        marginLeft:'10px',
        width:'30px',

    }
  });
const fractionNumbers = () => {
      var numerator1 = randWhole(1,8)
      var denominator1 = randWhole(numerator1+1,10)
      if (denominator1 > 6) {
          var topRange = randWhole(2,5)
          var numerator2 = randWhole(1, topRange)
          var denominator2 = randWhole(numerator2+1, topRange+1)
      }else {
        topRange = randWhole(2,10)
        numerator2 = randWhole(1, topRange)
        denominator2 = randWhole(numerator2+1, topRange+1)
      }
      console.log(numerator1)
    return [numerator1, denominator1, numerator2, denominator2]      
  }
// const verticalFractions = (fract1, fract2, op) => {
//     return (
//         <View style={styles.fractionProblemContainer}>
//             <View style={styles.problemLine}>
//                 <View>
//                     {op}
//                 </View>
//                 <View style= {styles.verticalFractionContainer}>
//                     {fract1}
//                     {fract2}
//                 </View>
//             </View>
//         </View>
//     )
// }
const horizontalFractions = (fract1, fract2, op) => {
    return (
            <View style= {styles.horizontalFractionContainer}>
                    <View style= {styles.fraction}>
                        {fract1}
                    </View>
                    <View>
                        {op}
                    </View>
                    <View style= {styles.fraction}>
                        {fract2}
                    </View>
                <Text>
                    = ________
                </Text>
            </View>
    )
}
const config = {
    // Default type of number
    // Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'Fraction'
  }

  tstyles = StyleSheet.create({
    table: {
        display: "table",
         width: "10px",
         textAlign:'center',
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        // padding: '3px'
      },
    header: {
      backgroundColor: 'grey'
    }
  });

  const cell_style_fraction = (row_index, col_index) => {
    const borderLeftWidth =  0
    const borderTopWidth = (row_index === 0) ? 0 : 1
    const borderRightWidth = 0
    const borderBottomWidth = 0
    const backgroundColor = 'white'
    if (col_index > 0) {

    }
  
    return {
        // fontFamily: 'Arial', 
        width: '20px',
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor,
    }
  }
  const cell_style_mixednumber = (row_index, col_index) => {
    const borderLeftWidth =  0
    const borderTopWidth = (row_index === 0 || col_index === 0) ? 0 : 1
    const borderRightWidth = 0
    const borderBottomWidth = 0
    const backgroundColor = 'white'
    const fontSize = '15px'  
    return {
        // fontFamily: 'Arial', 
        width: '20px',
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor, fontSize,
    }
  }
const math = create(all, config)

export const addFract = () => {
    var numberList = fractionNumbers()
    var whole = randWhole(1,4)
    var [num1, denom1, num2, denom2] = [numberList[0], numberList[1], numberList[2], numberList[3]]
    console.log(num1)
    // console.log(num)
    var fract1 = math.fraction(`${num1}/${denom1}`)
    var fract2 = math.fraction(`${num2}/${denom2}`)
    var answer = math.format(math.add(fract1, fract2))

    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)
    var styledFract2 = Table([[num2],[denom2]], cell_style_fraction, tstyles)
    // var mixedNumber1 = Table([['hi', num1],[whole, denom1]], cell_style_mixednumber, tstyles)

    // var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']
    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{styledFract1}<Text>+</Text>{styledFract2}</View>
    var prob1 = horizontalFractions(styledFract1, styledFract2, <Text>+</Text>)
    // var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    // var randProb = [prob1.toString(), prob2.toString()][randWhole(0,1)]
    
    var problem = {text: prob1,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}
export const subFract = () => {
    var numberList = fractionNumbers()
    var whole = randWhole(1,4)
    var [num1, denom1, num2, denom2] = [numberList[0], numberList[1], numberList[2], numberList[3]]
    console.log(num1)
    // console.log(num)
    var fract1 = math.fraction(`${num1}/${denom1}`)
    var fract2 = math.fraction(`${num2}/${denom2}`)
    // var answer = math.format(math.subtract(fract1, fract2))
    // var answer = math.format(math.subtract(fract1, fract2))
    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)
    var styledFract2 = Table([[num2],[denom2]], cell_style_fraction, tstyles)
    if (math.compare(fract1, fract2) === 1) {
        var prob1 = horizontalFractions(styledFract1, styledFract2, <Text>-</Text>)
        var answer = math.format(math.subtract(fract1, fract2))

    } else {
        prob1 = horizontalFractions(styledFract2, styledFract1, <Text>-</Text>)
        answer = math.format(math.subtract(fract2, fract1))

    }
    console.log(fract1)
    console.log(math.fraction('1/2'))

    // var mixedNumber1 = Table([['hi', num1],[whole, denom1]], cell_style_mixednumber, tstyles)

    // var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']
    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{styledFract1}<Text>+</Text>{styledFract2}</View>
    var prob1 = horizontalFractions(styledFract1, styledFract2, <Text>-</Text>)
    // var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    // var randProb = [prob1.toString(), prob2.toString()][randWhole(0,1)]
    
    var problem = {text: prob1,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}

const divFractNumbers = (userSelection) => {
    // if (options.specify === 'fractbyfract') {

    // } else if (options.specify === 'mixedbymixed'){

    // } else {

    // }
    var whole = randWhole(2, 10)
    var num1 = 1
    var denom1 = randWhole(2,10)

    return [whole, num1, denom1]
}
export const divideFract = () => {
    var numberList = divFractNumbers()
    var [whole, num1, denom1] = [numberList[0], numberList[1], numberList[2]]
    console.log(num1)
    var fract1 = math.fraction(`${num1}/${denom1}`)
    // console.log(fract1)
    // console.log(math.fraction('1/2'))
    var wholeNumber = <View><Text>{whole}</Text></View>
    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)

    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{styledFract1}<Text>+</Text>{styledFract2}</View>
    var prob1 = horizontalFractions(wholeNumber, styledFract1, <Text>÷</Text>)
    var prob2 = horizontalFractions(styledFract1, wholeNumber, <Text>÷</Text>)

    // var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    var randProb = [prob1, prob2][randWhole(0,1)]
    if (randProb === prob1) {
        var answer = math.format(math.number(math.divide(whole, fract1)))
    } else {
        answer = math.format(math.divide(fract1, whole))
    }
    // var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']

    var problem = {text: randProb,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}
export const multFract = () => {
    var numberList = divFractNumbers()
    var [whole, num1, denom1] = [numberList[0], numberList[1], numberList[2]]
    console.log(num1)
    var fract1 = math.fraction(`${num1}/${denom1}`)
    // console.log(fract1)
    // console.log(math.fraction('1/2'))
    var wholeNumber = <View><Text>{whole}</Text></View>
    var styledFract1 = Table([[num1],[denom1]], cell_style_fraction, tstyles)

    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{styledFract1}<Text>+</Text>{styledFract2}</View>
    var prob1 = horizontalFractions(wholeNumber, styledFract1, <Text>×</Text>)
    var prob2 = horizontalFractions(styledFract1, wholeNumber, <Text>×</Text>)

    // var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    var randProb = [prob1, prob2][randWhole(0,1)]
    var answer = math.format(math.multiply(fract1, whole))

    // if (randProb === prob1) {
    //     var answer = math.format(math.number(math.multiply(whole, fract1)))
    // } else {
    //     answer = math.format(math.multiply(fract1, whole))
    // }
    // var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']

    var problem = {text: randProb,
        answerChoices: ['','','','', answer],
        correctAnswer: answer}
    return problem
}