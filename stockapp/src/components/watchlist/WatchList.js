import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Register extends Component {
    constructor(props) {
    super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Watchlist</Text>
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