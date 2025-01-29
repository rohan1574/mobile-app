import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const NotificationScreen = () => {
  return (
    <View style={[tw`flex-1  px-6 py-12`, {backgroundColor: '#1F2630'}]}>
      {/* Header */}
      <View style={tw`items-center mb-8 relative`}>
        <Text
          style={[
            tw` text-lg font-semibold text-center`, // Tailwind styles
            {
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 18,
              letterSpacing: -0.54,
            }, // Custom styles
          ]}>
          Notifications
        </Text>

        <View style={[tw`absolute `, {right: 102}]}>
          <View
            style={[
              tw`bg-red-500 rounded-full`, // Tailwind styles
              {
                width: 7, // Width as a number, no "px"
                height: 7, // Height as a number, no "px"
                flexShrink: 0, // Use camelCase for "flex-shrink"
              },
            ]}
          />
        </View>
      </View>

      {/* Main Content */}
      <View style={tw`flex-1 justify-center items-center mb-10`}>
        <Text
          style={[
            tw`text-center text-sm leading-relaxed mb-6 `, // Tailwind styles
            {
              color: '#ECEDF0', // Use quotes for colors
              textAlign: 'center', // CamelCase for text-align
              fontFamily: 'Roboto', // Custom font family
              fontSize: 17, // Font size as a number
              fontStyle: 'normal', // Font style in camelCase
              fontWeight: '500', // Font weight as a string or number
              lineHeight: 20, // Adjust line height (React Native expects numeric values)
              letterSpacing: -0.51, // Letter spacing as a number
            },
          ]}>
          Notifications can be quite intrusive and disrupt your concentration.
          They often prompt you to check your phone more frequently by
          suggesting there's something engaging happening, which can lead to
          spending more time on your device.
        </Text>

        <View style={tw`p-6  rounded-full`}>
          <Image
            source={require('./assets/images/rony.png')} // Adjust path if needed
            style={tw`w-20 h-20`}
            resizeMode="contain"
          />
        </View>
        <Text
          style={[
            tw` text-center text-sm leading-relaxed mt-6`, // Tailwind styles
            {
              color: '#ECEDF0', // Color needs quotes
              textAlign: 'center', // CamelCase for text-align
              fontFamily: 'Roboto', // Corrected font-family syntax
              fontSize: 17, // No "px" in React Native
              fontStyle: 'normal', // Use camelCase
              fontWeight: '400', // Font weight as a string or number
              lineHeight: 20, // Adjusted for better readability
              letterSpacing: -0.51, // No "px" required
            },
          ]}>
          The Minimal Life phone features a notification filter that you can
          activate. This way, you won't miss any notifications—they'll be
          filtered and stored for later review, helping you stay focused without
          being interrupted.
        </Text>
      </View>

      {/* Pagination Dots */}
      <View style={tw`flex-row justify-center items-center my-6`}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index === 0 ? (
              <Icon name="checkmark-circle-outline" size={20} color="white" />
            ) : (
              <View style={tw`w-3 h-3 rounded-full bg-gray-500`} />
            )}
          </View>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full bg-blue-500 py-4 rounded-full items-center`,
          {backgroundColor: '#29313C'},
        ]}
        activeOpacity={0.8}>
        <View style={tw`flex-row items-center`}>
          <Text style={[tw` text-lg font-medium`,{color: '#ECEDF0'}]}>Next</Text>
          <Icon name="arrow-forward" size={20} color="#ECEDF0" style={tw`ml-1`} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationScreen;
