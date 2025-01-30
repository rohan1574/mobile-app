import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';

const TimeReminder = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw`text-base font-semibold  top-20  mx-6 text-center`,
          {color: '#ECEDF0'},
        ]}>
        The in-app time reminder is now available to assist you.
      </Text>
      <Text
        style={[
          tw`text-base  font-semibold mx-4 text-center top-24 `,
          {color: '#ECEDF0'},
        ]}>
        Avoid getting lost in endless scrolling. Before using an addictive app,
        set a time limit for yourself, and receive a reminder when your time is
        up.
      </Text>

      {/* Image Section with Description as background */}
      <View style={tw`relative mb-16 top-16`}>
        <Image source={require('./assets/images/Reminder.png')} />
        {/* Linear Gradient */}
        <View
          style={{
            position: 'absolute',
            top: 60,
            left: 90,
            right: 90,
            bottom: 135,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Description text at the bottom of the image */}
        <Text
          style={[
            tw`absolute bottom-48 text-base text-center  font-normal ml-8`,
            {color: '#ECEDF0'},
          ]}>
          The in-app time reminder is automatically enabled for games, social
          media, and similar applications. However, you can customize these
          settings according to your preferences.
        </Text>
        {/* pagination */}
        <View
          style={[
            tw`flex-row justify-center items-center bottom-20 pt-5`,
            {backgroundColor: '#1F2630'},
          ]}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={tw`mx-1`}>
              {index === 0 ? (
                <Icon name="checkmark-circle-outline" size={20} color="white" />
              ) : (
                <View style={tw`w-3 h-3 rounded-full bg-white`} />
              )}
            </View>
          ))}
        </View>
        {/* Next Button */}
        <TouchableOpacity
          style={[
            tw` py-3 bottom-16  rounded-full items-center mx-10`,
            {backgroundColor: '#29313C'},
          ]}
          activeOpacity={0.7}>
          <View style={tw`flex-row items-center`}>
            <Text
              style={[
                tw`text-lg font-medium text-gray-300`,
                {color: '#ECEDF0'},
              ]}>
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
    </View>
  );
};

export default TimeReminder;
