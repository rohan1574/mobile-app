import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginPage = () => {
  return (
    <ScrollView
      contentContainerStyle={tw`flex-1 bg-gray-900 p-6 items-center justify-center`}>
      <Text style={tw`text-white text-xl bottom-20 font-semibold mb-4 text-center`}>
        Welcome to your Minimal Life
      </Text>

      <Text style={tw`text-gray-400 text-center font-medium bottom-12`}>
        This custom home screen was designed to improve your focus and reduce
        the time you spend on your phone. How does it work?
      </Text>

      <Text style={tw`text-white text-center mb-8`}>
        Bear with us - we promise it’ll be an interesting Journey together!
      </Text>

      <View style={tw`flex-row items-center mb-8`}>
        <Icon style={tw`left-8`} name="menu" size={24} color="white" />
        <View style={tw`flex-1 mx-8 h-0.5 bg-gray-600`} />
        <Icon
          style={tw` right-8`}
          name="ellipse"
          size={20}
          color="white"
        />
      </View>

      <Text style={[tw`text-white right-20 text-lg font-medium`]}>
        Get Started With
      </Text>

      <TouchableOpacity
        style={tw`flex-row items-center bg-gray-800 p-3 rounded-full top-4 w-full`}>
        <Icon name="logo-google" size={24} color="white" />
        <Text style={[tw`text-white ml-4 text-lg`, {left: 80}]}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-row items-center bg-gray-800 p-3 rounded-full top-8 w-full`}>
        <Icon name="logo-facebook" size={24} color="white" />
        <Text style={[tw`text-white ml-4 text-lg`, {left: 75}]}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-row items-center bg-gray-800 p-3 rounded-full top-12 w-full`}>
        <Icon name="logo-apple" size={24} color="white" />
        <Text style={[tw`text-white ml-4 text-lg`, {left: 80}]}>Apple</Text>
      </TouchableOpacity>

      <Text style={[tw`text-gray-500 font-bold top-20`, {fontSize: 10}]}>
        By tapping continue with Apple, Facebook or Google, you agree to
        Shopistra's <Text style={tw`underline`}>Terms of Use</Text> and{' '}
        <Text style={tw`underline`}>Privacy Policy</Text>
      </Text>
    </ScrollView>
  );
};

export default LoginPage;
