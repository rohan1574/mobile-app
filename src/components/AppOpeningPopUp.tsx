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

const AppOpeningPopUp = () => {
  const [time, setTime] = useState('55');

  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      {/* Search Bar */}
      <View
        style={tw`flex-row items-center mb-4 border border-gray-600 rounded-full p-2`}>
        <Icon name="search" size={20} color="white" style={tw`mr-2`} />
        <TextInput
          placeholder="Search app here"
          placeholderTextColor="#ccc"
          style={tw`text-white flex-1`}
        />
      </View>

      {/* All Apps Header */}
      <View style={tw`flex-row items-center justify-between mb-4`}>
        <Text style={tw`text-white text-xl font-bold`}>All Apps</Text>
        <Icon name="settings-outline" size={24} color="white" />
      </View>

      {/* App List Placeholder */}
      <ScrollView style={tw`flex-1`}>
        {[
          'My Airtel',
          'Contact',
          'Al hadith',
          'Al hadith',
          'Al hadith',
          'Al hadith',
          'Camera',
          'Calculator',
          'Fifa pro',
          'Calbo+',
          'App picks',
        ].map((app, index) => (
          <View
            key={index}
            style={tw`flex-row items-center justify-between p-3 mb-2 bg-gray-800 rounded`}>
            <Text style={tw`text-white text-base`}>{app}</Text>
            <Text style={tw`text-gray-400 text-xs`}>
              LO: 5 h ago || DU: 10 min
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Timer Modal */}
      <View
        style={tw`absolute top-1/4 left-5 right-5 bg-gray-800 rounded-xl p-4`}>
        <Text style={tw`text-white text-lg font-semibold mb-4`}>
          How much time do you want to spend on Brave now?
        </Text>

        {/* Quick Time Buttons */}
        <View style={tw`flex-row flex-wrap justify-between mb-4`}>
          {['2 min', '5 min', '10 min', '15 min'].map((time, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-32 bg-gray-700 p-3 rounded-lg mb-2 items-center`}>
              <Text style={tw`text-white text-base`}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Custom Time Input */}
        <View style={tw`flex-row items-center justify-center mb-4 `}>
          <TextInput
            value={time}
            onChangeText={setTime}
            keyboardType="numeric"
            style={tw`text-white text-xl text-center border-b border-white w-16`}
          />
          <Text style={tw`text-white text-lg mr-8`}>min</Text>
          {/* Use Custom Time Button */}
          <TouchableOpacity
            style={tw`bg-gray-700 px-4 py-2 rounded-lg  self-center`}>
            <Text style={tw`text-white text-base`}>Use {time} min</Text>
          </TouchableOpacity>
        </View>

        {/* Time Over Options */}
        <Text style={tw`text-white text-base mb-2`}>When time is over</Text>
        <TouchableOpacity style={tw`flex-row items-center mb-2`}>
          <Icon
            name="radio-button-off"
            size={20}
            color="white"
            style={tw`mr-2`}
          />
          <Text style={tw`text-white text-base`}>
            Exit app when time is over
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-row items-center`}>
          <Icon
            name="radio-button-on"
            size={20}
            color="white"
            style={tw`mr-2`}
          />
          <Text style={tw`text-white text-base`}>Only remind</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppOpeningPopUp;
