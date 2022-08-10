import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

const en = require('./en')
const ja = require('./ja')

i18n.fallbacks = true
i18n.translations = { en, ja }

const fallback = { languageTag: 'en', isRTL: false }

i18n.locale = Localization.locale || fallback

// loadFonts = async () => {
//   await Font.loadAsync({
//     icomoon: require('@assets/fonts/icomoon.ttf'),
//     Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
//   })
//   const { isRTL } = await Localization.getLocalizationAsync()
//   I18nManager.forceRTL(isRTL)
//   await I18n.initAsync()
// }
