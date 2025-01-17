import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';
import { Slider } from '@miblanchard/react-native-slider';

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 px-4 pt-10`}>
      {/* Time and Date */}
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-4xl text-white`}>20:54</Text>
        <Text style={tw`text-sm text-gray-400`}>Tuesday, 10th June</Text>
      </View>

      {/* Battery Icon */}
      <View style={tw`items-center mb-6`}>
        <View style={tw`w-8 h-4 bg-gray-500 rounded`} />
      </View>

      {/* App Buttons */}
      <View style={tw`space-y-4`}>
        {['Calender', 'Whatsapp', 'Messenger'].map((app, index) => (
          <TouchableOpacity
            key={index}
            style={tw`bg-gray-800 py-3 rounded-lg items-center border border-gray-700`}
          >
            <Text style={tw`text-white text-lg`}>{app}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add App Message */}
      <View style={tw`items-center my-6`}>
        <TouchableOpacity style={tw`bg-gray-700 p-2 rounded-full`}>
          <Text style={tw`text-white text-lg`}>+</Text>
        </TouchableOpacity>
        <Text style={tw`text-sm text-gray-500 mt-2`}>
          Don’t add unnecessary addictive apps!
        </Text>
      </View>

      {/* Slider Section */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-center text-gray-400 mb-2`}>Overall Ranking</Text>
        <Slider
          value={50}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="white"
          minimumTrackTintColor="white"
          maximumTrackTintColor="gray"
        />
        <View style={tw`flex-row justify-between mt-2`}>
          <Text style={tw`text-gray-400 text-xs`}>Today Unlock: 5</Text>
          <Text style={tw`text-gray-400 text-xs`}>Today Use: 120 M</Text>
        </View>
        <Text style={tw`text-center text-gray-500 text-xs`}>
          Use less to increase progress bar
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={tw`flex-row justify-around`}>
        {['Dialer', 'Camera'].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={tw`bg-gray-800 py-3 px-6 rounded-lg items-center border border-gray-700`}
          >
            <Text style={tw`text-white text-lg`}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
