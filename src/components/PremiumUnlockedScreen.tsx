import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';

const PremiumFeatureScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 justify-center items-center px-4`}>
      {/* Welcome Text */}
      <Text style={tw`text-gray-400 font-normal text-xl text-center bottom-24`}>Welcome!  Premium Feature Unlocked</Text>

      {/* Premium Icon Image */}
      <Image source={require('./assets/images/premiums.png')} style={tw`w-48 h-48 mb-8`} />

      {/* Subscription Text */}
      <Text style={tw`text-gray-500 top-24 text-sm font-semibold text-center`}>
        Thanks for having premium Subscription
      </Text>

      {/* Enjoy Button */}
      <TouchableOpacity style={tw`bg-gray-800 px-32 py-3 top-28 rounded-full`}>
        <Text style={tw`text-white text-base font-semibold`}>Enjoy!</Text>
      </TouchableOpacity>
    </View>
  );
}
export default PremiumFeatureScreen;