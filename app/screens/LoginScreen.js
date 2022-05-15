import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity} from "react-native";


class Inputs extends Component {
    state = {
       email: '',
       password: ''
    }
    handleEmail = (text) => {
       this.setState({ email: text })
    }
    handlePassword = (text) => {
       this.setState({ password: text })
    }
    login = (email, pass) => {
       console.log("user: %s, password:%s", email, pass)
    }
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#000000"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
             
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#000000"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
             
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.login(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
          </View>
       )
    }
 }

function LoginScreen(props) {

    return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/background_logo.png")}>

              <View style={styles.body}>
                <Text style={styles.title}>
                    Welcome Back!
                </Text>
                <Text>
                    Log in to your existing account
                </Text>

                <Inputs/>

            </View>
        </ImageBackground>
      );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 30,
        fontWeight: "bold"
    },

    background: {
      flex: 1
    },

    input: {
        margin: 15,
        height: 40,
        width: 250,
        padding: 10,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10
     },

     submitButton: {
        backgroundColor: '#fcba03',
        padding: 10,
        margin: 15,
        height: 40,
     },

     submitButtonText:{
        color: 'black',
        textAlign: 'center'
     }
  });

export default LoginScreen;