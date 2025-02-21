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
  const [showCustomTime, setShowCustomTime] = useState(false); // Toggle state

  return (
    <View style={[tw`flex-1 p-4`, {backgroundColor: '#1F2630'}]}>
      {/* Search Bar */}
      <View
        style={tw`flex-row items-center border border-white top-4 rounded-full`}>
        <Icon name="search" size={20} style={tw`left-4 text-gray-200`} />
        <TextInput
          placeholder="Search app here"
          placeholderTextColor="gray"
          style={tw`left-6 font-normal flex-1`}
        />
      </View>

      {/* All Apps Header */}
      <View style={tw`flex-row items-center justify-between top-6`}>
        <Text style={[tw`text-xl font-bold`, {color: '#ECEDF0'}]}>
          All Apps
        </Text>
        <Icon name="settings-sharp" size={24} color="#ECEDF0" />
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
          'Camera',
          'Calculator',
          'Fifa pro',
          'Calbo+',
          'App picks',
        ].map((app, index) => (
          <View
            key={index}
            style={tw`flex-row items-center justify-between p-2 mb-2 top-8 bg-gray-700 rounded-full`}>
            <Text style={tw`text-white text-base`}>{app}</Text>
            <Text style={tw`text-gray-400 text-xs`}>
              LO: 5 h ago || DU: 10 min
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Timer Modal */}
      <View
        style={[
          tw`absolute right-5 rounded-xl p-4`,
          {top: 262, backgroundColor: '#29313C'},
        ]}>
        <Text
          style={[
            tw`text-white font-semibold mb-4 text-center`,
            {fontSize: 16},
          ]}>
          How much time do you want to spend on Brave now?
        </Text>

        {/* Quick Time Buttons */}
        <View style={tw`flex-row flex-wrap justify-between`}>
          {['2 min', '5 min', '10 min', '15 min'].map((time, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-36 py-2 bg-gray-400 rounded-full mb-2 items-center`}>
              <Text style={[tw`text-base`, {color: '#ECEDF0'}]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

      
        {/* Toggle Icon (একই আইকন দিয়ে সব টগল হবে) */}
        <TouchableOpacity
          onPress={() => setShowCustomTime(!showCustomTime)}
          style={tw`self-center mb-2`}>
          <Icon
            name={showCustomTime ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>

        {/* Custom Time Input এবং Time Over Options (একসাথে দেখানো হবে) */}
        {showCustomTime && (
          <>
            {/* Custom Time Input */}
            <View style={tw`flex-row items-center justify-center mb-4`}>
              <TextInput
                value={time}
                onChangeText={setTime}
                keyboardType="numeric"
                style={tw`text-gray-400 text-lg text-center border-b border-gray-400 w-12`}
              />
              <Text style={tw`text-gray-400 text-lg mr-8`}>min</Text>
              <TouchableOpacity
                style={tw`w-36 py-2 bg-gray-400 rounded-full mb-2 items-center left-4`}>
                <Text style={tw`text-white text-base`}>Use {time} min</Text>
              </TouchableOpacity>
            </View>

            {/* Time Over Options */}
            <Text style={tw`text-gray-400 font-normal left-4 text-lg mb-2`}>When time is over</Text>
            <TouchableOpacity style={tw`flex-row items-center mb-2 left-12`}>
              <Icon
                name="radio-button-off"
                size={20}
                color="gray"
                style={tw`mr-2`}
              />
              <Text style={tw`text-gray-400 text-base`}>
                Exit app when time is over
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`flex-row items-center left-12`}>
              <Icon
                name="radio-button-on"
                size={20}
                color="gray"
                style={tw`mr-2`}
              />
              <Text style={tw`text-gray-400 text-base`}>Only remind</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default AppOpeningPopUp;
