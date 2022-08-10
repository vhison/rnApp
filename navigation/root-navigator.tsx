/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from 'react'
import { Linking } from 'react-native'
import { LinkingOptions, NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { PrimaryNavigator } from './primary-navigator'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  primaryStack: undefined
}

const Stack = createStackNavigator<RootParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="primaryStack"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const linking: LinkingOptions = {
  prefixes: ['peddle://', 'https://app.peddle.bet', 'https://app-dev.peddle.bet'],
  config: {
    screens: {
      drawer: {
        screens: {
          acceptchallenge: {
            path: 'acceptchallenge/:code',
            exact: true,
          },
        },
      },
    },
  },
  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL()

    console.log('getInitialURL', url)
    // if (url != null) {
    //   return url
    // }

    // Check if there is an initial firebase notification
    // const message = await messaging().getInitialNotification()

    // Get the `url` property from the notification which corresponds to a screen
    // This property needs to be set on the notification payload when sending it
    // return message?.notification.url
  },
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} linking={linking} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = 'RootNavigator'
