import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';

const Premiums = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 justify-center items-center p-4`}>
      <Text style={tw`text-white text-xl font-normal bottom-20`}>You're all Good!</Text>
      
      <Image source={require('./assets/images/premium.png')} style={tw`w-48 h-48 bottom-16`} />

      <TouchableOpacity style={tw`bg-gray-800 rounded-full w-full py-3 mb-4`}>
        <Text style={tw`text-white text-center text-lg font-semibold`}>Continue to Home Screen</Text>
      </TouchableOpacity>

      <Text style={tw`text-gray-400 text-center font-medium px-6 mb-6`}>
        It might be uncomfortable at first, but it'll be a great experience after a few days.
      </Text>

      <Text style={[tw`text-gray-300 text-center px-6 mb-6`,{fontSize:16}]}>
        If you <Text style={tw`font-bold`}>stick 20 days</Text>, we'll share a {' '}
        <Text style={tw`font-bold`}>Premium promo</Text> code as a reward.
      </Text>

      <TouchableOpacity style={tw`border border-gray-600 rounded-full top-20 w-full py-4`}>
        <Text style={tw`text-white text-center text-lg `}>Check Out Premium</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Premiums;
