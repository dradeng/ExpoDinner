// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  }
handleSignUp = () => {
  firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => Actions.home())
      .catch(error => this.setState({ errorMessage: error.message }));
  }
render() {
    return (
      <Card>
        <CardSection>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          </CardSection>
          <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, flexDirection: 'column', height: 105}}>
          <View style={{paddingBottom: 5, height: 50}}>
            <Button onPress={this.handleSignUp}>
              Sign Up
            </Button>
          </View>
          <View style={{ height: 50, paddingTop: 5}}>
            <Button onPress={() => Actions.login()}>
              Already have an account? Login
            </Button>
          </View>
          </View>
        </CardSection>
      </Card>
    )
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
