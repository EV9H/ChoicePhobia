import React, {Component} from 'react';
import { View, StyleSheet,TouchableOpacity, Text} from 'react-native';
import colors from '../config/colors';

function NavigationFooter({navigation}) {
    return (
        <View>
            <TouchableOpacity style = {styles.button}  onPress={() =>navigation.navigate('Home') }
                    ><Text style = {{fontSize: 30}}>Home</Text>
                </TouchableOpacity>  
                <TouchableOpacity 
                    style = {styles.button} 
                    onPress={() =>navigation.navigate('Edit')}
                ><Text style = {{fontSize: 30}}>Edit</Text>
                </TouchableOpacity>  
        </View>
    );
}

const styles = StyleSheet.create({

    button:{      
        
        borderWidth: 1,
        borderColor: colors.active,
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default NavigationFooter;