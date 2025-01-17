import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Linking } from 'react-native';
import { s as tw } from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';
import NativeInstalledApps from './specs/NativeInstalledApps';
import NativeAppScreenTime from './specs/NativeAppScreenTime';

const openApp = (packageName: string) => {
  Linking.openURL(`intent://${packageName}#Intent;scheme=package;end;`).catch((err) =>
    console.error('Failed to open app:', err)
  );
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [appList, setAppList] = useState<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>([]);
  const [screenTimeData, setScreenTimeData] = useState<Array<{ appName: string; screenTime: string }>>([]);

  useEffect(() => {
    const fetchInstalledApps = async () => {
      try {
        const apps = await NativeInstalledApps.getInstalledApps();
        setAppList(apps);
      } catch (error) {
        console.error('Error fetching installed apps:', error);
      }
    };

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

  const mergedData = appList.map((app) => {
    const screenTime = screenTimeData.find((st) => st.appName === app.appName);
    return { ...app, screenTime: screenTime ? screenTime.screenTime : 'No data' };
  });

  const filteredData = mergedData.filter((app) =>
    app.appName.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderApp = ({ item }: { item: { appName: string; screenTime: string } }) => {
    const truncatedAppName =
      item.appName.length > 10 ? `${item.appName.slice(0, 15)}...` : item.appName;

    return (
      <View style={[tw` p-2 rounded-full mb-2 flex-row justify-between items-center`,{backgroundColor:'#434C5B'}]}>
        <Text style={[tw`text-base ml-2`,{color:"#ECEDF0"}]}>{truncatedAppName}</Text>
        <Text style={[tw`text-xs font-light mr-2 `,{color:"#ECEDF0"}]}>
          LO: {item.screenTime} || DU: 10min
        </Text>
      </View>
    );
  };

  return (
    <View style={[tw`flex-1 `,{backgroundColor:'#000000'}]}>
      {/* Static Header */}
      <View style={tw`px-4 py-2 `}>
        {/* Search Bar */}
        <View style={[tw`flex-row items-center rounded-full mb-4  px-4`, { borderColor: '#858E9D', borderWidth: 1 }]}>
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
          <Text style={[tw` text-lg font-semibold`,{color:"#ECEDF0"}]}>All Apps</Text>
          <TouchableOpacity onPress={() => console.log('Settings pressed')}>
            <Icon name="settings-outline" size={22} color="#ECEDF0" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable App List */}
      <FlatList
        data={filteredData}
        renderItem={renderApp}
        keyExtractor={(item, index) => `${item.appName}-${index}`}
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
          <Icon name="search-outline" size={24} color="#ECEDF0" />
          <Text style={tw`text-gray-300 text-xs`}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Icon name="person-outline" size={24} color="#ECEDF0" />
          <Text style={tw`text-gray-300 text-xs`}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
