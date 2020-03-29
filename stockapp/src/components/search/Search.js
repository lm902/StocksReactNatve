import React, {Component} from 'react'
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput} from 'react-native'
import Colors from '../../constants/Colors'
import StockList from '../stockViews/StockList'
import SearchBar from './SearchBar'


export default class Search extends Component {
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Search</Text>
              <Text>Logged in as {window._user.username}</Text>
                <SearchBar/>
                <ScrollView style={styles.scrollView}>
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
            marginBottom: 30,
            fontWeight: 'bold',
            fontSize: 24,
            color: Colors.GREY
        },
        scrollView: {
            marginTop: 50
        }
    });

