import Portfolio from './src/components/portfolio/Portfolio'
import WatchList from './src/components/watchlist/WatchList'
import Search from './src/components/search/Search'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import Colors from './src/constants/Colors'

import Buy from './src/components/buySell/Buy'
import Sell from './src/components//buySell/Sell'
import StockDetail from './src/components/stockViews/StockDetail'

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator
        screenOptions={({ route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === "Search") {
              iconName = focused
              ? 'ios-search'
              : 'ios-search'
            } else if (route.name === "WatchList") {
            iconName = focused ? 'ios-heart' : 'ios-heart-empty'
            } else if (route.name === "Portfolio") {
              iconName = focused ?  'ios-person' : 'ios-person'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.PURPLE,
          inactiveTintColor: Colors.GREY,
        }}
      >
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="WatchList" component={WatchList} />
        <Tab.Screen name="Portfolio" component={StockDetail} />
      </Tab.Navigator>
  );
}