import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TimePicker, DatePicker } from 'react-native-wheel-picker-android';
import Geocoder from 'react-native-geocoding';
import { Button, Card, CardSection, Spinner } from './common';
import { Input } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';


class CreateDinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      address: null,
      location: null,
      error: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        console.log(position);
      },
    );
  }
  change() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=' + 'AIzaSyBl9N_4Qo5m-IElGXKpz62Ah42YaUSSU2g')
      .then((response) => response.json())
      .then((responseJson) => {
       
        var addy = JSON.stringify(responseJson.results[0].formatted_address);
        this.setState({
          location: addy
        });
    })
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{width: '80%'}}>
                <Input
                  leftIcon={ <Icon onPress={this.change.bind(this)} type='font-awesome' color='rgb(15,140,255)' name='map-marker' style={{margin: 30}}/>}
                  placeholder='  Enter Address'
                  value={this.state.location}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      
    );
  }
}

export default CreateDinner;