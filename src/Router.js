import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Splash from './components/Splash';
import CreateDinner from './components/CreateDinner';
import Invite from './components/Invite';
import EventDetails from './components/EventDetails';
import ViewDinner from './components/ViewDinner';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Please login" />
        <Scene key="signup" component={SignUp} title="Signup"/>
        <Scene key="splash" component={Splash} title="Splash" initial/>
        <Scene key="home" component={Home} title="Home" />
        <Scene key="createDinner" component={CreateDinner} title="Add Event" />
        <Scene key="invite" component={Invite} title="Invite" />
        <Scene key="eventDetails" component={EventDetails} title="Event Details" />
        <Scene key="viewDinner" component={ViewDinner} title = "Invitation Details" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
