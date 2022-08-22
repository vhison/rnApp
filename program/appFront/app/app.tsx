/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
// import './i18n';
import './utils/ignore-warnings';

import React, {useEffect, useRef} from 'react';
import {
  initialWindowMetrics,
  initialWindowSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import {enableScreens} from 'react-native-screens';

import {NavigationContainerRef} from '@react-navigation/native';

import {
  canExit,
  RootNavigator,
  setRootNavigation,
  useBackButtonHandler,
  useNavigationPersistence,
} from './navigation';
//  import { initFonts } from './theme/fonts'
import * as storage from './utils/storage';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>();

  // @ts-ignore
  setRootNavigation(navigationRef);
  // @ts-ignore
  useBackButtonHandler(navigationRef, canExit);

  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.

  // if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <RootNavigator
        ref={navigationRef}
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </SafeAreaProvider>
  );
}

export default App;
