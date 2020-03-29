import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import StockList from '../components/stockViews/StockList'
import WatchList from '../components/watchlist/WatchList'
import Home from '../../Home'
import Portfolio from '../components/portfolio/Portfolio'
import Search from '../components/search/Search'
import Buy from '../components/buySell/Buy'
import Sell from '../components//buySell/Sell'
import StockDetail from '../components/stockViews/StockDetail'

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
