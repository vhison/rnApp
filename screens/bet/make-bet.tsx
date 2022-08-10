import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
  Modal,
  Alert,
  DeviceEventEmitter,
} from 'react-native'
import Share from 'react-native-share'
import { Searchbar } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'
import WebView from 'react-native-webview'
import { AntDesign } from '@expo/vector-icons'
import { Header, Icons, Button, WelcomeModal } from '../../components'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import { translate } from '../../i18n/translate'
import { color } from '../../theme'
import { scale, verticalScale } from '../../styles/sizes'
import { ShareModelType } from '../../models/api-store'
import { shareIcon } from '../../models/session/session-share-icon'

export interface YourAmountPropTypes {
  amount: string
  percentage: string
}
const title = <Text style={styles.headerContainerCenterText}>{translate('screen.bet')}</Text>
export const MakeBetScreen = observer(() => {
  const navigation = useNavigation()
  const { session } = useStore()
  const store = useStore()
  const route = useRoute()
  const { output, rides, days, rideType, challenges, classes } = route.params
  const webviewRef = React.useRef()
  const [showModal, setShowModal] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [charityOpted, setcharityOpted] = React.useState<string>('')
  const [selectedCharity, setSelectedCharity] = React.useState<[]>()
  const [amount, setAmount] = React.useState<string>('')
  const [amountError, setAmountError] = React.useState<boolean>(false)
  const [charity, setCharity] = React.useState<string>('')
  const [charityError, setCharityError] = React.useState<boolean>(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [limitExceeds, setLimitExceeds] = React.useState('')
  const [searchQueryError, setSearchQueryError] = React.useState<boolean>(false)
  const [isLoading, setLoading] = React.useState(false)
  const [isCheckout, setIsCheckout] = React.useState(true)
  const [betPayload, setBetPayload] = React.useState<object>({})
  const [payAmount, setPayAmount] = React.useState<string>('')

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const optedCharity = debounce((item) => {
    setSelectedCharity(undefined)
    setSearchQuery(item.name)
    setcharityOpted(item.id)
    setSearchQueryError(false)
  }, 250)

  const shareUrl = debounce(async (rides: ShareModelType) => {
    const { url, hash } = rides
    try {
      const title = 'Peddle challenge'
      const message = `\n\nPlease join my Peddle challenge with code${hash}`
      const icon = shareIcon
      const options = Platform.select({
        ios: {
          activityItemSources: [
            {
              placeholderItem: {
                type: 'url',
                content: icon,
              },
              item: {
                default: {
                  type: 'text',
                  content: `${message} ${url}`,
                },
              },
              linkMetadata: {
                title: message,
                icon: icon,
              },
            },
          ],
        },
        default: {
          title,
          subject: title,
          message: `${message} ${url}`,
        },
      })
      Share.open(options)
        .then((res) => {
          console.log('response', res)
          if (res.message) {
            console.log('message :', res)
            DeviceEventEmitter.emit('refreshUser')
            navigation.navigate('drawer', { screen: 'home' })
          }
        })
        .catch((err) => {
          err && console.log('error : ', err)
          Alert.alert('Shared Cancelled', '', [
            {
              text: `${translate('button.ok')}`,
              onPress: () => {
                DeviceEventEmitter.emit('refreshUser')
                navigation.navigate('drawer', { screen: 'home' })
              },
            },
          ])
        })

      // const message = `\n\nCheck out my ride \n\n ${url} \n\nUse Code ${hash}`
      // const message = `\n\nPlease join my Peddle challenge with code${hash}\n\n${url}`
      // if (message) {
      //   const content: ShareContent = { message }
      //   console.log('message==>', content)
      //   const result = await Share.share(content)
      //   if (result.action === Share.sharedAction) {
      //     if (result.activityType) {
      //       console.log('resultactivityType==>', result.activityType)
      //     }
      //     DeviceEventEmitter.emit('refreshUser')
      //     navigation.navigate('drawer', { screen: 'home' })
      //   } else if (result.action === Share.dismissedAction) {
      //     console.log('result dismissed')
      //     DeviceEventEmitter.emit('refreshUser')
      //     navigation.navigate('drawer', { screen: 'home' })
      //   }
      // }
    } catch (error) {
      alert(error.message)
    }
  }, 250)
  const openNativeShare = debounce(async () => {
    try {
      setLoading(true)
      const data = await store.api.mutateCreateRides(betPayload, 'url hash')
      if (data.createRides) {
        console.log('data create rides : ', data.createRides)
        shareUrl(data.createRides)
        // shareUrl({ hash: '2c3df2', url: 'https://app.peddle.bet/rides/2c3df2' })
      }
    } catch (error) {
      console.log('createShare error==>', error)
    } finally {
      setLoading(false)
    }
  }, 250)

  const handleResponse = async (data: any) => {
    console.log('handle response : ', JSON.stringify(data))
    if (session.user) {
      try {
        if (data.url.includes('paymentsuccess') && isCheckout) {
          openNativeShare()
          setIsCheckout(false)
        }
        if (data.url.includes('paymentcancel')) {
          Alert.alert('Failed', 'Please try again', [
            {
              text: `${translate('button.ok')}`,
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
  const shareInvite = debounce(async () => {
    let error = false
    setAmountError(false)
    setCharityError(false)
    if (amount === '') {
      error = true
      setAmountError(true)
    }
    if (charity === '') {
      error = true
      setCharityError(true)
      setLimitExceeds('')
    }
    if (charity !== '') {
      if (limitExceeds !== '') {
        error = true
        charity === '' && setCharityError(false)
      }
    }
    if (searchQuery === '') {
      error = true
      setSearchQueryError(true)
    }
    if (!error) {
      // openNativeShare()
      if (session.user) {
        let payload = {
          amount: parseInt(amount),
          pelotonRideId: session.pelotonUser?.pelotonId,
          userId: session.user._id,
          charityId: charityOpted,
          percentageSplit: parseInt(charity),
          rideType: rideType,
          settings: {
            challenges,
            classes,
            numberOfRides: isNaN(rides) ? 0 : parseInt(rides),
            timeToCompleteDays: parseInt(days),
            output: output,
          },
        }
        console.log('set ride payload : ', JSON.stringify(payload))
        setBetPayload(payload)
        setPayAmount(payload.amount)
      }
    }
  }, 250)
  const linkAndPay = debounce(async () => {
    setPayAmount('')
    if (session.user) {
      try {
        setLoading(true)
        let payload = {
          amount: betPayload.amount.toString(),
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
  }, 250)
  const backButtonHandler = () => {
    setShowModal(false)
    if (webviewRef.current) {
      webviewRef.current.goBack()
    }
  }
  const YourAmount = (props: YourAmountPropTypes) => {
    const { amount, percentage } = props
    const yamount = (parseInt(amount) / 100) * parseInt(percentage)
    return (
      <View style={style.amountContainer}>
        <Icons name="" type="currency" header={false} />
        <Text style={style.amountText}>${isNaN(yamount) ? '0.00' : yamount.toFixed(2)}</Text>
      </View>
    )
  }
  const VerifyLimit = (value: string) => {
    const valueLimit = parseInt(value)
    if (isNaN(valueLimit) || valueLimit < 1 || valueLimit > 100) {
      setLimitExceeds(`${translate('errors.percentage')}`)
    } else {
      setLimitExceeds('')
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.container}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
            centerContent={title}
          />
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            <View style={style.rideSelection}>
              <Text style={style.titleInputDark}>{translate('ride.bet')}</Text>
              <TextInputMask
                placeholder={'$'}
                placeholderTextColor={color.palette.gray}
                style={styles.textInput}
                autoCompleteType="tel"
                keyboardType={'number-pad'}
                maxLength={6}
                returnKeyType="next"
                type={'only-numbers'}
                value={amount}
                onChangeText={(number: string) => {
                  setAmount(number)
                  setAmountError(false)
                }}
                caretHidden={false}
                selectionColor={color.palette.black}
              />
              {amountError && <Text style={styles.error}>{translate('errors.amountRequired')}</Text>}
              <Text style={style.titleInputDark}>{translate('ride.charity')}</Text>
              {Platform.OS === 'web' ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('searchcharity', { optedCharity: (item) => optedCharity(item) })}
                >
                  <Searchbar
                    placeholder="Search"
                    onChangeText={(e) => {
                      setSearchQuery('')
                      setcharityOpted('')
                    }}
                    value={searchQuery}
                    style={styles.searchInput}
                    caretHidden={true}
                  />
                </TouchableOpacity>
              ) : (
                <Searchbar
                  placeholder="Search"
                  onTouchStart={() =>
                    navigation.navigate('searchcharity', { optedCharity: (item) => optedCharity(item) })
                  }
                  onChangeText={(e) => {
                    setSearchQuery('')
                    setcharityOpted('')
                  }}
                  value={searchQuery}
                  style={styles.searchInput}
                  caretHidden={true}
                />
              )}
              {searchQueryError && <Text style={styles.error}>{translate('errors.charityRequired')}</Text>}
              <Text style={style.titleInputDark}>{translate('ride.percent')}</Text>
              <TextInputMask
                placeholder={'%'}
                placeholderTextColor={color.palette.gray}
                style={styles.textInput}
                autoCompleteType="tel"
                keyboardType={'number-pad'}
                maxLength={3}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => shareInvite()}
                type={'only-numbers'}
                value={charity}
                onChangeText={(number: string) => {
                  VerifyLimit(number)
                  setCharity(number)
                  setCharityError(false)
                }}
                caretHidden={false}
                selectionColor={color.palette.black}
              />
              {charityError && <Text style={styles.error}>{translate('errors.percentRequired')}</Text>}
              {limitExceeds !== '' && <Text style={styles.error}>{limitExceeds}</Text>}
            </View>
            <Text style={style.centerHeading}>{translate('ride.amount')}</Text>
            <YourAmount amount={amount} percentage={charity} />
          </ScrollView>
          <Button
            name={`${translate('button.invite')}`}
            type="primary"
            isLoading={false}
            onPress={() => shareInvite()}
          />
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator animating size={40} color="#B81C2D" />
            </View>
          )}
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
  rideContainer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  rideSelection: { alignItems: 'center' },
  titleInputDark: {
    height: 19,
    color: color.palette.black,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: Platform.OS === 'web' ? scale(113) : 20,
  },
  centerHeading: {
    color: color.palette.gray,
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '500',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    width: 168,
    height: 64,
    backgroundColor: color.palette.black,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amountText: {
    color: color.palette.white,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    marginLeft: 9,
  },
  bottomButton: {
    alignItems: 'center',
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
