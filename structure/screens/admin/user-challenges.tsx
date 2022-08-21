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
import { Header, Icons, Workout } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { useStore } from '../../models'

const image = require('../../assets/splash.png')
const title = <Text style={styles.headerContainerCenterText}>{translate('screen.rides')}</Text>
export const UserChallenges = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [challenges, setChallenges] = React.useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isRefresh, setIsRefresh] = React.useState(false)

  React.useEffect(() => {
    getUserChallenges()
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])
  const getUserChallenges = async () => {
    if (session.user) {
      try {
        setIsLoading(true)
        const payload = { pageNumber: 1, userId: session.user._id }
        const response = await store.api.queryGetChallenges(
          payload,
          '_id rideType amount charityId createdAt percentageSplit participants { _id } settings { numberOfRides output timeToCompleteDays }',
          { fetchPolicy: 'no-cache' }
        )
        if (response.getChallenges) {
          setChallenges(response.getChallenges)
        }
      } catch (error) {
        console.log('queryGetWorkout error======>', error)
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
            data={challenges}
            renderItem={({ item }) => (
              <Workout
                rideType={item.rideType}
                numberOfRides={item.settings.numberOfRides}
                output={item.settings.output}
                timeToCompleteDays={item.settings.timeToCompleteDays}
                challengers={item.participants.length}
                createdAt={item.createdAt}
              />
            )}
            keyExtractor={(item, index) => 'ride_' + index}
            contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
            ListEmptyComponent={
              <View style={{ alignItems: 'center' }}>
                <Text style={{ paddingVertical: 20 }}>{translate('errors.noRecord')}</Text>
              </View>
            }
            onRefresh={() => getUserChallenges()}
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
