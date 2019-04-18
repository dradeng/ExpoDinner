import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    var twoDays = new Date();
    var dd = String(twoDays.getDate()+2).padStart(2, '0');
    var mm = String(twoDays.getMonth() + 1).padStart(2, '0');
    var yyyy = twoDays.getFullYear();

    twoDays = mm + '/' + dd + '/' + yyyy;

    return (
      <View style={{width:'100%', minHeight: 50}}>
        <Text>Two Days From Now</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{float: 'center', width: '25%'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
              source={require('../assets/Prof4.jpg')}
            />
          </View>
          <View style={{float: 'right', width: '75%', margin: 5}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>Alicia Lynn</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>{twoDays} -- 6:30 pm</Text>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}

export default Home;