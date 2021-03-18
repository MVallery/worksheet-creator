import {randWhole, shuffleArray} from './general.js'
import {Text,View,StyleSheet,} from "@react-pdf/renderer";

export const divMultFractNumbers = (userSelection) => {
  let numArray= []
  if (userSelection['Fractions Only']) {
      let num1=randWhole(1,10)
      let denom1= num1+(num1>5 ? randWhole(1,5) : randWhole(1,10))
      let number1 = {num1:num1, denom1:denom1}
      let num2=randWhole(1,10)
      let denom2 = num2+(num2>5 ? randWhole(1,5) : randWhole(1,10))
      let number2 = {num2:num2, denom2:denom2}
      numArray.push({number1:number1, number2:number2})
      console.log(denom2)
  } if (userSelection['Fraction with Whole Numbers']){
      let number1 = randWhole(2,10)
      let num2= randWhole(1,10)
      let denom2= num2+(num2>5 ? randWhole(1,5) : randWhole(1,10))
      console.log(denom2)
      let number2 = {num2:num2, denom2:denom2}
      numArray.push({number1:number1, number2:number2})
  } if (userSelection['Unit Fraction with Whole Numbers']) {
      let number1 = randWhole(2,10)
      let denom2 = randWhole(2,10)
      let number2 = {num2:1, denom2:denom2}
      numArray.push({number1:number1, number2:number2})
  }
  let fractNumbers = shuffleArray(numArray)[0]
  return fractNumbers
}

export const tstyles = StyleSheet.create({
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
export const styles = StyleSheet.create({

  fractionProblemContainer: {
      // margin:'0px 0px 0px 150px',
      marginLeft: '20px',
      width:'150px',
      display:'flex',
      justifyContent:'flexStart',
      alignItems:'flexStart',
      flexDirection:'row',
      // borderBottom: 2,
  },
  problemLine: {
      borderBottom:0.5,
      width: '100px',
      display:'flex',
    //   justifyContent:'center',
      flexDirection: 'row',
      alignItems:'center',

  },
  // op: {
  //     fontSize:'8px',
  // },
  verticalFractionContainer: {
      display:'flex',
      flexDirection:'column',
      // width:'100px'

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

  },

});

export const verticalFractions = (fract1, fract2, op) => {
  return (
      <View  style={styles.fractionProblemContainer}>
          <View style={styles.problemLine}>
              <View >
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
export const horizontalFractions = (fract1, fract2, op) => {
  return (
          <View style= {styles.horizontalFractionContainer}>
                  <View style= {styles.fraction}>
                      {fract1}
                  </View>
                  <View style={styles.op} >
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


// tstyles = StyleSheet.create({
//   table: {
//       display: "table",
//        width: "10px",
//        textAlign:'center',
//   },
//   row: {
//       flexDirection: "row",
//   },
//   cell: {
//       // padding: '3px'
//     },
//   header: {
//     backgroundColor: 'grey'
//   }
// });

export const cell_style_fraction = (row_index, col_index) => {
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