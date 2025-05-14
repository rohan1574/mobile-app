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
  const [showCustomTime, setShowCustomTime] = useState(false); // Toggle state
  const [selectedOption, setSelectedOption] = useState('remind');
  const [secondWarning, setSecondWarning] = useState(true);

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
          tw`absolute left-4 rounded-xl p-4`,
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
          {['2 min', '5 min', '10 min', '15 min','20 min','30 min'].map((time, index) => (
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
            {/* Time Over Options */}
            <View style={[tw` p-6 rounded-lg w-full max-w-md`,{backgroundColor: '#29313C'}]}>
              <Text style={tw`text-white text-lg font-medium mb-4 text-center`}>
                When time is over
              </Text>

              {/* Mindful Delay */}
              <TouchableOpacity
                style={tw`flex-row items-center mb-4`}
                onPress={() => setSelectedOption('delay')}>
                <Icon
                  name={
                    selectedOption === 'delay'
                      ? 'radio-button-on'
                      : 'radio-button-off'
                  }
                  size={20}
                  color="#fff"
                />
                <Text style={tw`text-white ml-2`}>Mindful Delay</Text>
              </TouchableOpacity>

              {/* Remind Me */}
              <TouchableOpacity
                style={tw`flex-row items-center mb-4`}
                onPress={() => setSelectedOption('remind')}>
                <Icon
                  name={
                    selectedOption === 'remind'
                      ? 'radio-button-on'
                      : 'radio-button-off'
                  }
                  size={20}
                  color="#fff"
                />
                <Text style={tw`text-white ml-2 mr-2`}>Remind Me</Text>
                <TouchableOpacity
                  onPress={() => setSecondWarning(!secondWarning)}>
                  <View style={tw`flex-row items-center`}>
                    <Icon
                      name={secondWarning ? 'checkbox' : 'square-outline'}
                      size={20}
                      color="#fff"
                    />
                    <Text style={tw`text-white ml-2`}>With 2nd Waring</Text>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>

              {/* Quit */}
              <TouchableOpacity
                style={tw`flex-row items-center`}
                onPress={() => setSelectedOption('quit')}>
                <Icon
                  name={
                    selectedOption === 'quit'
                      ? 'radio-button-on'
                      : 'radio-button-off'
                  }
                  size={20}
                  color="#fff"
                />
                <Text style={tw`text-white ml-2`}>Quit</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default AppOpeningPopUp;
 
