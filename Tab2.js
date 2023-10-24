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
    const video = [
      {
        link: 'https://www.youtube.com/watch?v=o86FNwTH3BI',
      },
      {
        link: 'https://www.youtube.com/watch?v=n2pg5vGC3vI',
      },
      {
        link: 'https://www.youtube.com/watch?v=JzGHzaZC56k',
      },
    ]

    return (
      //flex hace que puedas incluir texto y más videos dentro de View
      //<View style={{flex: 1}}>
      //  <Text style={{color:"black"}}> Reproucción de videos </Text>
      //</View>
      <View style={styles.fondo}>
        <FlatList
          data= {video}
          horizontal={true}
          //keyExtractor={(item) => item.link}
          //Solo funciona cuando la lista es vertical :°
          //ListHeaderComponent={() => <Text style={{fontWeight: 'bold', fontSize: 10, color: 'green',}}> Lista de reproducción de YouTube </Text>}
          renderItem={({item}) =>
              <WebView
              style={styles.caja}
              source={{uri: item.link}}
              allowsFullscreenVideo={true}
              />
          }
        />
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
