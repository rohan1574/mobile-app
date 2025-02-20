import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';
import type {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  SixPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'SixPage'>;

const Notifications = () => {
  const navigation = useNavigation<NavigationProp>();
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
      <View style={tw`flex-1 justify-center items-center bottom-8`}>
        <Text
          style={[
            tw`text-center text-sm leading-relaxed bottom-8`, // Tailwind styles
            {
              color: '#AAAEB3', // Use quotes for colors
              textAlign: 'center', // CamelCase for text-align
              fontFamily: 'Roboto', // Custom font family
              fontSize: 16, // Font size as a number
              fontStyle: 'normal', // Font style in camelCase
              fontWeight: '500', // Font weight as a string or number
              lineHeight: 20, // Adjust line height (React Native expects numeric values)
              letterSpacing: -0.51, // Letter spacing as a number
            },
          ]}>
          Notifications poke and disrupt your concentration. They prompt you to
          check your phone and make you feel something engaging is happening,
          which leads to spending excessive time on your device.
        </Text>

        <View style={tw`p-6 top-4 rounded-full`}>
          <Image
            source={require('../../assets/images/rony.png')} // Adjust path if needed
            style={tw`w-20 h-20`}
            resizeMode="contain"
          />
        </View>
        <Text
          style={[
            tw` text-center text-sm leading-relaxed top-24`, // Tailwind styles
            {
              color: '#AAAEB3', // Color needs quotes
              textAlign: 'center', // CamelCase for text-align
              fontFamily: 'Roboto', // Corrected font-family syntax
              fontSize: 16, // No "px" in React Native
              fontStyle: 'normal', // Use camelCase
              fontWeight: '400', // Font weight as a string or number
              lineHeight: 20, // Adjusted for better readability
              letterSpacing: -0.51, // No "px" required
            },
          ]}>
          Introducing Minimal Life notification filter. You won't miss important notifications, block unnecessary, and stay focused.
        </Text>
      </View>

      {/* Pagination Dots */}
      <View
        style={[
          tw`flex-row justify-center items-center py-5 px-20`,
          {backgroundColor: '#1F2630', top: 20}, // সঠিক ব্যাকগ্রাউন্ড রঙ
        ]}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index < 4 ? ( // প্রথম 4টির জন্য চেকমার্ক
              <View
                style={tw`w-4 h-4 rounded-full bg-white justify-center items-center`}>
                <Image
                  source={require('../../assets/images/check.png')}
                  style={tw`w-2 h-2`} // চেকমার্ক সাইজ ঠিক করা
                />
              </View>
            ) : index === 4 ? ( // 5 নম্বর আইটেমের জন্য solid সাদা dot
              <View style={tw`w-4 h-4 rounded-full bg-white`} />
            ) : (
              // শেষ ৩টি আইটেমের জন্য শুধু বর্ডার
              <View style={tw`w-4 h-4 rounded-full border border-white`} />
            )}
          </View>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full bg-blue-500 py-3 rounded-full items-center`,
          {backgroundColor: '#29313C', top: 16},
        ]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('SixPage')}>
        <View style={tw`flex-row items-center`}>
          <Text style={[tw` text-lg font-medium`, {color: '#ECEDF0'}]}>
            Next
          </Text>
          <Icon
            name="arrow-forward"
            size={20}
            color="#ECEDF0"
            style={tw`ml-1`}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;
