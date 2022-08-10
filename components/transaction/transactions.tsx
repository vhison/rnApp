import * as React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import moment from 'moment'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'
import { capitalize } from '../../utils/helper'

export interface Transactions {
  data: {}
}
export function Transactions(props: Transactions) {
  const { data } = props
  return (
    <View style={style.cardMain}>
      <Text style={style.cardHeaderName}>{capitalize(data.state)}</Text>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Amount</Text>
        <Text style={style.cardPrice}>
          {data.transactions[0].amount.total + ' ' + data.transactions[0].amount.currency}
        </Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Payer</Text>
        <Text style={style.cardLabel}>
          {capitalize(data.payer.payer_info.first_name) + ' ' + capitalize(data.payer.payer_info.last_name)}
        </Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Country</Text>
        <Text style={style.cardLabel}>{data.payer.payer_info.country_code}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Method</Text>
        <Text style={style.cardLabel}>{capitalize(data.payer.payment_method)}</Text>
      </View>
      <View style={style.cardRow}>
        <Text style={style.cardHeaderDetail}>Date</Text>
        <Text style={style.cardLabel}>{moment(new Date(data.createdAt)).format('DD MMM YYYY, h:mm:ss A')}</Text>
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
  cardHeaderName: {
    color: color.palette.limegreen,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textTransform: 'capitalize',
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardHeaderDetail: { color: color.palette.gray, fontWeight: '400', fontSize: 12, lineHeight: 14 },
  cardLabel: { color: color.palette.black },
  cardPrice: { color: color.palette.HighSlateBlue },
})
