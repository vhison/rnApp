import * as React from 'react'
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native'
import { Avatar } from 'react-native-paper'
import { ProgressBar } from '../progressbar/progressbar'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'
import moment from 'moment'

export interface ProgressCardPropTypes {
  name: string
  points: string
  bet: any
  data: any
  participants: any
  date: string
}
export function ProgressCard(props: ProgressCardPropTypes) {
  const { name, points, bet, data, participants, date } = props
  const betData = bet[0]
  const dateStamp = moment(new Date(parseInt(date))).format('MMM DD, YYYY, h:mm:ss A')
  return (
    <View style={style.cardMain}>
      <View style={style.cardHeader}>
        <Text style={style.cardHeaderName}>{name}</Text>
        {betData !== undefined && (
          <Text style={style.cardLabel}>{name === 'leader' ? 'Classes' : betData.settings.output}</Text>
        )}
        <View style={style.cardRowOne}>
          <Text style={style.cardHeaderDetail}>
            Your total points (<Text style={style.cardLabel}>{points} Max</Text> )
          </Text>
        </View>
        <View style={style.cardRowOne}>
          <Text style={style.cardHeaderDetail}>
            Participants <Text style={style.cardLabel}>{participants}</Text>
          </Text>
        </View>
        {date !== '' && (
          <View style={style.cardRowTwo}>
            <Avatar.Icon size={18} icon="calendar" style={{ backgroundColor: color.palette.HighSlateBlue }} />
            <Text style={[style.cardHeaderDetail, { paddingLeft: 5 }]}>{dateStamp}</Text>
          </View>
        )}
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProgressBar
            title={item.display_name}
            range={item.average_value === null ? '0' : item.average_value.toString()}
            total={item.max_value === null ? '100' : item.max_value.toString()}
          />
        )}
        keyExtractor={(item, index) => 'challenge_' + index}
        ListEmptyComponent={<View />}
      />
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
  cardHeader: {
    paddingBottom: 10,
  },
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
  cardRowOne: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardRowTwo: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 5 },
})
