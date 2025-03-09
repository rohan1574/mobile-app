import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import NativePermissions from '../../specs/NativePermissions';

type RootStackParamList = {
  NinePage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'NinePage'>;

const SetupAppScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [hasPermission, setHasPermission] = useState(false);

  const checkPermission = async () => {
    const permission = await NativePermissions.checkUsagePermission();
    setHasPermission(permission);
  };
  
  useEffect(() => {
    if (hasPermission) return;

    checkPermission();

    const interval = setInterval(() => {
      checkPermission();
    }, 1000);

    return () => clearInterval(interval);
  }, [hasPermission]);

  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6 `,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Header */}
      <Text style={[tw` text-2xl font-normal top-4`, {color: '#ECEDF0'}]}>
        Setup App
      </Text>

      {/* Steps */}
      <View style={tw`flex-row items-center mb-6 top-12`}>
        {[1, 2, 3].map((num, index) => (
          <View
            key={num}
            style={[
              tw`h-10 w-10 rounded-full flex items-center justify-center mx-4`,
              index === 0 ? tw`bg-white` : tw`border border-white`,
            ]}>
            <Text
              style={[
                tw`font-bold`,
                {color: index === 0 ? 'black' : 'white', fontSize: 20},
              ]}>
              {num}
            </Text>
          </View>
        ))}
      </View>

      {/* Phone Mockup */}
      <View style={tw`relative top-4`}>
        <Image
          source={require('../../assets/images/Permit.png')}
          style={[tw`object-cover`, {width: 238, height: 538}]}
        />
        <LinearGradient
          colors={[
            'rgba(31, 38, 48, 0.00)', // Transparent at the top
            'rgba(31, 38, 48, 1)', // Darker at the bottom
          ]}
          locations={[0.2006, 0.9041]}
          style={[tw`absolute bottom-16 w-full `, {height: 650, bottom: 12}]}
        />
      </View>

      {/* Permission Text */}
      <Text
        style={[
          tw`absolute bottom-48 text-center  font-semibold `,

          {color: '#AAAEB3', fontSize: 15},
        ]}>
        Minimal Life phone needs access to usage statistics for the in-app time
        reminder to be functional.
      </Text>
      
      {
        hasPermission ?
        <TouchableOpacity
          style={[
            tw`px-8 py-3 rounded-full flex-row items-center bottom-8`,
            {backgroundColor: '#29313C'},
          ]} onPress={() => navigation.navigate('NinePage')}>
          <Text style={[tw`text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
            Aleady done!
          </Text>
          <Icon name="arrow-forward" size={20} color="#ECEDF0" />
        </TouchableOpacity> :

        <TouchableOpacity
          style={[
            tw`px-8 py-3 rounded-full flex-row items-center bottom-8`,
            {backgroundColor: '#29313C'},
          ]} onPress={() => NativePermissions.requestUsagePermission()}>
          <Text style={[tw`text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
            Open usage permission setting
          </Text>
          <Icon name="arrow-forward" size={20} color="#ECEDF0" />
        </TouchableOpacity>
      }

      {/* Footer */}
      <Text style={[tw`text-sm bottom-6`, {color: '#858E9D'}]}>
        You can remove the permission anytime later.
      </Text>
      
    </View>
  );
};

export default SetupAppScreen;
