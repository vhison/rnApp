import React from 'react'
import { Image, Text, TouchableOpacity, View, ViewProps } from 'react-native'

import { translate } from '../../i18n/translate'
import style from '../../styles/globalStyle'

const image = require('../../assets/splash.png')
export default function FirstView(props: ViewProps & { onNext(index: number): void }) {
  return (
    <>
      <View style={{ ...style.viewMain, flex: 1 }}>
        <Image source={image} style={style.logo} />
        <View style={style.viewMainSmall}>
          <Text style={style.textSmall}>{translate('splash.caption')}</Text>
          <Text style={style.textLarge}>{translate('splash.headlineFirst')}</Text>
        </View>
        <View style={style.bottomContainer}>
          <View style={style.dotContainer}>
            <TouchableOpacity style={style.dotButtonActive} />
            <TouchableOpacity onPress={() => props.onNext(1)} style={style.dotButtonInActive} />
            <TouchableOpacity style={style.dotButtonInActive} />
          </View>
          <TouchableOpacity onPress={() => props.onNext(1)} style={style.buttonOnBoarding}>
            <Text style={style.buttonDarkText}>{translate('button.next')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
