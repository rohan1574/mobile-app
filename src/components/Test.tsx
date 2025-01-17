import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Linking } from 'react-native';
import { s as tw } from 'react-native-wind';
import NativeInstalledApps from '../../specs/NativeInstalledApps'; // For fetching installed apps.
import NativeAppScreenTime from '../../specs/NativeAppScreenTime'; // For fetching screen time.

const openApp = (packageName: string) => {
  Linking.openURL(`intent://${packageName}#Intent;scheme=package;end;`)
    .catch((err) => console.error('Failed to open app:', err));
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [appList, setAppList] = useState<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>([]);
  const [screenTimeData, setScreenTimeData] = useState<Array<{ appName: string; screenTime: string }>>([]);

  useEffect(() => {
    // Fetch installed apps
    const fetchInstalledApps = async () => {
      try {
        const apps = await NativeInstalledApps.getInstalledApps();
        setAppList(apps);
      } catch (error) {
        console.error('Error fetching installed apps:', error);
      }
    };

    // Fetch screen time data for all apps
    const fetchAppsScreenTime = async () => {
      try {
        const screenTime = await NativeAppScreenTime.getAllAppsScreenTime();
        const formattedScreenTime = Object.keys(screenTime).map((appName) => {
          const timeInSeconds = screenTime[appName];
          const hours = Math.floor(timeInSeconds / 3600);
          const minutes = Math.floor((timeInSeconds % 3600) / 60);
          return { appName, screenTime: `${hours}h ${minutes}m` };
        });
        setScreenTimeData(formattedScreenTime);
      } catch (error) {
        console.error('Failed to get screen time for all apps:', error);
      }
    };

    fetchInstalledApps();
    fetchAppsScreenTime();
  }, []);

  // Merge app list with screen time data
  const mergedData = appList.map((app) => {
    const screenTime = screenTimeData.find((st) => st.appName === app.appName);
    return { ...app, screenTime: screenTime ? screenTime.screenTime : 'No data' };
  });

  // Filter apps based on search text
  const filteredData = mergedData.filter((app) =>
    app.appName.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderApp = ({ item }: { item: { appName: string; screenTime: string } }) => (
    <View style={tw`bg-gray-700 p-2 rounded-full mb-2 flex-row justify-between`}>
      <Text style={tw`text-white text-base`}>{item.appName}</Text>
      <Text style={tw`text-gray-300 text-sm`}>Lo: {item.screenTime}</Text>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-gray-900 p-4`}>
      {/* Search bar */}
      <View style={tw`bg-gray-800 flex-row items-center  rounded-full mb-4`}>
        <TextInput
          placeholder="Search app here"
          placeholderTextColor="#999"
          style={tw`text-white flex-1 text-base ml-2`}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* "All Apps" Header */}
      <Text style={tw`text-gray-300 text-lg font-semibold mb-4`}>All Apps</Text>

      {/* App list */}
      <FlatList
        data={filteredData}
        renderItem={renderApp}
        keyExtractor={(item, index) => `${item.appName}-${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default App;
