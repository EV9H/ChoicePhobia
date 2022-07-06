import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Button, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../config/colors';
import itemList from '../config/itemList';
import { FontAwesome5 } from '@expo/vector-icons';
import '../screens/WelcomeScreen';

const { width} = Dimensions.get('window');
const _spacing = 10;
const COLORS = [colors.primary, colors.secondary,'red'];


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
    let randomIndex = Math.floor(Math.random() * this.state.data.length);
    this.setState({chosenID: randomIndex});
     
    this.flatListRef.scrollToIndex({animated: true, index:Math.floor(randomIndex / 3), viewPosition: 0.5});
  }

  refreshList = () => {
    this.flatListRef.setState({refresh: !this.state.refresh})
  }



  render() {
    const chosen = this.state.chosenID;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}>
        
          <FlatList
            data = {this.state.data}
            extraData = {this.state.refresh}
            style = {styles.roller}
            ref={(ref) => { this.flatListRef = ref; }}
            numColumns={3}
            keyExtractor={(item) => item.key}
            getItemLayout={this.getItemLayout}
            contentContainerStyle={{ paddingLeft: _spacing, alignSelf: 'flex-start',}}
            showsHorizontalScrollIndicator = {false}
            renderItem={({ item, index}) => (
                <TouchableOpacity onPress={()=>{}}>
                    <View style={styles.rollerComponent(index === chosen)}>  
                        <Text style = {styles.font}> {item.name} </Text>
                    </View>

                </TouchableOpacity>
                
              )}
            {...this.props}
          />
        </ScrollView>
        
        <TouchableOpacity
            style = {styles.dice}
            onPress={this.scrollToIndex}
        ><FontAwesome5 name="dice-six" size={75} color= {colors.button} /></TouchableOpacity>
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
      width: width / 3.5,
      height: width / 3.5,
      marginBottom: 10,
      textAlign:"center",
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 0,
      backgroundColor: colors.button,
  }),
  font:{
    color: colors.white, 
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
