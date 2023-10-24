import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Tab1 extends Component {
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
            <Text style={{color:"black", marginTop: 40,}}>  Bienvenido: {this.props.route.params.nombre} </Text>
            <TouchableOpacity onPress={this.toggleOpen}>
                <Text> Cerrar pestaña </Text>
            </TouchableOpacity>
        </View>
        );
    };

    render() {
        return (          
            <View style={styles.container}>
                <MenuDrawer
                open={this.state.open}
                position={'left'}
                drawerContent={this.drawerContent()}
                drawerPercentage={45}
                animationTime={250}
                overlay={true}
                opacity={0.4}
                >
                    <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                        <Image
                        source={require("./Imagenes/icono-menu.png")}
                        style={{width: 50, height: 50,}}
                        />
                    </TouchableOpacity>
                </MenuDrawer>
                
                <View>
                    <Text style={{color:"blue", fontSize: 30}}> Trabajadores </Text>
                    <FlatList
                        style={{marginTop: 10,}}
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                        <View style={{width: 500, height:180}}>
                            <Text style={{color: "black"}}> {item.Nombre} </Text>
                            <Text style={{color: "black"}}> {item.Profesion} </Text>
                            <Text style={{color: "black"}}> {item.Telefono} </Text>
                            <Image
                            source={{uri:item.Imagen}}
                            style={{width: 100, height: 100}}
                            />
                            <View style={{
                                width: 360,
                                height: 6,
                                backgroundColor: "gray",
                                marginTop: 10,
                            }}></View>
                        </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
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