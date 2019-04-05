import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Splash from './components/Splash';
import CreateDinner from './components/CreateDinner';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Please login" />
        <Scene key="signup" component={SignUp} title="Signup"/>
        <Scene key="splash" component={Splash} title="Splash" initial/>
        <Scene key="home" component={Home} title="Home" />
        <Scene key="createDinner" component={CreateDinner} title="Add Event" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
