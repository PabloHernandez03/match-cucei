import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Declaracion de variables
        modalVentana: false,
        correo: "",
        password: "",
    };
  }
  render() {
    const ir_a_insc = () =>{
        this.props.navigation.navigate('Registro')
    }
    
    const cierraModal = () => {
        // this.setState({modalVentana:false});
        _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(xhttp.responseText === "3"){
                    Alert.alert("Cuenta no registrada");
                }else if(xhttp.responseText === "0"){
                    Alert.alert("Contraseña incorrecta")
                }else if(!xhttp.responseText){
                    _this.setState({modalVentana:false});
                    _this.props.navigation.navigate("Menu", {correo: _this.state.correo,password: _this.state.password});
                }
            }
        };
        xhttp.open("GET", "https://holandes-volador2-p.000webhostapp.com/verifica.php?correo="+_this.state.correo+"&password="+_this.state.password, true);
        xhttp.send();
        // this.setState({correo: ""});
        this.setState({password: ""});
    }

    const correo = () => {
        this.setState({modalVentana:true})
    }
    const correont = () => {
        this.setState({modalVentana:false})
        this.setState({correo: ""});
        this.setState({password: ""});
    }

    return (
        <View>
            <Image
            style={styles.imagen1}
            source = {require("./Imagenes/cucei.png")}
            />
            <View style={styles.inicio}>
                <Text style={styles.textoMatch}>Match CUCEI</Text>
                
                <TouchableOpacity style={styles.boton1} onPress={ir_a_insc}>
                    <View style={styles.btnmail}>
                        <Text style={styles.txtEmail}> Registrarse </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton2} onPress={correo}>
                    <View style={styles.btnfacebook}>
                        <Text style={styles.txtFacebook}> Iniciar sesión </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
            transparent = {true}
            visible={this.state.modalVentana}
            animationType="slide">

                <View style={styles.login}>

                    <Text style={styles.label}> Correo: </Text>
                    <TextInput value={this.state.correo} style={styles.input} onChangeText={(correo) => this.setState({correo: correo})}>
                    </TextInput>
                    
                    <Text style={styles.label}> Contraseña: </Text>
                    <TextInput value={this.state.password} style={styles.input} secureTextEntry={true} onChangeText={(password) => this.setState({password: password})}>
                    </TextInput>
                    
                    <TouchableOpacity style={styles.btnAceptar} onPress={cierraModal}>
                        <Text style={styles.textAceptar}>Ingresar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnX} onPress={correont}>
                        <Text style={styles.textAceptar}> X </Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
  }
}

//Declaración de estilos
const styles = StyleSheet.create({
    txtRegistrado:{
        fontSize: moderateScale(15),
        marginTop: verticalScale(5),
        textAlign: "center",
        color: "white",
    },
    
    txtEmail:{
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(10),
        textAlign: "center",
        color: "white",
    },

    txtFacebook:{
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(10),
        textAlign: "center",
        color: "black",
    },
    
    //Para presionar la pantalla
    boton1:{
        width: horizontalScale(295),
        height: verticalScale(55),
        marginLeft: horizontalScale(20),
        marginTop: horizontalScale(10),
    },

    boton2:{
        width: horizontalScale(295),
        height: verticalScale(55),
        marginLeft: horizontalScale(20),
        marginBottom: horizontalScale(20),
    },

    //La forma de los botones
    btnmail:{
        width: horizontalScale(295),
        height: verticalScale(55),
        borderColor: "#001f54",
        backgroundColor: "#001f54",
        borderWidth: 2,
        borderRadius: 60,
    },

    btnfacebook:{
        width: horizontalScale(295),
        height: verticalScale(55),
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 60,
    },

    btnAceptar:{
        marginTop: verticalScale(20),
        marginLeft: horizontalScale(20),
        width: horizontalScale(295),
        height: verticalScale(50),
        backgroundColor: "#3926b9",
        borderColor: "#271a81",
        borderWidth: 3,
        borderRadius: 60,
    },

    textAceptar:{
        marginTop: verticalScale(7),
        fontSize: moderateScale(20),
        color: "white",
        textAlign: 'center',
    },

    btnX:{
        marginTop: verticalScale(20),
        marginLeft: horizontalScale(140),
        width: horizontalScale(50),
        height: verticalScale(50),
        backgroundColor: "#97063d",
        borderRadius: 100,
    },

    textoMatch:{
        fontSize: moderateScale(40),
        marginLeft: horizontalScale(70),
        marginRight: horizontalScale(70),
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 6,
        color: "white",
    },

    imagen1:{
        width: horizontalScale(384),
        height: verticalScale(781),
        position: 'absolute'
    },

    inicio:{
        // width: 338,
        // height: 345,
        marginVertical: verticalScale(200),
        marginHorizontal: horizontalScale(20),
        gap: moderateScale(30),
        backgroundColor: 'rgba(52,77,117,0.5)',
        borderRadius: 50,
    },

    label:{
        marginTop: verticalScale(25),
        fontSize: moderateScale(20),
        marginLeft: horizontalScale(15),
        color: "white",
    },

    input:{
        marginLeft: horizontalScale(20),
        marginRight: horizontalScale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
        borderRadius: 5,
        height: verticalScale(40),
        fontSize: moderateScale(15),
        
        backgroundColor: "#1d3e75",
        borderBottomColor: "gray",
        borderBottomWidth: 1.5,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: "#b2bbcb"
    },

    login:{
        width: horizontalScale(338),
        height: verticalScale(345),
        marginTop: verticalScale(200),
        marginLeft: horizontalScale(22),
        backgroundColor: '#042966',
        borderRadius: 50,
    }
})