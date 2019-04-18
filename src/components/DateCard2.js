import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    var tomorrow = new Date();
    var dd = String(tomorrow.getDate() + 1).padStart(2, '0');
    var mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var yyyy = tomorrow.getFullYear();

    tomorrow = mm + '/' + dd + '/' + yyyy;

    return (
      <View style={{width:'100%', minHeight: 50}}>
        <Text>Tomorrow</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{float: 'center', width: '25%'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
              source={require('../assets/Prof3.jpg')}
            />
          </View>
          <View style={{float: 'right', width: '75%', margin: 5}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>Carries Porter</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>{tomorrow} -- 5:00 pm</Text>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}

export default Home;