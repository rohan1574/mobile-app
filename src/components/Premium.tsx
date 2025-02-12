import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  ElevenPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'ElevenPage'>;

const Premium = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6 `,
        {backgroundColor: '#1F2630'},
      ]}>
     
      {/* Permission Text */}
    
        <Text style={[tw`font-medium px-24 py-4 rounded-full `, {color: '#ECEDF0',backgroundColor: '#29313C'}]} onPress={() => navigation.navigate('ElevenPage')}>
        Get Premium Now
        </Text>
      <Text
        style={[
          tw` text-center top-20 font-medium `,

          {color: '#ECEDF0', fontSize: 17},
        ]}>
        Enjoy 30 days free trail
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={[
          tw` rounded-full flex-row items-center top-24`,
          
        ]}>
        <Text style={[tw`font-bold mr-2 underline bottom-1`,{color: '#ECEDF0',fontSize:17}]}>
        Let my try
        </Text>
        <Icon name="arrow-forward" size={20} color="#ECEDF0"  />
      </TouchableOpacity>    
    </View>
  );
};

export default Premium;
