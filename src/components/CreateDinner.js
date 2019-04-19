import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { TimePicker, DatePicker } from 'react-native-wheel-picker-android';
import Geocoder from 'react-native-geocoding';
import { Button, Card, CardSection, Spinner } from './common';
import { Input } from 'react-native-elements';
import Map from './Map';
import { Constants, Location, Permissions } from 'expo';

class CreateDinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 38.03817,
      longitude: -78.489014,
      address: null,
      selectedItem: null,
      location: "320 14th St NW",
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
  onItemSelected = selectedItem => {
    console.log('SELECTING');
    var s = selectedItem.toLocaleTimeString();
    this.setState({ selectedItem: s });
  }
  highlight() {
    this.props.navigation.navigate('invite', {time: this.state.selectedItem, location: this.state.location});

  }
  handleSubmit(location) {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.location + '&key=' + 'AIzaSyBl9N_4Qo5m-IElGXKpz62Ah42YaUSSU2g')
      .then((response) => response.json())
      .then((responseJson) => {
       
        var addy = JSON.stringify(responseJson.results[0].geometry.location);
        
        
        console.log(responseJson.results[0].geometry.location.lat)
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
            <TimePicker
              selectedItem={this.state.selectedItem}
              onTimeSelected={this.onItemSelected}
            />
            <Text style={{color: 'grey', width: '100%', textAlign: 'center', paddingTop: 50}}>
              Choose a location
              
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{width: '80%'}}>
              
                <Input
                  onChange={(location) => this.setState({location: location.nativeEvent.text})}
                  onSubmitEditing={this.handleSubmit.bind(this)}
                  leftIcon={<Icon onPress={this.change.bind(this)} type='font-awesome' color='rgb(15,140,255)' name='map-marker' style={{margin: 30}}/>}
                  placeholder='  Enter Address'
                  value={this.state.location}
                />
    
              </View>
            </View>   
            <Map 
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            />
            <TouchableHighlight
              onPress={this.highlight.bind(this)}
              underlayColor={'rgb(100,184,248)'}
              style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
              <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Invite People</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default CreateDinner;