import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const ProgressCircle = ({ progress = 30 }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (  // এখানে return যোগ করুন
    <View style={tw`items-center justify-center`}>
      <Svg height="160" width="160" viewBox="0 0 160 160">
        {/* Background Circle */}
        <Circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#E0E0E0"
          strokeWidth="12"
          fill="transparent"
        />
        {/* Progress Circle */}
        <Circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#3B82F6"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="80, 80"
        />
      </Svg>
      <Text style={tw`absolute text-2xl font-bold text-blue-600`}>
        {progress}s
      </Text>
    </View>
  );
};

const InAppMindfulDelayScreen = () => {
  
  return (
    <View style={tw`flex-1 bg-gray-500 p-4`}>
      <View
        style={[
          tw`bg-gray-700 justify-center top-40 rounded-lg items-center `,
          {height: 430},
        ]}>
        {/* Time Up Warning */}
        <View style={tw`flex-row items-center mb-2`}>
          <Icon name="warning-outline" size={20} color="#facc15" />
          <Text style={tw`text-yellow-400 text-lg font-semibold ml-1`}>
            Time Up!
          </Text>
          <Text style={tw`text-white text-base ml-2`}>00.00</Text>
        </View>

        {/* Main Alert */}
        <Text style={tw`text-gray-600 text-base mb-2`}>
          Facebook Opening in 30 Seconds
        </Text>
     {/* Timer Circle */}
  <ProgressCircle progress={30} />
        {/* Usage Stats */}
        <Text style={tw`text-gray-800 text-base mb-2`}>
          Today you've used Facebook for{' '}
          <Text style={tw`font-bold text-yellow-400`}>00 minutes</Text>, don't
          forget your Screen Time Reducing Mission.
        </Text>

        {/* Recommendation */}
        <Text style={tw`text-gray-600 text-sm mb-4`}>
          We recommend, if it is not important; Please do
        </Text>
        {/* Quit Button */}
        <TouchableOpacity style={tw`bg-gray-600  py-3 rounded-full w-80`}>
          <Text style={tw`text-white text-center text-base`}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InAppMindfulDelayScreen;
