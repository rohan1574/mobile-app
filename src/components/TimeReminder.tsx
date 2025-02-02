import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const TimeReminder = () => {
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6`,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Title */}
      <Text
        style={[
          tw` font-semibold text-center mb-4 mt-24`,
          {color: '#ECEDF0',fontSize:16},
        ]}>
        The in-app time reminder is now available to assist you.
      </Text>
      <Text style={[tw` text-center`, {color: '#ECEDF0',fontSize:15}]}>
        Avoid getting lost in endless scrolling. Before using an addictive app,
        set a time limit for yourself, and receive a reminder when your time is
        up.
      </Text>

      {/* Image Section with Gradient Overlay */}
      <View style={tw`items-center  relative`}>
        <Image
          source={require('./assets/images/Reminder.png')}
          style={tw``}
          resizeMode="contain"
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(1, 1, 1, 1)', 'rgba(0,0,0,0)']} // Dark from bottom to transparent top
          style={[tw`absolute w-60  mb-12`, {bottom: 3, height:460}]}
          start={{x: 0.9, y: 1}} // Starts from bottom
          end={{x: 0.5, y: 0}} // Ends at top
        />
      </View>
      {/* Description text at the bottom of the image */}
      <Text
        style={[
          tw`absolute bottom-40 text-center  font-normal `,
          {color: '#ECEDF0', fontSize:15},
        ]}>
        The in-app time reminder is automatically enabled for games, social
        media, and similar applications. However, you can customize these
        settings according to your preferences.
      </Text>

    {/* pagination */}
            <View
              style={[
                tw`flex-row justify-center items-center bottom-28 py-5 px-20`,
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
                     tw`w-full bottom-28 bg-blue-500 py-4 rounded-full items-center`,
                     {backgroundColor: '#29313C'},
                   ]}
                   activeOpacity={0.8}>
                   <View style={tw`flex-row items-center`}>
                     <Text style={[tw` text-lg font-medium`,{color: '#ECEDF0'}]}>Next</Text>
                     <Icon name="arrow-forward" size={20} color="#ECEDF0" style={tw`ml-1`} />
                   </View>
                 </TouchableOpacity>
    </View>
  );
};

export default TimeReminder;
