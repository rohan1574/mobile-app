import React from 'react';
import { View, Image } from 'react-native';
import { s as tw } from 'react-native-wind';

const CustomUI = () => {
  return (
    <View style={[tw`flex-1 justify-center items-center`,{backgroundColor:"#1F2630"}]}>
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
        {/* image */}
        <Image
          source={require('./assets/images/human.png')} 
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
