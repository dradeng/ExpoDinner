import {MapView} from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Map extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      latitude: this.props.latitude,
	      longitude: this.props.longitude,
	      address: null,
	      location: null,
	      error: null,
	    };
  	}
  	componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState({latitude: nextProps.latitude});
        this.setState({longitude: nextProps.longitude});
        this.forceUpdate();

    }
    
    render() {
    	
	    return (
	    	<MapView
	            style={{height: '60%', width: '100%', paddingTop: 10}}
	            initialRegion={{
	              latitude: this.state.latitude,
	              longitude: this.state.longitude,
	              latitudeDelta: 0.0722,
	              longitudeDelta: 0.0321,
	            }}
	        /> 
	    );
	}
}

export default Map;
