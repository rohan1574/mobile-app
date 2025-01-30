import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';

const MinimalLifeScreen = () => {
  return (
    <View style={[tw`flex-1 justify-between px-6`, { backgroundColor: '#1F2630' }]}>
      {/* Header Section */}
      <View style={tw`mt-24`}>
        <Text style={[tw`text-center text-xl font-bold`, { color: '#ECEDF0' }]}>
          Welcome to your Minimal Life
        </Text>
      </View>

      {/* Description Section */}
      <View style={tw`flex-grow justify-center`}>
        <Text style={[tw`text-center text-sm leading-6 font-semibold`, { color: '#ECEDF0' }]}>
          This custom home screen was designed to improve your focus and reduce the time you spend
          on your phone. How does it work?{'\n\n'}
          Bear with us - we promise it’ll be interesting.
        </Text>
      </View>

      {/* Footer Section */}
      <View style={tw`items-center mb-8`}>
        {/* Terms and Privacy Links */}
        <Text style={[tw`text-xs text-center mb-4`, { color: '#858E9D' }]}>
          By continuing you agree to{' '}
          <Text style={[tw`underline`, { color: '#858E9D' }]}>Terms of Service</Text> and{' '}
          <Text style={[tw`underline`, { color: '#858E9D' }]}>Privacy Policy</Text>
        </Text>

        {/* Login Option */}
        <Text style={[tw`text-sm mb-16`, { color: '#ECEDF0' }]}>
          Do you have an existing account?{' '}
          <Text style={[tw`underline`, { color: '#ECEDF0' }]}>Log in</Text>
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={[tw`rounded-full w-3/4 py-3`, { backgroundColor: '#29313C' }]}
          activeOpacity={0.8}
        >
          <Text style={[tw`text-center font-medium text-base`, { color: '#ECEDF0' }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MinimalLifeScreen;
