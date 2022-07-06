import React, {Component} from 'react';
import {View,StyleSheet,Text,Dimensions} from 'react-native';

import colors from '../config/colors';
import itemList from '../config/itemList';
import '../screens/WelcomeScreen';

const _spacing =10;
const { width} = Dimensions.get('window');

export default class ReelItem extends React.PureComponent {
    
  render() {
    const {idx, item, active, ref} = this.props;
    return (
        <View style = {styles.component(active)}>
            <Text style = {styles.font}>{item}</Text>
        </View>
    )
  }

}
const styles = StyleSheet.create({ 
    component:bool => ({
        borderColor: bool ?colors.active : colors.inactive,
        marginRight: _spacing,
        padding: _spacing,
        borderWidth: 2,
        borderRadius: 12,
        width: width / 3.5,
        height: width / 3.5,
        marginBottom: 10,
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        backgroundColor: bool ? colors.button : colors.inactive,
    }),
    font:{
        color: colors.white, 
        fontWeight: '700',
        fontSize: 20,
    
      },

})
