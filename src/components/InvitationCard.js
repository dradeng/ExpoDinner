import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <View style={{width:'100%', minHeight: 50}}>
        <Text>Pending(# of pending)</Text>
        <View style={{flexDirection:"row"}}>
          <View style={{float: 'left', borderTopWidth: 1, borderRightWidth: 1, borderColor: '#ddd', color: 'red', width: '50%'}}>
            <Text style={{color: 'red', fontSize: 20}}> X  Decline</Text>
          </View>
          <View style={{float: 'right', borderTopWidth: 1, borderColor: '#ddd', color: 'green', width: '50%', flexDirection: 'row'}}>
            <Icon name='check' color='green' />
            <Text style={{color: 'green', fontSize: 20}}>Accept</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
