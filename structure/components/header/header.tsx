import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
export function Header(props: any) {
  const { leftContent, centerContent, rightContent, leftPress, rightPress } = props
  return (
    <View style={styles.headerContainer}>
      <View style={styles.itemLeft}>
        <TouchableOpacity onPress={leftPress}>{leftContent}</TouchableOpacity>
      </View>
      <View style={styles.itemCenter}>{centerContent}</View>
      <View style={styles.itemRight}>
        <TouchableOpacity onPress={rightPress}>{rightContent}</TouchableOpacity>
      </View>
    </View>
  )
}
