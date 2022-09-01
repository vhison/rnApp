import React from 'react'
import { View, Text, Alert, ActivityIndicator, Platform } from 'react-native'
import { CommonActions, useNavigation, DrawerActions } from '@react-navigation/native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import styles from '../../styles/globalStyle'
import { verticalScale } from '../../styles/sizes'
import { Drawer } from 'react-native-paper'

export function DrawerMenu() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  //   const userLogout = debounce(async () => {
  //     setIsLoading(true)
  //     store.session.logout()
  //     setTimeout(() => {
  //       setIsLoading(false)
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: 'getstarted' }],
  //         })
  //       )
  //     }, 1500)
  //   }, 250)

  return (
    <DrawerContentScrollView>
      <View style={[styles.container, { height: verticalScale(730), justifyContent: 'flex-start' }]}>
        <Drawer.Section title={`Menus`}>
          <View>
            <Text> First</Text>
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <View>
            <Text> Second</Text>
          </View>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}
