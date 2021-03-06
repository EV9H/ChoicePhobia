import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity,ImageBackground,Text} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

import Editor from '../components/Editor'
import colors from '../config/colors';
import { _spacing } from '../config/globalStyle';

function Edit({navigation}) {
    return (
        <View style = {{flex:1, backgroundColor: colors.black}}> 
            <TouchableOpacity style = {styles.button}
                    onPress={ () => {navigation.navigate('Home');}}
                ><Ionicons style = {{top: 40,left: '300%'}}name="ios-close" size={40} color = {colors.whiteOpacity} />
            </TouchableOpacity> 
            <Text style = {{flex: 1, fontSize: 30, alignItems: "center", textAlign: "center", justifyContent: "center", color: "white",top: 300}}>Building...</Text>
            

        </View>
        
    );
}

export default Edit;


const styles = StyleSheet.create({
    button:{
        height:"10%",
        color: colors.whiteOpacity,
        width: _spacing * 10,
        alignItems: "center",
    },
});
