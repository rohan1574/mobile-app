import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import {Slider} from '@miblanchard/react-native-slider';

const App = () => {
  return (
    <SafeAreaView style={[tw`flex-1`,{backgroundColor:"#1F2630"}]}>
      {/* Top Section */}
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={[tw` text-4xl font-bold`,{color:"#ECEDF0"}]}>20:54</Text>
        <Text style={[tw` text-lg`,{color:"#ECEDF0"}]}>Tuesday, 10th June</Text>

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
            style={[tw`w-4/5 py-3 my-2 rounded-full border items-center`,{borderColor:"#858E9D"}]}>
            <Text style={[tw` text-lg`,{color:"#ECEDF0"}]}>{app}</Text>
          </TouchableOpacity>
        ))}

        {/* Add Button (Moved Up) */}
        <TouchableOpacity style={tw`p-3 rounded-full`}>
          <Icon
            name="add-circle-outline"
            size={40}
            color="#434C5B"
            style={tw`mt-2`}
          />
        </TouchableOpacity>
        <Text style={[tw`mt-2 text-sm`,{color:"#434C5B"}]}>
          Don't add unnecessary addictive apps!
        </Text>
      </View>

      {/* Progress Section (Moved Up) */}
      <View style={tw`flex-1 justify-center px-4 mb-8`}>
        <Text style={[tw`text-center text-sm font-normal mb-2`,{color:"#ECEDF0"}]}>Overall Ranking</Text>
        <Slider
          value={50}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="white"
          minimumTrackTintColor="#495057"
          maximumTrackTintColor="#495057"
        />
        <Text style={[tw` text-center text-sm`,{color:"#858E9D"}]}>
          Today Unlock: 5 || Today Use: 120 M
        </Text>
        <Text style={[tw`text-gray-400 text-center text-xs`,{color:"#434C5B"}]}>
          Use less to increase progress bar
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View
        style={tw`absolute bottom-0 flex-row justify-between w-full py-4 px-6`}>
        {['Camera', 'Dialer'].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              tw`flex-1 items-center py-3 border border-gray-700`,
              index === 0
                ? {borderTopLeftRadius: 50, borderBottomLeftRadius: 50}
                : {borderTopRightRadius: 50, borderBottomRightRadius: 50},
            ]}>
            <Text style={tw`text-white text-lg`}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
