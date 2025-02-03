import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';


const SetupApps = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6 `,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Header */}
      <Text style={[tw` text-2xl font-normal mb-4 bottom-36 `, {color: '#ECEDF0'}]}>
        Setup App
      </Text>

      {/* Steps */}
      <View style={tw`flex-row items-center mb-6 bottom-28`}>
        {[1, 2, 3].map((num, index) => (
          <View
            key={num}
            style={[
              tw`h-10 w-10 rounded-full flex items-center justify-center mx-4`,
              index < 2 ? tw`bg-white` : tw`border border-white`,
            ]}>
            <Text
              style={[
                tw`font-bold`,
                {color: index < 2 ? 'black' : 'white', fontSize: 20},
              ]}>
              {num}
            </Text>
          </View>
        ))}
      </View>

      {/* Permission Text */}
      <Text
        style={[
          tw` text-center font-medium `,

          {color: '#ECEDF0', fontSize: 14},
        ]}>
       Last step before you can start using Minimal Life  Launcher - set it as your default home screen.
      </Text>
      <Text
        style={[
          tw` text-center top-20 font-medium `,

          {color: '#ECEDF0', fontSize: 17},
        ]}>
        CHOOSE APPS-{'>'} DEFAULT APPS-{'>'} HOME APP OR LAUNCHER AND SELECT MINIMAL LIFE PHONE
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={[
          tw`px-24 py-3 rounded-full flex-row items-center top-24`,
          {backgroundColor: '#29313C'},
        ]}>
        <Text style={[tw` text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
          Open settings
        </Text>
        <Icon name="arrow-forward" size={20} color="#ECEDF0" />
      </TouchableOpacity>

      {/* Footer */}

      <TouchableOpacity>
        <Text
          style={[tw`text-center top-48`, {fontSize: 12, color: '#434C5B'}]}>
          Are you having trouble granting overlay permission?
          <Text style={tw`underline`}>Contact support via email.</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupApps;
