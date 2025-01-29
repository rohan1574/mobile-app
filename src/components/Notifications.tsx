import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { s as tw } from 'react-native-wind';

const NotificationScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 px-6 py-12`}>
      {/* Header */}
      <View style={tw`items-center mb-8`}>
        <Text style={tw`text-white text-lg font-semibold`}>
          Notifications
        </Text>
        <View style={tw`absolute top-1 right-[-4]`}>
          <View style={tw`w-3 h-3 bg-red-500 rounded-full`} />
        </View>
      </View>

      {/* Main Content */}
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-white text-center text-sm leading-relaxed mb-6`}>
          Notifications can be quite intrusive and disrupt your concentration. They often prompt
          you to check your phone more frequently by suggesting there's something engaging
          happening, which can lead to spending more time on your device.
        </Text>
        <View style={tw`p-6 bg-gray-800 rounded-full`}>
          <Image
            source={require('./assets/images/rony.png')} // Adjust path if needed
            style={tw`w-20 h-20`}
            resizeMode="contain"
          />
          <View style={tw`absolute right-0 top-0 bg-red-500 w-3 h-3 rounded-full`} />
        </View>
        <Text style={tw`text-white text-center text-sm leading-relaxed mt-6`}>
          The Minimal Life phone features a notification filter that you can activate. This way,
          you won't miss any notifications—they'll be filtered and stored for later review, helping
          you stay focused without being interrupted.
        </Text>
      </View>

      {/* Pagination Dots */}
      <View style={tw`flex-row justify-center items-center my-6`}>
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            style={tw`w-3 h-3 mx-1 rounded-full ${
              index === 0 ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={tw`w-full bg-blue-500 py-4 rounded-lg items-center`}
        activeOpacity={0.8}
      >
        <Text style={tw`text-white text-lg font-medium`}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;
