import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Dimensions, StyleSheet, Animated, Easing } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import translate from '../../utils/language.utils';

class Splash extends Component {
  constructor(props) {
    super(props)

    this.imageTop1 = new Animated.Value(0);
    this.imageLeft1 = new Animated.Value(0);

    this.imageTop2 = new Animated.Value(0);
    this.imageLeft2 = new Animated.Value(0);

    this.imageTop3 = new Animated.Value(0);
    this.imageLeft3 = new Animated.Value(0);

    this.state = {
      fadeAmin1: new Animated.Value(0),
      fadeAmin2: new Animated.Value(1),
      fadeAmin3: new Animated.Value(0),
      stager: 600,
      screenWidth: Dimensions.get("screen").width,
      screenHeight: Dimensions.get("screen").height,
    };
  }
  componentDidMount() {

    var user = firebase.auth().currentUser;

    if (user) {
        
      Actions.home();
    } else {
   
      
      // No user is signed in.
    }

    this.animate();
    Animated.loop(
      Animated.stagger(600, [
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 1,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin1,
            {
              toValue: 0,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 0,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin2,
            {
              toValue: 1,
              duration: 1000,
            }
          )
        ]),
        Animated.sequence([
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 1,
              duration: 1000,
            }
          ),
          Animated.timing(
            this.state.fadeAmin3,
            {
              toValue: 0,
              duration: 1000,
            }
          )
        ])
      ]),
    {iterations: -1}
    ).start()
  }
  animate () {

    this.imageTop1.setValue(0)
    this.imageLeft1.setValue(0)
    this.imageTop2.setValue(1)
    this.imageLeft2.setValue(1)
    this.imageTop3.setValue(1)
    this.imageLeft3.setValue(0)


    Animated.parallel([
      Animated.timing(
        this.imageTop1,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.imageLeft1,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.imageTop2,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,

        }
      ),
      Animated.timing(
        this.imageLeft2,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,

        }
      ),
      Animated.timing(
        this.imageTop3,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,

        }
      ),
      Animated.timing(
        this.imageLeft3,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,

        }
      ),
    ]).start(() => this.animate())
  }
  highlight() {
    Actions.login();
  }
  onLayout(e) {
      this.setState({screenWidth: Dimensions.get("screen").width});
      this.setState({screenHeight: Dimensions.get("screen").height});
  }
  render() {

    let { fadeAmin1, fadeAmin2, fadeAmin3 } = this.state;


    /*const top1 = this.imageTop1.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 500]
    });
    const left1 = this.imageLeft1.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 300]
    });
    const top2 = this.imageTop2.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 200]
    });
    const left2 = this.imageLeft2.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 150]
    });

    const top3 = this.imageTop3.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 190]
    });
    const left3 = this.imageLeft3.interpolate({
      inputRange: [0, 1],
      outputRange: [225, 300]
    });*/

    const top1 = this.imageTop1.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.screenHeight/3, this.state.screenHeight/2]
    });
    const left1 = this.imageLeft1.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.screenWidth/1.8, this.state.screenWidth/1.2]
    });
    const top2 = this.imageTop2.interpolate({
      inputRange: [0, 1],
      outputRange: [50, this.state.screenHeight/4]
    });
    const left2 = this.imageLeft2.interpolate({
      inputRange: [0, 1],
      outputRange: [50, this.state.screenWidth/4]
    });

    const top3 = this.imageTop3.interpolate({
      inputRange: [0, 1],
      outputRange: [50, this.state.screenHeight/3.9]
    });
    const left3 = this.imageLeft3.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.screenWidth/1.8, this.state.screenWidth/1.2]
    });

    return (
      <View style={{flex: 1, backgroundColor: '#fff', height: '100%', justifyContent: 'center',alignItems: 'center'}}>
        <Animated.Image
          style={{opacity: fadeAmin1, position: 'absolute', top: top1, left: left1 }}
          source={require('../assets/1.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin2, position: 'absolute', top: top2, left: left2 }}
          source={require('../assets/2.png')}
        />
        <Animated.Image
          style={{opacity: fadeAmin3, position: 'absolute', top: top3, left: left3 }}
          source={require('../assets/3.png')}
        />
        <View onLayout={this.onLayout.bind(this)} style={{width: 258.11, height: 258.11, borderColor: 'rgba(57, 186, 255, .1)', borderWidth: 1, borderRadius: 124.055, justifyContent: 'center',alignItems: 'center'}}>
          <View style={{width: 195.2, height: 195.2, backgroundColor: 'rgba(57, 186, 255, .05)', borderRadius: 97.6, justifyContent: 'center',alignItems: 'center', borderColor: 'rgba(26,199,255,.15)'}}>
            <View style={{width: 131.4, height: 131.4, backgroundColor: 'rgba(57, 186, 255, .1)', borderRadius: 65.7, justifyContent: 'center',alignItems: 'center'}}>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('../assets/house_trans.png')} />
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight
          onPress={this.highlight.bind(this)}
          underlayColor={'rgb(100,184,248)'}
          style={{backgroundColor: 'rgb(15,140,255)',position: 'absolute', bottom:0, width: '100%' }}>
          <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>{translate('GET_STARTED')}</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default Splash;
