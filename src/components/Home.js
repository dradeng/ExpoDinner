import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
            Log Out
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default Home;
