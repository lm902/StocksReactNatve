import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import React from 'react';

const Stack = createStackNavigator ();

function AppNavigator() {
    return (
        <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Register"
        screenOptions={{gestureEnabled: true}}
        >
            <Stack.Screen 
                name="Register"
                component={Register}
                options={{title: 'Register'}}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{title: 'Login'}}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )}

export default AppNavigator;