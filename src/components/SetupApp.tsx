import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const SetupApp = () => {
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
        {[1, 2, 3].map(num => (
          <View
            key={num}
            style={[
              tw`h-10 w-10 rounded-full flex items-center justify-center mx-2`,
              {
                backgroundColor: '#1F2630',
                borderWidth: 1,
                borderColor: 'white',
              },
            ]}>
            <Text style={[tw`font-bold`, {color: 'white', fontSize: 20}]}>
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
        <Image source={require('./assets/images/graph.png')} style={tw``} />
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
          tw`absolute  text-center  font-semibold `,

          {color: '#ECEDF0', fontSize: 14, bottom: 300},
        ]}>
        Minimal Life phone needs permission to display content over other apps
        to allow the in-app time reminder to work
      </Text>
      {/* icon text */}
      <View
        style={[tw`absolute w-full px-6 bottom-40`, {alignItems: 'center'}]}>
        <View style={tw`flex-row items-center mb-2 `}>
        <Image source={require('./assets/images/graph.png')} style={tw`bottom-2 right-4`} />
          <Text
            style={[
              tw`text-base font-semibold text-start`,
              {color: '#ECEDF0'},
            ]}>
            Press button below and find Minimal Life phone.
          </Text>
        </View>
        <View style={tw`flex-row items-center `}>
        <Image source={require('./assets/images/graph.png')} style={tw`bottom-2 right-4`} />
          <Text
            style={[
              tw`text-base font-semibold text-start `,
              {color: '#ECEDF0'},
            ]}>
            Activate slider next time to Minimal Life phone.
          </Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          tw`px-6 py-3 rounded-full flex-row items-center bottom-12`,
          {backgroundColor: '#29313C'},
        ]}>
        <Text style={[tw`text-base font-bold mr-2 px-12`, {color: '#ECEDF0'}]}>
          Open overlay settings
        </Text>
        <Icon name="arrow-forward" size={20} color="#ECEDF0" />
      </TouchableOpacity>

      {/* Footer */}
      <Text style={[tw`text-sm bottom-12`, {color: '#858E9D'}]}>
        You can remove the permission anytime later.
      </Text>
      <TouchableOpacity>
        <Text
          style={[tw`bottom-8 text-center`, {fontSize: 12, color: '#434C5B'}]}>
          Are you having trouble granting overlay permission?
          <Text style={tw`underline`}>Contact support via email.</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupApp;
