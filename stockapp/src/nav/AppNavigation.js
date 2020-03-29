import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import Profile from '../components/portfolio/Portfolio'
import StockList from '../components/stockViews/StockList'
import Sell from '../components/buySell/Sell'
import Buy from '../components/buySell/Buy'
import WatchList from '../components/watchlist/WatchList'
import Search from '../components/search/Search'
import Home from '../../Home'
import React from 'react';

const Stack = createStackNavigator()
function AppNavigator() {
    return (
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{gestureEnabled: true}}
        >
            <Stack.Screen 
                name="Register"
                component={Register}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
             <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )}

export default AppNavigator
