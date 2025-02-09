import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const Uninstall = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw`font-bold text-center bottom-4 `,
          {color: '#ECEDF0', fontSize: 17},
        ]}>
        Don’t panic Uninstall. Use at least 7 days, You’re going to Love This
        App
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`relative `}>
        <Image
          source={require('./assets/images/group.png')}
          style={[tw`object-cover`, {width: 368, height: 338}]}
        />
        
      </View>
      {/* Description text at the bottom of the image */}
      <Text
        style={[
          tw` font-bold text-center top-8`,
          {color: '#ECEDF0', fontSize: 15},
        ]}>
        Give it just one week, and you'll discover why this app is a
        game-changer.
      </Text>
      <Text
        style={[
          tw` font-semibold text-center top-12`,
          {color: '#ECEDF0', fontSize: 16},
        ]}>
        Next: we need a few permissions to make Minimal Life phone work the way
        it’s meant to
      </Text>

      {/* pagination */}
      <View
        style={[
          tw`flex-row justify-center items-center top-12 py-5 px-20`,
          {backgroundColor: '#1F263'},
        ]}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index < 5 ? ( // প্রথম ৪টি index এর জন্য checkmark আইকন দেখাবে
              <View
                style={tw`w-4 h-4 rounded-full bg-white justify-center items-center `}>
                <Image
                  source={require('./assets/images/check.png')}
                  style={tw``}
                />
              </View>
            ) : (
              // শেষ index এর জন্য সাদা ডট দেখাবে
              <View style={tw`w-4 h-4 rounded-full border border-white `} />
            )}
          </View>
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity
        style={[
          tw`w-full bg-blue-500 py-3 rounded-full items-center top-12`,
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

export default Uninstall;
