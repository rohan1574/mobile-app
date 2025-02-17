import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal, // Import Modal here
  FlatList, // Import FlatList here
} from 'react-native';
import { s as tw } from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import { Slider } from '@miblanchard/react-native-slider';
import NativeBatteryStatus from '../../specs/NativeBatteryStatus'; // Importing native battery status
import moment from 'moment'; // Moment.js for time/date formatting
import NativeInstalledApps from '../../specs/NativeInstalledApps';
import { launchCamera } from 'react-native-image-picker'; // For Camera
import { Linking } from 'react-native'; // For Dialer
import { Alert } from 'react-native';

const HomeScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showAppList, setShowAppList] = useState(false); // Modal toggle state
  const [appList, setAppList] = useState<
    Array<{ appName: string; packageName: string; isSystemApp: boolean }>
  >([]);
  const [selectedApps, setSelectedApps] = useState<
  { appName: string; packageName: string; isSystemApp: boolean }[]
>([]);

  // Fetch installed apps
  const fetchInstalledApps = async () => {
    try {
      const apps = await NativeInstalledApps.getInstalledApps();
      setAppList(apps);
    } catch (error) {
      console.error('Error fetching installed apps:', error);
    }
  };

  const handleAddPress = () => {
    fetchInstalledApps(); // Fetch apps when Add button is clicked
    setShowAppList(true); // Show the modal
  };

   // Handle App Selection
   const handleAppSelect = (app: {
    appName: string;
    packageName: string;
    isSystemApp: boolean;
  }) => {
    // Check if the limit of 3 apps is reached
    if (selectedApps.length >= 2) {
      Alert.alert('Limit Reached', 'You can only select up to 2 apps.'); // Use Alert here
      return;
    }
  
    // Check if the app is already selected
    const alreadySelected = selectedApps.find(
      (selectedApp) => selectedApp.packageName === app.packageName
    );
    if (!alreadySelected) {
      setSelectedApps([...selectedApps, app]);
    }
  
    // Close the modal
    setShowAppList(false);
  };
  

  useEffect(() => {
    // Fetch battery status from the native module
    NativeBatteryStatus.getBatteryLevel()
      .then((level) => setBatteryLevel(level))
      .catch((err) => console.error('Failed to fetch battery level:', err));
  }, []);

  // Determine icon based on battery level
  const getBatteryIcon = (level: number | null) => {
    if (level === null) {
      return 'battery-charging-outline';
    }
    if (level >= 75) return 'battery-full';
    if (level >= 50) return 'battery-half';
    if (level >= 25) return 'battery-half';
    return 'battery-dead-outline';
  };
  


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm'));
      setCurrentDate(moment().format('dddd, Do MMMM'));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

 
  // Open Camera Function
  const openCamera = () => {
    const options = {
      mediaType: 'photo' as const,  // Use 'photo', 'video', or 'mixed' as valid types
      cameraType: 'back' as 'front' | 'back', // Set camera type to either 'front' or 'back'
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('Error: ', response.errorMessage);
      } else {
        console.log('Photo taken: ', response.assets);
      }
    });
  };

  // Open Dialer Function
  const openDialer = (phoneNumber = '') => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl).catch(err => {
      console.error('Failed to open dialer:', err);
    });
  };

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
        <Icon name={getBatteryIcon(batteryLevel)} size={30} color="#ECEDF0" />


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
          ]}
        >
          {batteryLevel !== null ? `${batteryLevel}%` : 'Fetching...'}
        </Text>
      </View>

      {/* App Buttons */}
      <View style={tw`flex-2 justify-start items-center`}>
        {selectedApps.map((app) => (
          <TouchableOpacity
            key={app.packageName}
            style={[
              tw`w-4/5 py-2 my-2 rounded-full border items-center`,
              { borderColor: '#858E9D' },
            ]}
          >
            <Text
              style={[tw`text-lg`, { color: '#ECEDF0', fontWeight: '400' }]}
            >
              {app.appName}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Add Button */}
        <TouchableOpacity style={tw`p-3 rounded-full`} onPress={handleAddPress}>
          <Icon
            name="add-circle-outline"
            size={32}
            color="#434C5B"
            style={tw``}
          />
        </TouchableOpacity>
      

        {/* Modal to show App List */}
        <Modal
          visible={showAppList}
          animationType="slide"
          onRequestClose={() => setShowAppList(false)} // Close the modal
          transparent={false}
        >
          <View style={[tw`flex-1`, { backgroundColor: '#1F2630' }]}>
            {/* Header */}
            <View style={tw`px-4 py-4`}>
              <Text style={[tw`text-lg text-white font-semibold`]}>
                Installed Apps
              </Text>
            </View>

            {/* App List */}
            <FlatList
              data={appList}
              keyExtractor={(item) => item.packageName}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    tw`flex-row items-center justify-between px-4 py-2`,
                    { backgroundColor: '#434C5B', marginVertical: 4 },
                  ]}
                  onPress={() => handleAppSelect(item)} // Handle app selection
                >
                  <Text style={[tw`text-white`]}>{item.appName}</Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={tw`px-4 pb-16`}
            />

            {/* Close Button */}
            <TouchableOpacity
              style={[
                tw`p-3 rounded-full bg-gray-800 absolute bottom-5 left-1/2`,
                { transform: [{ translateX: -50 }] },
              ]}
              onPress={() => setShowAppList(false)}
            >
              <Icon name="caret-back-outline" size={30} color="#ECEDF0" />
            </TouchableOpacity>
          </View>
        </Modal>
    
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
        {/* <Text
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
        </Text> */}

        {/* <Slider
          value={70}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#ECEDF0"
          minimumTrackTintColor="#495057"
          maximumTrackTintColor="#495057"
        /> */}
        <Text
          style={[
            tw`text-center text-sm font-normal`,
            {
              color: '#858E9D',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: 16,
              top:70
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
              top:70
            },
          ]}>
          Use less to increase progress bar
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={tw`absolute bottom-0 flex-row justify-center w-full px-2 mb-4`}>
        {/* Camera Button */}
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 border border-gray-700 mx-1`,
            { borderTopLeftRadius: 50, borderBottomLeftRadius: 50, backgroundColor: '#29313C' },
          ]}
          onPress={openCamera}>
          <Text style={[tw`text-lg`, { color: '#ECEDF0' }]}>Camera</Text>
        </TouchableOpacity>

        {/* Dialer Button */}
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 border border-gray-700 mx-1`,
            { borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#29313C' },
          ]}
          onPress={() => openDialer('')}>
          <Text style={[tw`text-lg`, { color: '#ECEDF0' }]}>Dialer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
