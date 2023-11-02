import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            modalVentana: false,
            Imagen: '',
            Nombre: '',
            Profesion: '',
            Telefono: '',
        };
    }
    

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

    render() {
        const imagenes = ["https://i.pravatar.cc/300", "https://i.pravatar.cc/301", "https://i.pravatar.cc/302","https://i.pravatar.cc/303","https://i.pravatar.cc/304"]
        const preferencias = ["Anime","Rock Latino","Harry Potter","Minecraft","Anime","Rock Latino","Harry Potter","Minecraft"]
        const consultarPerfil = (item) => {
            this.setState({modalVentana: true});
            this.setState({Imagen: item.Imagen});
            this.setState({Nombre: item.Nombre});
            this.setState({Profesion: item.Profesion});
            this.setState({Telefono: item.Telefono});
        }
        const botonX = ()=>{
            this.setState({modalVentana: false});
        }
        const botonMenu = ()=>{
            this.setState({modalVentana: true});
        }
        const Col = ({ numRows, children }) => {
            return  (
              <View style={styles[`${numRows}col`]}>{children}</View>
            )
        }
        const Row = ({ children }) => (
            <View style={styles.row}>{children}</View>
        )
        return (          
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                        <View>
                            <TouchableOpacity style={styles.perfil} onPress={()=>{consultarPerfil(item)}}>
                                <Image
                                source={{uri: item.Imagen}}
                                style={styles.imagen}
                                />
                                <View style={styles.informacion}>
                                    <Text style={{color: "black"}}> {item.Nombre} </Text>
                                    <Text style={{color: "black"}}> {item.Profesion} </Text>
                                    <Text style={{color: "black"}}> {item.Telefono} </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{marginTop: 2, marginBottom: 2, borderWidth: 1, borderColor: "gray", borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0,}}></View>
                            
                        </View>
                        
                        }
                        keyExtractor={item => item.id}
                    />
                    
                </View>
                <Modal
                transparent = {true}
                visible={this.state.modalVentana}
                animationType="slide">
                        <ScrollView style={styles.ventanaPerfil}>
                            <TouchableOpacity style={styles.btnX} onPress={botonX}>
                            <Icon
                                name={'close-outline'}
                                size={35}
                                color="#ec6b33"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMenu} onPress={botonMenu}>
                                <Icon
                                name={'reorder-three-outline'}
                                size={35}
                                color="#ec6b33"
                                />
                            </TouchableOpacity>
                            <Image
                            source={{uri: this.state.Imagen}}
                            style={styles.ventanaPerfilImagen}
                            />
                            <View style={styles.ventanaPerfilinformacion}>
                                <Text style={styles.campo}>Nombre: <Text style={styles.campoText}>{this.state.Nombre}</Text></Text>
                                <Text style={styles.campo}>Edad: <Text style={styles.campoText}>18</Text></Text>
                                <Text style={styles.campo}>Carrera: <Text style={styles.campoText}>Ingeniería Informática</Text></Text>
                            </View>
                            <FlatList
                            data={imagenes}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item}
                            renderItem={({item})=>{
                                return(
                                    <Image source={{uri: item}} style={styles.imagenes}/> 
                                );
                            }}
                            />
                            <Text style={styles.titulo}>Preferencias</Text>
                            <View style={styles.app}>
                                {preferencias.map((item) => {
                                    return (
                                        <View style={styles.item}>
                                            <Text style={{color:"white", fontSize:10}}>{item}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <TouchableOpacity style={styles.send}>
                                <Text style={styles.sendText}> Enviar solicitud </Text>
                            </TouchableOpacity>
                        </ScrollView>
                        
                </Modal>
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
      zIndex: 0,
    },
    perfil: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    informacion: {
        width: 270,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    imagen: {
        width: 80,
        height: 80,
        borderRadius: 100,
        // borderColor: 'black',
        borderWidth: 1,
    },
    ventanaPerfil: {
        position: 'absolute',
        width: 338,
        height: 680,
        marginTop: 50,
        marginLeft: 22,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ec6b33',
    },
    ventanaPerfilImagen: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 1,
        marginHorizontal: 100,
        marginTop: 10,
        marginBottom: 10,
    },
    ventanaPerfilinformacion: {
        gap: 20,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    campo: {
        color: '#ec6b33',
    },
    campoText: {
        color: 'black',
    },
    titulo: {
        fontSize: 15,
        color: 'black',
        marginHorizontal: 120
    },
    imagenes: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "#ec6b33",
    },
    btnX:{
        position: 'absolute',
        marginTop: 0,
        marginLeft: 295,
        width: 40,
        height: 40,
    },
    btnMenu:{
        position: 'absolute',
        marginTop: 0,
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    send:{
        width: 295,
        height: 55,
        borderColor: "#ec6b33",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 18,
        marginBottom: 10,
        marginTop: 10,
        // marginTop: 150
    },
    sendText: {
        marginHorizontal: 60,
        marginVertical: 8,
        fontSize: 20,
        color: "#ec6b33"
    },
    app: {
        marginLeft: 7,
        marginHorizontal: "auto",
        width: 399,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    // my visual styles; not important for grid
    padding: 10,
    backgroundColor: "#ec6b33",
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 5,

    }
  })