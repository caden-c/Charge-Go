import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
const logInButtonPress = ()=>console.log("Log In Account!")
const signUpButtonPress = ()=>console.log("Sign Up Account!")

function WelcomeScreen(props) {
    return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/background.png")}>

              <View style={styles.body}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <TouchableOpacity style={styles.button} onPress={logInButtonPress}>
                  <Text style={{color: "white", textAlign: "center"}}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={signUpButtonPress}>
                  <Text style={{color: "white", textAlign: "center"}}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
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

    button: {
      width: 90,
      backgroundColor: "#ebd234",
      padding: 10,
      marginTop: 10,
      borderRadius: 10
    },

    logo: {
      height: 180,
      width: 180,
      resizeMode: "contain"
    },

    background: {
      flex: 1
    }
  });

export default WelcomeScreen;