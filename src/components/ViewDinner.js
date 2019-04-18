import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import InvitationDetailsCard from './InvitationDetailsCard';

class ViewDinner extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <InvitationDetailsCard />
                </CardSection>
            </Card>
        );
    }
}





export default ViewDinner