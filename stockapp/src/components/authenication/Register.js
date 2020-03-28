import React, {Component} from 'react'
import { Alert, Button, TextInput, View, StyleSheet, Image, Text, TouchableText } from 'react-native';
import Colors from '../../constants/Colors'
import { createStackNavigator, createAppContainer } from "react-navigation";

 export default class Register extends Component {
     constructor(props) {
     super(props)

     this.state = {
         email: "",
         password: "",
         confirmPassword: ""
     }
 }

 static navigationOptions = { title: 'Register'}

 onSubmit() {
    const { email, password } = this.state;
    this.props.navigation.navigate('Home')
}

render() { 
    return(
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
            secureTextEntry={true}
            style={styles.input} />
            <TextInput
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            style={styles.input} />
            <View style={styles.buttonView}>
            <Button
            title={'Register'}
            color={Colors.PURPLE}
            onPress={this.onSubmit.bind(this)}
            />
            </View>
            <Text style={styles.linkText}>Already have an account? <Text style={styles.link} onPress={() => {this.props.navigation.navigate('Login')}}>Sign in</Text> </Text>
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
    linkText: {
        fontSize: 12,
        textAlign: "center"
    },
    link: {
        color: Colors.LINK_BLUE
    },
    buttonView: {
        width: 200
    }
  });