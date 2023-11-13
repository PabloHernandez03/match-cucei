import React, { Component } from 'react';
import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Image, Modal,FlatList} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Tab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
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

        return (
            <ScrollView style={styles.enviadas}>
                <View style={styles.recibidas}>
                    <View style={styles.perfil}>
                        <TouchableOpacity style={styles.botonPerfil} onPress={detallesRecibida}>
                            <Image style={styles.perfilImage} source={require("./Imagenes/cucei.png")}/>
                            <View style={{marginTop:verticalScale(-120),marginLeft:horizontalScale(120)}}>
                                <Text style={{color:"White",fontSize:moderateScale(25)}}>Jardin de Rectoria</Text>
                                <Text style={{color:"red"}}>Lunes 04 de Diciembre</Text>
                                <Text style={{color:"White"}}>14:00</Text>
                            </View>

                            <Modal
                                visible={this.state.modalVisible}
                                transparent={true}
                                animationType='slide'
                            >
                                <ScrollView style={styles.vistaPerfil}>
                                
                                    <View style={{borderWidth:2,backgroundColor:"#102A68", width:horizontalScale(350),height:verticalScale(750),borderRadius:40,marginLeft:horizontalScale(20),marginTop:verticalScale(20), position:"relative"}}>
                                        <Image style={styles.imagenCita} source={require("./Imagenes/cucei.png")}/>
                                        <TouchableOpacity onPress={cerrarDetallesRecibida} style={styles.btnX}>
                                        <Icon
                                            name={'close-outline'}
                                            size={35}
                                            color="white"
                                            />
                                        </TouchableOpacity>
                                        <Image style={styles.perfilImageDetalles} source={{uri: "https://i.pravatar.cc/300"}}/>
                                        
                                        <View style={{alignItems:"center",}}>
                                            
                                            <Text style={{color:"White",fontSize:moderateScale(40)}}>Jardin de Rectoria</Text>
                                            <Text style={{color:"White"}}>-Enfrente de la Biblioteca-</Text>
                                        </View>

                                        <View style={{marginTop:verticalScale(50), width:horizontalScale(310), marginLeft:horizontalScale(18), alignItems:"center"}}>
                                            <Text style={{color:"White",fontSize:moderateScale(25)}}>Angela Acebes | INCO</Text>
                                            <Text style={{color:"red"}}>Lunes 04 de Diciembre</Text>
                                            <View style={{borderColor:"black", borderWidth:1,borderColor:"red",width:horizontalScale(250)}}/>
                                            <Text style={{color:"White",fontSize:moderateScale(20)}}>Actividades</Text>
                                        </View>

                                        <View>
                                            
                                            <View style={styles.app}>
                                                <View style={{backgroundColor:"#2764d6", width:horizontalScale(100), height:verticalScale(35), alignItems:"center"}}>
                                                    <Text style={{fontSize:moderateScale(25)}}>Platicar</Text>
                                                </View>
                                                <View style={{backgroundColor:"#2764d6", width:horizontalScale(100), height:verticalScale(35), alignItems:"center", marginTop:verticalScale(-35),marginLeft:horizontalScale(110),}}>
                                                    <Text style={{fontSize:moderateScale(25)}}>Comer</Text>
                                                </View>
                                                <View style={{backgroundColor:"#2764d6", width:horizontalScale(100), height:verticalScale(35), alignItems:"center",marginTop:verticalScale(-35),marginLeft:horizontalScale(220),}}>
                                                    <Text style={{fontSize:moderateScale(25)}}>Relajarse</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{marginTop:verticalScale(100),alignItems:"center"}}>
                                            <TouchableOpacity style={styles.rechazar}><Text style={{color:"White",fontSize:moderateScale(20),marginTop:verticalScale(5)}}>Cancelar</Text></TouchableOpacity>
                                            <Text style={{fontSize:moderateScale(15)}}>Nota:No podras cancelar faltando 24 Hrs.</Text>
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
    app:{
        marginLeft:horizontalScale(10),
        marginTop:verticalScale(20)
    },

    imagenes:{
        width: horizontalScale(100),
        height: verticalScale(100),
        borderWidth: 1,
        borderColor: "#193565",
        marginRight:horizontalScale(5),

        borderRadius:20,
    },

    imagenCita:{
        width:horizontalScale(350),
        height:verticalScale(200),
        borderRadius:40,
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
        marginTop:verticalScale(30),
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
        marginTop:verticalScale(20),
        borderRadius:110,
        borderColor:"black",
        borderWidth:2,
        position:"absolute",
        zIndex:1,
    },

    botonPerfil:{

    },

    /*item: {
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
    
        }
*/

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
        width:horizontalScale(250),
        height:verticalScale(40),
        marginTop:verticalScale(-30),
        borderRadius:20,
        borderColor:"black",
        borderWidth:1,
    },
})
