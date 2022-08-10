import parsePhoneNumber from 'libphonenumber-js'
import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native'
import { Button, Header, Icons } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import { verticalScale } from '../../styles/sizes'

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : Platform.OS === 'android'
    ? NativeModules.I18nManager.localeIdentifier
    : navigator.languages && navigator.languages.length > 1
    ? navigator.languages[0]
    : 'en-US'

export const SignUp = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [phoneNumber, setPhoneNumber] = React.useState<string>('')
  const [phoneNumberFormat, setPhoneNumberFormat] = React.useState<string>('')
  const [isUS, setIsUS] = React.useState<boolean>(deviceLanguage.indexOf('en') > -1)
  const [phoneNumberError, setPhoneNumberError] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const onSubmit = debounce(async () => {
    let error = false
    setPhoneNumberError(false)
    const phone = parsePhoneNumber(`+${phoneNumber}`)
    if (phoneNumber === '' || !phone?.isPossible()) {
      error = true
      setPhoneNumberError(true)
    }
    if (!error) {
      setIsLoading(true)
      try {
        const payload = { phoneNumber }
        const response = await store.api.mutateSignup(payload, '_id phoneNumber updatedAt')
        if (response.signup?.phoneNumber) {
          store.session.setUser(response.signup)
          navigation.navigate('verifycode', { phoneNumber: phoneNumberFormat })
        }
      } catch (error) {
        Alert.alert(`${translate('errors.signup')}`)
        console.log('error======>', error)
      } finally {
        setIsLoading(false)
      }
    }
  }, 250)

  const placeholder = isUS ? '+1 (555) 555-1234' : '+(61) 40-12-3456'
  const dddMask = isUS ? '+1 (999) 999-9999' : '+(99) 99-99-9999'

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.containerWhite}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
          />
          <View style={[styles.container, { alignItems: 'center', paddingBottom: 18 }]}>
            <View style={[styles.viewMainLarge, { paddingTop: verticalScale(15) }]}>
              <Text style={styles.textLarge}>{translate('signup.headline')}</Text>
              <Text style={styles.textSmallWithPadding}>{translate('signup.subheading')}</Text>
            </View>
            <>
              <TextInputMask
                placeholder={placeholder}
                placeholderTextColor="#989898"
                style={styles.textInput}
                autoCompleteType="tel"
                keyboardType={'number-pad'}
                maxLength={18}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => onSubmit()}
                type={'cel-phone'}
                options={{
                  dddMask,
                  withDDD: true,
                  unit: '+',
                }}
                value={phoneNumber !== '' ? phoneNumber : undefined}
                onChangeText={(number: string) => {
                  const num = number.replace(/\D/g, '').trim()
                  setIsUS(num.startsWith('1'))
                  setPhoneNumber(num)
                  setPhoneNumberFormat(number)
                }}
                autoFocus={true}
                caretHidden={false}
                selectionColor="#989898"
              />
              {phoneNumberError && <Text style={styles.errorText}>{translate('errors.phoneNumber')}</Text>}
            </>
            <Button
              name={`${translate('button.continue')}`}
              type="primary"
              onPress={() => onSubmit()}
              isLoading={isLoading}
            />
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.textSmall}>{translate('signup.caption')}</Text>
            <View style={styles.viewMainRow}>
              <Pressable onPress={() => console.log('Terms of Use')}>
                <Text style={styles.linkText}>{translate('signup.termsText')} </Text>
              </Pressable>
              <Text style={styles.textSmall}>{translate('signup.and')} </Text>
              <Pressable onPress={() => console.log('Privacy Policy')}>
                <Text style={styles.linkText}> {translate('signup.privacyText')}</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
