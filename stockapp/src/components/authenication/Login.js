import React, {Component} from 'react'
import { Button, TextInput, View, StyleSheet, Image, Text } from 'react-native'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  async onSubmit () {
    const { email, password } = this.state
    const config = require('../../config.json')
    const r = await window.fetch(config.endpoint + '/1.1/login', {
      method: 'POST',
      headers: {
        'X-LC-Id': config.appId,
        'X-LC-Key': config.appKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const user = await r.json()
    user.error ? console.error('Login error', user.error) : console.warn('Login successful', user)
    // Now do something with the user
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo-dark.png')}
          style={styles.logo}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          placeholder={'Email'}
          style={styles.input} />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry
          style={styles.input} />
        <View style={styles.buttonView}>
          <Button
            title={'Login'}
            color='#7174d8'
            onPress={this.onSubmit.bind(this)}
          />
        </View>
        <Text style={styles.linkText}>Don't have an account? <Text style={styles.link} onPress={() => { this.props.navigation.navigate('Register') }}>Register</Text> </Text>
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
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginBottom: 30
  },
  linkText: {
    fontSize: 12,
    textAlign: 'center'
  },
  link: {
    color: '#2096F3'
  },
  buttonView: {
    width: 200
  }
})
