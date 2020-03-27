import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native'
import StockList from '../stockViews/StockList'

export default class Profile extends Component {
    constructor(props) {
        super(props)
}

render() {
    return (
        <View>
            <StockList />
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    }
});