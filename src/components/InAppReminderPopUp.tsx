import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const InAppReminderPopUp = () => {


  return (
    <View style={tw`flex-1 bg-gray-500 p-4`}>
      <View
        style={[tw`bg-gray-900 justify-center top-40 rounded-lg items-center `,{height:430}]}>
        {/* Time Up Warning */}
        <View style={tw`flex-row items-center mb-2`}>
          <Icon name="warning-outline" size={20} color="#facc15" />
          <Text style={tw`text-yellow-400 text-lg font-semibold ml-1`}>
            Time Up!
          </Text>
          <Text style={tw`text-white text-base ml-2`}>00.00</Text>
        </View>

        {/* Subtext */}
        <Text style={tw`text-gray-300 text-base mb-6`}>
          Please, Let me use another_
        </Text>

        {/* Grid Buttons */}
        <View style={tw`flex-row flex-wrap justify-between mx-4`}>
          {['2 min', '5 min', '10 min', '15 min', '20 min', '30 min'].map(
            (time, index) => (
              <TouchableOpacity
                key={index}
                style={tw`w-36 py-2 bg-gray-400 rounded-full mb-2 items-center`}>
                <Text style={[tw`text-base`, {color: '#ECEDF0'}]}>{time}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>

        {/* Divider */}
        <View style={tw`border-t border-gray-500 w-full my-6`} />

        {/* Quit Button */}
        <TouchableOpacity style={tw`bg-gray-600  py-3 rounded-full w-80`}>
          <Text style={tw`text-white text-center text-base`}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InAppReminderPopUp;
