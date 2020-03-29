import React, { Component } from "react";
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import StockList from '../stockViews/StockList'
import Colors from '../../constants/Colors'

export default class Profile extends Component {
    constructor(props) {
        super(props)
}

render() {
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.text}>You are on profile</Text>
            <StockList />
        </View>
        </SafeAreaView>
    )
}
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingHorizontal: 40
    },
    text: {
        textAlign: 'center'
    }
});