import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/nav/AppNavigation';

function App() {
  return (
    <AppNavigator />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#444'
  },
});
