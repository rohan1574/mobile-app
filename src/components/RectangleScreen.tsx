import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const RectangleScreen = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw` font-bold text-center mb-4 mt-32 bottom-8`,
          {color: '#ECEDF0', fontSize: 18},
        ]}>
        No icons on Minimal Life phone
      </Text>
      <Text
        style={[
          tw` font-bold text-center  `,
          {color: '#ECEDF0', fontSize: 16},
        ]}>
       Apps are shown not just as text with their names.
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`items-center  relative`}>
        <Image
          source={require('./assets/images/Rectangle.png')}
          style={tw``}
          resizeMode="contain"
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(1, 1, 1, 1)', 'rgba(0,0,0,0)']} // Dark from bottom to transparent top
          style={[tw`absolute w-60  mb-12`, {bottom: 3, height: 460}]}
          start={{x: 0.9, y: 1}} // Starts from bottom
          end={{x: 0.5, y: 0}} // Ends at top
        />
      </View>
      {/* Description text at the bottom of the image */}
      <Text
        style={[
          tw`absolute bottom-40 text-center ml-4  font-normal `,
          {color: '#ECEDF0', fontSize: 15},
        ]}>
        This discourages mindless app usage by requiring you to consciously
        identify the app before choosing to open it.
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center bottom-24 py-5 px-20`,
          {backgroundColor: '#1F2630'},
        ]}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index === 0 ? (
              <Icon name="checkmark-circle-outline" size={20} color="white" />
            ) : (
              <Icon name="ellipse-outline" size={20} color="white" />
            )}
          </View>
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full bottom-24 bg-blue-500 py-4 rounded-full items-center`,
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

export default RectangleScreen;
