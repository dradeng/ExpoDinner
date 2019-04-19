import {MapView} from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Map extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
		     	latitude: this.props.latitude,
	      		longitude: this.props.longitude,
		    	latitudeDelta: 0.0922,
		     	longitudeDelta: 0.0421,
		     	region: null,
	    };
  	}
  	componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState({latitude: nextProps.latitude});
        this.setState({longitude: nextProps.longitude});

    }
    render() {
    	
	    return (
	    	<MapView
	            style={{height: '80%', width: '100%', paddingTop: 10}}
	           
	            region={{
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
