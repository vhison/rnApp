import * as React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import moment from 'moment'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

export interface Workout {
  rideType: string
  numberOfRides: string
  output: string
  timeToCompleteDays: string
  challengers: string
  createdAt: string
}
export function Workout(props: Workout) {
  const { rideType, numberOfRides, output, timeToCompleteDays, challengers, createdAt } = props
  return (
    <View style={style.cardMain}>
      <Text style={style.cardHeaderName}>{rideType}</Text>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Number of Rides</Text>
        <Text style={style.cardLabel}>{numberOfRides}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Output Type</Text>
        <Text style={style.cardLabel}>{rideType === 'leader' ? 'Classes' : output}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Number of Days</Text>
        <Text style={style.cardLabel}>{timeToCompleteDays}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Challengers</Text>
        <Text style={style.cardLabel}>{challengers}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Date</Text>
        <Text style={style.cardLabel}>{moment(new Date(createdAt)).format('DD MMM YYYY, h:mm:ss A')}</Text>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  cardMain: {
    width: Platform.OS === 'web' ? scale(150) : scale(335),
    padding: 10,
    backgroundColor: color.palette.white,
    marginVertical: 7.5,
    borderRadius: 10,
    shadowColor: color.palette.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardHeaderName: {
    color: color.palette.black,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textTransform: 'capitalize',
  },
  cardHeaderDetail: {
    color: color.palette.gray,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
  cardLabel: { color: color.palette.black },
})
