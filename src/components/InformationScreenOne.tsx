import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  SecondPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'SecondPage'>;

const SmartPhone = () => {
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
          tw`font-medium text-center mb-4 top-12`,
          {color: '#ECEDF0', fontSize: 18},
        ]}>
        Your smartphone can quickly become addictive in several ways:
      </Text>
      <Text
        style={[
          tw`font-normal text-center top-16`,
          {color: '#AAAEB3', fontSize: 15},
        ]}>
        The app icons are colorful. They designed to grab your attention so that you open the app.
      </Text>
      {/* Image Section with Gradient Overlay */}
      <View style={tw`relative top-12`}>
        <Image
          source={require('../../assets/images/mobile.png')}
          style={[tw`object-cover`,{width:238, height:538}]}
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
          tw`absolute text-center ml-4 py-2 font-normal `,
          {color: '#AAAEB3', fontSize: 13, bottom: 150},
          {backgroundColor: 'rgba(31, 38, 48, 0.5)'},
        ]}>
      Consequently, your brain learns that opening colorful icons leads to
      “interesting” (stimulating) content
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center bottom-4 py-5 px-20`,
          {backgroundColor: '#1F263'},
        ]}>
        {[...Array(6)].map((_, index) => (
          <View
            key={index}
            style={tw`w-4 h-4 rounded-full ${
              index === 0 ? 'bg-white' : 'border-white border'
            } mx-1`}
          />
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full bg-blue-500 py-3 rounded-full items-center`,
          {backgroundColor: '#29313C',bottom:20},
        ]}
        activeOpacity={0.8} onPress={() => navigation.navigate('SecondPage')}>
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

export default SmartPhone;
