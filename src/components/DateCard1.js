import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  

  render() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
      <View style={{width:'100%', minHeight: 50}}>
        <Text>Today</Text>
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
              <Text style={{color: 'grey'}}>{today} -- 7:30 pm</Text>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}

export default Home;