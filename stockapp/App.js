import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Colors from './src/constants/Colors'
import { NavigationContainer, } from '@react-navigation/native';
import AppNavigator from './src/nav/AppNavigation';


export default function App() {
  
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#444',
  },
});
