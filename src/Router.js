import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { View } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home/Index'
import ProductScreen from './Product/Index'


const { Navigator, Screen } = createStackNavigator();

const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);


const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={ProductScreen}/>
  </Navigator>
);


class AppRouter extends Component {

  constructor(){
    super()
    this.state = {
        authenticated: false,
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </>
    )
  }

}

export default AppRouter;
