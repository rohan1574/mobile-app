import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ThirdPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'ThirdPage'>;

const RectangleScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw` font-bold text-center mb-4  top-8`,
          {color: '#ECEDF0', fontSize: 18},
        ]}>
        No icons on Minimal Life phone
      </Text>
      <Text
        style={[
          tw`font-semi-bold text-center top-16`,
          {color: '#AAAEB3', fontSize: 16},
        ]}>
        Apps are shown by name with usage data
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`relative top-12`}>
        <Image
          source={require('../../assets/images/Rectangle.png')}
          style={[tw`object-cover`, {width: 238, height: 538}]}
        />
        <LinearGradient
          colors={[
            'rgba(31, 38, 48, 0.00)', // Transparent at the top
            'rgba(31, 38, 48, 1)', // Darker at the bottom
          ]}
          locations={[0.2006, 0.9041]}
          style={[tw`absolute bottom-16 w-full `, {height: 650, bottom: 12}]}
        />
      </View>
      {/* Description text at the bottom of the image */}
      <Text
        style={[
          tw`absolute text-center ml-4 font-normal`,
          {color: '#AAAEB3', fontSize: 15, bottom:150},
        ]}>
        The data push to think before you intend to open an addictive apps/games.
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center py-5 px-20`,
          {backgroundColor: '#1F2630'}, // সঠিক ব্যাকগ্রাউন্ড রঙ
        ]}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index < 1 ? ( // প্রথম 1টির জন্য চেকমার্ক
              <View
                style={tw`w-4 h-4 rounded-full bg-white justify-center items-center`}>
                <Image
                  source={require('../../assets/images/check.png')}
                  style={tw`w-2 h-2`} // চেকমার্ক সাইজ ঠিক করা
                />
              </View>
            ) : index === 1 ? ( // 2 নম্বর আইটেমের জন্য solid সাদা dot
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
          {backgroundColor: '#29313C'},
        ]}
        activeOpacity={0.8} onPress={() => navigation.navigate('ThirdPage')}>
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

export default RectangleScreen;