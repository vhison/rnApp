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
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import WebView from 'react-native-webview'
import { translate } from '../../i18n/translate'
import { WelcomeModal } from '../../components'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'

export const AcceptChallenge = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const route = useRoute()
  const { hash } = route.params
  console.log('HASH code : ', hash)
  const webviewRef = useRef()
  const [showModal, setShowModal] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)
  const [bet, setBet] = React.useState([])
  const [payAmount, setPayAmount] = React.useState<string>('dsdsd')
  React.useEffect(() => {
    const url = store.session.linkingUrl
    return () => {
      session.clearLinkingUrl()
    }
  }, [])

  const handleResponse = async (data: any) => {
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
            hash,
            betId: bet._id,
            rideId: bet.rideId._id,
            userId: session.user?._id,
          }
          console.log('AcceptChallenge payload==> ', payload)
          const response = await store.api.mutateAcceptChallenge(payload)
          console.log('response mutateAcceptChallenge==> ', response)
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
              onPress: () => resetRoute(),
              style: 'cancel',
            },
          ])
        }
      } catch (error) {
        console.log('PurchaseRequest error==> ', error)
      } finally {
        session.clearLinkingUrl()
      }
    }
  }
  const openPaypalLoginPage = async (bet) => {
    if (session.user) {
      try {
        setLoading(true)
        let payload = {
          amount: '2',
          // amount: bet.amount.toString(),
          userId: session.user._id,
        }
        const data = await store.api.mutatePaypalPayment(payload, 'href method rel')
        if (data.paypalPayment) {
          const paymentLinks = data.paypalPayment.filter((item) => {
            const itemRel = item.rel
            return itemRel.indexOf('approval_url') > -1
          })
          const paypalUrl = paymentLinks[0].href
          // const paypalUrl = 'https://app-dev.peddle.bet/ven.html'
          // const paypalUrl = 'https://app-dev.peddle.bet/venone.html'
          if (paypalUrl) {
            setUrl(paypalUrl)
            if (Platform.OS == 'web') {
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

  const acceptRide = async () => {
    setPayAmount('')
    if (session.user) {
      try {
        setLoading(true)
        let payload = {
          hash,
        }
        const data = await store.api.mutateJoinChallenge(
          payload,
          '_id userId betId { _id amount charityId percentageSplit rideType settings { numberOfRides output timeToCompleteDays } rideId { _id } } createdAt hash url'
        )
        if (data.joinChallenge) {
          console.log('data.joinChallenge : ', data.joinChallenge)
          if (data.joinChallenge[0].userId === session.user._id) {
            Alert.alert('Alert', `${translate('errors.challenge')}`, [
              {
                text: `${translate('button.ok')}`,
                onPress: () => resetRoute(),
                style: 'cancel',
              },
            ])
          } else {
            let betData = data.joinChallenge[0].betId
            if (betData) {
              setBet(betData[0])
              openPaypalLoginPage(betData[0])
            }
          }
        }
      } catch (error) {
        console.log('acceptChallenge error==>', error)
      } finally {
        setLoading(false)
      }
    }
  }
  const backButtonHandler = () => {
    setShowModal(false)
    if (webviewRef.current) {
      webviewRef.current.goBack()
    }
  }
  const resetRoute = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'drawer' }],
      })
    )
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setPayAmount('')
          resetRoute()
        }}
      >
        <SafeAreaView style={styles.container}>
          {payAmount !== '' && (
            <WelcomeModal
              heading="Accept Challenge"
              title={`${translate('join.accept')}`}
              type="accept"
              onCancel={() => {
                setPayAmount('')
                resetRoute()
              }}
              onContinue={() => acceptRide()}
              onClickLink={() => null}
            />
          )}
          {showModal && Platform.OS !== 'web' && (
            <Modal
              visible={showModal}
              onRequestClose={() => setShowModal(false)}
              style={{ width: '100%', height: '100%' }}
            >
              <View style={style.backMainContainer}>
                <TouchableOpacity style={style.backContainer} onPress={backButtonHandler}>
                  <AntDesign onPress={() => resetRoute()} name="arrowleft" size={24} color="#000" />
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
