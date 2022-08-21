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
  FlatList,
  BackHandler,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'
import { Header, Icons, Button, CheckBox } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { color } from '../../theme'
import { scale } from '../../styles/sizes'

const title = <Text style={styles.headerContainerCenterText}>{translate('screen.streak')}</Text>
export const RideStreakScreen = observer(() => {
  const navigation = useNavigation()
  const [selectedRide, setSelectedRide] = React.useState<string>('')
  const [rideError, setRideError] = React.useState<boolean>(false)
  const [days, setDays] = React.useState<string>('')
  const [daysError, setDaysError] = React.useState<boolean>(false)
  const [limitExceeds, setLimitExceeds] = React.useState('')

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const selectRideType = debounce((value: string) => {
    setSelectedRide(value)
    setRideError(false)
  }, 250)
  const onNext = debounce(() => {
    let error = false
    setDaysError(false)
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
    if (selectedRide === '') {
      error = true
      setRideError(true)
    }
    if (!error) {
      navigation.navigate('makebet', { output: selectedRide, days, rideType: 'streak', challenges: [], classes: '' })
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 30}
    >
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.container}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
            centerContent={title}
          />
          <View>
            <View style={style.rideSelection}>
              <Text style={[style.titleInputDark, { marginLeft: Platform.OS === 'web' ? scale(113) : 20 }]}>
                {translate('ride.dayCount')}
              </Text>
              <TextInputMask
                placeholder={'# of days'}
                placeholderTextColor={color.palette.gray}
                style={styles.textInput}
                autoCompleteType="tel"
                keyboardType={'number-pad'}
                maxLength={3}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => onNext()}
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
              {daysError && <Text style={styles.error}>{translate('errors.dayRequired')}</Text>}
              {limitExceeds !== '' && <Text style={styles.error}>{limitExceeds}</Text>}
              <FlatList
                ListHeaderComponent={<Text style={style.titleInputDark}>{translate('ride.tie')}</Text>}
                data={Breakers}
                renderItem={({ item }) => (
                  <CheckBox
                    name={item.value}
                    type={selectedRide === item.value ? 'tick' : 'secondary'}
                    info={false}
                    onPress={() => selectRideType(item.value)}
                    getInfo={() => console.log('get info')}
                  />
                )}
                keyExtractor={(item, index) => 'breaker_' + index}
              />
            </View>
            {rideError && <Text style={[styles.error, { marginTop: 5 }]}>{translate('errors.tieRequired')}</Text>}
          </View>
          <View style={style.rideContainer}>
            <Button name={`${translate('button.next')}`} type="primary" isLoading={false} onPress={() => onNext()} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
const style = StyleSheet.create({
  rideContainer: { flex: 2, justifyContent: 'flex-end', alignItems: 'center' },
  rideSelection: { alignItems: 'center' },
  titleInputDark: {
    height: 19,
    color: color.palette.black,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
})
const Breakers = [
  {
    value: 'KJ',
  },
  {
    value: 'Calories',
  },
  {
    value: 'Default',
  },
]
