/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ComponentNativeView from './ComponentNativeView';

/// Call function native
const callFunctionNative = () => {
    let functionNative = NativeModules.FunctionNative;
    const eventEmitter = new NativeEventEmitter(functionNative);
    eventEmitter.addListener("EventReminder", reminder => {
      console.log(reminder.name);
    });
    functionNative.gotoFunction("abc");
}

/// Call component native
const callComponentNative = () => {
  return <ComponentNativeView contentB = {'xin chao'} style={{flex: 1, padding: 20, width: 100, height: 100, backgroundColor: '#9452'}}>
    {/* <ComponentNativeView contentB = {'Cac ban'} style={{flex: 1, padding: 20, width: 100, height: 100, backgroundColor: '#9452'}}>
  </ComponentNativeView> */}
  </ComponentNativeView>
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /// Call function native
  callFunctionNative();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {callComponentNative()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
