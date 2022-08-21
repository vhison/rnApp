import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  BackHandler,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Icons, Transactions } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { useStore } from '../../models'

const image = require('../../assets/splash.png')
const title = <Text style={styles.headerContainerCenterText}>{translate('screen.transactions')}</Text>
export const TransactionHistory = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [transactions, setTransactions] = React.useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isRefresh, setIsRefresh] = React.useState(false)

  React.useEffect(() => {
    getUserTransactions()
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])
  const getUserTransactions = async () => {
    if (session.user) {
      try {
        setIsLoading(true)
        const payload = { userId: session.user._id }
        const response = await store.api.queryGetPaymentHistory(
          payload,
          '_id state paymentId createdAt payer { payment_method status payer_info { email first_name last_name payer_id country_code } } transactions { amount { total currency } }',
          { fetchPolicy: 'no-cache' }
        )
        if (response.getPaymentHistory) {
          setTransactions(response.getPaymentHistory)
        }
      } catch (error) {
        console.log('getUserTransactions error======>', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <ImageBackground source={image} style={{ ...style.image }}>
      <View style={{ backgroundColor: 'rgba(255,255,255,.9)', flex: 1 }}>
        <SafeAreaView style={styles.fullHeight}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
            centerContent={title}
          />
          <FlatList
            data={transactions}
            renderItem={({ item }) => <Transactions data={item} />}
            keyExtractor={(item, index) => 'ride_' + index}
            contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
            ListEmptyComponent={
              <View style={{ alignItems: 'center' }}>
                <Text style={{ paddingVertical: 20 }}>{translate('errors.noRecord')}</Text>
              </View>
            }
            onRefresh={() => getUserTransactions()}
            refreshing={isRefresh}
          />
          {isLoading && (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator animating size={40} color="#B81C2D" />
            </View>
          )}
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
})
const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
