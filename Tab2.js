import React, { Component } from 'react';
import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Image, Modal,FlatList} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            modalVisible2:false,
        };
    }

    render() {
        const imagenes = ["https://i.pravatar.cc/300", "https://i.pravatar.cc/301", "https://i.pravatar.cc/302","https://i.pravatar.cc/303","https://i.pravatar.cc/304"]
        const preferencias = ["Anime","Rock Latino","Harry Potter","Minecraft","Anime","Rock Latino","Harry Potter","Minecraft"];
        const detallesRecibida = () =>{
            this.setState({modalVisible: true})
        }

        const cerrarDetallesRecibida = () =>{
            this.setState({modalVisible: false})
        }

        const detallesPendiente = () =>{
          this.setState({modalVisible2: true})
      }

      const cerrarDetallesPendiente = () =>{
          this.setState({modalVisible2: false})
      }

        return (
            <ScrollView style={styles.enviadas}>
                <View>
                    <Text style={styles.enviadasText}>Enviadas "Pendientes"</Text>
                    <View style={{borderColor:"black", borderWidth:1,borderColor:"#102A68",width:horizontalScale(330),marginLeft:horizontalScale(30),}}/>

                    <View style={styles.perfil}>
                        <TouchableOpacity style={styles.botonPerfil} onPress={detallesPendiente}>
                            <Image style={styles.perfilImage} source={{uri: "https://i.pravatar.cc/300"}}/>
                            <View style={{marginTop:verticalScale(-110),marginLeft:horizontalScale(120)}}>
                                <Text style={{color:"White",fontSize:moderateScale(20)}}>Dario Carrasco</Text>
                                <Text style={{color:"red"}}>Ingenieria Industrial</Text>
                                <Text style={{color:"White"}}>20 Años</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.recibidas}>
                    <Text style={styles.recibidasText}>Recibidas</Text>
                    <View style={{borderColor:"black", borderWidth:1,borderColor:"#CFA50C",width:horizontalScale(330),marginLeft:horizontalScale(30),}}/>

                    <View style={styles.perfil}>
                        <TouchableOpacity style={styles.botonPerfil} onPress={detallesRecibida}>
                            <Image style={styles.perfilImage} source={{uri: "https://i.pravatar.cc/301"}}/>
                            <View style={{marginTop:verticalScale(-110),marginLeft:horizontalScale(120)}}>
                                <Text style={{color:"White",fontSize:moderateScale(20)}}>Angelina Acebes</Text>
                                <Text style={{color:"red"}}>Ingenieria en Computacion</Text>
                                <Text style={{color:"White"}}>20 Años</Text>
                            </View>

                            <Modal
                                visible={this.state.modalVisible}
                                transparent={true}
                                animationType='slide'
                            >
                                <ScrollView style={styles.vistaPerfil}>
                                    <View style={{borderWidth:2, backgroundColor:"#102A68", width:horizontalScale(350),height:verticalScale(750),borderRadius:40,marginLeft:horizontalScale(20),marginTop:verticalScale(20)}}>
                                        <TouchableOpacity onPress={cerrarDetallesRecibida} style={styles.btnX}>
                                        <Icon
                                            name={'close-outline'}
                                            size={35}
                                            color="white"
                                            />
                                        </TouchableOpacity>
                                        <Image style={styles.perfilImageDetalles} source={{uri: "https://i.pravatar.cc/301"}}/>

                                        <View style={{alignItems:"center",}}>
                                            <Text style={{color:"White",fontSize:moderateScale(40)}}>Angelina Acebes</Text>
                                            <Text style={{color:"red"}}>Ingenieria en Computacion</Text>
                                            <Text style={{color:"White"}}>20 Años</Text>
                                        </View>

                                        <View style={{marginTop:verticalScale(50), width:horizontalScale(310), marginLeft:horizontalScale(18)}}>
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
                                        </View>

                                        <View style={{alignItems:"center",}}>
                                            <Text style={{color:"White",fontSize:moderateScale(30)}}>Preferencias</Text>
                                            <View style={styles.app}>
                                                {preferencias.map((item) => {
                                                    return (
                                                        <View style={styles.item}>
                                                            <Text style={{color:"white", fontSize:moderateScale(10)}}>{item}</Text>
                                                        </View>
                                                    );
                                                })}
                                            </View>
                                        </View>
                                        <View style={{marginTop:verticalScale(100)}}>
                                            <TouchableOpacity style={styles.aceptar}><Text style={{color:"White",fontSize:moderateScale(20)}}>Aceptar</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.rechazar}><Text style={{color:"White",fontSize:moderateScale(20)}}>Rechazar</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </ScrollView>

                            </Modal>

                            <Modal
                                visible={this.state.modalVisible2}
                                transparent={true}
                                animationType='slide'
                            >
                                <ScrollView style={styles.vistaPerfil}>
                                  <View style={{borderWidth:2, backgroundColor:"#102A68", width:horizontalScale(350),height:verticalScale(700),borderRadius:40,marginLeft:horizontalScale(20),marginTop:verticalScale(20)}}>
                                        <TouchableOpacity onPress={cerrarDetallesPendiente} style={styles.btnX}>
                                        <Icon
                                            name={'close-outline'}
                                            size={35}
                                            color="white"
                                            />
                                        </TouchableOpacity>
                                        <Image style={styles.perfilImageDetalles} source={{uri: "https://i.pravatar.cc/300"}}/>

                                        <View style={{alignItems:"center",}}>
                                            <Text style={{color:"White",fontSize:moderateScale(40)}}>Dario Carrasco</Text>
                                            <Text style={{color:"red"}}>Ingenieria Industrial</Text>
                                            <Text style={{color:"White"}}>20 Años</Text>y
                                        </View>

                                        <View style={{marginTop:verticalScale(50), width:horizontalScale(310), marginLeft:horizontalScale(18)}}>
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
                                        </View>

                                        <View style={{alignItems:"center",}}>
                                            <Text style={{color:"White",fontSize:moderateScale(30)}}>Preferencias</Text>
                                            <View style={styles.app}>
                                                {preferencias.map((item) => {
                                                    return (
                                                        <View style={styles.item}>
                                                            <Text style={{color:"white", fontSize:moderateScale(10)}}>{item}</Text>
                                                        </View>
                                                    );
                                                })}
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>

                            </Modal>

                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    imagenes:{
        width: horizontalScale(100),
        height: verticalScale(100),
        borderWidth: 1,
        borderColor: "#193565",
        marginRight:horizontalScale(5),

        borderRadius:20,
    },
    
    vistaPerfil:{
        
    },

    enviadas:{
        backgroundColor:"white",
    },

    enviadasText:{
        fontSize:moderateScale(25),
        marginLeft:horizontalScale(33),
        marginTop:verticalScale(20),
        color:"#102A68",
    },

    recibidas:{
    },

    recibidasText:{
      fontSize:moderateScale(25),
      marginLeft:horizontalScale(33),
      marginTop:verticalScale(20),
      color:"#CFA50C",
    },

    perfil:{
        backgroundColor:"#102A68",
        marginTop:verticalScale(10),
        marginLeft:horizontalScale(30),
        width:horizontalScale(330),
        height:verticalScale(130),
        borderRadius:20,
        
    },
    perfilImage:{
        width:horizontalScale(100),
        height:verticalScale(100), 
        margin:15,
        borderRadius:50,
    },

    perfilImageDetalles:{
        width:horizontalScale(150),
        height:verticalScale(150), 
        marginLeft:horizontalScale(95),
        borderRadius:110,
        borderColor:"black",
        borderWidth:2,
    },

    botonPerfil:{

    },

    app: {
      marginLeft: horizontalScale(80),
      marginHorizontal: "auto",
      width: horizontalScale(399),
      flexDirection: "row",
      flexWrap: "wrap"
    },
    item: {
    flex: 1,
    minWidth: horizontalScale(80),
    maxWidth: horizontalScale(80),
    height: verticalScale(50),
    justifyContent: "center",
    alignItems: "center",

    // my visual styles; not important for grid
    padding: 10,
    backgroundColor: "#324b76",
    borderWidth: 1.5,
    borderColor: "#193565",
    borderRadius: 5,

    },


    aceptar:{
        backgroundColor:"#32529D",
        alignItems:"center",
        width:horizontalScale(150),
        height:verticalScale(30),
        marginLeft:horizontalScale(15),
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
    },

    rechazar:{
        backgroundColor:"#BE1619",
        alignItems:"center",
        width:horizontalScale(150),
        height:verticalScale(30),
        marginTop:verticalScale(-30),
        marginLeft:horizontalScale(180),
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
    },
})
