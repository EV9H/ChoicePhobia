import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import itemList from '../config/itemList';

global.il = new itemList();

global._fontFamily = 'Helvetica Neue';

function setAppLaunched(){
    AsyncStorage.setItem("HAS_LAUNCHED", 'LAUNCHED');
}

function clearStorage(){
    AsyncStorage.clear();
}

const launch = async() =>{
    try{
        const isLaunched = await AsyncStorage.getItem("HAS_LAUNCHED");
        
        
        if(isLaunched === null){
            setAppLaunched(); 
            try {
                const initList = [{name: 'Create Your Own List', key: '1'}, {name: 'Or Use a Template', key: '2'}];
                const listValue = JSON.stringify(initList)
                await AsyncStorage.setItem("init", listValue);
                //initialize state
                il.state.list = initList;
                il.state.curListName = "init";
                il.state.keyCnt = 3;
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
            il.state.keyCnt = JSON.parse(await AsyncStorage.getItem("key"));
            il.state.lastLaunchedlist = il.state.curListName;
        } 
    }catch(e){
        console.log(e);
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
    //clearStorage();
    launch();
    

    return (
            <View style = {styles.background}>
                <View style = {styles.logoContainer}>
                    {/* <Image style = {styles.logo} source= {require('../assets/logo.png')}/> */}
                    <Text style = {styles.logoText}>CHOICE PHOBIA</Text>
                </View> 
            
                <View style = {{ flex: 1,  width: '100%', alignItems:"center", flexDirection: "column", justifyContent:"flex-end"}}>
                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Play')}>
                        <Text style = {styles.font}>MAKE YOUR CHOICE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Edit')}>
                        <Text style = {styles.font}>EDIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.playButton} color = {colors.primary} onPress={ () => navigation.navigate('Templates')}>
                        <Text style = {styles.font}>TEMPLATES</Text>
                    </TouchableOpacity>

                </View>

            </View>
            
        


    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.black,
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        width:100,
        height:100,
    },
    logoText:{
        fontWeight: "700",
        fontSize: 40,
        textAlign: "center",
        fontFamily: _fontFamily,
        top: 100,
        color: colors.white,
        
        borderColor: colors.button,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 5,
        borderBottomWidth: 5,
    },
    logoContainer:{
        position: "absolute",
        top: "25%",
        alignItems: "center",
    },
    actionContainer:{
        
    },
    playButton:{
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.button,
        borderRadius: 8,
        height: 50,
        width: '90%',

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