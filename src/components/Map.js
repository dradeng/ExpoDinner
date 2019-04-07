import {MapView} from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Map extends Component {

  render() {
    return (
    	<MapView
            style={{height: '60%', width: '100%', paddingTop: 10}}
            initialRegion={{
              latitude: 38.03817,
              longitude: -78.489014,
              latitudeDelta: 0.0722,
              longitudeDelta: 0.0321,
            }}
        /> 
    );
  }
}

export default Map;
