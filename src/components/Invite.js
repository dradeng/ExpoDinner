import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class Invite extends Component {
  

  highlight() {
    Actions.login();
  }
  render() {
    return (
      <View>
        <Text>Invite</Text>
      </View>
    );
  }
}

export default Invite;
