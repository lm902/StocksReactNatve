import React from 'react';
//import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

