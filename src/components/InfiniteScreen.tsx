import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const InfiniteScreen = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw` font-bold text-center mb-4  top-12`,
          {color: '#ECEDF0', fontSize: 18},
        ]}>
        Infinite scrolling feeds
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`relative top-12`}>
        <Image
          source={require('./assets/images/Infinity.png')}
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
          tw`absolute bottom-36 text-center ml-4  font-normal `,
          {color: '#ECEDF0', fontSize: 15, backgroundColor: '#1F2630'},
        ]}>
        Social media apps leverage AI to tailor content precisely to your
        interests, aiming to maximize the time you spend within the app.
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center top-4 py-5 px-20`,
          {backgroundColor: '#1F263'},
        ]}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index < 3 ? ( // প্রথম ৪টি index এর জন্য checkmark আইকন দেখাবে
              <View
                style={tw`w-4 h-4 rounded-full bg-white justify-center items-center `}>
                <Image
                  source={require('./assets/images/check.png')}
                  style={tw``}
                />
              </View>
            ) : (
              // শেষ index এর জন্য সাদা ডট দেখাবে
              <View style={tw`w-4 h-4 rounded-full border border-white `} />
            )}
          </View>
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full top-4 bg-blue-500 py-3 rounded-full items-center`,
          {backgroundColor: '#29313C'},
        ]}
        activeOpacity={0.8}>
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

export default InfiniteScreen;
