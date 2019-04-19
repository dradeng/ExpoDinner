import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
//import CircleCheckBox from 'react-native-circle-checkbox'; 
import { CheckBox } from 'react-native-elements';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class EventDetailContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.clicked,
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', borderTopWidth: .4, borderColor: 'grey', minHeight: 60, maxHeight:200}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
            source={require('../assets/small_profpic.png')}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{color:'black', fontWeight: 'bold'}}>George Samson</Text>
            <Text style={{color: 'grey'}}>458-984-0797</Text>
          </View>

          <View style={{flex: 1, position: "absolute", right: 5, bottom: 15, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'flex-end', textAlignVertical: 'center'}}>
            {this.props.accepted ? (
              <Icon name='check' color='rgba(106, 207, 103, .9)' />
            ) : (
              <Text style={{color: 'rgba(236, 83, 76, .9)', fontSize: 20, margin: 5, textAlignVertical: 'center' }}>X</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default EventDetailContact;