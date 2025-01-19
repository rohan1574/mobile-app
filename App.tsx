import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import {Slider} from '@miblanchard/react-native-slider';

const App = () => {
  return (
    <SafeAreaView style={[tw`flex-1 `, {backgroundColor: '#1F2630'}]}>
      {/* Top Section */}
      <View style={tw`flex-1 justify-center items-center `}>
        <Text
          style={[
            tw` font-normal`,
            {
              fontSize: 32, // Use a numeric value (no "px")
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontStyle: 'normal', // This is valid
              fontWeight: '400', // Matches `font-normal`
              lineHeight: 38, // Use a numeric value for lineHeight
              letterSpacing: -0.96, // Numeric value for letterSpacing
            },
          ]}>
          20:54
        </Text>

        <Text
          style={[
            tw` font-normal`,
            {
              color: '#ECEDF0',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 16, // Use a numeric value; adjust as needed based on design
            },
          ]}>
          Tuesday, 10th June
        </Text>

        {/* Vector Battery Icon */}
        <Icon
          name="battery-half" // Options: "battery-full", "battery-empty", etc.
          size={24} // Adjust size as needed
          color="#9CA3AF" // Tailwind's gray-400
          style={tw`mt-2`}
        />
      </View>

      {/* App Buttons (Moved Up) */}
      <View style={tw`flex-1 justify-start items-center `}>
        {['Calendar', 'WhatsApp', 'Messenger'].map(app => (
          <TouchableOpacity
            key={app}
            style={[
              tw`w-4/5 py-3 my-2 rounded-full border items-center`,
              {borderColor: '#858E9D'},
            ]}>
            <Text
              style={[
                tw`text-lg`,
                {
                  color: '#ECEDF0',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 22, // Use a numeric value; adjust as needed
                  letterSpacing: -0.54, // Use a numeric value for letter spacing
                },
              ]}>
              {app}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Add Button (Moved Up) */}
        <TouchableOpacity style={tw`p-3 rounded-full`}>
          <Icon
            name="add-circle-outline"
            size={40}
            color="#434C5B"
            style={tw``}
          />
        </TouchableOpacity>
        <Text
          style={[
            tw` font-normal`,
            {
              color: '#434C5B',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 16, // Approximate; adjust as needed
            },
          ]}>
          Don't add unnecessary addictive apps!
        </Text>
      </View>

      {/* Progress Section (Moved Up) */}
      <View style={tw`flex-1 justify-center px-4 mb-20`}>
        <Text
          style={[
            tw`text-center text-sm font-normal mb-2`,
            {
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 16, // Approximate; adjust as needed for better spacing
            },
          ]}>
          Overall Ranking
        </Text>

        <Slider
          value={70}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#ECEDF0"
          minimumTrackTintColor="#495057"
          maximumTrackTintColor="#495057"
        />
        <Text
          style={[
            tw`text-center text-sm font-normal`,
            {
              color: '#858E9D',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 16, // Approximate; adjust as needed
            },
          ]}>
          Today Unlock: 5 || Today Use: 120 M
        </Text>

        <Text
          style={[
            tw`text-center mt-2 text-sm font-normal`,
            {
              color: '#434C5B',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 16, // Approximate; adjust as necessary
            },
          ]}>
          Use less to increase progress bar
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View
        style={tw`absolute bottom-0  flex-row justify-center w-full py-4 px-2 mb-10`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center  py-3 border border-gray-700 mx-1`, // mx-2 for gap
            {borderTopLeftRadius: 50, borderBottomLeftRadius: 50,backgroundColor:'#29313C'},
          ]}>
          <Text style={[tw` text-lg`,{color:'#ECEDF0'}]}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 border border-gray-700 mx-1`, // mx-2 for gap
            {borderTopRightRadius: 50, borderBottomRightRadius: 50,backgroundColor:'#29313C'},
          ]}>
          <Text style={[tw` text-lg`,{color:'#ECEDF0'}]}>Dialer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
