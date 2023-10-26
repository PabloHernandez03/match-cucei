import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      
      <View style={styles.fondo}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  caja:{
    width: 320,
    height: 350,
    marginLeft: 5,
  },

  fondo:{
    width: 350,
    height: 228,
    marginTop: 50,
  },
})
