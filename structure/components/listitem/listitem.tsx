import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { color } from '../../theme/color'
export interface ListItemProps {
  _id: string
  rank: string
  title: string
  duration: string
  label: string
  startDate: string
  endDate: string
  numberOFWeek: string
  selected: boolean
  createdAt: string
  onSelect(): void
}
export function ListItem(props: ListItemProps) {
  const { _id, rank, title, duration, label, startDate, endDate, numberOFWeek, selected, createdAt, onSelect } = props
  return (
    <View
      style={[
        styles.listItemMain,
        { backgroundColor: selected ? color.palette.HighSlateOpacity : color.palette.white, alignSelf: 'center' },
      ]}
    >
      <View style={styles.listItemLeft}>
        <Text style={styles.rankText}>#{rank}</Text>
        <Text style={styles.rankLabel}>Rank</Text>
      </View>
      <View style={styles.listItemCenter}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.listItemTitle}>
          {title}
        </Text>
        <Text style={styles.listItemDescription}>{duration}</Text>
        <Text style={styles.itemLabel}>{label}</Text>
        <View style={styles.itemRow}>
          <Text style={styles.itemRowtext}>{startDate}</Text>
          <Text style={styles.itemRowtext}>- {endDate}</Text>
          {/* <Text style={styles.itemRowtext}> {numberOFWeek} week</Text> */}
        </View>
      </View>
      {/* <TouchableOpacity onPress={onSelect} style={styles.listItemRight}>
        <Text style={styles.itemRightText}> Select </Text>
      </TouchableOpacity> */}
    </View>
  )
}
