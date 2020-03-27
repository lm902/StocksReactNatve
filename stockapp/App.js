import React from 'react';
//import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/components/authenication/Register'
import Login from './src/components/authenication/Login'

// export default class App extends React.Component {
//   state = {
//     stocks:[]
// }

// componentDidMount(){
// var axios.get(`https://finnhub.io/api/v1/stock/profile?symbol=AAPL&token=bpo09nfrh5ra872e0oi0`)
// .then(res=>{
//     // const stocks = res.data;
//     // this.setstate({stocks});
//     console.log(res.data);
//     });
// }

// For testing Nav Purposes

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text> */}
      <Login />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
