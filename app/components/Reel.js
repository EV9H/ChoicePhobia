import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import itemList from '../config/itemList';
import { FontAwesome5 } from '@expo/vector-icons';

const { width} = Dimensions.get('window');
const _spacing = 10;
const COLORS = [colors.primary, colors.secondary,'red'];
global.il = new itemList();

function getData() {
  let data = il.getList();
  let n = data.length;
  return data;
}


class Reel extends Component {
  constructor (props) {
    super(props);
    const chosenID = 0;
    this.state = {
      data: il.state.list,
      chosenID: chosenID,
      refresh: false,
    };
  }
  getItemLayout = (data, index) => (
    { length:  _spacing * 13, offset:  _spacing * 13 * index, index }
  )
  
  getColor(index) {
    const mod = index%2;
    return COLORS[mod];
  }
  
  scrollToIndex = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * this.state.data.length);
    this.setState({chosenID: randomIndex});
    this.flatListRef.scrollToIndex({animated: true, index:randomIndex, viewPosition: 0.5});
  }

  refreshList = () => {
    this.flatListRef.setState({refresh: !this.state.refresh})
  }

  render() {
    const chosen = this.state.chosenID;
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.data}
          extraData = {this.state.refresh}
          style = {styles.roller}
          ref={(ref) => { this.flatListRef = ref; }}
          keyExtractor={(item) => item.key}
          getItemLayout={this.getItemLayout}
          contentContainerStyle={{ paddingLeft: _spacing }}
          showsHorizontalScrollIndicator = {false}
          horizontal
          renderItem={({ item, index}) => (
              <TouchableOpacity onPress={()=>{}}>
                  <View style={styles.rollerComponent(index === chosen)}>  
                      <Text style = {styles.font}> {item.name} </Text>
                  </View>

              </TouchableOpacity>
              
            )}
          {...this.props}
        />
        <TouchableOpacity
            style = {styles.dice}
            onPress={this.scrollToIndex}
        ><FontAwesome5 name="dice-six" size={75} color= {colors.whiteOpacity} /></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  roller:{
    border: 1,
    borderColor: "white",
    flexGrow: 0,
  },
  rollerComponent: bool => ({
      borderColor: bool ?colors.active : colors.inactive,
      marginRight: _spacing,
      padding: _spacing,
      borderWidth: 2,
      borderRadius: 12,
      width: _spacing * 13,
      height: _spacing * 13,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 0,
      backgroundColor: colors.whiteOpacity,
  }),
  font:{
    color: '#36303F', 
    fontWeight: '700',
    fontSize: 20,

  },

  dice: {
    margin: 50,
  }
     
});

export default class app extends Component {
  render() {
    return  <Reel/>
  }
}
