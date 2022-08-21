import { debounce } from 'lodash'
import moment from 'moment'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  BackHandler,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  DeviceEventEmitter,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'
import DropDownPicker from 'react-native-dropdown-picker'
import { useStore } from '../../models'
import { Header, Icons, ListItem, Button } from '../../components'
import { getDateFromTimestamp } from '../../utils/helper'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

const title = <Text style={styles.headerContainerCenterText}>{translate('screen.leader')}</Text>
var arrayOne: any[] | ((prevState: never[]) => never[]) = []
export const RideLeaderScreen = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [days, setDays] = React.useState<string>('')
  const [daysError, setDaysError] = React.useState<boolean>(false)
  const [limitExceeds, setLimitExceeds] = React.useState('')
  const [pelotonMarked, setPelotonMarked] = React.useState<string>('')
  const [isRefresh, setIsRefresh] = React.useState(false)
  const [pelotonRides, setPelotonRides] = React.useState([])
  const [allRides, setAllRides] = React.useState([])
  const [selectedRides, setSelectedRides] = React.useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [rideOpen, setRideOpen] = React.useState(false)
  const [rides, setRides] = React.useState(null)
  const [ridesItems, setRidesItems] = React.useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
  ])
  const [ridesError, setRidesError] = React.useState<boolean>(false)
  const [classes, setClasses] = React.useState('')
  const [classesError, setClassesError] = React.useState<boolean>(false)

  React.useEffect(() => {
    fetchSavedChallenges()
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])
  const sectionHeading = (title: string) => {
    let newTitle = title
    if (moment(title).format('MM-DD-YYYY') === moment(new Date()).format('MM-DD-YYYY')) {
      newTitle = 'Today'
    } else {
      newTitle = moment(title).format('dddd, MMMM DD')
    }
    return newTitle
  }
  const fetchSavedChallenges = async () => {
    if (session.user) {
      try {
        setIsLoading(true)
        const payload = { userId: session.user._id }
        const response = await store.api.queryGetLeaderBoards(
          payload,
          'id _id leaderboard_rank countdown duration start_time end_time pedaling_start_time pedaling_end_time total_leaderboard_users createdAt ride { title duration start_time end_time }',
          {
            fetchPolicy: 'no-cache',
          }
        )
        if (response.getLeaderBoards.length) {
          getPelotonRides(response.getLeaderBoards)
          setAllRides(response.getLeaderBoards)
        }
      } catch (error) {
        Alert.alert(`${translate('errors.session')}`, `${translate('errors.bike')}`, [
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
    setClasses('')
    arrayOne = []
  }
  const getPelotonRides = async (leaderRides) => {
    setIsRefresh(true)
    try {
      if (leaderRides.length > 0) {
        let finalData = {}
        let i = 1
        for (const x of leaderRides) {
          let strDate = moment(x.createdAt).format('MM-DD-YYYY')
          if (finalData[strDate]) {
            finalData[strDate].count += 1
            finalData[strDate].data.push({
              _id: x._id,
              rank: x.leaderboard_rank === null ? '' : x.leaderboard_rank,
              title: x.ride.title === null ? '' : x.ride.title,
              duration: x.duration === null ? '' : x.duration,
              label: x.status === null ? '' : x.status,
              startDate: moment(getDateFromTimestamp(x.start_time)).format('MMM DD'),
              endDate: moment(getDateFromTimestamp(x.end_time)).format('MMM DD'),
              numberOFWeek: '',
              created_at: strDate,
            })
          } else {
            finalData[strDate] = {
              id: i,
              title: x.createdAt,
              count: 1,
              data: [
                {
                  _id: x._id,
                  rank: x.leaderboard_rank === null ? '' : x.leaderboard_rank,
                  title: x.ride.title === null ? '' : x.ride.title,
                  duration: x.duration === null ? '' : x.duration,
                  label: x.status === null ? '' : x.status,
                  startDate: moment(getDateFromTimestamp(x.start_time)).format('MMM DD'),
                  endDate: moment(getDateFromTimestamp(x.end_time)).format('MMM DD'),
                  numberOFWeek: '',
                  created_at: strDate,
                },
              ],
            }
            i++
          }
        }
        setPelotonRides(Object.values(finalData))
        setSelectedRides([])
      }
    } catch (error) {
      console.error('getPelotonRides Error==>>', error)
    } finally {
      setIsRefresh(false)
    }
  }

  const onNext = debounce(() => {
    let error = false
    setClassesError(false)
    setRidesError(false)
    setDaysError(false)
    if (classes === '') {
      error = true
      setClassesError(true)
    }
    if (rides === null) {
      error = true
      setRidesError(true)
    }
    if (days === '') {
      error = true
      setDaysError(true)
      setLimitExceeds('')
    }
    if (days !== '') {
      if (limitExceeds !== '') {
        error = true
        days === '' && setDaysError(false)
      }
    }
    if (!error) {
      navigation.navigate('makebet', {
        output: '',
        rides,
        days,
        rideType: 'leader',
        challenges: selectedRides,
        classes: classes.toString(),
      })
    }
  }, 250)
  const VerifyDaysLimit = (value: string) => {
    const valueLimit = parseInt(value)
    if (isNaN(valueLimit) || valueLimit < 1 || valueLimit > 366) {
      setLimitExceeds(`${translate('errors.days')}`)
    } else {
      setLimitExceeds('')
    }
  }

  const isSelected = (item: object) => {
    const found = selectedRides.filter((select) => select._id == item._id).length
    return found ? true : false
  }
  const checkedChallenges = (item: object) => {
    setPelotonMarked(item._id)
    const found = selectedRides.some((el) => el === item)
    if (!found) {
      arrayOne.push(item)
    } else {
      var removeIndex = selectedRides
        .map(function (e) {
          return e._id
        })
        .indexOf(item._id)
      selectedRides.splice(removeIndex, 1)
    }
    setSelectedRides(arrayOne)
    if (arrayOne.length) {
      setClasses(arrayOne.length)
      setClassesError(false)
    } else {
      setClasses('')
    }
  }
  const dismissOthers = () => {
    Keyboard.dismiss()
    setRideOpen(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? dismissOthers() : false)}>
        <SafeAreaView style={styles.container}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
            centerContent={title}
          />
          <View style={style.rideContainer}>
            <Text style={style.titleInputDark}>{translate('ride.days')}</Text>
            <TextInputMask
              placeholder={'Days'}
              placeholderTextColor={color.palette.gray}
              style={style.textInput}
              autoCompleteType="tel"
              keyboardType={'number-pad'}
              maxLength={3}
              returnKeyType="next"
              type={'only-numbers'}
              value={days}
              onChangeText={(number: string) => {
                VerifyDaysLimit(number)
                setDays(number)
                setDaysError(false)
              }}
              caretHidden={false}
              selectionColor={color.palette.black}
            />
            {daysError && <Text style={style.error}>{translate('errors.daysRequired')}</Text>}
            {limitExceeds !== '' && <Text style={style.error}>{limitExceeds}</Text>}
            <Text style={style.titleInputDark}>{translate('ride.rides')}</Text>
            <DropDownPicker
              placeholder="0"
              placeholderStyle={[styles.pickerPlaceholder, { paddingTop: Platform.OS === 'web' ? 15 : 0 }]}
              dropDownContainerStyle={[styles.pickerContainer, { paddingTop: Platform.OS === 'web' ? 15 : 0 }]}
              style={styles.pickerStyle}
              listItemContainerStyle={{
                height: 40,
              }}
              selectedItemContainerStyle={{
                height: 40,
                flexDirection: 'row',
              }}
              arrowIconStyle={{ alignSelf: 'flex-end', marginTop: Platform.OS === 'web' ? 15 : 0 }}
              open={rideOpen}
              value={rides}
              items={ridesItems}
              setOpen={setRideOpen}
              setValue={(v) => {
                setRides(v)
                setRidesError(false)
              }}
              setItems={(o) => setRidesItems(o)}
              listMode="SCROLLVIEW"
            />
            {ridesError && <Text style={style.error}>{translate('errors.ridesRequired')}</Text>}
            <Text style={style.titleInputDark}>{translate('ride.class')}</Text>
            <TextInputMask
              placeholder={'Classes'}
              editable={false}
              placeholderTextColor={color.palette.gray}
              style={style.textInput}
              autoCompleteType="tel"
              keyboardType={'number-pad'}
              maxLength={6}
              returnKeyType="next"
              type={'only-numbers'}
              value={classes}
              caretHidden={false}
              selectionColor={color.palette.black}
            />
            {classesError && <Text style={style.error}>{translate('errors.classRequired')}</Text>}
          </View>
          <View style={style.listContainer}>
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={pelotonRides}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => checkedChallenges(item)}>
                  <ListItem
                    _id={item._id}
                    rank={item.rank}
                    title={item.title}
                    duration={item.duration === null ? '00:00:00' : item.duration}
                    label={item.label}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    numberOFWeek={isNaN(item.numberOFWeek) ? '0' : item.numberOFWeek}
                    selected={isSelected(item)}
                    createdAt={item.createdAt}
                    onSelect={() => {
                      console.log('selected - ', item._id)
                    }}
                  />
                </TouchableOpacity>
              )}
              renderSectionHeader={({ section }) => (
                <Text style={style.titleSection}>{sectionHeading(section.title)}</Text>
              )}
              keyExtractor={(item, index) => 'pelotonRide_' + index}
              ListEmptyComponent={
                <View>
                  <Text>{translate('errors.noRecord')}</Text>
                </View>
              }
              onRefresh={() => fetchSavedChallenges()}
              refreshing={isRefresh}
            />
            {isLoading && (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator animating size={40} color="#B81C2D" />
              </View>
            )}
          </View>
          <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button name={`${translate('button.next')}`} type="primary" isLoading={false} onPress={() => onNext()} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
const style = StyleSheet.create({
  rideContainer: { height: Platform.OS === 'ios' ? 320 : 280, justifyContent: 'flex-start', alignItems: 'center' },
  textInput: {
    width: Platform.OS === 'web' ? scale(150) : scale(335),
    height: 50,
    borderRadius: 10,
    backgroundColor: color.palette.lighterGrey,
    color: color.palette.black,
    borderBottomWidth: 0,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    paddingHorizontal: 20,
  },
  titleInputDark: {
    height: 19,
    color: color.palette.black,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginLeft: Platform.OS === 'web' ? scale(113) : 20,
  },
  titleSection: {
    color: color.palette.black,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  listContainer: {
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 360 : 250,
    zIndex: -1,
  },
  error: { color: color.palette.angry, alignSelf: 'flex-start', marginLeft: Platform.OS === 'web' ? scale(113) : 20 },
})
