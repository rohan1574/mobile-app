import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {s as tw} from 'react-native-wind';

const SettingsScreen = () => {
  const [isReminderActive, setIsReminderActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('exit');

  return (
    <ScrollView style={tw`flex-1 bg-gray-900 p-4`}>
      {/* Header */}
      <View style={tw`flex-row items-center`}>
        <Icon style={tw`text-gray-400`} name="arrow-back" size={28} />
        <Text style={tw`text-gray-400 text-xl left-24`}>Settings</Text>
      </View>
      <View style={[tw`border right-4 border-gray-400`, {width: 358,top:10}]}></View>

      {/* Home Screen */}
      <Text style={tw`text-gray-300 text-base font-bold top-6`}>Home Screen</Text>
      <View style={[tw`bg-gray-800 p-4 top-8 rounded-xl`]}>
        <View style={tw`flex-row justify-between items-center mb-3`}>
          <Text style={tw`text-gray-300 text-base font-bold `}>Time Format</Text>
          <Text style={tw`bg-gray-700 text-gray-300 px-5 py-1 rounded-full`}>
            11:47 PM
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-gray-300 text-base font-bold `}>Date Format</Text>
          <Text style={tw`bg-gray-700 px-3 py-1 text-gray-300 rounded-full`}>
            12/01/2024
          </Text>
        </View>
      </View>

      {/* In-app time reminder */}
      <Text style={tw`text-gray-300 text-base font-bold top-12 mb-2`}>In-app time reminder</Text>
      <View style={tw`bg-gray-800 top-12 p-4 rounded-xl `}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-gray-300 text-base font-normal`}>Activate app time reminder</Text>
          <Switch
            value={isReminderActive}
            onValueChange={setIsReminderActive}
            trackColor={{false: '#555', true: '#4ADE80'}}
          />
        </View>
        <Text style={tw`text-gray-300 text-base font-bold mb-2`}>When time is over (Default)</Text>
        <TouchableOpacity
          style={tw`flex-row items-center mb-2`}
          onPress={() => setSelectedOption('exit')}>
          <Icon
            name={
              selectedOption === 'exit' ? 'radio-button-on' : 'radio-button-off'
            }
            size={20}
            color="white"
          />
          <Text style={tw`text-gray-400 ml-2`}>Exit app when time is over</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center`}
          onPress={() => setSelectedOption('remind')}>
          <Icon
            name={
              selectedOption === 'remind'
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={20}
            color="white"
          />
          <Text style={tw`text-gray-400 ml-2`}>Only remind</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Section */}
      <View style={tw`bg-gray-800 p-4 top-20 rounded-xl `}>
        <View style={tw`flex-row justify-around mb-4 `}>
          <View style={tw`flex-row items-center`}>
            <Icon name="ellipse" size={16} color="gray" />
            <Text style={tw`text-gray-500 text-base font-normal ml-2`}>App Issue</Text>
          </View>
          <View style={tw`flex-row items-center `}>
            <Icon name="ellipse" size={16} color="gray" />
            <Text style={tw`text-gray-400 text-base font-normal ml-2`}>Suggestion</Text>
          </View>
        </View>
        <View style={[tw`border right-4 border-gray-400`, {width: 328,bottom:4}]}></View>
        <TouchableOpacity style={[tw`bg-gray-600 rounded-full py-3 top-2`,{width:200,left:45}]}>
          <Text style={tw`text-center text-white font-bold`}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <Text style={[tw`text-gray-400  text-center mb-4 top-4`,{fontSize:14}]}>
          Please let us know any issue or suggestion. Our dedicated developers
          are ready to fix your issue ASAP.
        </Text>
      </View>

      {/* Rate Us Button */}
      <TouchableOpacity style={[tw`border border-gray-700 top-24 rounded-full py-3`,{width:200,left:60}]}>
        <Text style={tw`text-center text-gray-400 font-semibold`}>
          Rate us on Google Play
        </Text>
      </TouchableOpacity>

      {/* Device Setting */}
      <TouchableOpacity style={[tw`flex-row items-center justify-center`,{top:105}]}>
        <Text style={tw`text-gray-500 font-bold mr-2`}>Device Setting</Text>
        <Icon name="settings" size={20} color="gray" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingsScreen;
