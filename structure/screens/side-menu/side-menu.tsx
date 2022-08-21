import React from 'react'
import { debounce } from 'lodash'
import { View, Alert, ActivityIndicator, Platform } from 'react-native'
import { CommonActions, useNavigation, DrawerActions } from '@react-navigation/native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'
import { useStore } from '../../models'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { verticalScale } from '../../styles/sizes'

export function SideMenu() {
  const navigation = useNavigation()
  const store = useStore()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const userLogout = debounce(async () => {
    setIsLoading(true)
    store.session.logout()
    setTimeout(() => {
      setIsLoading(false)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'getstarted' }],
        })
      )
    }, 1500)
  }, 250)

  const logout = () => {
    Platform.OS === 'web'
      ? confirm(`${translate('confirm.logout')}`) && userLogout()
      : Alert.alert(`${translate('button.logout')}`, `${translate('confirm.logout')}`, [
          {
            text: `${translate('button.cancel')}`,
            onPress: () => null,
            style: 'cancel',
          },
          { text: `${translate('button.yes')}`, onPress: () => userLogout() },
        ])
  }
  const adminPanel = debounce(async () => {
    navigation.navigate('admin')
    navigation.dispatch(DrawerActions.closeDrawer())
  }, 250)

  return (
    <DrawerContentScrollView>
      <View style={[styles.container, { height: verticalScale(730), justifyContent: 'space-between' }]}>
        <Drawer.Section title={`${translate('screen.menu')}`}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
            label={`${translate('button.logout')}`}
            onPress={() => logout()}
          />
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="cogs" color={color} size={size} />}
            label={`${translate('button.admin')}`}
            onPress={() => adminPanel()}
          />
        </Drawer.Section>
      </View>
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating size={40} color="#B81C2D" />
        </View>
      )}
    </DrawerContentScrollView>
  )
}
