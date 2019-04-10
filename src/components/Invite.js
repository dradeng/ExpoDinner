import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Contact from './Contact';
class Invite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      selected1: false,
      selected2: false,
      selected3: false,
    };
  }
  onPress = () => {
    console.log('preintggg')
  }
  render() {
    var count = 0;
    console.log(this.props.navigation.state.params.location)
    console.log(this.props.navigation.state.params.time)
    if(this.state.selected1) {
      count = count + 1;
    }
    if(this.state.selected2) {
      count = count + 1;
    }
    if(this.state.selected3) {
      count = count + 1;
    }
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/coffee.png')}
          />
          <Text style={{color: 'black', width: '100%', textAlign: 'center', fontSize: 18}}>{this.props.navigation.state.params.location}</Text>
          <Text style={{color: 'grey', width: '100%', textAlign: 'center'}}> Thurs 11 April - {this.props.navigation.state.params.time}</Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row', paddingTop: 20}}>
          <Text style={{color: 'grey', textAlign: 'left', width: '50%'}}>Who do you want to invite?</Text>
          <Text style={{color: 'rgba(106, 207, 103, .9)', textAlign:'right', width: '50%'}}>{count} Selected</Text>
        </View>
        
        <View style={{flex: 1, flexDirection: 'column'}}>
          
          <TouchableOpacity onPress={() => this.setState({selected1: !this.state.selected1})}> 
            <Contact 
              clicked={this.state.selected1}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({selected2: !this.state.selected2})}> 
            <Contact 
              clicked={this.state.selected2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({selected3: !this.state.selected3})}> 
            <Contact 
              clicked={this.state.selected3}
            />
          </TouchableOpacity>
          
        </View>
        

          
        <TouchableHighlight
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>Send Invitations</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Invite;
