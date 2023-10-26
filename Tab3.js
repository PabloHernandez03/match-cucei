import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Tab3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dataSource: [],
        };
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount(){
        var xhttp = new XMLHttpRequest();
        _this=this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                var Temporal = JSON.parse(xhttp.responseText);
                _this.setState({dataSource:Temporal})
            }
        };
        xhttp.open("GET", "https://cuceimobile.space/datos.json", true);
        xhttp.send();
    }
    
    drawerContent = () => {
    return (
        <View style={styles.animatedBox}>
            <TouchableOpacity onPress={this.toggleOpen}>
                <Text> Cerrar pestaña </Text>
            </TouchableOpacity>
        </View>
        );
    };

    render() {
        return (          
            <View style={styles.container}>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      zIndex: 0,
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "#38C8EC",
      padding: 10,
    },
    body: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      marginLeft: 300,
    },
    tabla: {
        backgroundColor: "gray",
        with: 40,
        height: 50,
    }
  })