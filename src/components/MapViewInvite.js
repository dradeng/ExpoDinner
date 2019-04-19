import {MapView} from 'expo';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MapViewInvite extends Component {
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
                
                showsUserLocation={true}>

                

                <MapView.Marker
                    coordinate ={{latitude: 38.031953,
                        longitude: -78.510857}}
                    title={"Destination: Rice Hall"}
                    description={"85 Engineer's Way"}
                />
                {/*<MapView.Marker
                    coordinate = {{latitude: this.latitude,
                        longitude: this.longitude}}
                    title={"Your current location"}
                    />*/}
            </MapView>
	    );
	}
}

export default MapViewInvite;