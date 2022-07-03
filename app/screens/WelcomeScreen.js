import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';


function WelcomeScreen({navigation}) {
    return (
            <View style = {styles.background}>
                <View style = {styles.logoContainer}>
                    <Image style = {styles.logo} source= {require('../assets/logo.png')}/>
                    <Text style = {styles.logoText}>"RANDOM"</Text>
                </View> 
            
            
                <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Play')}>
                    <Text style = {styles.font}>Feeling Lucky</Text>

                </TouchableOpacity>

                
            </View>
            
        


    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    logo:{
        width:100,
        height:100,
    },
    logoText:{
        top: 10,
        fontSize: 20,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
        color: "white",
    },
    actionContainer:{
        
    },
    playButton:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
        borderRadius: 12,
        height: 100,
        width: 100,
    },
    font:{
        color: '#36303F', 
        fontWeight: '700',
        fontSize: 20,
        textAlign: "center",
      },
})


export default WelcomeScreen;