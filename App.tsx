import React, {useState, useEffect} from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import NativeLocalStorage from './specs/NativeLocalStorage';
import NativeInstalledApps from './specs/NativeInstalledApps';
import NativeAppScreenTime from './specs/NativeAppScreenTime';

const openApp = (packageName: string) => {
  Linking.openURL(`intent://${packageName}#Intent;scheme=package;end;`)
    .catch((err) => console.error('Failed to open app:', err));
};

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [appList, setAppList] = useState<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>([]);

  async function fetchInstalledApps() {
    try {
      const apps = await NativeInstalledApps.getInstalledApps();
      console.log(apps);
      setAppList(apps);
    } catch (error) {
      console.error('Error fetching installed apps:', error);
    }
  }

  async function fetchAppsScreenTime() {
    try {
      const screenTime = await NativeAppScreenTime.getAllAppsScreenTime();
      // console.log('Screen time for all apps:', screenTime);
    } catch (error) {
      console.error('Failed to get screen time for all apps:', error);
    }
  }

  useEffect(() => {
    fetchInstalledApps();
    fetchAppsScreenTime();
  }, []);

  const Item = ({item, onPress, backgroundColor, textColor}: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.item, {color: textColor}]}>{item.appName}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}: {item: any}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => openApp(item.packageName)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Installed Applications</Text>
          <FlatList
            data={appList}
            renderItem={renderItem}
            keyExtractor={item => item.packageName}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
  },
  sectionHeader: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
});

export default App;