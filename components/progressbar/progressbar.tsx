import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { color } from '../../theme'
/**
 *
 * This component is a HOC over the built-in React Native one.
 */
export interface ProgressBarPropTypes {
  title: string
  range: string
  total: string
}
export function ProgressBar(props: ProgressBarPropTypes) {
  const { title, range, total } = props
  const totalRange = parseInt(total)
  const rangeValue = parseInt(range)
  const calculatedRange = parseInt(((rangeValue * 100) / totalRange).toString())
  return (
    <View style={style.barRow}>
      <Text style={style.barTitle}>{title}</Text>
      <View
        style={[
          style.barRange,
          {
            width: calculatedRange,
            backgroundColor:
              rangeValue >= 81 && rangeValue <= 100
                ? color.palette.HighSlateBlue
                : rangeValue >= 61 && rangeValue <= 80
                ? color.palette.gradeA
                : rangeValue >= 51 && rangeValue <= 60
                ? color.palette.gradeB
                : rangeValue >= 31 && rangeValue <= 50
                ? color.palette.gradeC
                : rangeValue >= 11 && rangeValue <= 30
                ? color.palette.gradeD
                : color.palette.gradeE,
          },
        ]}
      />
      <Text style={style.barPoints}>{calculatedRange}pts</Text>
    </View>
  )
}
const style = StyleSheet.create({
  barRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 },
  barTitle: {
    color: color.palette.black,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
    width: 80,
  },
  barRange: {
    height: 15,
    opacity: 0.8,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  barPoints: { color: color.palette.gray, fontSize: 10, lineHeight: 12 },
})
