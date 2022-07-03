import * as React from 'react';
import { Text, View, FlatList, StyleSheet,TouchableOpacity, Button } from 'react-native';
import colors from '../config/colors';

const _spacing = 10;

var vars={};


export default function ItemArray(){
  const ref = React.useRef(null);
  const [items, setItem] = React.useState([
    {name: 'GETMONEY1', key: '1'},
    {name: 'GETMONEY2', key: '2'},
    {name: 'GETMONEY3', key: '3'},
    {name: 'GETMONEY4', key: '4'},
    {name: 'GETMONEY5', key: '5'},
    {name: 'GETMONEY6', key: '6'},
    {name: 'GETMONEY7', key: '7'},
    {name: 'GETMONEY8', key: '8'},
    {name: 'GETMONEY9', key: '9'},
    {name: 'GETMONEY10', key: '10'},
    {name: 'GETMONEY11', key: '11'},
    {name: 'GETMONEY12', key: '12'},
    {name: 'GETMONEY13', key: '13'},
    {name: 'GETMONEY14', key: '14'},
    {name: 'GETMONEY15', key: '15'},
    {name: 'GETMONEY16', key: '16'},
    {name: 'GETMONEY17', key: '17'},
    {name: 'GETMONEY18', key: '18'},
    {name: 'GETMONEY19', key: '19'},
    {name: 'GETMONEY20', key: '20'},
  ])

  
  

  return (
    <View> 
        <FlatList
            ref={ref}
            data ={items}
            contentContainerStyle={{ paddingLeft: _spacing }}
            showsHorizontalScrollIndicator={false}
            style = {styles.scrollView}
            horizontal
            
            renderItem = {({ item })=> {
              return(
                <View> 
                <TouchableOpacity>
                  <View style = {styles.item}>
                    <Text style = {{color: '#36303F', fontWeight: '700'}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
                <Button title = "NEW"></Button>
                </View>
              )
                
              
              }

            }
        />

    </View>



  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
    padding: 30,
    backgroundColor: colors.primary,
    fontSize: 50,
  },
  item: {
    marginRight: _spacing,
    padding: _spacing,
    borderWidth: 2,
    borderColor: colors.active,
    borderRadius: 12,
    backgroundColor: colors.inactive,
  },
})


