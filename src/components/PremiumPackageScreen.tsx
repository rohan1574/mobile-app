import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {s as tw} from 'react-native-wind';

const PremiumScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-900 p-4 justify-center items-center`}>
      <Text style={tw`text-gray-300 text-lg font-semibold bottom-12`}>
        Premium User Features
      </Text>

      <View style={tw`bottom-4 right-6`}>
        {[
          'Up to 6 Favorite Apps',
          'Customize Color Scheme',
          'Unlimited App/Category Rename',
          'Unlimited Hide Privacy App',
          'Real Support Reply and Fast Fix',
          'Upcoming premium features',
        ].map((item, index) => (
          <View key={index} style={tw`flex-row items-center mb-2`}>
            <Image
              source={require('./assets/images/graph.png')}
              style={tw`right-2`}
            />
            <Text style={tw`text-gray-200`}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={tw`flex-row justify-between w-full mb-6`}>
        <View style={tw`flex-1 bg-gray-800 p-4 mx-1 border border-gray-700 rounded-xl items-center top-4`}>
          <Text style={tw`text-gray-500 bottom-2`}>Monthly</Text>
          <View style={[tw`border-b border-gray-700 mb-4`, {width: 100}]} />
          <Text style={tw`text-gray-400 text-sm`}>$0.99/m</Text>
          <Text style={[tw`text-gray-400 text-center top-8`,{fontSize:12}]}>Enjoy 1 Month Free Trial</Text>
        </View>

        <View
          style={tw`flex-1 bg-gray-700 p-4 mx-1 rounded-xl items-center border-2 border-gray-400 bottom-1`}>
          <Text style={tw`text-white bottom-2`}>Yearly</Text>
          <View style={[tw`border-b border-gray-100 mb-4`, {width: 100}]} />
          <Text style={tw`text-gray-400 line-through`}>$11.88/y</Text>
          <Text style={tw`text-white text-lg`}>$9.90/y</Text>
          <Text style={[tw`text-gray-400 text-center mt-2`,{fontSize:12}]}>Enjoy 1 Month Free Trial</Text>
        </View>

        <View style={tw`flex-1 bg-gray-800 p-4 mx-1 border border-gray-700 rounded-xl items-center top-4`}>
          <Text style={tw`text-gray-500 bottom-2`}>Lifetime</Text>
          <View style={[tw`border-b border-gray-700 mb-4`, {width: 100}]} />
          <Text style={tw`text-gray-400 text-sm`}>$19.00/lt</Text>
          <Text style={[tw`text-gray-400 text-center top-8`,{fontSize:12}]}>Enjoy 1 Month Free Trial</Text>
        </View>
      </View>

      <TouchableOpacity style={tw`bg-gray-700 px-24 py-3 top-2 rounded-full `}>
        <Text style={tw`text-white font-semibold`}>Start with Free Trial!</Text>
      </TouchableOpacity>

      <Text style={tw`text-gray-400 text-center top-8`}>
        No worry! You can still use for free. We'll continue our digital
        distraction-free journey together. We're happy to be with you.
      </Text>

      <TouchableOpacity style={tw`bg-gray-700 px-24 top-12 py-3 rounded-full`}>
        <Text style={tw`text-white font-semibold`}>Continue Using Free</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PremiumScreen;
