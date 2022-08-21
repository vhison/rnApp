import React from 'react'
import { Text, TouchableOpacity, View, ViewProps, Image } from 'react-native'
import style from '../../styles/globalStyle'
import { translate } from '../../i18n/translate'
const image = require('../../assets/splash.png')
export default function SecondView(props: ViewProps & { onNext(index: number): void }) {
  return (
    <>
      <View style={{ ...style.viewMain, flex: 1 }}>
        <Image source={image} style={style.logo} />
        <View style={style.viewMainSmall}>
          <Text style={style.textSmall}>{translate('splash.caption')}</Text>
          <Text style={style.textLarge}>{translate('splash.headlineSecond')}</Text>
        </View>
        <View style={style.bottomContainer}>
          <View style={style.dotContainer}>
            <TouchableOpacity style={style.dotButtonInActive} />
            <TouchableOpacity onPress={() => props.onNext(2)} style={style.dotButtonActive} />
            <TouchableOpacity style={style.dotButtonInActive} />
          </View>
          <TouchableOpacity onPress={() => props.onNext(2)} style={style.buttonOnBoarding}>
            <Text style={style.buttonDarkText}>{translate('button.next')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
