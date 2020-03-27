import React from 'react';
//import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/nav/AppNavigation';

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

function App() {
  return (
    <AppNavigator />
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
