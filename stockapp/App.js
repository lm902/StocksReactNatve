import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Home from './Home'
import Login from './src/components/authenication/Login'
import Register from './src/components/authenication/Register'
import Colors from './src/constants/Colors'
import Portfolio from './src/components/portfolio/Portfolio'
import WatchList from './src/components/watchlist/WatchList'
import Search from './src/components/search/Search'
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/nav/AppNavigation';
import { createSwitchNavigator } from 'react-navigation';

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
