import React, { Component } from "react";
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
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
            <Text style={styles.title}>Portfolio</Text>
            <ScrollView>
            <StockList />
            </ScrollView>
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
    title: {
        textAlign: 'left',
        marginBottom: 50,
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.GREY
    }
});