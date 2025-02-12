import * as React from 'react';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStartedScreen from './src/components/MinimalLifeScreen';
import StartPageFirstScreen from './src/components/SmartPhone';
import RectangleScreen from './src/components/RectangleScreen';
import InfiniteScreen from './src/components/InfiniteScreen';
import TimeReminder from './src/components/TimeReminder';
import Notifications from './src/components/Notifications';
import Uninstall from './src/components/Uninstall';
import SetupApp from './src/components/SetupApp';
import SetupAppScreen from './src/components/SetupAppScreen';
import SetApps from './src/components/SetApps';
import Premium from './src/components/Premium';
import HomeScreen from './src/components/HomeScreen';
import Applist from './src/components/Applist';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'GetStarted',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    GetStarted: GetStartedScreen,
    StartPageFirst: StartPageFirstScreen,
    SecondPage: RectangleScreen,
    ThirdPage: InfiniteScreen,
    FourPage: TimeReminder,
    FivePage: Notifications,
    SixPage: Uninstall,
    SevenPage: SetupApp,
    EightPage: SetupAppScreen,
    NinePage: SetApps,
    TenPage: Premium,
    ElevenPage: HomeScreen,
    TwelvePage: Applist,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
