import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity,ImageBackground} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

import Editor from '../components/Editor'
import colors from '../config/colors';
import { _spacing } from '../config/globalStyle';

function Templates({navigation}) {
    return (
        <ImageBackground source = {require('../assets/dicebg.jpg')} style = {{flex:1, backgroundColor: colors.black}}> 
            <TouchableOpacity style = {styles.button}
                    onPress={ () => {navigation.navigate('Home');}}
                ><Ionicons style = {{top: 40,left: '300%'}}name="ios-close" size={40} color = {colors.whiteOpacity} />
            </TouchableOpacity> 
            <Editor></Editor>
        </ImageBackground>
        
    );
}

export default Templates;


const styles = StyleSheet.create({
    button:{
        height:"10%",
        color: colors.whiteOpacity,
        width: _spacing * 10,
        alignItems: "center",
    },
});

// import React, { useState } from 'react';
// import { Dimensions, StyleSheet, Text, View, TouchableOpacity,TouchableHighlight, FlatList, Modal, TextInput} from 'react-native';
// import itemList from '../config/itemList';
// import '../data/testWheel';
// import { AntDesign,Ionicons,Foundation} from '@expo/vector-icons';
// import colors from '../config/colors';

// const { width} = Dimensions.get('window');
// const _spacing = 10;

// var isModalVisible = false;
// var inputText = "";
// var editedItem = -1;
// var refresh = false;


// function getData() {
//     let data = global.il.getList();
//     let n = data.length;
//     return data; 
//   }

// function setModalVisible(bool){
//     isModalVisible = bool;
// }

// function handleEditItem(){
//     il.setItem(inputText, editedItem);
// }

// function Edit({navigation}) {   
//     const [data, setData] = React.useState(getData());
      
//     return (
//             <View style = {styles.background}>
                
//                 <FlatList
//                     data = {data}
//                     extraData = {data}
//                     style = {styles.roller}
//                     keyExtractor={(item) => item.key}
//                     //onRefresh={onRefresh}
//                     //refreshing={isFetching}
//                     //getItemLayout={this.getItemLayout}
//                     contentContainerStyle={{ paddingTop: _spacing}}
//                     showsVerticalScrollIndicator = {false}
//                     vertical
//                     renderItem={({ item, index}) => (
//                         <TouchableOpacity onPress={()=>{editedItem= index+1;}}>
//                             <View style={styles.rollerComponent}>  
//                                 <Text style = {styles.font}> {item.name} </Text>
//                             </View>
//                          </TouchableOpacity>
//                     )}
                   
//                 />
                
//                 <View style={styles.modalView}>
//                     <TextInput
//                         style={styles.textInput}
//                         onChangeText={(text) => {inputText= text;}}
//                         defaultValue={"inputText"}
//                         editable = {true}
//                         multiline = {false}
//                         maxLength = {200}
//                     /> 
//                     <TouchableHighlight onPress={() => {handleEditItem(editedItem);setData(getData()); }} 
//                         style={[styles.touchableHighlight, {backgroundColor: 'orange'}]} underlayColor={'#f1f1f1'}>
//                         <Text style={styles.text}>Save</Text>
//                     </TouchableHighlight>  
//                 </View>           

//                 <View style = {styles.optionMenu}>
//                     <TouchableOpacity style = {styles.button}
//                         onPress={ () => {setModalVisible(true); alert(isModalVisible);}}
//                     ><AntDesign  name="edit" size={24} color = {colors.black} />  
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity style = {styles.button}
//                         onPress={ () => navigation.navigate('Play')}
//                     ><Ionicons name="add" size={24} color = {colors.black} />
//                     </TouchableOpacity> 

//                     <TouchableOpacity style = {styles.button}
//                         onPress={ () => navigation.navigate('Play')}
//                     ><Foundation name="play" size={24} color = {colors.black} />
//                     </TouchableOpacity> 
//                 </View>
            

                
//             </View>
//     );
// }

// const styles = StyleSheet.create({
//     background:{
//         flex:1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: colors.primary,
//     },
//     optionMenu:{
//         padding: 30, 
//         justifyContent: "center",
//         flexDirection: 'row',
//     },
    
//     roller:{
//         flex: 3,
//         border: 1,
//         borderColor: "white",

//     },
//     rollerComponent: {
//         borderColor: colors.active,
//         marginTop: _spacing,
//         padding: _spacing,
//         borderWidth: 2,
//         borderRadius: 12,
//         width: _spacing * 30,
//         height: _spacing * 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexGrow: 0
//     },
//     font:{
//       color: '#36303F', 
//       fontWeight: '700',
//       fontSize: 20,
//     },
//     button:{
//         color: colors.white,
//         width: _spacing * 10,
//         alignItems: "center",
//     },
//     modalView: {
//         flex: 0.3,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     touchableHighlight: {
//         backgroundColor: 'white', 
//         marginVertical: 10,
//         alignSelf: 'stretch',
//         alignItems: 'center',
//     },
//     text: {
//         marginVertical: 30,
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginLeft: 10,
//     },

//     textInput: {
//         width: '90%',
//         marginLeft: 10,
//         marginRight: 10,
//         marginBottom: 30,
//         borderColor: 'gray', 
//         borderBottomWidth: 2,
//         fontSize: 16,
//     },
       
//   });
// export default Edit;