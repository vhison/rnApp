/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { useNavigation } from '@react-navigation/native'
import { GetStarted, DrawerMenu, UsersList } from '../screens'
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  getstarted: undefined
  drawer: undefined
  userlist: undefined
}

const Drawer = createDrawerNavigator<PrimaryParamList>()
function DrawerScreens() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerMenu />}>
      <Drawer.Screen name="getstarted" component={GetStarted} />
    </Drawer.Navigator>
  )
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()
export const PrimaryNavigator = () => {
  const initialRouteName = 'drawer'

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerStyle: { borderBottomWidth: 0 },
      }}>
      <Stack.Screen name="drawer" component={DrawerScreens} />
      <Stack.Screen name="userlist" component={UsersList} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['getstarted']
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
