import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const SetupAppScreen = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6 `,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Header */}
      <Text style={[tw` text-2xl font-normal mb-4 top-12`, {color: '#ECEDF0'}]}>
        Setup App
      </Text>

      {/* Steps */}
      <View style={tw`flex-row items-center mb-6 top-12`}>
        {[1, 2, 3].map((num, index) => (
          <View
            key={num}
            style={[
              tw`h-10 w-10 rounded-full flex items-center justify-center mx-2`,
              index === 0 ? tw`bg-white` : tw`border border-white`,
            ]}>
            <Text
              style={[
                tw`font-bold`,
                {color: index === 0 ? 'black' : 'white', fontSize: 20},
              ]}>
              {num}
            </Text>
          </View>
        ))}
      </View>

      {/* Phone Mockup */}
      <View style={tw`items-center  relative`}>
        <Image
          source={require('./assets/images/Permit.png')}
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

      {/* Permission Text */}
      <Text
        style={[
          tw`absolute bottom-48 text-center  font-semibold `,

          {color: '#ECEDF0', fontSize: 15},
        ]}>
        Minimal Life phone needs access to usage statistics for the in-app time
        reminder to be functional.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={[
          tw`px-6 py-3 rounded-full flex-row items-center bottom-12`,
          {backgroundColor: '#29313C'},
        ]}>
        <Text style={[tw` text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
          Open usage permission setting
        </Text>
        <Icon name="arrow-forward" size={20} color="#ECEDF0" />
      </TouchableOpacity>

      {/* Footer */}
      <Text style={[tw`text-sm  bottom-12`, {color: '#858E9D'}]}>
        You can remove the permission anytime later.
      </Text>
      <TouchableOpacity>
        <Text
          style={[tw` bottom-8 text-center`, {fontSize: 12, color: '#434C5B'}]}>
          Are you having trouble granting overlay permission?
          <Text style={tw`underline`}>Contact support via email.</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupAppScreen;
