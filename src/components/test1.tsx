import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { s as tw } from 'react-native-wind';

const App = () => {
  return (
    <View style={[tw`flex-1  justify-center items-center`,{backgroundColor: '#1F2630'}]}>
      <View style={tw`relative`}>
        <Image
          source={require('./assets/images/Infinity.png')}
          style={tw`w-[200px] h-[400px] object-cover`}
        />
        <LinearGradient
          colors={[
            'rgba(31, 38, 48, 0.00)', // Transparent at the top
            'rgba(31, 38, 48, 1)',    // Darker at the bottom
          ]}
          locations={[0.2006, 0.9041]}
          style={[tw`absolute bottom-16 w-full `,{height:650,bottom:12}]}
        />
      </View>
      
    </View>
  );
};

export default App;
