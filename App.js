/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from 'AwesomeProject/src/screens/Home';
import ProfileScreen from 'AwesomeProject/src/screens/Profile';
import JsExampleScreen from 'AwesomeProject/src/screens/JsExample';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      header: null
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null
    }
  },
  JsExample: {
    screen: JsExampleScreen,
    navigationOptions: {
      title: 'Js Example',
      header: null
    }
  }
},{
  initialRouteName: 'JsExample'
});

const App = createAppContainer(MainNavigator);


export default App;
