import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { s as tw } from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';


const InfiniteScreen = () => {
  return (
    <View style={[tw`flex-1 justify-center items-center`,{backgroundColor:"#1F2630"}]}>
      {/* Title */}
      <Text style={[tw`text-lg  font-semibold  mt-16`,{color:"#ECEDF0"}]}>
        Infinite scrolling feeds
      </Text>

      {/* Image Section with Description as background */}
      <View style={tw`relative mb-16`}>
        <Image source={require('./assets/images/Infinity.png')} />
        {/* Linear Gradient */}
        <View
          style={{
            position: 'absolute',
            top: '40%', 
            left: 90,
            right: 90,
            bottom: 130, 
            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
          }}
        />

        {/* Description text at the bottom of the image */}
        <Text
          style={[
            tw`absolute bottom-32 text-base text-center px-2 font-normal ml-6`,{color:"#ECEDF0", backgroundColor:"#1F2630"}
          ]}
        >
          Social media apps leverage AI to tailor content precisely to your
          interests, aiming to maximize the time you spend within the app.
        </Text>

        <View style={tw`flex-row justify-center items-center  `}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={tw`mx-1`}>
            {index === 0 ? (
              <Icon name="checkmark-circle-outline" size={20} color="white" />
            ) : (
              <View style={tw`w-3 h-3 rounded-full bg-gray-500`} />
            )}
          </View>
        ))}
      </View>
      {/* Next Button */}
      <TouchableOpacity
              style={[
                tw` py-3 mt-2 rounded-full items-center mx-10`,
                {backgroundColor: '#29313C'},
              ]}
              activeOpacity={0.7}>
              <View style={tw`flex-row items-center`}>
                <Text style={[tw`text-lg font-medium text-gray-300`,{color:"#ECEDF0"}]}>Next</Text>
                <Icon
                  name="arrow-forward"
                  size={20}
                  color="#ECEDF0"
                  style={tw`ml-1`}
                />
              </View>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfiniteScreen;
