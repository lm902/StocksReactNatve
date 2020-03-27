import React, {Component} from 'react'
import { Alert, Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class Login extends Component {
    constructor(props) {
    super(props)

    this.state = {
        email: "",
        password: ""
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
             <Button
             title={'Login'}
             color="#7174d8"
             style={styles.input}
             onPress={this.onSubmit.bind(this)}
             />
             <Text style={styles.link}>Don't have an account? Register</Text>
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
     }
   });