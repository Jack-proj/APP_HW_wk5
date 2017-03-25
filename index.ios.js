
import React from 'react';
import {
  AppRegistry,
} 
from 'react-native';
import Page from './page1';
//import Page from './page2';
//import Page from './page3';

//Create a Component

const wk5 = () => (
  <Page />
);

//render
AppRegistry.registerComponent('thistest', () => wk5);


