import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';

const App = () => {
  const [time, setTime] = useState('90');

  return (
    <View style={tw`flex-1 bg-gray-900 p-4 items-center justify-center`}>
      {/* Expected Screen Time Modal */}
      <View style={tw`bg-gray-800 rounded-xl p-4 w-full items-center`}>
        <Text style={tw`text-white text-lg font-semibold mb-2`}>Your Expected Screen Time</Text>
        <Text style={tw`text-gray-400 text-sm mb-4`}>How much time do you plan to spend on your SmartPhone daily?</Text>

        {/* Time Options */}
        <View style={tw`flex-row flex-wrap justify-between mb-4 w-full`}>
          {['15 min', '30 min', '45 min', '1 hour'].map((item, index) => (
            <TouchableOpacity key={index} style={tw`w-32 bg-gray-700 p-3 rounded-lg mb-2 items-center`}>
              <Text style={tw`text-white text-base`}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Custom Time Input */}
        <View style={tw`flex-row items-center justify-center mb-4`}>
          <TextInput
            value={time}
            onChangeText={setTime}
            keyboardType="numeric"
            style={tw`text-white text-xl text-center border-b border-white w-16 mr-2`}
          />
          <Text style={tw`text-white text-lg`}>min</Text>
          
        {/* Use Custom Time Button */}
        <TouchableOpacity style={tw`bg-gray-500 px-4 py-2 left-8 rounded-lg self-center`}>
          <Text style={tw`text-white text-base`}>Use {time} min</Text>
        </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default App;