import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { s as tw } from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import { Slider } from '@miblanchard/react-native-slider';
import NativeBatteryStatus from './specs/NativeBatteryStatus'; // Importing native battery status
import moment from 'moment'; // Moment.js for time/date formatting

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Fetch battery status from the native module
    NativeBatteryStatus.getBatteryLevel()
      .then(level => setBatteryLevel(level))
      .catch(err => console.error('Failed to fetch battery level:', err));
  }, []);

  // Determine icon based on battery level
  const getBatteryIcon = (level: number | null) => {
    if (level === null) return 'battery-unknown';
    if (level >= 75) return 'battery-full';
    if (level >= 50) return 'battery-half';
    if (level >= 25) return 'battery-low';
    return 'battery-dead';
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
      setCurrentDate(moment().format('dddd, MMMM Do YYYY'));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: '#1F2630' }]}>
      {/* Top Section */}
      <View style={tw`flex-1 justify-center items-center`}>
        <Text
          style={[
            tw`font-normal`,
            {
              fontSize: 32,
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 38,
              letterSpacing: -0.96,
            },
          ]}
        >
          {currentTime} {/* Display current time */}
        </Text>

        <Text
          style={[
            tw`font-normal`,
            {
              color: '#ECEDF0',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}
        >
          {currentDate} {/* Display current date */}
        </Text>

        {/* Battery Icon with Dynamic Status */}
        <Icon
          name={getBatteryIcon(batteryLevel)}
          size={24}
          color="#9CA3AF"
          style={tw`mt-2`}
        />
        <Text
          style={[
            tw`font-normal mt-1`,
            {
              fontSize: 14,
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}>
          {batteryLevel !== null ? `${batteryLevel}%` : 'Fetching...'}
        </Text>
      </View>

      {/* App Buttons */}
      <View style={tw`flex-1 justify-start items-center`}>
        {['Calendar', 'WhatsApp', 'Messenger'].map(app => (
          <TouchableOpacity
            key={app}
            style={[
              tw`w-4/5 py-3 my-2 rounded-full border items-center`,
              { borderColor: '#858E9D' },
            ]}>
            <Text
              style={[
                tw`text-lg`,
                {
                  color: '#ECEDF0',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  lineHeight: 22,
                  letterSpacing: -0.54,
                },
              ]}>
              {app}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Add Button */}
        <TouchableOpacity style={tw`p-3 rounded-full`}>
          <Icon
            name="add-circle-outline"
            size={40}
            color="#434C5B"
            style={tw``}
          />
        </TouchableOpacity>
        <Text
          style={[
            tw`font-normal`,
            {
              color: '#434C5B',
              fontSize: 14,
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}>
          Don't add unnecessary addictive apps!
        </Text>
      </View>

      {/* Progress Section */}
      <View style={tw`flex-1 justify-center px-4 mb-20`}>
        <Text
          style={[
            tw`text-center text-sm font-normal mb-2`,
            {
              color: '#ECEDF0',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}>
          Overall Ranking
        </Text>

        <Slider
          value={70}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#ECEDF0"
          minimumTrackTintColor="#495057"
          maximumTrackTintColor="#495057"
        />
        <Text
          style={[
            tw`text-center text-sm font-normal`,
            {
              color: '#858E9D',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}>
          Today Unlock: 5 || Today Use: 120 M
        </Text>

        <Text
          style={[
            tw`text-center mt-2 text-sm font-normal`,
            {
              color: '#434C5B',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
            },
          ]}>
          Use less to increase progress bar
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={tw`absolute bottom-0 flex-row justify-center w-full py-4 px-2 mb-10`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 border border-gray-700 mx-1`,
            { borderTopLeftRadius: 50, borderBottomLeftRadius: 50, backgroundColor: '#29313C' },
          ]}>
          <Text style={[tw`text-lg`, { color: '#ECEDF0' }]}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 border border-gray-700 mx-1`,
            { borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#29313C' },
          ]}>
          <Text style={[tw`text-lg`, { color: '#ECEDF0' }]}>Dialer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
