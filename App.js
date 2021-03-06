import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Button, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppRouter from './src/Router'


class App extends Component {

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
  }

  render(){
    return(
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppRouter />
        </ApplicationProvider>
      </>
    )
  }

}

export default App;
