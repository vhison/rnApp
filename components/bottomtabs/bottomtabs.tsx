import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'
export interface BottomTabsProps {
  leftText: string
  rightText: string
  onLeftSelect(): void
  onRightSelect(): void
}
export function BottomTabs(props: BottomTabsProps) {
  const { leftText, rightText, onLeftSelect, onRightSelect } = props
  return (
    <View style={styles.tabMain}>
      <TouchableOpacity style={styles.tabButtons} onPress={() => onLeftSelect()}>
        <Text style={styles.tabButtonText}>{leftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButtons} onPress={() => onRightSelect()}>
        <Text style={styles.tabButtonText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  tabMain: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: color.palette.white,
    width: '100%',
    height: 90,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: color.palette.lightGrey,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  tabButtons: {
    backgroundColor: color.palette.white,
    width: scale(147),
    maxWidth: '40%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  tabButtonText: {
    fontSize: 16,
    color: color.palette.black,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18.96,
  },
})
