/** @format */

import {AppRegistry,StyleSheet,Text ,View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
// import {StackNavigator} from 'react-navigation';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => Login);