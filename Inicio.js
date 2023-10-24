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
        this.props.navigation.navigate('Inscripcion')
    }
    
    const clickFacebook = () => {
        console.log("Le diste click al boton de facebook")
    }

    const cierraModal = () => {
        this.props.navigation.navigate("Menu", {nombre:"Mario Pascual"});
        this.setState({modalVentana:false});
        _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
            }
            if(xhttp.responseText === "3"){
                Alert.alert("Correo desconocido, Registrate");
            }else{
                if(xhttp.responseText === "0"){
                    Alert.alert("Password malo, instenta de nuevo");
                }else{
                    _this.props.navigation.navigate("Menu", {nombre:xhttp.responseText});
                    _this.setState({modalVentana:false});
                }
            }
        };
        xhttp.open("GET", "https://holandes-volador2-p.000webhostapp.com/verifica.php?correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }

    const correo = () => {
        this.setState({modalVentana:true})
    }

    return (
        <View style={styles.fondo}>
            <TouchableOpacity style={styles.boton3} onPress={correo}>
                    <View style={styles.btnAcceder}>
                        <Text style={styles.txtRegistrado}> Acceder </Text>
                    </View>
            </TouchableOpacity>

            <Image
            style={styles.imagen1}
            source = {require("./Imagenes/Constructor.jpg")}
            />

            <View style={styles.login}>
                <Text style={styles.textohandyman}> Welcome to Handyman </Text>
                
                <TouchableOpacity style={styles.boton1} onPress={ir_a_insc}>
                    <View style={styles.btnmail}>
                        <Text style={styles.txtEmail}> Sign in with Email </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton2} onPress={clickFacebook}>
                    <View style={styles.btnfacebook}>
                        <Text style={styles.txtFacebook}> Sign in Facebook </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
            transparent = {true}
            visible={this.state.modalVentana}
            animationType="slide">

                <View style={{
                    borderWidth: 2,
                    width: 300,
                    height: 250,
                    marginLeft: 40,
                    marginTop: 280,
                    backgroundColor: "#83c5be",
                    borderColor: "#83c5be",
                    borderRadius: 40,
                }}>

                    <Text style={{
                        marginTop: 8,
                        fontSize: 25,
                        marginLeft: 20,
                    }}> Correo: </Text>
                    <TextInput onChangeText={(correo) => this.setState({correo})}>
                    </TextInput>
                    
                    <Text style={{
                        fontSize: 25,
                        marginLeft: 20,
                    }}> Password: </Text>
                    <TextInput onChangeText={(password) => this.setState({password})}>
                    </TextInput>
                    
                    <TouchableOpacity style={{
                            width: 200,
                            height: 45,
                            marginLeft: 50,
                            borderRadius: 40,
                            backgroundColor: "#006d77",
                            borderColor: "#006d77",
                            borderRadius: 40,
                        }} onPress={cierraModal}>
                        <Text style={{
                            marginTop: 10,
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                        }}> Aceptar </Text>
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

    btnAcceder:{
        width: 80,
        height: 30,
        borderColor: "#006d77",
        backgroundColor: "#006d77",
        marginLeft: 135,
    },

    textohandyman:{
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

    fondo:{
        with: 400, //Ancho
        height: 900, //Largo
        backgroundColor: "white",
    },

    imagen1:{
        width: 350,
        height: 490, 
        marginTop: 10,
    },

    login:{
        width: 338,
        height: 230,
        borderWidth: 2,
        marginLeft: 10,
        borderColor: "#fb8500",
        backgroundColor: "#fb8500",
        borderRadius: 30,
    }
})