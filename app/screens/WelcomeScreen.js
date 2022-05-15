import React from 'react';
import {View, StyleSheet, Text, Button, Image, ImageBackground, Alert, TouchableOpacity} from "react-native";
const logInButtonPress = ()=>console.log("Log In Account!")
const signUpButtonPress = ()=>console.log("Sign Up Account!")

function WelcomeScreen(props) {
    return (
        <ImageBackground
          style={styles.background}
          source={require("../assets/background.png")}>

              <View style={styles.body}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Button title="Login" color="orange" onPress={logInButtonPress}/>
                <Button title="Sign Up" color="orange" onPress={signUpButtonPress} />
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

    logo: {
      flex: 1,
      height: 180,
      width: 180,
      resizeMode: "contain"
    },

    background: {
      flex: 1
    }
  });

export default WelcomeScreen;