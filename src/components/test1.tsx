// import * as React from 'react';
// import {createStaticNavigation, useNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import GetStartedScreen from './src/components/SplashScreenOne';
// import WelcomeScreen from './src/components/SplashScreenTwo';
// import StartPageFirstScreen from './src/components/InformationScreenOne';
// import RectangleScreen from './src/components/InformationScreenTwo';
// import InfiniteScreen from './src/components/InformationScreenThree';
// import TimeReminder from './src/components/InformationScreenFour';
// import Notifications from './src/components/InformationScreenFive';
// import Uninstall from './src/components/InformationScreenSix';
// import SetupApp from './src/components/OverlayPermissionScreen';
// import SetupAppScreen from './src/components/UsagePermissionScreen';
// import SetApps from './src/components/DefaultPermissionScreen';
// import Premium from './src/components/Premium';
// import HomeScreen from './src/components/DefaultHomeScreen';
// import Applist from './src/components/AllAppListByAlphabetScreen';

// import NativeLocalStorage from './specs/NativeLocalStorage';



// const InitialStack = createNativeStackNavigator({
//   initialRouteName: 'GetStarted',
//   screenOptions: {
//     headerShown: false,
//   },
//   screens: {
//     GetStarted: GetStartedScreen,
//     WelcomeScreen: WelcomeScreen,
//     StartPageFirst: StartPageFirstScreen,
//     SecondPage: RectangleScreen,
//     ThirdPage: InfiniteScreen,
//     FourPage: TimeReminder,
//     FivePage: Notifications,
//     SixPage: Uninstall,
//     SevenPage: SetupApp,
//     EightPage: SetupAppScreen,
//     NinePage: SetApps,
//     TenPage: Premium,
//     ElevenPage: HomeScreen,
//     TwelvePage: Applist,
//   },
// });

// const GetStart = createStaticNavigation(InitialStack);

// const HomeStack = createNativeStackNavigator({
//   initialRouteName: 'HomePage',
//   screenOptions: {
//     headerShown: false,
//   },
//   screens: {
//     HomePage: HomeScreen,
//     AppListPage: Applist,
//   },
// });

// const Home = createStaticNavigation(HomeStack);

// export default function App() {
//   if( NativeLocalStorage?.getItem('homeReady') == 'yes' ){
//     return <Home />;
//   } else {
//     return <GetStart />;
//   }
// }
