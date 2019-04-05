import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { TimePicker, DatePicker } from 'react-native-wheel-picker-android'
import { Button, Card, CardSection, Spinner } from './common';
import { Input } from 'react-native-elements';


class CreateDinner extends Component {
  state = { email: '', password: '', error: '', loading: false };

  change() {
    //do nithing
  }
  render() {
    return (
      <View style={{width:'100%'}}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row', position: 'relative'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: 'grey', textAlign: 'center'}}>What time is dinner</Text>
            <TimePicker/>
            <Text style={{color: 'grey', width: '100%', textAlign: 'center', paddingTop: 50}}>
              Choose a location
            </Text>
            <Input
              placeholder='Enter Address'
            />
          </View>
        </View>
      </View>
      
    );
  }
}

export default CreateDinner;