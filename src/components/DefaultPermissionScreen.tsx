import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import NativePermissions from '../../specs/NativePermissions';

type RootStackParamList = {
  TenPage: undefined; // Add other screens as needed
};

// Type the navigation hook
type NavigationProp = StackNavigationProp<RootStackParamList, 'TenPage'>;


const SetApps = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isDefault, setIsDefault] = useState(false);

  const checkIfDefault = async () => {
    const result = await NativePermissions.isDefaultLauncher();
    setIsDefault(result);
  };
  
  useEffect(() => {
    if( isDefault ) return;

    checkIfDefault();

    const interval = setInterval(() => {
      checkIfDefault();
    }, 1000 );

    return () => clearInterval(interval);
  }, [isDefault]);

  return (
    <View
      style={[
        tw`flex-1 justify-center items-center px-6 `,
        {backgroundColor: '#1F2630'},
      ]}>
      {/* Header */}
      <Text style={[tw` text-2xl font-normal mb-4 bottom-36 `, {color: '#ECEDF0'}]}>
        Setup App
      </Text>

      {/* Steps */}
      <View style={tw`flex-row items-center mb-6 bottom-28`}>
        {[1, 2, 3].map((num, index) => (
          <View
            key={num}
            style={[
              tw`h-10 w-10 rounded-full flex items-center justify-center mx-4`,
              index < 2 ? tw`bg-white` : tw`border border-white`,
            ]}>
            <Text
              style={[
                tw`font-bold`,
                {color: index < 2 ? 'black' : 'white', fontSize: 20},
              ]}>
              {num}
            </Text>
          </View>
        ))}
      </View>

      {/* Permission Text */}
      <Text
        style={[
          tw` text-center font-medium `,

          {color: '#AAAEB3', fontSize: 14},
        ]}>
       Last step - set it as your default home Launcher.
      </Text>
      <Text
        style={[
          tw` text-center top-20 font-medium `,

          {color: '#AAAEB3', fontSize: 17},
        ]}>
        CHOOSE APPS-{'>'} DEFAULT APPS-{'>'} HOME APP OR LAUNCHER AND SELECT MINIMAL LIFE PHONE
      </Text>

      {
        isDefault ?
        <TouchableOpacity
          style={[
            tw`px-24 py-3 rounded-full flex-row items-center `,
            {backgroundColor: '#29313C',top:150},
          ]} onPress={() => navigation.navigate('TenPage')}>
          <Text style={[tw` text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
            Already Done!
          </Text>
          <Icon name="arrow-forward" size={20} color="#ECEDF0" />
        </TouchableOpacity> :
        <TouchableOpacity
          style={[
            tw`px-24 py-3 rounded-full flex-row items-center `,
            {backgroundColor: '#29313C',top:150},
          ]} onPress={() => NativePermissions.openDefaultAppsSettings()}>
          <Text style={[tw` text-base font-bold mr-2 `, {color: '#ECEDF0'}]}>
            Open settings
          </Text>
          <Icon name="arrow-forward" size={20} color="#ECEDF0" />
        </TouchableOpacity>
      }

      {/* Footer */}
      <Text style={[tw`text-sm top-40`, {color: '#858E9D'}]}>
        You can remove the permission anytime later.
      </Text>
    </View>
  );
};

export default SetApps;
