import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const Success = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        tw`flex-1 p-5 justify-center items-center`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* welcome */}
      <Text style={[tw`text-xl font-normal bottom-20 text-gray-700`, {}]}>
        Welcome to your Minimal Life
      </Text>
      <Text style={[tw`text-gray-700 font-medium text-center bottom-6`,{fontSize:13}]}>
        This custom home screen was designed to improve your focus and reduce
        the time you spend on your phone. How does it work?
      </Text>
      <Text style={tw`text-gray-700 text-center `}>
        Bear with us - we promise it’ll be interesting Journey together!
      </Text>
      {/* icon */}

      <View style={tw`flex-row items-center top-8`}>
        <Icon style={tw`text-gray-700 left-8`} name="menu" size={24} color="white" />
        <View style={[tw`flex-1 mx-8 bg-gray-700`,{height:2}]}></View>
        <Icon
          style={tw`text-gray-700 right-8`}
          name="ellipse"
          size={20}
          color="white"
        />
      </View>
      {/* login */}
      <Text style={tw`text-white text-lg font-bold top-12`}>Login Success !</Text>

      <TouchableOpacity style={[tw`bg-gray-700 py-3 rounded-full top-16`,{width:330}]}>
        <Text style={tw`text-white text-center text-lg`}>continue</Text>
      </TouchableOpacity>
      {/* get started */}

      <Text style={[tw`text-gray-700 text-base font-bold right-20`,{top:75}]}>Get Started With</Text>

      <TouchableOpacity
        style={[
          tw`flex-row items-center top-20 py-3 px-6 rounded-full mb-3 w-full`,
          {backgroundColor: '#29313C'},
        ]}>
        <Icon
          name="logo-google"
          size={20}
          color="white"
          style={tw`mr-3 text-gray-700`}
        />
        <Text style={[tw`text-gray-700 text-lg`,{left:80}]}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          tw`flex-row items-center top-20 py-3 px-6 rounded-full mb-3 w-full`,
          {backgroundColor: '#29313C'},
        ]}>
        <Icon
          name="logo-facebook"
          size={20}
          color="white"
          style={tw`mr-3 text-gray-700`}
        />
        <Text style={[tw`text-gray-700 text-lg`,{left:75}]}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`flex-row items-center top-20 py-3 px-6 rounded-full mb-4 w-full`,{backgroundColor: '#29313C'}]}>
        <Icon name="logo-apple" size={20} color="white" style={tw`mr-3 text-gray-700`} />
        <Text style={[tw`text-gray-700 text-lg`,{left:80}]}>Apple</Text>
      </TouchableOpacity>

      <Text style={[tw`text-gray-500 font-bold top-20`,{fontSize:10}]}>
        By tapping continue with Apple, Facebook or Google, you agree to
        Shopistra's <Text style={tw`underline`}>Terms of Use</Text> and{' '}
        <Text style={tw`underline`}>Privacy Policy</Text>
      </Text>
    </ScrollView>
  );
};
export default Success;
