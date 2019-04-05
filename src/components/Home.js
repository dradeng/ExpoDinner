import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <Card>
        <CardSection>
          <InvitationCard />
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.createDinner()}>
            Add New Event
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
            Log Out Pls
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Home;
