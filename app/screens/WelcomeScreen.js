import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

function WelcomeScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        'Lobster-Regular': require('../fonts/Lobster-Regular.ttf'),
        'Sextape' : require('../fonts/Sextape.ttf'),
      });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    

    return (
            <ImageBackground source = {require('../assets/dicebg.jpg')} style = {styles.background}>
                <View style = {styles.logoContainer}>
                    {/* <Image style = {styles.logo} source= {require('../assets/logo.png')}/> */}
                    <Text style = {styles.logoText}>RANDOM PICKER</Text>
                </View> 
            
                <View style = {{ flex: 1,  width: '80%', alignItems:"center", flexDirection: "column", justifyContent:"flex-end"}}>
                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Play')}>
                        <Text style = {styles.font}>Feeling Lucky</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Edit')}>
                        <Text style = {styles.font}>Edit Items</Text>
                    </TouchableOpacity>

                </View>
                
                
            </ImageBackground>
            
        


    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        width:100,
        height:100,
    },
    logoText:{
        fontSize: 60,
        textAlign: "center",
        fontFamily: "Sextape",
        top: 100,
        color: colors.white,
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
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF00FF30",
        borderRadius: 30,
        height: 100,
        width: '80%',

    },
    font:{
        // color: '#36303F',
        fontFamily: "Sextape", 
        color: "white",
        fontWeight: '700',
        fontSize: 20,
        textAlign: "center",
      },
})


export default WelcomeScreen;