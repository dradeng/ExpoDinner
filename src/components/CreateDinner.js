import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TimePicker, DatePicker } from 'react-native-wheel-picker-android';
import Geocoder from 'react-native-geocoding';
import { Button, Card, CardSection, Spinner } from './common';
import { Input } from 'react-native-elements';
import { Constants, Location, Permissions,MapView } from 'expo';

class CreateDinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 38.03817,
      longitude: -78.489014,
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
      },
    );
  }
  handleSubmit() {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.address + '&key=' + 'AIzaSyBl9N_4Qo5m-IElGXKpz62Ah42YaUSSU2g')
      .then((response) => response.json())
      .then((responseJson) => {
       
        var addy = JSON.stringify(responseJson.results[0].geometry.location);
        console.log(addy)
        console.log(this.state.latitude)
        console.log(responseJson.results[0].geometry.location.lat)
        console.log(this.state.longitude)
        console.log(responseJson.results[0].geometry.location.lng)
        this.setState({
          latitude: responseJson.results[0].geometry.location.lat,
          longitude: responseJson.results[0].geometry.location.lng
        });
    })
  }
  change() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
    );
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
                  onChange={this.handleSubmit.bind(this)}
                  leftIcon={<Icon onPress={this.change.bind(this)} type='font-awesome' color='rgb(15,140,255)' name='map-marker' style={{margin: 30}}/>}
                  placeholder='  Enter Address'
                  value={this.state.location}
                />
    
              </View>
            </View>   
              <MapView
                style={{height: '60%', width: '100%', paddingTop: 10}}
                initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.0722,
                  longitudeDelta: 0.0321,
                }}
              />
          </View>
        </View>
      </View>

      
    );
  }
}

export default CreateDinner;