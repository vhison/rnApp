import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, BackHandler, DeviceEventEmitter } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { translate } from '../../i18n/translate'
import { Button } from '../../components'
import styles from '../../styles/globalStyle'
import { color } from '../../theme'

export const ThankYou = observer(() => {
  const navigation = useNavigation()
  React.useEffect(() => {
    const backAction = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'drawer' }],
        })
      )
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={style.rideContainer}>
        <Text style={style.headingText}>{translate('screen.thankyou')}</Text>
        <Text style={style.descriptionText}>{translate('splash.headlineSecond')}</Text>
        <Button
          name={`${translate('button.go')}`}
          type="primarysmall"
          isLoading={false}
          onPress={() => {
            DeviceEventEmitter.emit('refreshUser')
            navigation.navigate('drawer', { screen: 'home' })
          }}
        />
      </View>
    </SafeAreaView>
  )
})
const style = StyleSheet.create({
  rideContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    color: color.palette.black,
    textAlign: 'center',
  },
  descriptionText: {
    width: 220,
    height: 34,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: color.palette.gray,
    textAlign: 'center',
    marginVertical: 10,
  },
})
