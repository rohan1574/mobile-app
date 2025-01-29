import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';

export default function ReminderScreen() {
  return (
    <View style={tw`flex-1 bg-gray-900 p-5 justify-between`}>
      {/* Header Section */}
      <View style={tw`mt-5`}>
        <Text style={tw`text-white text-xl font-bold`}>
          The in-app time reminder is now available to assist you.
        </Text>
        <Text style={tw`text-gray-400 text-sm mt-2`}>
          Avoid getting lost in endless scrolling. Before using an addictive
          app, set a time limit for yourself, and receive a reminder when your
          time is up.
        </Text>
      </View>

      {/* Image Section with Overlayed Text */}
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`relative`}>
          {/* Image */}
          <Image
            source={require('./assets/images/social.png')}
            style={{height: 377, width: 238}}
            resizeMode="contain"
          />
          {/* Overlayed Text */}
          <View
            style={tw`absolute inset-x-0 bottom-10 justify-center items-center`}>
            <Text
              style={tw`text-gray-400 text-sm text-center bg-black/50 p-2 rounded-md`}>
              The in-app time reminder is automatically enabled for games,
              social media, and similar applications. However, you can customize
              these settings according to your preferences.
            </Text>
          </View>
        </View>
      </View>

      {/* Footer Section */}
      <View style={tw`mt-5`}>
        <View style={tw`flex-row justify-center mb-5`}>
          <View style={tw`w-3 h-3 bg-gray-400 rounded-full mx-1`} />
          <View style={tw`w-3 h-3 bg-white rounded-full mx-1`} />
          <View style={tw`w-3 h-3 bg-gray-400 rounded-full mx-1`} />
          <View style={tw`w-3 h-3 bg-gray-400 rounded-full mx-1`} />
        </View>
        <TouchableOpacity
          style={tw`bg-blue-500 py-3 rounded-xl`}
          onPress={() => console.log('Next pressed')}>
          <Text style={tw`text-white text-center font-bold`}>Next →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
