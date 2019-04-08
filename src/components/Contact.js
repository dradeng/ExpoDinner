import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class Contact extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%', borderTopWidth: .4, borderColor: 'grey', minHeight: 80}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
            source={require('../assets/small_profpic.png')}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{color:'black', fontWeight: 'bold'}}>George Samson</Text>
            <Text style={{color: 'grey'}}>458-984-0797</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;