import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Linking } from 'react-native';
import { s as tw } from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import NativeInstalledApps from '../../specs/NativeInstalledApps';
import NativeAppScreenTime from '../../specs/NativeAppScreenTime'; // Ensure this import is correct

const openApp = (packageName: string) => {
  Linking.openURL(`package:${packageName}`)
    .catch((err) => {
      console.error('Failed to open app:', err);
      // Redirect to Play Store if app is not found
      Linking.openURL(`market://details?id=${packageName}`).catch((err) =>
        console.error('Failed to open Play Store:', err)
      );
    });
};

const AppList = () => {
  const [searchText, setSearchText] = useState('');
  const [appList, setAppList] = useState<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>([]);
  const [screenTimeData, setScreenTimeData] = useState<Map<string, number>>(new Map());
  const [appStartTime, setAppStartTime] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const fetchInstalledApps = async () => {
      try {
        const apps = await NativeInstalledApps.getInstalledApps();
        setAppList(apps);
      } catch (error) {
        console.error('Error fetching installed apps:', error);
      }
    };

    const fetchScreenTime = async () => {
      try {
        // Fetch screen time from the NativeAppScreenTime module
        const screenTime: { [appName: string]: number } = await NativeAppScreenTime.getAllAppsScreenTime();
        console.log('Screen Time Data:', screenTime); // Debugging log
    
        // Convert the object to a Map
        const screenTimeMap = new Map<string, number>(Object.entries(screenTime));
    
        // Update state with the Map
        setScreenTimeData(screenTimeMap);
      } catch (error) {
        console.error('Failed to fetch screen time:', error);
      }
    };

    fetchInstalledApps();
    fetchScreenTime(); // Fetch screen time once the apps are loaded
  }, []);

  const startAppUsage = (packageName: string) => {
    const currentTime = Date.now();
    setAppStartTime((prev) => new Map(prev).set(packageName, currentTime));
  };

  const stopAppUsage = (packageName: string) => {
    const endTime = Date.now();
    const startTime = appStartTime.get(packageName) || endTime;
    const duration = Math.round((endTime - startTime) / 1000); // Duration in seconds
    setScreenTimeData((prev) => new Map(prev).set(packageName, duration));
    setAppStartTime((prev) => {
      const newState = new Map(prev);
      newState.delete(packageName);
      return newState;
    });
  };

  const renderApp = ({ item }: { item: { appName: string; packageName: string } }) => {
    const truncatedAppName = item.appName.length > 10 ? `${item.appName.slice(0, 15)}...` : item.appName;
    
    // Get screen time and last open time directly from the state
    const screenTime = screenTimeData.get(item.packageName);
    const startTime = appStartTime.get(item.packageName); // Directly reference the state map

    // Format the last open time
    const lastOpenTime = startTime ? new Date(startTime).toLocaleString() : 'Not available';

    // Duration in minutes or 'No data'
    const duration = screenTime ? `${Math.floor(screenTime / 60)}m` : 'No data';

    return (
      <View style={[tw`p-2 rounded-full mb-2 flex-row justify-between items-center`, { backgroundColor: '#434C5B' }]}>
        <TouchableOpacity
          onPress={() => {
            openApp(item.packageName);
            startAppUsage(item.packageName); // Start tracking the app usage when opened
          }}
          onLongPress={() => stopAppUsage(item.packageName)} // Long press to stop tracking time
        >
          <Text style={[tw`text-base ml-2`, { color: "#ECEDF0" }]}>{truncatedAppName}</Text>
        </TouchableOpacity>

        {/* Showing Last Open Time and Duration */}
        <Text style={[tw`text-xs font-light mr-2 `, { color: "#ECEDF0" }]}>
          Last Open: {lastOpenTime} || Duration: {duration}
        </Text>
      </View>
    );
  };

  return (
    <View style={[tw`flex-1`, { backgroundColor: '#1F2630' }]}>
      {/* Static Header */}
      <View style={tw`px-4 py-2`}>
        {/* Search Bar */}
        <View style={[tw`flex-row items-center rounded-full mb-4 px-4`, { borderColor: '#858E9D', borderWidth: 1 }]}>
          <Icon name="search-outline" size={20} color="#858E9D" style={tw`mr-2`} />
          <TextInput
            placeholder="Search app here"
            placeholderTextColor="#858E9D"
            style={tw`text-white flex-1 text-base`}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Header Title */}
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={[tw`text-lg font-semibold`, { color: "#ECEDF0" }]}>All Apps</Text>
          <TouchableOpacity onPress={() => console.log('Settings pressed')}>
            <Icon name="settings-sharp" size={22} color="#ECEDF0" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable App List */}
      <FlatList
        data={appList.filter((app) => app.appName.toLowerCase().includes(searchText.toLowerCase()))}
        renderItem={renderApp}
        keyExtractor={(item) => item.packageName}
        contentContainerStyle={tw`p-4 pb-16`} // Padding for the lists
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={tw`absolute bottom-0 left-0 w-full bg-gray-900 h-12 flex-row justify-around items-center border-t border-gray-700`}>
        <TouchableOpacity style={tw`items-center`}>
          <Icon name="home-outline" size={24} color="#ECEDF0" />
          <Text style={tw`text-gray-300 text-xs`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Icon name="arrow-back-outline" size={24} color="#ECEDF0" />
          <Text style={tw`text-gray-300 text-xs`}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Icon name="ellipsis-horizontal-outline" size={24} color="#ECEDF0" />
          <Text style={tw`text-gray-300 text-xs`}>Recent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppList;
