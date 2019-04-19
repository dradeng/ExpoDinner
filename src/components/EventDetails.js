import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//import CircleCheckBox from 'react-native-circle-checkbox'; 
import { CheckBox } from 'react-native-elements';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationCard from './InvitationCard';
import EventDetailContact from './EventDetailContact';

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.clicked,
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/coffee.png')}
          />
          <Text style={{color: 'black', width: '100%', textAlign: 'center', fontSize: 18}}>France</Text>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center'}}> Thurs 11 April - 9:00 pm</Text>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center', fontWeight: 'bold'}}> Host by you</Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row', paddingTop: 20, paddingLeft: 10, paddingBottom: 10}}>
          <Text style={{color: 'grey', textAlign: 'left', width: '50%'}}>Who's coming</Text>
        </View>
        
        <View style={{flexDirection: 'column'}}>
          
          <TouchableOpacity> 
            <EventDetailContact 
              accepted={true}
            />
          </TouchableOpacity>
          <TouchableOpacity> 
            <EventDetailContact
              accepted={true}
            />
          </TouchableOpacity>
          
        </View>
        <View style={{width: '100%', flexDirection: 'row', padding: 10, borderTopWidth: .4, borderColor: 'grey'}}>
          <Text style={{color: 'grey', textAlign: 'left', width: '50%'}}>Can't make it</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          
          <TouchableOpacity> 
            <EventDetailContact 
              accepted={false}
            />
          </TouchableOpacity>
          <TouchableOpacity> 
            <EventDetailContact 
              accepted={false}
            />
          </TouchableOpacity>
          
        </View>
        

          
        <TouchableHighlight
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Cancel Dinner</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default EventDetails;