import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native'
import OTPTextView from 'react-native-otp-textinput'
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native'
import { Button, Header, Icons } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import { scale } from '../../styles/sizes'
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
    <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
      <SafeAreaView style={styles.containerWhite}>
        <Header
          leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
          leftPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.headings}>
            <Text style={styles.textLarge}>{translate('verification.headline')}</Text>
            <Text style={styles.textOuter}>
              {translate('verification.subheading')}
              <Text style={styles.textMediumBold}> {phoneNumber}</Text>
            </Text>
          </View>
          <View style={style.otpContainer}>
            <OTPTextView
              autoFocusOnLoad
              handleTextChange={(text: any) => {
                setPasscode(text)
              }}
              textInputStyle={{
                alignSelf: 'center',
                width: '12%',
                height: 60,
                borderBottomColor: 'gray',
                borderBottomWidth: 2,
              }}
              containerStyle={{ maxWidth: scale(110) }}
              tintColor="#F1F5F9"
              offTintColor="#F1F5F9"
              inputCount={6}
              inputCellLength={1}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.viewMainLargeEnd}>
            <Button
              name={`${translate('button.verify')}`}
              type="primary"
              onPress={() => onSubmit()}
              isLoading={isLoading}
            />
          </View>
          <View style={styles.viewMainLargeEnd}>
            <Text style={styles.textSmall}>{translate('verification.caption')}</Text>
            <Pressable onPress={() => resendCode()}>
              <Text style={styles.linkTextDanger}>{translate('verification.resendText')}</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
})
const style = StyleSheet.create({
  headings: {
    backgroundColor: color.palette.white,
    marginLeft: scale(15),
    marginRight: scale(50),
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingTop: 115,
  },
  otpContainer: { alignItems: 'center', marginVertical: 10 },
})
