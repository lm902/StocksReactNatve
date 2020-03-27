import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import Profile from '../components/profile/Profile'
import StockList from '../components/stockViews/StockList'
import Sell from '../components/buySell/Sell'
import Buy from '../components/buySell/Buy'
import WatchList from '../components/watchlist/WatchList'
import React from 'react';
// import StkMobile from "../../../../../stk-mobile";

const Stack = createStackNavigator ();

function AppNavigator() {
    return (
        <NavigationContainer>
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
                name="Profile"
                component={Profile}
            />
            <Stack.Screen 
                name="StockList"
                component={StockList}
            />
            <Stack.Screen 
                name="Sell"
                component={Sell}
            />
            <Stack.Screen 
                name="Buy"
                component={Buy}
            />
            <Stack.Screen 
                name="WatchList"
                component={WatchList}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )}

export default AppNavigator;