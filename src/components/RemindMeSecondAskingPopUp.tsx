import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {s as tw} from 'react-native-wind';

const RemindMeSecondAskingPopUp = () => {
  
  return (
    <View style={tw`flex-1 bg-gray-500 p-4`}>
      <View
        style={[
          tw`bg-gray-700 justify-center top-40 rounded-lg items-center `,
          {height: 430},
        ]}>
      

        {/* Main Alert */}
        <Text style={tw`text-gray-600 text-base mb-2`}>
          Really! you want to use Facebook more?
        </Text>
    
        {/* Usage Stats */}
        <Text style={tw`text-gray-800 text-base mb-2`}>
          Today you've used Facebook for{' '}
          <Text style={tw`font-bold text-yellow-400`}>00 minutes</Text>, don't
          forget your Screen Time Reducing Mission.
        </Text>
        {/* Quit Button */}
        <View style={tw`flex-row items-center mb-2`}>
          <TouchableOpacity style={tw`bg-gray-600 w-40 py-3 rounded-full mx-1`}>
          <Text style={tw`text-white text-center text-base`}>No, Quit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-600 w-40 py-3 rounded-full mx-1 `}>
          <Text style={tw`text-white text-center text-base`}>Yes, Please!</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RemindMeSecondAskingPopUp;
