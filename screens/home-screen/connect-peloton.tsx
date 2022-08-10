import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Alert,
  DeviceEventEmitter,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import { Header, Icons, Button } from '../../components'
import { translate } from '../../i18n/translate'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'

export const ConnectPeloton = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const { session } = useStore()
  const [email, setEmail] = React.useState('')
  const [invalidemail, setInvalidEmail] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const [invalidpassword, setInvalidPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const ref_input2 = React.useRef()

  const onSubmit = debounce(async () => {
    let error = false
    setInvalidEmail(false)
    setInvalidPassword(false)
    if (email === '') {
      error = true
      setInvalidEmail(true)
    }
    if (email !== '') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (reg.test(email) === false) {
        error = true
        setInvalidEmail(true)
      }
    }
    if (password === '') {
      error = true
      setInvalidPassword(true)
    }
    if (!error) {
      if (session.user) {
        try {
          setIsLoading(true)
          const payload = { userName: email, password, userId: session.user?._id }
          const response = await store.api.mutateConnectPeloton(payload, '_id session_id pelotonId userId { _id }')
          if (response.connectPeloton) {
            store.session.setPelotonUser(response.connectPeloton)
            DeviceEventEmitter.emit('refreshUser')
            navigation.navigate('drawer', { screen: 'home' })
          }
        } catch (error) {
          Alert.alert('Authentication Error!', 'Please try again.', [
            {
              text: `${translate('button.ok')}`,
              onPress: () => null,
              style: 'cancel',
            },
          ])
        } finally {
          setIsLoading(false)
        }
      }
    }
  }, 250)
  const validateEmail = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(text) === false) {
      setEmail(text)
      setInvalidEmail(true)
    } else {
      setEmail(text)
      setInvalidEmail(false)
    }
  }
  const validatePassword = (text: string) => {
    if (text === '') {
      setPassword(text)
      setInvalidPassword(true)
    } else {
      setPassword(text)
      setInvalidPassword(false)
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={() => (Platform.OS !== 'web' ? Keyboard.dismiss() : false)}>
        <SafeAreaView style={styles.containerWhite}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
          />
          <View style={[styles.container, { alignItems: 'center', paddingBottom: 18 }]}>
            <>
              <TextInput
                style={styles.textInput}
                label="E-mail"
                placeholder=""
                theme={{ colors: { primary: 'grey' } }}
                underlineColor="transparent"
                value={email}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  validateEmail(email)
                  ref_input2.current.focus()
                }}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(emailid: string) => validateEmail(emailid)}
              />
              {invalidemail && <Text style={styles.error}>{translate('errors.validEmail')}</Text>}
              <TextInput
                style={styles.textInput}
                label="Password"
                placeholder=""
                theme={{ colors: { primary: 'grey' } }}
                underlineColor="transparent"
                value={password}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => onSubmit()}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text: string) => validatePassword(text)}
                ref={ref_input2}
              />
              {invalidpassword && <Text style={styles.error}>{translate('errors.password')}</Text>}
              <Button
                name={`${translate('button.connect')}`}
                type="primary"
                onPress={() => {
                  onSubmit()
                }}
                isLoading={isLoading}
              />
            </>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
})
