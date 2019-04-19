import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  

  render() {
    var dateVar = new Date();
    var dd = String(dateVar.getDate()+3).padStart(2, '0');
    var d = parseInt(dd)
    var mm = String(dateVar.getMonth() + 1).padStart(2, '0');
    var m = parseInt(mm)
    var yyyy = dateVar.getFullYear();
    var listOfDays = [];
    var i = 3
    if(m == 9 || m == 4 || m == 6 || m == 11){
        while(d < 31){
            dateVar = mm + '/' + dd + '/' + yyyy;
            listOfDays.push(dateVar)
            i++
            dd = String(dateVar.getDate()+i).padStart(2, '0');
            d++
        }
    }
    else if(m == 2){
        while(d < 29){
            dateVar = mm + '/' + dd + '/' + yyyy;
            listOfDays.push(dateVar)
            i++
            dd = String(dateVar.getDate()+i).padStart(2, '0');
            d++
        }
    }
    else{
        while(d < 32){
            dateVar = mm + '/' + dd + '/' + yyyy;
            listOfDays.push(dateVar)
            i++
            dd = String(dateVar.getDate()+i).padStart(2, '0');
            d++
        }
    }
    

    return (
      <View style={{width:'100%', minHeight: 50}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{float: 'center', width: '25%'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
              source={require('../assets/Prof2.jpg')}
            />
          </View>
          <View style={{float: 'right', width: '75%', margin: 5}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>George Sampson</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>{date} -- 7:30 pm</Text>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}

export default Home;