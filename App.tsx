import * as React from 'react';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStartedScreen from './src/components/MinimalLifeScreen';
import StartPageFirstScreen from './src/components/SmartPhone';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'GetStarted',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    GetStarted: GetStartedScreen,
    StartPageFirst: StartPageFirstScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}