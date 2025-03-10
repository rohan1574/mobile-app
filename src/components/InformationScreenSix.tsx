import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  SevenPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'SevenPage'>;

const Uninstall = () => {
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
          tw`font-semi-bold text-center bottom-4 `,
          {color: '#ECEDF0', fontSize: 17},
        ]}>
        Don’t panic Uninstall. Use at least 7 days, You’re going to Love This
        App
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`relative `}>
        <Image
          source={require('../../assets/images/group.png')}
          style={[tw`object-cover`, {width: 368, height: 338}]}
        />
      </View>
      {/* Description text at the bottom of the image */}
      <Text
        style={[
          tw` font-semi-bold text-center top-8`,
          {color: '#AAAEB3', fontSize: 15},
        ]}>
        Give it just one week, and you'll discover why this app is a
        game-changer.
      </Text>
      <Text
        style={[
          tw` font-semi-bold text-center top-12`,
          {color: '#AAAEB3', fontSize: 15},
        ]}>
        Next: we need a few permissions to make Minimal Life phone work the way
        it’s meant to
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center py-5 px-20`,
          {backgroundColor: '#1F2630',top:70}, // সঠিক ব্যাকগ্রাউন্ড রঙ
        ]}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index < 5 ? ( // প্রথম ২টির জন্য চেকমার্ক
              <View
                style={tw`w-4 h-4 rounded-full bg-white justify-center items-center`}>
                <Image
                  source={require('../../assets/images/check.png')}
                  style={tw`w-2 h-2`} // চেকমার্ক সাইজ ঠিক করা
                />
              </View>
            ) : index === 5 ? ( // 6 নম্বর আইটেমের জন্য solid সাদা dot
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
          {backgroundColor: '#29313C',top:70},
        ]}
        activeOpacity={0.8} onPress={() => navigation.navigate('SevenPage')}>
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

export default Uninstall;
