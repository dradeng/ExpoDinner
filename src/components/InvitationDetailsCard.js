import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Home extends Component {
  state = { email: '', password: '', error: '', loading: false };

  render() {
    return (
      <View style={{width:'100%', minHeight: 50}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{float: 'left', width: '25%'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25, margin: 5}}
              source={require('../assets/small_profpic.png')}
            />
          </View>
          <View style={{float: 'right', width: '75%', margin: 5}}>
            <View>
              <Text style={{fontWeight: 'bold'}}>Alma Evans</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>Sunday June 17 - 8:00 pm</Text>
            </View>
            <View>
                <Text>Status: Pending -- Let Alma know if you can make it!</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={{float: 'left', borderTopWidth: 1, borderRightWidth: 1, borderColor: '#ddd', width: '50%',flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'rgba(236, 83, 76, .9)', fontSize: 20, margin: 5 }}> X  Decline</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', float: 'right', borderTopWidth: 1, borderColor: '#ddd', width: '50%', flexDirection: 'row'}}>
            <Icon name='check' color='rgba(106, 207, 103, .9)' />
            <Text style={{color: 'rgba(106, 207, 103, .9)', fontSize: 20, margin: 5}}>Accept</Text>
          </View>
        </View>
      </View>
      
    );
  }
}

export default Home;