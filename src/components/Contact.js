import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import CircleCheckBox from 'react-native-circle-checkbox'; 
import { CheckBox } from 'react-native-elements';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.clicked,
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', borderTopWidth: .4, borderColor: 'grey', minHeight: 60}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
            source={require('../assets/small_profpic.png')}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{color:'black', fontWeight: 'bold'}}>George Samson</Text>
            <Text style={{color: 'grey'}}>458-984-0797</Text>
          </View>

          <View style={{flex: 1, position: "absolute", right: 0, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'right'}}>
            <TouchableWithoutFeedback>
              <CheckBox
                disabled
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.props.clicked}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;