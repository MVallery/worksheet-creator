import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

export const sanitize_block = (block) => {
  if (typeof(block) === 'string' || typeof(block) === "number") {
      return <Text>{block}</Text>
  } else {
      return block
  }
}
const tstyles = StyleSheet.create({
  table: {
      display: "table",
      width: 220,
      textAlign:'center',
  },
  row: {
      flexDirection: "row",
  },

  header: {
    backgroundColor: 'grey'
  }
});
const Table = (data, style_function=(() => {}), style={}, text, direction) => {
  return (
    <View wrap={false} style={[tstyles.table, style]}>
        {data.map((row, row_index) =>
      <View key={row_index} style={tstyles.row}  wrap={false}>
        {row.map( (cell, col_index) =>
                      <View key={col_index} style={[tstyles.cell, style_function(row_index, col_index, data, direction)]}>
                        {sanitize_block(cell)}
                      </View>
                )
        }
      </View>
    )
    }
    <Text>{text}</Text>
    </View>
    )
}

export default Table