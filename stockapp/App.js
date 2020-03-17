import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    stocks:[]
}

componentDidMount(){
var 
axios.get(`https://finnhub.io/api/v1/stock/profile?symbol=AAPL&token=bpo09nfrh5ra872e0oi0`)
.then(res=>{
    // const stocks = res.data;
    // this.setstate({stocks});
    console.log(res.data);
    });
}
render() {
  return(
      <div>
        tets
     
      </div>
          
      
  )
}
}

