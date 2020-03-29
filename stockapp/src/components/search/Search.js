import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Search extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Logged in as {window._user.username}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  }
})
