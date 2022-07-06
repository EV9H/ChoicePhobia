import React, {Component, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity,TouchableHighlight, FlatList, Modal, TextInput,Button} from 'react-native';
import itemList from '../config/itemList';
import './Reel';
import '../screens/WelcomeScreen';
import { AntDesign,Ionicons,Foundation} from '@expo/vector-icons';
import colors from '../config/colors';

const { width} = Dimensions.get('window');
const _spacing = 10;

var inputText = "";
var editedItem = -1;

class Editor extends Component {
    constructor(props){
        super(props);
        let init = global.il.state.list;
        this.state ={
            data: init,
            refresh: true,
            isModalVisible: false,
            selected: -1,
            selectedKey: -1,
        }
    }

    // getData(){
    //     let dt = global.il.getList();
    //     return dt; 
    // }
    handleAddItem(){
        il.newItem();
        this.setState({data: il.state.list, refresh: !this.state.refresh, selected: -1, selectedKey: -1 });
    }

    handleEditItem(){
        il.setItem(inputText, editedItem);
        this.setState({refresh: !this.state.refresh, selected: -1, selectedKey: -1 });
    }

    handleDeleteItem(){
        if ( this.state.data.length <= 1){
            alert("Cannot have a empty list!");
            return;
        }
        let deleteKey = this.state.selectedKey;
        il.deleteItem(deleteKey);
        this.setState({data: il.state.list, refresh: !this.state.refresh, selected: -1, selectedKey: -1});
    }

    getText(){
        let idx = this.state.selected;
        var text = il.getItemNameByIndex(idx);
        return text;
    }

    render() {
        return (
            <View style = {styles.background}>
                
                <FlatList
                    data = {this.state.data}
                    extraData = {this.state.refresh}
                    style = {styles.roller}
                    keyExtractor={(item) => item.key}
                    //getItemLayout={this.getItemLayout}
                    contentContainerStyle={{ paddingTop: _spacing}}
                    showsVerticalScrollIndicator = {false}
                    vertical
                    renderItem={({ item, index}) => (
                        <TouchableOpacity 
                        onPress={()=>{editedItem= index+1; this.setState({selected: index, selectedKey: item.key})}}>
                            <View style={styles.rollerComponent(index === this.state.selected)}>  
                                <Text style = {styles.font}> {item.name} </Text>
                            </View>
                         </TouchableOpacity>
                    )}
                   
                />
                <Modal 
                    visible = {this.state.isModalVisible}
                    onRequestClose = {() => this.setState({isModalVisible: false})}
                    transparent 
                    animationType='fade'
                    style = {styles.modal}
                >
                    <View style={styles.modalView}>
                        <View style = {styles.editorWindow}>
                            <View style = {{alignSelf: "flex-end", marginBottom: 10, marginRight: 10, marginTop: 10}}>
                                <TouchableOpacity><Ionicons name="ios-close" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => {inputText= text;}}
                                defaultValue = {this.getText()}
                                editable = {true}
                                multiline = {true}
                                maxLength = {200}
                            /> 
                            <TouchableHighlight 
                                onPress={() => {
                                    this.handleEditItem(editedItem);
                                    this.setState({isModalVisible: false}); 
                                }
                                } 
                                style={[styles.touchableHighlight, {backgroundColor: 'orange'}]} underlayColor={'#f1f1f1'}>
                                <Text style={styles.text}>Save</Text>
                            </TouchableHighlight>  
                        </View>
                        
                    </View>           
                </Modal>
                

                <View style = {styles.optionMenu}>
                    <TouchableOpacity style = {styles.button}
                        onPress={ () => {this.handleAddItem();}}
                    ><Ionicons name="ios-add" size={24} color= {colors.whiteOpacity} />  
                    </TouchableOpacity>
                    
                    <TouchableOpacity style = {styles.button} disabled = {this.state.selected === -1}
                        onPress={ () => {this.setState({isModalVisible: true})}}
                    ><AntDesign  name="edit" size={24} color = {this.state.selected === -1 ? "black" : colors.whiteOpacity} />  
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {styles.button} 
                        disabled = {this.state.selected === -1}
                        onPress={ 
                            () => {this.handleDeleteItem();  
                        }}
                    ><AntDesign  name="delete" size={24} color = {this.state.selected === -1 ? "black" : colors.whiteOpacity} />  
                    </TouchableOpacity>

                    
                </View>

                
            

                
            </View>
    );

    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    optionMenu:{
        padding: 30, 
        justifyContent: "center",
        flexDirection: 'row',
    },
    
    roller:{
        flex: 3,
        border: 1,
        borderColor: "white",

    },
    rollerComponent: bool => ({
        borderColor: bool ?colors.active : colors.inactive,
        marginTop: _spacing,
        padding: _spacing,
        borderWidth: 2,
        borderRadius: 12,
        width: _spacing * 30,
        height: _spacing * 5,
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
    button:{
        color: colors.white,
        width: _spacing * 10,
        alignItems: "center",
    },
    modal:{
        width: 300,
        height: 500,
        backgroundColor: "white",
    },
    modalView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00000099",
    },
    touchableHighlight: { 
        alignSelf: "stretch",
        alignItems: 'center',
    },
    text: {
        marginVertical: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    textInput: {
        width: '50%',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: 'gray', 
        borderBottomWidth: 2,
        fontSize: 16,
        textAlign: "center",
    },

    editorWindow:{
        width: "80%",
        height: "20%",
        alignItems: "center",
        backgroundColor: colors.white,
    }
       
  });
  export default class app extends Component {
    render() {
      return  <Editor
              />
    }
  }