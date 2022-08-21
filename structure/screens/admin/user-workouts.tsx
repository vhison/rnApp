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
  Alert,
  DeviceEventEmitter,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Icons, ProgressCard } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { useStore } from '../../models'

const image = require('../../assets/splash.png')
const title = <Text style={styles.headerContainerCenterText}>{translate('screen.workouts')}</Text>
export const UserWorkouts = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [challenges, setChallenges] = React.useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isRefresh, setIsRefresh] = React.useState(false)

  React.useEffect(() => {
    getUserWorkouts()
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])
  const getUserWorkouts = async () => {
    if (session.user) {
      try {
        setIsLoading(true)
        const payload = { userId: session.user._id }
        const response = await store.api.queryGetWorkout(
          payload,
          'id name created_at device_type end_time fitness_discipline has_leaderboard_metrics has_pedaling_metrics is_total_work_personal_record metrics_type peloton_id platform ride { duration title total_workouts total_in_progress_workouts overall_estimate } start_time status timezone title total_work workout_type total_leaderboard_users workoutMetrics { average_value display_name display_unit max_value slug }',
          { fetchPolicy: 'no-cache' }
        )
        if (response.getWorkout) {
          setChallenges(response.getWorkout)
        }
      } catch (error) {
        Alert.alert('', `${translate('errors.bike')}`, [
          {
            text: `${translate('button.ok')}`,
            onPress: () => {
              DeviceEventEmitter.emit('refreshUser')
              navigation.navigate('drawer')
            },
          },
        ])
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
            renderItem={({ item, index }) => (
              <ProgressCard
                name={item.ride.title === null ? '' : item.ride.title}
                points={item.ride.total_workouts === null ? '0' : item.ride.total_workouts.toString()}
                data={item.workoutMetrics === null ? [] : item.workoutMetrics}
                bet={[]}
                participants={item.total_leaderboard_users === null ? 0 : item.total_leaderboard_users}
                date={''}
              />
            )}
            keyExtractor={(item, index) => 'ride_' + index}
            contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
            ListEmptyComponent={
              <View style={{ alignItems: 'center' }}>
                <Text style={{ paddingVertical: 20 }}>{translate('errors.noRecord')}</Text>
              </View>
            }
            onRefresh={() => getUserWorkouts()}
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
