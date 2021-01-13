import {Fraction} from 'fraction.js'
import {randWhole, cap} from './general.js'
import './problems.css';
import {Table, sanitize_block} from './tables.js'
import {Text,View,StyleSheet,} from "@react-pdf/renderer";
  const { create, all } = require('mathjs')
  const styles = StyleSheet.create({
    verticalFractionContainer: {
        display:'flex',
        flexDirection:'column',
    },
    fractionProblemContainer: {
        // margin:'0px 0px 0px 150px',
        // marginLeft: '45px',
        width:'50px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        // borderBottom: 2,
    },
    problemLine: {
        borderBottom:0.5,
        // width: '50px',
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
  const verticalFractions = (fract1, fract2, op) => {
    return (
        <View style={styles.fractionProblemContainer}>
            <View style={styles.problemLine}>
                <View>
                    {op}
                </View>
                <View style= {styles.verticalFractionContainer}>
                    {fract1}
                    {fract2}
                </View>
            </View>
        </View>
    )
}
const horizontalFractions = (fract1, fract2, op) => {
    return (
            <View style= {styles.horizontalFractionContainer}>
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
            </View>
    )
}
const config = {
    // Default type of number
    // Available options: 'number' (default), 'BigNumber', or 'Fraction'
    number: 'Fraction'
  }

  const tstyles = StyleSheet.create({
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
  
    return {
        // fontFamily: 'Arial', 
        width: '20px',
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor,
    }
  }
const math = create(all, config)

export const addFract = () => {
    var fract1 = math.fraction('1/2')
    var fract2 = math.fraction('3/4')
    var answer = math.format(math.add(fract1, fract2))
    console.log(fract1)
    console.log(math.fraction('1/2'))
    var fraction1 = Table([[1],[12]], cell_style_fraction, tstyles)
    var fraction2 = Table([[2],[3]], cell_style_fraction, tstyles)

    var AC = [answer, 'this is wrong', 'this is wrong2', 'this is wrong3']
    // var prob1 = (`${math.format(fract1)}+${math.format(fract2)}`)
    // var prob1 = <View>{fraction1}<Text>+</Text>{fraction2}</View>
    var prob1 = horizontalFractions(fraction1, fraction2, <Text>+</Text>)
    var prob2 = (`${math.format(fract2)}+${math.format(fract1)}`)
    var randProb = [prob1.toString(), prob2.toString()][randWhole(0,1)]
    
    var problem = {text: prob1,
        answerChoices: AC,
        correctAnswer: answer}
    return problem
}

