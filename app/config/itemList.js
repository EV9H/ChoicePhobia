import React from 'react';
import { Component } from 'react';

export default class itemList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
            {name: 'Do Chores', key: '1'} ,
            {name: 'Make a dinner', key: '2'} ,
            {name: 'Buy roses', key: '3'} ,
            {name: 'Roll 3 Dices = Money Gift', key: '4'} ,
            {name: 'Learn a joke', key: '5'} ,
            {name: 'Gift 50$ clothes', key: '6'} ,
            {name: 'Any small wishes', key: '7'} ,
            {name: 'Write love words', key: '8'} ,
            {name: 'Play games with partner', key: '9'} ,
            ],
        };
        
      }

    
    getList() {
        return this.state.list;
    }


    
    newItem(item){
        // No Key Repeats
        for(let i = 0; i < this.state.list.length; i ++){
            if(this.state.list[i] == item ){
                return;
            }
        }
        this.state.list.push({name: "NEW ITEM", key: this.state.list.length + 1});
    }

    setItem(inputText, editedItem){
        this.state.list[editedItem -1]= {name: inputText, key:editedItem};
    }
}

