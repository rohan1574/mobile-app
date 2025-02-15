import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { s as tw } from 'react-native-wind';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation type
type RootStackParamList = {
  WelcomeScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const CustomUI = () => {
  const navigation = useNavigation<NavigationProp>();

  // Navigate to SmartPhone component after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={[tw`flex-1 justify-center items-center`, { backgroundColor: '#1F2630' }]}>
      {/* Circular Background */}
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Image */}
        <Image
          source={require('../../assets/images/human.png')}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
};

export default CustomUI;
