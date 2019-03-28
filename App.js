import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import Router from './src/Router';

class App extends Component {
  state = { loggedIn: null };


  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBYPgdtmFXywT4hrQ1sz05EC6h4BgtdwQ8",
      authDomain: "cs4720-f3882.firebaseapp.com",
      databaseURL: "https://cs4720-f3882.firebaseio.com",
      projectId: "cs4720-f3882",
      storageBucket: "cs4720-f3882.appspot.com",
      messagingSenderId: "508595634959"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Router />
        );
      case false:
        return (
            <Router />
          );
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;