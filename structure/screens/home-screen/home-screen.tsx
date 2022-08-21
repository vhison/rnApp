import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  BackHandler,
  Alert,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, WelcomeModal, Icons, Button, BottomTabs, ProgressCard } from '../../components'
import { useStore } from '../../models'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import style from './style'

export const HomeScreen = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [connectBike, setConnectBike] = React.useState<boolean>(false)
  const [acceptRide, setAcceptRide] = React.useState<boolean>(false)
  const [challenges, setChallenges] = React.useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isSubmit, setSubmit] = React.useState<boolean>(false)
  const [isRefresh, setIsRefresh] = React.useState(false)

  React.useEffect(() => {
    const onRefreshUser = (item: any) => {
      setSubmit(!isSubmit)
      checkConnectedBike()
    }
    DeviceEventEmitter.addListener('refreshUser', onRefreshUser)
    return () => {
      DeviceEventEmitter.removeListener('refreshUser', onRefreshUser)
    }
  }, [isSubmit])

  React.useEffect(() => {
    const hash = store.session.joinCode
    if (hash) {
      console.log("hash code : ", hash)
      // navigation.navigate('acceptchallenge', { hash })
      navigation.navigate('joinride', { hash })
    }
  }, [store.session.joinCode])

  React.useEffect(() => {
    checkConnectedBike()
    Keyboard.dismiss()
    const backAction = () => {
      Alert.alert('Hold on!', `${translate('confirm.exit')}`, [
        {
          text: `${translate('button.cancel')}`,
          onPress: () => null,
          style: 'cancel',
        },
        { text: `${translate('button.yes')}`, onPress: () => BackHandler.exitApp() },
      ])
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const checkConnectedBike = async () => {
    // if (session.pelotonUser) {
      if (session.user) {
        try {
          setIsLoading(true)
          const payload = { userId: session.user._id }
          const response = await store.api.queryCheckPelotonConnection(payload, '_id createdAt pelotonId session_id', {
            fetchPolicy: 'no-cache',
          })
          if (response.checkPelotonConnection) {
            if (session.pelotonUser.pelotonId) {
              setConnectBike(true)
              getUserChallenges()
            } else {
              setConnectBike(false)
            }
          }
        } catch (error) {
          console.log('checkConnectedBike error======>')
          setConnectBike(false)
        } finally {
          setIsLoading(false)
        }
      }
    // } else {
    //   setConnectBike(false)
    // }
  }
  const getUserChallenges = async () => {
    if (session.user) {
      try {
        setIsLoading(true)
        //  QUERY TO GET USER RIDES/CHALLENGES
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
        console.log('queryGetRides error======>', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const createRide = debounce(() => {
    navigation.navigate('createride')
  }, 250)
  const joinRide = debounce(() => {
    navigation.navigate('joinride')
  }, 250)

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContent={<Icons name="" type="menu" header={false} />}
        leftPress={() => navigation.toggleDrawer()}
        centerContent={<Icons name="" type="logo" header={false} />}
      />
      {!connectBike ? (
        <View style={style.containerMain}>
          <Text style={style.headingText}>{translate('home.headline')}</Text>
          <Text style={style.descriptionText}>{translate('home.subheading')}</Text>
          <View style={style.buttonContainer}>
            <TouchableWithoutFeedback onPress={() => setAcceptRide(true)}>
              <View style={style.buttonBackground}>
                <Text style={style.buttonText}>{translate('button.connect')}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ) : (
        <>
          <ImageBackground
            source={require('../../assets/bannerImage.png')}
            style={style.bannerImage}
            resizeMode="cover"
          >
            <Text style={style.bannerText}>{translate('home.welcome')}</Text>
            <TouchableOpacity style={style.connectionLabel} disabled={true}>
              <Text style={style.connectionText}>{translate('home.connected')}</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={style.contentRow}>
            <Button
              name={`${translate('home.create')}`}
              type="primarysmall"
              isLoading={false}
              onPress={() => createRide()}
            />
            <Button
              name={`${translate('home.join')}`}
              type="primarysmall"
              isLoading={false}
              onPress={() => joinRide()}
            />
          </View>
          <View style={style.contentRow}>
            <Text style={styles.titleMediumDark}>{translate('home.title')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('allchallenges')} style={{ alignItems: 'flex-end' }}>
              <Text style={[styles.titleMediumLight, { textAlign: 'right' }]}>{translate('home.caption')}</Text>
            </TouchableOpacity>
          </View>
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
              onRefresh={() => getUserChallenges()}
              refreshing={isRefresh}
              contentContainerStyle={{ paddingBottom: 150 }}
            />
          </View>
          <BottomTabs
            leftText={`${translate('home.create')}`}
            rightText={`${translate('home.join')}`}
            onLeftSelect={() => createRide()}
            onRightSelect={() => joinRide()}
          />
        </>
      )}
      {acceptRide && (
        <WelcomeModal
          heading={`${translate('home.connect')}`}
          title=""
          type="connectPeloton"
          onCancel={() => setAcceptRide(false)}
          onContinue={() => {
            setAcceptRide(false)
            navigation.navigate('connectpeloton')
          }}
          onClickLink={() => null}
        />
      )}
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating size={40} color="#B81C2D" />
        </View>
      )}
    </SafeAreaView>
  )
})
