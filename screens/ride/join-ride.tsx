import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native'
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import WebView from 'react-native-webview'
import { AntDesign } from '@expo/vector-icons'
import { Header, Icons, Button, WelcomeModal } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import { scale, verticalScale } from '../../styles/sizes'
import styles from '../../styles/globalStyle'
import { color } from '../../theme'

export const JoinRideScreen = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const route = useRoute()
  const webviewRef = useRef()
  const [showModal, setShowModal] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [bet, setBet] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [code, setCode] = React.useState<string>(route.params ? route.params.hash : '')
  const [payAmount, setPayAmount] = React.useState<string>('')
  const [codeError, setCodeError] = React.useState<boolean>(false)

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const handleResponse = async (data: any) => {
    console.log('handle response : ', JSON.stringify(data))
    if (session.user) {
      try {
        if (data.url.includes('paymentsuccess')) {
          // let url = data.url
          // let regex = /[?&]([^=#]+)=([^&#]*)/g,
          //   params = {},
          //   match
          // while ((match = regex.exec(url))) {
          //   params[match[1]] = match[2]
          // }
          // const payload = {
          //   amount: '1',
          //   payerId: params.PayerID,
          //   paymentId: params.paymentId,
          //   state: 'pending',
          //   userId: session.user?._id,
          // }
          // console.log('payload==> ', payload)
          // const response = await store.api.mutateCreatePayment(payload)
          // console.log('response PurchaseRequest==> ', response)

          // ACCEPT CHALLENGE TO ADD CHALLENGE TO THE USER
          const payload = {
            hash: code,
            betId: bet._id,
            rideId: bet.rideId._id,
            userId: session.user?._id,
          }
          const response = await store.api.mutateAcceptChallenge(payload)
          setCode('')
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'thankyou' }],
            })
          )
        }
        if (data.url.includes('paymentcancel')) {
          Alert.alert('Failed', 'Please try again', [
            {
              text: 'Ok',
              onPress: () => navigation.goBack(),
              style: 'cancel',
            },
          ])
        }
      } catch (error) {
        console.log('PurchaseRequest error==> ', error)
      }
    }
  }

  const openPaypalLoginPage = async () => {
    if (session.user) {
      try {
        setLoading(true)
        let payload = {
          // amount: '1',
          amount: bet.amount.toString(),
          userId: session.user._id,
        }
        console.log('payment payload >>>>>', payload)
        const data = await store.api.mutatePaypalPayment(payload, 'href method rel')
        if (data.paypalPayment) {
          const paymentLinks = data.paypalPayment.filter((item) => {
            const itemRel = item.rel
            return itemRel.indexOf('approval_url') > -1
          })
          const paypalUrl = paymentLinks[0].href
          console.log('approval_url : ', paypalUrl)
          // const paypalUrl = 'https://app-dev.peddle.bet/venone.html'
          if (paypalUrl) {
            setUrl(paypalUrl)
            if (Platform.OS === 'web') {
              window.open(paypalUrl, '_blank')
            } else {
              setShowModal(true)
            }
          }
        }
      } catch (error) {
        console.log('error===>>', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const joinChallenge = debounce(async () => {
    let error = false
    setCodeError(false)
    if (code === '') {
      error = true
      setCodeError(true)
    }
    if (!error) {
      if (session.user) {
        try {
          setLoading(true)
          let payload = {
            hash: code,
          }
          const data = await store.api.mutateJoinChallenge(
            payload,
            '_id userId betId { _id amount charityId percentageSplit rideType settings { numberOfRides output timeToCompleteDays } rideId { _id } } createdAt hash url'
          )
          if (data.joinChallenge) {
            if (data.joinChallenge[0].userId === session.user._id) {
              Alert.alert('Alert', `${translate('errors.challenge')}`, [
                {
                  text: `${translate('button.ok')}`,
                  onPress: () => navigation.goBack(),
                  style: 'cancel',
                },
              ])
            } else {
              let betData = data.joinChallenge[0].betId
              setPayAmount(betData[0].amount)
              setBet(betData[0])
            }
          }
        } catch (error) {
          alert('Please enter the correct code.')
        } finally {
          setLoading(false)
        }
      }
    }
  }, 250)

  const linkAndPay = debounce(async () => {
    setPayAmount('')
    openPaypalLoginPage()
  }, 250)

  const backButtonHandler = () => {
    setShowModal(false)
    if (webviewRef.current) {
      webviewRef.current.goBack()
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.container}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
          />
          <View style={style.rideContainer}>
            <Text style={style.headingText}>{translate('join.code')}</Text>
            <Text style={style.descriptionText}>{translate('splash.headlineSecond')}</Text>
            <TextInput
              style={styles.textInput}
              label="Invited code"
              placeholderTextColor="#989898"
              theme={{ colors: { primary: 'grey' } }}
              underlineColor="transparent"
              caretHidden={false}
              selectionColor="#989898"
              value={code}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(number: string) => {
                setCode(number)
                setCodeError(false)
              }}
              returnKeyType="done"
              blurOnSubmit={true}
              onSubmitEditing={() => joinChallenge()}
            />
            {codeError && <Text style={styles.error}>{translate('errors.codeRequired')}</Text>}
            <Button
              name={`${translate('button.join')}`}
              type="primary"
              isLoading={false}
              onPress={() => joinChallenge()}
            />
          </View>
          {payAmount !== '' && Platform.OS === 'web' && (
            <View style={{ position: 'absolute', top: verticalScale(200), left: scale(160) }}>
              <WelcomeModal
                heading={payAmount}
                title={`${translate('join.pay')}`}
                type="connectPaypal"
                onCancel={() => setPayAmount('')}
                onContinue={() => linkAndPay()}
                onClickLink={() => console.log('Open Link')}
              />
            </View>
          )}
          {payAmount !== '' && Platform.OS !== 'web' && (
            <WelcomeModal
              heading={payAmount}
              title={`${translate('join.pay')}`}
              type="connectPaypal"
              onCancel={() => setPayAmount('')}
              onContinue={() => linkAndPay()}
              onClickLink={() => console.log('Open Link')}
            />
          )}
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator animating size={40} color="#B81C2D" />
            </View>
          )}
          {showModal && Platform.OS !== 'web' && (
            <Modal
              visible={showModal}
              onRequestClose={() => setShowModal(false)}
              style={{ width: '100%', height: '100%' }}
            >
              <View style={style.backMainContainer}>
                <TouchableOpacity style={style.backContainer} onPress={backButtonHandler}>
                  <AntDesign onPress={() => navigation.goBack()} name="arrowleft" size={24} color="#000" />
                  <Text style={style.back}>{translate('button.back')}</Text>
                </TouchableOpacity>
                <View>
                  <Text style={style.screenName}>{translate('screen.pay')}</Text>
                </View>
                <View style={{ width: 60 }} />
              </View>
              <WebView
                ref={webviewRef}
                style={{ flex: 1, backgroundColor: '#1E2026' }}
                scalesPageToFit={true}
                source={{
                  uri: url,
                }}
                onNavigationStateChange={(data) => handleResponse(data)}
                injectedJavaScript={`document.f1.submit()`}
                startInLoadingState={true}
                javaScriptEnabled={true}
                incognito={true}
              />
              {isLoading && (
                <View style={styles.loadingIndicator}>
                  <ActivityIndicator animating size={40} color="#B81C2D" />
                </View>
              )}
            </Modal>
          )}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
const style = StyleSheet.create({
  rideContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    color: color.palette.black,
    textAlign: 'center',
  },
  descriptionText: {
    width: 220,
    height: 34,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: color.palette.gray,
    textAlign: 'center',
    marginVertical: 10,
  },
  back: {
    color: '#000',
    fontSize: 14,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  backMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 21,
    justifyContent: 'space-between',
    height: 120,
    backgroundColor: 'transparent',
  },
  screenName: {
    fontSize: 14,
    lineHeight: 16.59,
    fontWeight: '400',
    color: '#000',
  },
})
