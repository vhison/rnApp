import * as React from 'react'
import { TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native'
import { styles } from './styles'
/**
 *
 * This component is a HOC over the built-in React Native one.
 */
export interface ButtonPropTypes {
  name: string
  type: string
  isLoading: boolean
  onPress(): void
}
export function Button(props: ButtonPropTypes) {
  const { name, type, isLoading, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === 'primary'
          ? styles.buttonDark
          : type === 'tertiary'
          ? styles.modalFooterButton
          : type === 'primarysmall'
          ? styles.buttonSmall
          : type === 'primarythin'
          ? styles.buttonThin
          : styles.buttonWhite
      }
    >
      {type === 'primary' && <Text style={styles.buttonDarkText}>{name}</Text>}
      {type === 'primarythin' && <Text style={styles.buttonThinText}>{name}</Text>}
      {type === 'primarysmall' && <Text style={styles.buttonDarkText}>{name}</Text>}
      {type === 'secondary' && <Text style={styles.buttonWhiteText}>{name}</Text>}
      {type === 'tertiary' && (
        <View style={styles.modalFooterButtonView}>
          <Text style={styles.modalFooterButtonText}>{name}</Text>
          <Image style={styles.modalFooterButtonIcon} source={require('../../assets/arrowdownIcon.png')} />
        </View>
      )}
      {isLoading && <ActivityIndicator size="small" color="#fff" style={styles.buttonLoading} />}
    </TouchableOpacity>
  )
}
