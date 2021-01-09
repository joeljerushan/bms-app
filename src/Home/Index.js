import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { View, SafeAreaView } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Button, Icon, TopNavigation, Divider } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const ShopIcon = (props) => (
  <Icon name='shopping-bag-outline' {...props} />
);


class HomeScreen extends Component {

  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <>
        <Text style={{ fontSize: 50, marginTop: 100}}>Home Screen</Text>
        <View style={{ padding: 35}}>
            <Button 
                onPress={() => this.props.navigation.navigate('Details') }
                accessoryLeft={ShopIcon} style={{ marginTop: 30, }}>
                Go to Product Page
            </Button>
        </View>
      </>
    )
  }

}

export default HomeScreen;
