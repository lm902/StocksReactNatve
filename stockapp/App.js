import Profile from './src/components/profile/Profile'
import WatchList from './src/components/watchlist/WatchList'
import Search from './src/components/search/Search'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import Colors from './src/constants/Colors'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            } else if (route.name === "Profile") {
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
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#444'
//   },
// });
