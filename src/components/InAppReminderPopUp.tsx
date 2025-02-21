import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { s as tw } from 'react-native-wind';

const InAppReminderPopUp = () => {
  const [time, setTime] = useState('26');

  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      {/* Timer Modal */}
      <View style={tw`absolute top-1/4 left-5 right-5 bg-gray-800 rounded-xl p-4 items-center`}>
        <Icon name="alert-circle-outline" size={40} color="yellow" style={tw`mb-2`} />
        <Text style={tw`text-yellow-400 text-lg font-semibold mb-2`}>⚠️ Time Up! 00.00</Text>
        <Text style={tw`text-white text-base mb-4`}>Please, Let me use another_</Text>

        {/* Quick Time Buttons */}
        <View style={tw`flex-row flex-wrap justify-between mb-4`}>
          {['2 min', '5 min', '10 min', '15 min'].map((time, index) => (
            <TouchableOpacity key={index} style={[tw`py-2 bg-gray-400 rounded-full mb-2 items-center`,{width:140}]}>
              <Text style={tw`text-white text-base`}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Custom Time Input */}
        <View style={tw`flex-row items-center justify-center mb-4`}>
          <TextInput
            value={time}
            onChangeText={setTime}
            keyboardType="numeric"
            style={tw`text-gray-400 text-lg text-center border-b border-gray-400 w-12`}
          />
          <Text style={tw`text-gray-400 text-lg`}>min</Text>
          <TouchableOpacity style={[tw`py-2 bg-gray-400 rounded-full mb-2 items-center left-8`,{width:140}]}>
          <Text style={tw`text-white text-base `}>Use {time} min</Text>
        </TouchableOpacity>
        </View>

        {/* Use Custom Time Button */}
        
      </View>
    </View>
  );
};

export default InAppReminderPopUp;
