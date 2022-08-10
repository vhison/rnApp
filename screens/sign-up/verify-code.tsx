import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native'
import { Header, Icons } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import { color } from '../../theme'

export const VerifyCode = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const route = useRoute()
  const { phoneNumber } = route.params
  const [allNumbers, setAllNumbers] = React.useState<string[]>([])
  const [verifyError, setVerifyError] = React.useState<string>('')
  const [code, setPasscode] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (code.length === 6) {
      Keyboard.dismiss()
      onSubmit()
    }
  }, [code])

  const resendCode = debounce(async () => {
    setIsLoading(true)
    setPasscode('')
    setVerifyError('')
    const { phoneNumber } = session.user!
    try {
      if (phoneNumber) {
        await store.api.mutateResendCode({ phoneNumber })
      }
    } catch (error) {
      console.error('ResendCode Error==>>', error)
      setVerifyError(`${translate('errors.codeInvalid')}`)
    } finally {
      setIsLoading(false)
    }
  }, 250)

  const onSubmit = debounce(async () => {
    const { phoneNumber } = session.user!
    setVerifyError('')
    try {
      setIsLoading(true)
      if (phoneNumber && code) {
        await session.verifyCode({ phoneNumber, code })
        if (session.token !== '') {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'drawer' }],
            })
          )
        }
      }
    } catch (error) {
      console.error('VerifyCode Error ==>', error)
      setVerifyError(`${translate('errors.codeInvalid')}`)
    } finally {
      setIsLoading(false)
    }
  }, 250)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.containerWhite}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewMainLarge}>
              <View style={[styles.viewMainLarge, { paddingTop: 115 }]}>
                <Text style={styles.textLarge}>{translate('verification.headline')}</Text>
                <Text style={styles.textOuter}>
                  {translate('verification.subheading')}
                  <Text style={styles.textMediumBold}> {phoneNumber}</Text>
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <OTPInputView
                style={{ width: '80%', height: 60 }}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={style.underlineStyleBase}
                codeInputHighlightStyle={style.underlineStyleHighLighted}
                onCodeFilled={(code) => setPasscode(code)}
                secureTextEntry={true}
                selectionColor={color.palette.HighSlateBlue}
              />
            </View>
          </ScrollView>
          <View style={style.bottomLinks}>
            <Text style={styles.textSmall}>{translate('verification.caption')}</Text>
            <Pressable onPress={() => resendCode()}>
              <Text style={styles.linkTextDanger}>{translate('verification.resendText')}</Text>
            </Pressable>
          </View>
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator animating size={40} color={color.palette.HighSlateBlue} />
            </View>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
const style = StyleSheet.create({
  underlineStyleBase: {
    width: 30,
    height: 60,
    borderBottomColor: color.palette.gray,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    color: color.palette.black,
  },
  underlineStyleHighLighted: {
    borderBottomColor: color.palette.HighSlateBlue,
    borderBottomWidth: 2,
  },
  bottomLinks: {
    flex: 2,
    backgroundColor: color.palette.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
