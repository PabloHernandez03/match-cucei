import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';

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
    
    const clickFacebook = () => {
        console.log("Le diste click al boton de facebook")
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
                    _this.props.navigation.navigate("Menu", {nombre:xhttp.responseText});
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
            {/* <TouchableOpacity style={styles.boton3} onPress={correo}>
                    <View style={styles.btnAcceder}>
                        <Text style={styles.txtRegistrado}> Acceder </Text>
                    </View>
            </TouchableOpacity> */}

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
                        <Text style={styles.textAceptar}> Aceptar </Text>
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
        fontSize: 15,
        marginTop: 5,
        textAlign: "center",
        color: "white",
    },
    
    txtEmail:{
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
        color: "white",
    },

    txtFacebook:{
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
        color: "black",
    },
    
    //Para presionar la pantalla
    boton1:{
        width: 295,
        height: 55,
        marginLeft: 20,
        marginTop: 10,
    },

    boton2:{
        width: 295,
        height: 55,
        marginLeft: 20,
        marginTop: 20,
    },

    boton3:{
        width: 80,
        height: 30,
        marginLeft: 135,
        marginTop: 5,
    },

    //La forma de los botones
    btnmail:{
        width: 295,
        height: 55,
        borderColor: "#001f54",
        backgroundColor: "#001f54",
        borderWidth: 2,
        borderRadius: 60,
    },

    btnfacebook:{
        width: 295,
        height: 55,
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 60,
    },

    btnAceptar:{
        marginTop: 20,
        marginLeft: 20,
        width: 295,
        height: 50,
        backgroundColor: "#2b67be",
        borderRadius: 60,
    },

    textAceptar:{
        marginTop: 8,
        fontSize: 20,
        color: "white",
        textAlign: 'center',
    },

    btnX:{
        marginTop: 20,
        marginLeft: 140,
        width: 50,
        height: 50,
        backgroundColor: "#ec6b33",
        borderRadius: 100,
    },

    textoMatch:{
        fontSize: 40,
        marginLeft: 70,
        marginRight: 70,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 6,
        color: "white",
    },

    imagen1:{
        width: 385,
        height: 800,
        position: 'absolute'
    },

    inicio:{
        width: 338,
        height: 345,
        marginTop: 200,
        marginLeft: 22,
        gap: 30,
        backgroundColor: 'rgba(52,77,117,0.5)',
        borderRadius: 50,
    },

    label:{
        marginTop: 25,
        fontSize: 20,
        marginLeft: 15,
        color: "white",
    },

    input:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 5,
        color: "black",
        height: 40,
        fontSize: 15,
    },

    login:{
        width: 338,
        height: 345,
        marginTop: 200,
        marginLeft: 22,
        backgroundColor: '#042966',
        borderRadius: 50,
    }
})