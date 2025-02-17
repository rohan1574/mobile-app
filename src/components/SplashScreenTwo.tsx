import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation type
type RootStackParamList = {
  StartPageFirst: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'StartPageFirst'>;

const WelcomeScreen = () => {
   const navigation = useNavigation<NavigationProp>();
  
    // Navigate to SmartPhone component after 2 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('StartPageFirst');
      }, 2000);
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, [navigation]);
  return (
    <View style={tw`flex-1 bg-gray-900 items-center justify-center p-4`}>
      {/* Welcome Text */}
      <Text style={tw`text-gray-200 text-2xl font-normal bottom-20`}>
        Welcome!
      </Text>
      {/* Subtext */}
      <Text
        style={[
          tw`text-white text-center font-semibold bottom-12`,
          {fontSize: 18},
        ]}>
        You are one of the aware 0.08% of the Smart Phone user!
      </Text>
      {/* Image */}
      <View style={tw`bg-white p-4 rounded-xl `}>
        <Image
          source={require('../../assets/images/hand.png')}
          style={tw`w-60 h-60`}
          resizeMode="contain"
        />
      </View>
      {/* Description */}
      <Text style={[tw`text-gray-300 text-center top-8`, {fontSize: 16}]}>
        We are excited to help you to be free from digital distraction.
      </Text>
      {/* Logo Section */}
      <View style={tw`flex-row items-center justify-center ml-8`}>
        <Image
          source={require('../../assets/images/expand.png')}
          style={tw`w-70 h-20 top-24 `}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
