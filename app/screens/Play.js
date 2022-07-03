import * as React from 'react'
import { Image,ImageBackground, View, StyleSheet, Button, Text, TouchableOpacity, FlatList} from 'react-native';

import colors from '../config/colors'

import Reel from '../data/testWheel'

// Item List 
import itemList from '../config/itemList';
import il from '../data/testWheel'


const _spacing= 10;
function PlayScreen({navigation}) {   
    return (
        <View style = {styles.background}>    
            <View style = {styles.scrollArea}>
                <Reel></Reel>
            </View>
            <View style = {styles.otherArea}>
                <TouchableOpacity style = {styles.button}  onPress={() =>navigation.navigate('Home') }
                    ><Text style = {{fontSize: 30}}>Home</Text>
                </TouchableOpacity>  
                <TouchableOpacity 
                    style = {styles.button} 
                    onPress={() =>navigation.navigate('Edit')}
                ><Text style = {{fontSize: 30}}>Edit</Text>
                </TouchableOpacity>  
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: colors.primary,
    },

    scrollArea:{
        justifyContent: "center",
        flex: 15,
    },
    otherArea: {
        
        justifyContent: "center",
        flex: 2,
        flexDirection: 'row',
    },
    button:{      
        
        borderWidth: 1,
        borderColor: colors.active,
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default PlayScreen;