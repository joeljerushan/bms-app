import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

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
        <ScrollView>
          <Text style={styles.HeadingText}>Hello ICBT!</Text>
          <Text style={styles.normalText}>iOs Development</Text>
        </ScrollView>
      </>
    )
  }

}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 50, marginTop: 70, paddingHorizontal: 20,
  },
  normalText: {
    paddingHorizontal: 20, 
    fontSize: 20
  }
});

export default App;
