import React, {Component} from 'react'
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Colors from '../../constants/Colors'
import StockList from '../stockViews/StockList'

export default class Search extends Component {
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Search</Text>
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