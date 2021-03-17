
import {StyleSheet} from "@react-pdf/renderer";
import {splitDec} from './general'
import Table from './Table'
const tstyles = StyleSheet.create({
    table: {
        display: "table",
         textAlign:'right',
         padding: '20 0 50 10',
         margin:10,
         
    },
    row: {
        flexDirection: "row",
    },
    cell: {

    },
    header: {
      backgroundColor: 'grey'
      
    }
  });

  const cell_style_fraction = (row_index, col_index) => {
    const borderLeftWidth =  0
    const borderTopWidth = 0
    const borderRightWidth = 0
    const borderBottomWidth = (row_index === 1 && col_index === 1) ? 1 : 0
    const backgroundColor = 'white'
    const width = (col_index === 0) ? 20 : 50

    if (col_index > 0) {

    }
  
    return {
        // fontFamily: 'Arial', 
        width: width,
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor, 
    }
  }

const cell_style_decAlign = (row_index, col_index) => {
    const borderLeftWidth =  0
    const borderTopWidth = 0
    const borderRightWidth = 0
    const borderBottomWidth = (row_index === 1 && col_index === 1)||( row_index === 1 && col_index ===2) ? 1 : 0
    const backgroundColor = 'white'
    const width = (col_index === 0) ? 20 : 30
    const textAlign = (col_index === 1) ? 'right' : 'left'

    if (col_index > 0) {

    }
  
    return {
        // fontFamily: 'Arial', 
        width: width,
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor, textAlign:textAlign
    }
  }

  const cell_style_divide = (row_index, col_index) => {
    const borderLeftWidth =  0
    const borderTopWidth =  ( col_index === 2) ? 1.5 : 0
    const borderRightWidth = (col_index ===1) ? 2 : 0
    const borderBottomWidth = 0
    const borderTopRightRadius = (col_index === 1) ? 1:  0
    const borderBottomRightRadius = (col_index === 1) ? 60: 0
    // const borderTopLeftRadius = (col_index === 2) ? 1 :0
    const backgroundColor = 'white'
    const width = (col_index === 0 ) ? 20 : (col_index === 1)? 9: 40
    const textAlign = (col_index === 0) ? 'right' : 'left'
    const paddingTop = 3
    const paddingLeft = (col_index ===2) ? 5 : 0
    const paddingRight = (col_index===0) ? 1 : 0
    const marginRight = (col_index===1) ? 0: 0
  
    // const marginLeft = (col_index === 2) ? '0px' : '0px'
    // const fontWeight = (col_index===2) ? 1500: 'normal'
    // const fontWeight = 'bold'
    // const alignItems = (col_index === 2) ? 'flexStart': 'flexEnd'
    // const justifyContent = (col_index === 1) ? 'flexStart': 'flexStart'
    // const verticalAlign = (col_index === 1) ? '10px': 'baseline'

    if (col_index > 0) {

    }
  
    return {
        // fontFamily: 'Arial', 
        width,
        borderLeftWidth, borderRightWidth,
        borderTopWidth, borderBottomWidth,
        borderStyle: "solid",
        backgroundColor, textAlign, paddingLeft,
         marginRight, paddingTop,
        borderTopRightRadius, borderBottomRightRadius, paddingRight,
    }
  }

// export const Table = (data, style_function=(() => {}), style={}, text, direction) => {
//   return (
//     <View style={[tstyles.table, style]}>
//         {data.map((row, row_index) =>
//       <View key={row_index} style={tstyles.row}  wrap={false}>
//         {row.map( (cell, col_index) =>
//                       <View key={col_index} style={[tstyles.cell, style_function(row_index, col_index, data, direction)]}>
//                         {sanitize_block(cell)}
//                       </View>
//                 )
//         }
//       </View>
//     )
//     }
//     <Text>{text}</Text>
//     </View>
//     )
// }

export const verticalAlign = (numberL, op, numberS) => {
    return Table([['', numberL],
                  [op, numberS]], cell_style_fraction, tstyles)
}

export const verticalAlignDec = (numberL, op, numberS) => {
    var [wholeNumberL, decNumberL] = splitDec(numberL)
    var [wholeNumberS, decNumberS] = splitDec(numberS)
    return Table([['', wholeNumberL,'.'+decNumberL],
                  [op, wholeNumberS, '.'+decNumberS]], cell_style_decAlign, tstyles)
}
export const verticalDivide = (numberL, numberS) => {
    return Table([[numberS, ' ',numberL]], cell_style_divide, tstyles)
}