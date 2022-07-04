import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import itemList from '../config/itemList';

global.il = new itemList();

const _fontFamily = 'Sextape';

function setAppLaunched(){
    AsyncStorage.setItem("HAS_LAUNCHED", 'LAUNCHED');
}

function clearStorage(){
    AsyncStorage.clear();
}

const launch = async() =>{
    try{
        const isLaunched = await AsyncStorage.getItem("HAS_LAUNCHED");
        if(isLaunched == null){ 
            setAppLaunched(); 
            try {
                const initList = [{name: 'Create Your Own List or Use Template', key: '1'}];
                const listValue = JSON.stringify(initList)
                await AsyncStorage.setItem("init", listValue);
                //initialize state
                il.state.list = initList;
                il.state.curListName = "init";
                il.state.keyCnt = il.state.list.length;
                il.state.lastLaunchedlist = "init";
                await AsyncStorage.setItem("lastLaunchedList", "init");
                await AsyncStorage.setItem("_state",JSON.stringify(il.state) );
                setAppLaunched();
            } catch (e) {
                alert(e);
            }
            
        }
        else{
            il.state.list = await il.getListAsync();
            il.state.curListName = await AsyncStorage.getItem("lastLaunchedList");
            il.state.keyCnt = il.state.list.length;
            il.state.lastLaunchedlist = il.state.curListName;
        } 
    }catch(e){
        alert(e)
    }
}

function WelcomeScreen({navigation}) {

    let [fontsLoaded] = useFonts({
         'Lobster-Regular': require('../fonts/Lobster-Regular.ttf'),
        'Sextape' : require('../fonts/Sextape.ttf'),
       });
    if (!fontsLoaded){
        return null;
    }

    launch();
    //clearStorage();

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

                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Templates')}>
                        <Text style = {styles.font}>Templates</Text>
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
        fontFamily: _fontFamily,
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
        fontFamily: _fontFamily, 
        color: "white",
        fontWeight: '700',
        fontSize: 20,
        textAlign: "center",
      },
})


export default WelcomeScreen;