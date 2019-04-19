import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationDetailsCard from './InvitationDetailsCard';
import MapViewInvite from './MapViewInvite';

class ViewDinner extends Component{
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

    render(){
        return(
            <Card>
                <CardSection>
                    <InvitationDetailsCard />
                </CardSection>
                <MapViewInvite 
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                />
            </Card>

        );
    }
}





export default ViewDinner