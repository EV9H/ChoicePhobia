import * as React from 'react'
import { Image,ImageBackground, View, StyleSheet, Button, Text, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

import colors from '../config/colors'
import Reel from '../components/Reel'
import NavigationFooter from '../components/navigationFooter';

// Item List 
import itemList from '../config/itemList';
import il from '../components/Reel'


const _spacing= 10;
function PlayScreen({navigation}) {   
    return (
        <ImageBackground source = {require('../assets/dicebg.jpg')} style = {styles.background}>    
            <TouchableOpacity style = {styles.button}
                    onPress={ () => {navigation.navigate('Home');}}
                ><Ionicons style = {{top: 40,left: '300%'}}name="ios-close" size={40} color = {colors.whiteOpacity} />
            </TouchableOpacity> 
            <View style = {styles.scrollArea}>
                <Reel></Reel>
            </View>



            
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: "black",
    },

    scrollArea:{
        justifyContent: "center",
        flex: 15,
    },

    button:{
        height:"10%",
        color: colors.primary,
        width: _spacing * 10,
        alignItems: "center",
    },
})
export default PlayScreen;