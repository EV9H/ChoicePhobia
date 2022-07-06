import React from 'react';
import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const templateLists = [
    {name:'relationship', content: [
        {name: 'Do Chores', key: '1'} ,
        {name: 'Make a dinner', key: '2'} ,
        {name: 'Buy roses', key: '3'} ,
        {name: 'Roll 3 Dices = Money Gift', key: '4'} ,
        {name: 'Learn a joke', key: '5'} ,
        {name: 'Gift 50$ clothes', key: '6'} ,
        {name: 'Any small wishes', key: '7'} ,
        {name: 'Write love words', key: '8'} ,
        {name: 'Play games with partner', key: '9'} ,   
    ], key: 1},
    {name:'life', content: [
        {name: 'Clean my home', key: '1'} ,
        {name: 'Make your best dinner', key: '2'} ,
        {name: 'Workout', key: '3'} ,
        {name: 'Study', key: '4'} ,
        {name: 'Play games', key: '5'} ,
        {name: 'Call someone', key: '6'} ,
        {name: 'Take a walk', key: '7'} ,
        {name: 'Watch a movie', key: '8'} ,
        {name: 'Take a nap', key: '9'} , 
    ], key: 2},
]


export default class itemList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            curListName: "",
            list: [],
            keyCnt: 3,
            templateSeleted: -1,
            lastLaunchedlist: "",
            launched: false,
        };
    }

    
    // template 
    // onStartUp(name){
    // }
    useTemplate(){
        if(this.state.templateSeleted == -1){
            return;
        }
        this.state.list = templateLists[this.state.templateSeleted].content;
        this.state.curListName = templateLists[this.state.templateSeleted].name;
    }
    
    saveTemplate(templateName){
        templateLists.push({name: templateName, content: this.state.list, key: templateLists.length + 1});
        alert("Template " + {templateName} + " saved!");
    }

    copyTemplate(idx){
        templateLists.push(templateLists[idx]);
        alert("Template " + {idx} + " copied!");
    }

    // AsyncStorage
    saveListAsync = async () =>{
        try {
            const listValue = JSON.stringify(this.state.list);
            await AsyncStorage.setItem(this.state.curListName, listValue);
            await AsyncStorage.setItem("key", JSON.stringify(this.state.keyCnt));
        } catch (e) {
            console.log(e);
        }
    }


    getListAsync = async() => {
        try {  
            const listNameLastLaunched = await AsyncStorage.getItem("lastLaunchedList");
            const listJSON = await AsyncStorage.getItem(listNameLastLaunched);
            const list = JSON.parse(listJSON);
            return list;
        } catch(e) {
            console.log(e);
        }
    }


    newItem(){
        // No Key Repeats
        if(this.state.list === null || this.state.list.length === 0){        //empty list
            this.state.list.push({name: " ", key: this.state.keyCnt});
            this.state.keyCnt += 1;
            this.saveListAsync();

        }else{
            let k = this.state.keyCnt;
            this.state.keyCnt += 1;
            this.state.list.push({name: " ", key: k});
            this.saveListAsync();
        }
        
    }

    setItem(inputText, editedItem){
        this.state.keyCnt += 1;
        this.state.list[editedItem -1]= {name: inputText, key:this.state.list[editedItem-1].key};
        this.saveListAsync(this.state.curListName);
    }

    deleteItem(deleteKey){
        const filteredData = this.state.list.filter(item => item.key !== deleteKey);
        this.state.list = filteredData;
        this.saveListAsync(this.state.curListName);
    }

    getItemNameByIndex(idx){
        if(idx == -1){
            return;
        }
       return this.state.list[idx].name;
    }
}

