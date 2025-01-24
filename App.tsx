import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const [sections, setSections] = useState({
    homeScreen: true,
    display: false,
    gestures: false,
    inAppTimeReminder: false,
    notificationFilter: false,
    realSupport: false,
    premiumAccount: false,
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({...prev, [section]: !prev[section]}));
  };

  return (
    <View style={tw`flex-1 bg-gray-900`}>
      {/* Header */}
      <View
        style={tw`flex-row items-center justify-between px-4 py-3 bg-gray-800`}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-white text-lg font-semibold`}>Settings</Text>
        <Icon name="search" size={24} color="white" />
      </View>

      {/* Search Bar */}
      <View style={tw`p-4`}>
        <TextInput
          placeholder="Search settings..."
          placeholderTextColor="#aaa"
          style={tw`bg-gray-800 text-white p-3 rounded-lg`}
        />
      </View>

      {/* Scrollable Sections */}
      <ScrollView style={tw`flex-1 px-4`}>
        {/* Home Screen */}
        <TouchableOpacity
          onPress={() => toggleSection('homeScreen')}
          style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold`}>Home Screen</Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.homeScreen && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            {['Phone Dialer Icon', 'Camera Icon', 'Alarm Clock Icon'].map(
              (item, index) => (
                <View
                  key={index}
                  style={tw`flex-row justify-between items-center mb-2`}>
                  <Text style={tw`text-white`}>{item}</Text>
                  <Switch value={false} />
                </View>
              ),
            )}
          </View>
        )}

        {/* Display Section */}
        <TouchableOpacity onPress={() => toggleSection('display')} style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>Display</Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.display && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            <View style={tw`flex-row justify-between items-center mb-3`}>
              <Text style={tw`text-white`}>Font Selection</Text>
              <Text style={tw`text-gray-400`}>Default</Text>
            </View>
            <View style={tw`flex-row justify-between items-center mb-3`}>
              <Text style={tw`text-white`}>Font Size</Text>
              <Text style={tw`text-gray-400`}>Medium</Text>
            </View>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-white`}>Color Theme</Text>
              <Text style={tw`text-gray-400`}>System</Text>
            </View>
          </View>
        )}

        {/* Gestures Section */}
        <TouchableOpacity onPress={() => toggleSection('gestures')}  style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>
            Gestures
          </Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.gestures && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            {[
              'Swipe down to see notification',
              'Swipe up to open search',
              "Draw 'M' to see hidden apps",
            ].map((item, index) => (
              <View
                key={index}
                style={tw`flex-row justify-between items-center mb-2`}>
                <Text style={tw`text-white`}>{item}</Text>
                <Switch value={false} />
              </View>
            ))}
          </View>
        )}

        {/* In-App Time Reminder Section */}
        <TouchableOpacity onPress={() => toggleSection('inAppTimeReminder')} style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>
            In-App Time Reminder
          </Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.inAppTimeReminder && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            <View style={tw`flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-white`}>Activate App Time Reminder</Text>
              <Switch value={false} />
            </View>
          </View>
        )}

        {/* Notification Filter Section */}
        <TouchableOpacity onPress={() => toggleSection('notificationFilter')} style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>
            Notification Filter
          </Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.notificationFilter && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            {['My Airtel', 'Contact', 'Al Hadith', 'Al Quran'].map(
              (item, index) => (
                <View
                  key={index}
                  style={tw`flex-row justify-between items-center mb-2`}>
                  <Text style={tw`text-white`}>{item}</Text>
                  <Switch value={false} />
                </View>
              ),
            )}
          </View>
        )}

        {/* Real Support Section */}
        <TouchableOpacity onPress={() => toggleSection('realSupport')} style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>
            Real Support
          </Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.realSupport && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            <Text style={tw`text-white mb-2`}>Issue or Suggestion</Text>
            <TextInput
              placeholder="support@MinimalLife.com"
              placeholderTextColor="#aaa"
              style={tw`bg-gray-700 text-white p-3 rounded-md`}
            />
          </View>
        )}

        {/* Premium User Account Section */}
        <TouchableOpacity onPress={() => toggleSection('premiumAccount')} style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg text-white font-semibold mt-4`}>
            Premium User Account
          </Text>
          <Icon name="chevron-down-outline" size={24} color="white" />
        </TouchableOpacity>
        {sections.premiumAccount && (
          <View style={tw`mt-2 bg-gray-800 p-4 rounded-lg`}>
            <View style={tw`flex-row justify-between items-center mb-3`}>
              <Text style={tw`text-white`}>Already Have an Account</Text>
              <TouchableOpacity style={tw`bg-blue-500 px-4 py-2 rounded-md`}>
                <Text style={tw`text-white`}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-white`}>Get Premium</Text>
              <TouchableOpacity style={tw`bg-green-500 px-4 py-2 rounded-md`}>
                <Text style={tw`text-white`}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={tw`flex-row items-center justify-between p-4 bg-gray-800`}>
        <Text style={tw`text-gray-400`}>Device Setting</Text>
        <Icon name="settings-outline" size={24} color="white" />
      </View>
    </View>
  );
};

export default SettingsScreen;
