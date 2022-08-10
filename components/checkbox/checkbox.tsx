import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icons } from '../icons/icons'
import { styles } from './styles'
/**
 * This component is a HOC over the built-in React Native one.
 */
export interface CheckBoxPropTypes {
  name: string
  type: string
  info: boolean
  onPress(): void
  getInfo(): void
}
export function CheckBox(props: CheckBoxPropTypes) {
  const { name, type, info, onPress, getInfo } = props
  return (
    <TouchableOpacity onPress={onPress} style={type === 'primary' ? styles.buttonDark : styles.buttonWhite}>
      <View style={[styles.rowView, { alignItems: 'center' }]}>
        {type === 'primary' ? (
          <Icons name="" type="select" header={false} />
        ) : type === 'tick' ? (
          <Icons name="" type="tick" header={false} />
        ) : (
          <Icons name="" type="unselect" header={false} />
        )}
        <Text style={[styles.buttonDarkText, { marginLeft: 14 }]}>{name}</Text>
      </View>
      {info && (
        <TouchableOpacity style={styles.rightContent} onPress={getInfo}>
          <Icons name="" type="infosmall" header={false} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}
