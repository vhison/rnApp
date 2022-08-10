import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  BackHandler,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'
import DropDownPicker from 'react-native-dropdown-picker'
import { Header, Icons, Button } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

const title = <Text style={styles.headerContainerCenterText}>{translate('screen.output')}</Text>
export const RideOutputScreen = observer(() => {
  const navigation = useNavigation()

  const [amountError, setAmountError] = React.useState<boolean>(false)
  const [rides, setRides] = React.useState<string>('')
  const [ridesError, setRidesError] = React.useState<boolean>(false)
  const [days, setDays] = React.useState<string>('')
  const [daysError, setDaysError] = React.useState<boolean>(false)
  const [limitExceeds, setLimitExceeds] = React.useState('')

  const [open, setOpen] = React.useState(false)
  const [output, setOutput] = React.useState(null)
  const [items, setItems] = React.useState([
    { label: 'Calories', value: 'Calories' },
    { label: 'KJ', value: 'KJ' },
    { label: 'Default', value: 'Default' },
  ])

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const onNext = debounce(() => {
    let error = false
    setAmountError(false)
    setRidesError(false)
    setDaysError(false)
    if (output === null) {
      error = true
      setAmountError(true)
    }
    if (rides === '') {
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
      navigation.navigate('makebet', { output, rides, days, rideType: 'output', challenges: [], classes: '' })
    }
  }, 250)

  const dismissOthers = () => {
    Keyboard.dismiss()
    setOpen(false)
  }
  const VerifyDaysLimit = (value: string) => {
    const valueLimit = parseInt(value)
    if (isNaN(valueLimit) || valueLimit < 1 || valueLimit > 366) {
      setLimitExceeds(`${translate('errors.days')}`)
    } else {
      setLimitExceeds('')
    }
  }

  const renderInputFields = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 30}
      >
        <View style={{ flex: 4 }}>
          <Text style={style.titleInputDark}>{translate('ride.output')}</Text>
          <DropDownPicker
            placeholder="Calories"
            placeholderStyle={[styles.pickerPlaceholder, { paddingTop: Platform.OS === 'web' ? 15 : 0 }]}
            dropDownContainerStyle={[styles.pickerContainer, { paddingTop: Platform.OS === 'web' ? 15 : 0 }]}
            listItemContainerStyle={{
              height: 40,
            }}
            selectedItemContainerStyle={{
              height: 40,
              flexDirection: 'row',
            }}
            style={styles.pickerStyle}
            arrowIconStyle={{ alignSelf: 'flex-end', marginTop: Platform.OS === 'web' ? 15 : 0 }}
            open={open}
            value={output}
            items={items}
            setOpen={setOpen}
            setValue={(v) => {
              setOutput(v)
              setAmountError(false)
            }}
            setItems={(o) => setItems(o)}
            closeAfterSelecting={true}
          />
          {amountError && <Text style={style.error}>{translate('errors.outputRequired')}</Text>}
          <Text style={style.titleInputDark}>{translate('ride.rideCount')}</Text>
          <TextInputMask
            placeholder={'0'}
            placeholderTextColor={color.palette.gray}
            style={style.textInput}
            autoCompleteType="tel"
            keyboardType={'number-pad'}
            maxLength={2}
            returnKeyType="next"
            type={'only-numbers'}
            value={rides}
            onChangeText={(number: string) => {
              setRides(number)
              setRidesError(false)
            }}
            caretHidden={false}
            selectionColor={color.palette.black}
          />
          {ridesError && <Text style={style.error}>{translate('errors.ridesRequired')}</Text>}
          <Text style={style.titleInputDark}>{translate('ride.daysCount')}</Text>
          <TextInputMask
            placeholder={'Days'}
            placeholderTextColor={color.palette.gray}
            style={style.textInput}
            autoCompleteType="tel"
            blurOnSubmit={true}
            onSubmitEditing={() => onNext()}
            keyboardType={'number-pad'}
            maxLength={3}
            returnKeyType="done"
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
        </View>
      </KeyboardAvoidingView>
    )
  }
  const renderButtonFields = () => {
    return (
      <View>
        <Button name={`${translate('button.next')}`} type="primary" isLoading={false} onPress={() => onNext()} />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
        leftPress={() => navigation.goBack()}
        centerContent={title}
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {renderInputFields()}
        {renderButtonFields()}
      </ScrollView>
    </SafeAreaView>
  )
})
const style = StyleSheet.create({
  rideContainer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'pink' },
  rideSelection: { alignItems: 'center' },
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
    alignSelf: 'center',
  },
  titleInputDark: {
    height: 19,
    color: color.palette.black,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: Platform.OS === 'web' ? scale(113) : 20,
  },
  error: { color: color.palette.angry, alignSelf: 'flex-start', marginLeft: Platform.OS === 'web' ? scale(113) : 20 },
})
