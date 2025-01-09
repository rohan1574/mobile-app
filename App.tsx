import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

import NativeLocalStorage from './specs/NativeLocalStorage';
import NativeInstalledApps from './specs/NativeInstalledApps';

// const EMPTY = '<empty>';

function App(): React.JSX.Element {
  const [appList, setAppList] = React.useState<Array<{ appName: string; packageName: string; isSystemApp: boolean }>>([]);
  // const [editingValue, setEditingValue] = React.useState<
  //   string | null
  // >(null);

  async function fetchInstalledApps() {
    try {
      const apps = await NativeInstalledApps.getInstalledApps();
      setAppList(apps);
    } catch (error) {
      console.error('Error fetching installed apps:', error);
    }
  }

  React.useEffect(() => {
    // const storedValue = NativeLocalStorage?.getItem('myKey');
    // setValue(storedValue ?? '');

    fetchInstalledApps();
  }, []);

  const Item = ({appName}: { appName: string }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{appName}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Installed Applications</Text>
          <FlatList
            data={appList}
            renderItem={({item}) => <Item appName={item.appName} />}
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