import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';
import DateCard1 from './DateCard1';
import DateCard2 from './DateCard2';
import DateCard3 from './DateCard3';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <InvitationCard />
          </CardSection>
          <CardSection>
            <DateCard1 />
          </CardSection>
          <CardSection>
            <DateCard2 />
          </CardSection>
          <CardSection>
            <DateCard3 />
          </CardSection>
          <CardSection>
            <Button onPress={() => Actions.createDinner()}>
              Add New Event
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => Actions.eventDetails()}>
              DinnerEvent
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut().then(() => Actions.login())}>
              Log Out Pls
            </Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

export default Home;
