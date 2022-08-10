import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Linking,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Icons, WelcomeModal, Button } from '../../components'
import { WebView } from 'react-native-webview'
import styles from '../../styles/globalStyle'
import { debounce } from 'lodash'
import { useStore } from '../../models'

export const Payment = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment</title>
      <script src="https://www.paypal.com/sdk/js?client-id=ASeo830bH39FEc7r-vOH0CQaeKLpssFoyJwPsvU_2mh-gwa7OJ6pzyfi_6hWhePWpEr98LQp-CzfGN_a&enable-funding=venmo"></script>
      <script> paypal.Buttons().render('#paypal-button-container') </script>
    </head>
    <body>
      <div style="background-color: white; position: relative" >
        <div id="paypal-button-container"></div>
      </div>
    </body>
  </html>`
  // const htmlContent = `
  // <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Payment</title>
  //     <script src="https://www.paypal.com/sdk/js?client-id=${clientId}&enable-funding=venmo"></script>
  //     <script>
  //     paypal.Buttons().render('#paypal-button-container')
  //   </script>
  // </head>
  // <body>
  // <div id="paypal-button-container"></div>
  // </body>
  // </html>

  // const yourAlert = 'alert("hello")'
  const yourAlert =
    '<form name="f1" action="https://www.paypal.com/sdk/js?client-id=ASeo830bH39FEc7r-vOH0CQaeKLpssFoyJwPsvU_2mh-gwa7OJ6pzyfi_6hWhePWpEr98LQp-CzfGN_a&enable-funding=venmo"><button type="submit">Pay</button></form>'

  const linkAndPay = debounce(async () => {
    // try {
    //   // setLoading(true)
    //   let payload = {
    //     amount: '1',
    //     userId: '60c04c9ba622250008c0b409',
    //   }
    //   console.log('paypalPayment payload : ', payload)
      // const data = await store.api.mutatePaypalPayment(payload, 'href method rel')
    //   if (data.paypalPayment) {
    //     console.log('paypalPayment data ==>', data.paypalPayment)

    //     const newData = data.paypalPayment.filter((item) => {
    //       const itemRel = item.rel
    //       return itemRel.indexOf('approval_url') > -1
    //     })
    //     console.log('paypalPayment newData ==>', newData)

    //     const url = newData[0].href
    const url = 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-6YA73707G82781051'
    // const url = 'https://www.paypal.com/sdk/js?client-id=ASeo830bH39FEc7r-vOH0CQaeKLpssFoyJwPsvU_2mh-gwa7OJ6pzyfi_6hWhePWpEr98LQp-CzfGN_a&enable-funding=venmo'
    //     const url = 'https://venmo.com/'
        // const url = 'https://38035ea93834.ngrok.io/Payment/'

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        try {
          Linking.openURL(url)
        } catch (error) {
          Alert.alert('Error', 'Unsupported Link', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
          ])
        }
      } else {
        Alert.alert('Error', 'Unsupported URL', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
        ])
        console.log('Unsupported URL : ' + url)
      }
    })
    // }
    // } catch (error) {
    //   console.log('paypalPayment error==>', error)
    // }
  }, 250)

  return (
    <SafeAreaView style={styles.container}>
      <Header leftContent={<Icons name="Back" type="back" header={true} />} leftPress={() => navigation.goBack()} />
      {/* <>
      <WebView
        style={{ flex: 1, backgroundColor: 'red' }}
        scalesPageToFit={true}
        injectedJavaScript={'(function(){return "Send me back!"}());'}
        // onNavigationStateChange={(navEvent) => getCode(navEvent)}
        source={{
          uri: 'https://www.google.com',
        }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        // onShouldStartLoadWithRequest={(e) => alert('calll==>>', e)}
      />     
    </> */}
      {/* <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // injectedJavaScript={yourAlert}
        source={{
          uri:
            'venmosdk://venmo.com/?client=ios&txn=charge&app_version=1.3.0&amount=10.00&recipients=@Anthony-Wentzel&note=Freebird',
        }}
        // source={{ html: htmlContent }}
        style={{ flex: 1 }}
        onMessage={(event) => {
          console.log('ev: ', event)
          //   alert(event.nativeEvent.data)
        }}
      /> */}
      <Modal
        // animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={yourAlert}
          // source={{ uri: 'https://www.google.com' }}
          source={{ html: htmlContent }}
          style={{ flex: 1, marginVertical: 100, backgroundColor: 'yellow' }}
          onMessage={(event) => {
            alert('1' + event.nativeEvent.data)
          }}
          onError={(error) => {
            alert('2' + error)
          }}
          onNavigationStateChange={(navState) => {
            // Keep track of going back navigation within component
            // console.log('3 A : ' + JSON.stringify(navState))
            console.log('3 B : ' + navState.canGoBack)
          }}
          onContentProcessDidTerminate={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent
            console.warn('Content process terminated, reloading', nativeEvent)
          }}
          // originWhitelist={['*']}
          // allowFileAccessFromFileURLs={true}
          // allowsBackForwardNavigationGestures={true}
          // allowUniversalAccessFromFileURLs={true}
          // pagingEnabled={true}
          // allowsLinkPreview={true}
          // enableApplePay={true}
          // setSupportMultipleWindows={true}
          // javaScriptCanOpenWindowsAutomatically={true}
        />
        <Button name="Close Pay" type="primary" isLoading={false} onPress={() => setModalVisible(false)} />
      </Modal>
      <Button name="Open Pay" type="primary" isLoading={false} onPress={() => setModalVisible(true)} />
      <Button name="Open Paypal" type="primary" isLoading={false} onPress={() => linkAndPay()} />
    </SafeAreaView>
  )
})
