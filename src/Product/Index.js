import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { View } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


class ProductScreen extends Component {

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
        <Text style={{ fontSize: 50, marginTop: 100}}>Product Screen</Text>
      </>
    )
  }

}

export default ProductScreen;
