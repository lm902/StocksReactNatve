import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import Profile from '../components/profile/Profile'
import StockList from '../components/stockViews/StockList'
import React from 'react';

const Stack = createStackNavigator ();

function AppNavigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Profile"
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
        </Stack.Navigator>
        </NavigationContainer>
    )}

export default AppNavigator;