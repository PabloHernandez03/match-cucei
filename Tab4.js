import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Tab4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }
    

    render() {
        const imagenes = ["https://i.pravatar.cc/300", "https://i.pravatar.cc/301", "https://i.pravatar.cc/302","https://i.pravatar.cc/303","https://i.pravatar.cc/304"]
        const preferencias = ["Anime","Rock Latino","Harry Potter","Minecraft"]
        const horario = [
            {
                "id": "0",
                "dia": "Lunes",
                "hora_inicio": "14:00",
                "hora_fin": "15:00",
            },
            {
                "id": "1",
                "dia": "Martes",
                "hora_inicio": "14:00",
                "hora_fin": "15:00",
            },
            {
                "id": "2",
                "dia": "Miercoles",
                "hora_inicio": "14:00",
                "hora_fin": "15:00",
            },
            {
                "id": "3",
                "dia": "Jueves",
                "hora_inicio": "14:00",
                "hora_fin": "15:00",
            }
        ]
        return (          
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{justifyContent: 'center',width:384}}>
                <Image
                    source={{uri: "https://i.pravatar.cc/300"}}
                    style={styles.ventanaPerfilImagen}
                    />
                    <View style={styles.ventanaPerfilinformacion}>
                        <Text style={styles.campo}>Nombre: <Text style={styles.campoText}>Pablo Alejandro</Text></Text>
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
                    <Text style={styles.titulo}>Horario</Text>
                    <View style={styles.horarioApp}>
                        {horario.map((item) => {
                            return (
                                <View style={styles.horarioItem}>
                                    <Text style={{color:"white", fontSize:10}}>{item.dia}: {item.hora_inicio}-{item.hora_fin}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
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
    ventanaPerfilImagen: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 1,
        marginHorizontal: 120,
        marginTop: 10,
        marginBottom: 10,
    },
    ventanaPerfilinformacion: {
        gap: 20,
        marginVertical: 20,
        marginHorizontal: 80,
    },
    campo: {
        color: '#3069be',
    },
    campoText: {
        color: 'black',
    },
    titulo: {
        fontSize: 15,
        color: 'black',
        // marginRight: 10,
        textAlign: 'center'
    },
    imagenes: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "#3069be",
    },
    app: {
        marginLeft: 30,
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
        backgroundColor: "#3069be",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 5,

      },
      horarioApp: {
        marginLeft: 30,
        marginHorizontal: "auto",
        width: 356,
        flexDirection: "row",
        flexWrap: "wrap"
      },
      horarioItem: {
        flex: 1,
        minWidth: 161,
        maxWidth: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    
        // my visual styles; not important for grid
        padding: 10,
        backgroundColor: "#3069be",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 5,

      }
  })