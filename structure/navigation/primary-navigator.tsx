import { observer } from 'mobx-react-lite'
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
import {
  HomeScreen,
  GetStarted,
  SignUp,
  VerifyCode,
  SideMenu,
  CreateRideScreen,
  JoinRideScreen,
  RideOutputScreen,
  RideStreakScreen,
  RideLeaderScreen,
  MakeBetScreen,
  ConnectPeloton,
  AllChallenges,
  ThankYou,
  SearchCharity,
  Payment,
  AcceptChallenge,
  AdminPanel,
  UserChallenges,
  UserWorkouts,
  TransactionHistory,
} from '../screens'
import { useStore } from '../models'
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  getstarted: undefined
  signup: undefined
  verifycode: undefined
  home: undefined
  drawer: undefined
  sidemenu: undefined
  createride: undefined
  joinride: undefined
  rideoutput: undefined
  ridestreak: undefined
  rideleader: undefined
  makebet: undefined
  connectpeloton: undefined
  allchallenges: undefined
  thankyou: undefined
  searchcharity: undefined
  payment: undefined
  acceptchallenge: undefined
  admin: undefined
  userchallenges: undefined
  userworkouts: undefined
  transactions: undefined
}

const Drawer = createDrawerNavigator<PrimaryParamList>()
function DrawerScreens() {
  return (
    <Drawer.Navigator drawerContent={() => <SideMenu />}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="acceptchallenge" component={AcceptChallenge} />
    </Drawer.Navigator>
  )
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()
export const PrimaryNavigator = observer(() => {  
  const { session } = useStore()
  console.log('primary navigator session==>', session)
  console.log('session userid==>', session.user?._id)
  if (session.user?._id) {
    console.log('userloggedin')
  } else {
    console.log('no user loggedin')
  }
  const initialRouteName = session.user?._id ? 'drawer' : 'getstarted'

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerStyle: { borderBottomWidth: 0 },
      }}
    >
      <Stack.Screen name="getstarted" component={GetStarted} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="verifycode" component={VerifyCode} />
      <Stack.Screen name="drawer" component={DrawerScreens} />
      <Stack.Screen name="createride" component={CreateRideScreen} />
      <Stack.Screen name="joinride" component={JoinRideScreen} />
      <Stack.Screen name="rideoutput" component={RideOutputScreen} />
      <Stack.Screen name="ridestreak" component={RideStreakScreen} />
      <Stack.Screen name="rideleader" component={RideLeaderScreen} />
      <Stack.Screen name="makebet" component={MakeBetScreen} />
      <Stack.Screen name="connectpeloton" component={ConnectPeloton} />
      <Stack.Screen name="allchallenges" component={AllChallenges} />
      <Stack.Screen name="thankyou" component={ThankYou} />
      <Stack.Screen name="searchcharity" component={SearchCharity} />
      <Stack.Screen name="payment" component={Payment} />      
      <Stack.Screen name="admin" component={AdminPanel} />
      <Stack.Screen name="userchallenges" component={UserChallenges} />
      <Stack.Screen name="userworkouts" component={UserWorkouts} />
      <Stack.Screen name="transactions" component={TransactionHistory} />
    </Stack.Navigator>
  )
})

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
