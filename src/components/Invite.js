import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Contact from './Contact';
class Invite extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/coffee.png')}
          />
          <Text style={{color: 'black', width: '100%', textAlign: 'center', fontSize: 18}}> 320 14th St NW</Text>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center'}}> Thurs 11 April - 9:00pm</Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row', paddingTop: 20}}>
          <Text style={{color: 'grey', textAlign: 'left', width: '50%'}}>Who do you want to invite?</Text>
          <Text style={{color: 'rgba(106, 207, 103, .9)', textAlign:'right', width: '50%'}}>1 Selected</Text>
        </View>
        <Contact />
        <TouchableHighlight
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Send Invitations</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Invite;
