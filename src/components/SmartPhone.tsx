import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';

const SmartPhone = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      {/* Title */}
      <Text style={tw`text-base font-medium text-center mt-16 text-gray-300`}>
        Your smartphone can quickly become addictive in several ways:
      </Text>

      {/* Section */}
      <Text style={tw`text-lg font-bold text-center mt-6 text-gray-300`}>
        Icons
      </Text>

      {/* Description */}
      <Text style={tw`text-center text-base mt-2 font-medium text-gray-300`}>
        The typical app icon is colorful. It’s designed to grab your attention
        so that you open the app.
      </Text>

      {/* Image with RGB Overlay */}
      <View style={tw`relative mt-6 w-full h-96`}>
        <ImageBackground
          source={require('./assets/images/mobile.png')}
          style={[
            tw`w-full h-full rounded-2xl`, // Full height and width for image
            {borderTopLeftRadius: 24, borderTopRightRadius: 24},
          ]}
          imageStyle={tw`rounded-2xl`}
          resizeMode="cover">
          {/* Additional Text */}
          <View
            style={[
              tw`px-6 py-3 rounded-lg mt-32`,
              {backgroundColor: 'rgba(31, 38, 48, 0.5)'},
            ]}>
            <Text style={[tw`text-center  `,{color:"#ECEDF0"}]}>
              Consequently, your brain learns that opening colorful icons leads
              to “interesting” (stimulating) content.
            </Text>
          </View>

          <View
            style={[
              tw`px-6 py-3 mt-6 rounded-lg `,
              {backgroundColor: 'rgba(31, 38, 48, 0.2)'},
            ]}>
            <Text style={[tw`text-center  `,{color:"#ECEDF0"}]}>
              Eventually, you open apps without conscious thought as your brain
              craves stimulation - wondering later why you’re in an app you
              never planned to open.
            </Text>
          </View>
        </ImageBackground>

        {/* RGB Color Overlay */}
        <View
          style={[
            tw`absolute bottom-0 w-full h-64`, // RGB overlay for bottom half of the image
            {backgroundColor: 'rgba(31, 38, 48, 0.3)'},
          ]}
        />
      </View>

      {/* Pagination Dots */}
      <View style={tw`flex-row justify-center items-center `}>
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
          tw`w-full py-3 mt-2 rounded-full items-center`,
          {backgroundColor: '#29313C'},
        ]}
        activeOpacity={0.7}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-lg font-medium text-gray-300`}>Next</Text>
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
