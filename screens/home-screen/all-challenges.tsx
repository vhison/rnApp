import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  BackHandler,
  ActivityIndicator,
  Alert,
  DeviceEventEmitter,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Icons, ProgressCard } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import style from './style'

export const AllChallenges = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [challenges, setChallenges] = React.useState([]) 
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    getUserChallenges()
  }, [])
  React.useEffect(() => {
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
        const payload = { userId: session.user._id }
        const response = await store.api.queryGetRides(
          payload,
          'rideType userId { _id } createdAt bet { userId { _id } settings { output numberOfRides timeToCompleteDays } amount } participants { _id } workout { fitness_discipline has_leaderboard_metrics has_pedaling_metrics ride { title duration total_workouts total_in_progress_workouts } workoutMetrics { average_value display_name display_unit max_value slug } }',
          { fetchPolicy: 'no-cache' }
        )
        if (response.getRides) {
          setChallenges(response.getRides)
        }
      } catch (error) {
        Alert.alert(`${translate('errors.session')}`, `${translate('errors.bike')}`, [
          {
            text: `${translate('button.ok')}`,
            onPress: () => {
              DeviceEventEmitter.emit('refreshUser')
              navigation.goBack()
            },
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
        leftPress={() => navigation.goBack()}
      />
      <View style={style.containerInner}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={challenges}
          renderItem={({ item, index }) => (
            <ProgressCard
              name={item.rideType}
              points={item.workout.length > 0 ? item.workout[index].ride.total_workouts.toString() : '0'}
              data={item.workout.length > 0 ? item.workout[index].workoutMetrics : []}
              bet={item.bet.length > 0 ? item.bet : []}
              participants={item.participants.length}
              date={item.createdAt}
            />
          )}
          keyExtractor={(item, index) => 'challenge_' + index}
          ListEmptyComponent={
            <View style={{ alignItems: 'center' }}>
              <Text style={{ paddingVertical: 20 }}>{translate('errors.noRecord')}</Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating size={40} color="#B81C2D" />
        </View>
      )}
    </SafeAreaView>
  )
})
