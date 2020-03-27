import React, {Component} from 'react'
<<<<<<< HEAD
import { Alert, Button, TextInput, View, StyleSheet, Image, Text } from 'react-native';
=======
import { Alert, Button, TextInput, View, StyleSheet, Image, Text, TouchableText } from 'react-native';
import Colors from '../../constants/Colors'
>>>>>>> 5d1a92534a07674abe4c537f82f6a613c592869f

 export default class Register extends Component {
     constructor(props) {
     super(props)

     this.state = {
         email: "",
         password: "",
         confirmPassword: ""
     }
 }

 onSubmit() {
    const { email, password } = this.state;
    Alert.alert('Credentials', `${email} + ${password}`)
    this.signup(email, password)
}

render() {
    return(
        <View style={StyleSheet.container}>
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
            secureTextEntry={true}
            style={styles.input} />
            <TextInput
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            style={styles.input} />
            <Button
            title={'Register'}
<<<<<<< HEAD
            color="#7174d8"
            style={styles.input}
=======
            color={Colors.PURPLE}
>>>>>>> 5d1a92534a07674abe4c537f82f6a613c592869f
            onPress={this.onSubmit.bind(this)}
            />
            <Text style={styles.link}>Already have an account? Sign in</Text>
        </View>
    )
}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.BACKGROUND_COLOR,
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    logo: {
        width: 100, 
        height: 100, 
        borderRadius: 100/2,
        alignSelf: "center",
        marginBottom: 30
    },
    link: {
        fontSize: 12,
        textAlign: "center"
<<<<<<< HEAD
=======
    },
    link: {
        color: Colors.LINK_BLUE
    },
    buttonView: {
        width: 200
>>>>>>> 5d1a92534a07674abe4c537f82f6a613c592869f
    }
  });