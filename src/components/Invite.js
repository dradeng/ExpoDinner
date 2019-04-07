import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class Invite extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center'}}> 320 14th St NW</Text>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center'}}> Thurs 11 April - 9:00pm</Text>
        </View>
        <View style={{width: '100%'}}>
          <Text style={{color: 'grey', float: 'left'}}>Who do you want to invite?</Text>
          <Text style={{color: 'rgba(106, 207, 103, .9)', float:'right'}}>1 Selected</Text>
        </View>
      </View>
    );
  }
}

export default Invite;
