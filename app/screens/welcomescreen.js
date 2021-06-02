import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground  
        blurRadius= {10}
        style = {styles.background}
        source={require("../assets/background.jpg")}>

            <View style = {styles.logocontainer}>

            <Image source= {require("../assets/logo-red.png")} 
                   style = {styles.logo}/>
            <Text style={styles.tagline}> Sell What You Dont Need </Text>
            </View>

            <View style= {styles.buttonsContainer}>
                <AppButton title="Login" ></AppButton>
                <AppButton title="Register" color='secondary'></AppButton>
            </View>
                
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        opacity:0.9
    },
    tagline:{
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,

    },
    buttonsContainer: {
       padding: 20,
       width: '100%',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo: {
        width: 100,
        height: 100, 
    },
    logocontainer :{
        position: 'absolute',
        top: 70,
        alignItems: 'center'

    }
    
})

export default WelcomeScreen;