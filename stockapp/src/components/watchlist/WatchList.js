import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import Colors from '../../constants/Colors'
import StockListWatchList from './StockListWatchList'

export default class Register extends Component {
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Watch List</Text>
                <ScrollView>
                <StockListWatchList />
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