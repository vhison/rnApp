import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import style from '../../styles/globalStyle'
import { translate } from '../../i18n/translate'
const image = require('../../assets/splash.png')
export default function ThirdView() {
  const navigation = useNavigation()
  const goSignup = () => {
    navigation.navigate('signup')
  }
  return (
    <View style={{ ...style.viewMain, flex: 1 }}>
      <Image source={image} style={style.logo} />
      <View style={style.viewMainSmall}>
        <Text style={style.textSmall}>{translate('splash.caption')}</Text>
        <Text style={style.textLarge}>{translate('splash.headlineThird')}</Text>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.dotContainer}>
          <TouchableOpacity style={style.dotButtonInActive} />
          <TouchableOpacity style={style.dotButtonInActive} />
          <TouchableOpacity onPress={() => goSignup()} style={style.dotButtonActive} />
        </View>
        <TouchableOpacity onPress={() => goSignup()} style={style.buttonOnBoarding}>
          <Text style={style.buttonDarkText}>{translate('button.finish')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
