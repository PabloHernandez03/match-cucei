import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVentana:false,
        modalVentanaF:false,
        nombre: "",
        correo: "",
        password: "",
    };
  }

  render() {
    const correo = () => {
        //Asigna un nuevo valor
        this.setState({modalVentana:true})
    }

    const cierraModal = () => {
        this.setState({modalVentana:false})
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                if(xhttp.responseText === "1"){
                    Alert.alert("Registro insertado");
                }else{
                    Alert.alert("Error");
                }
            }
        };
        xhttp.open("GET", "https://holandes-volador2-p.000webhostapp.com/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }
    
    const facebook = () => {
        this.setState({modalVentanaF:true})
    }

    const cierraModalF = () => {
        this.setState({modalVentanaF:false})
    }

    return (
      <View>
        <Text style={{
            fontSize: 50,
            textAlign: "center",
            marginTop: 50,
        }}> Registro </Text>

        <TouchableOpacity style={{
            borderWidth: 2,
            width: 250,
            height: 50,
            backgroundColor: "blue",
            borderColor: "blue",
            borderRadius: 40,
            marginLeft: 70,
            marginTop: 30,
        }} onPress={correo}>
            <Text style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 10,
                color: "black",
            }}> Inscribirse por Correo </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            width: 250,
            height: 50,
            backgroundColor: "white",
            borderColor: "black",
            borderRadius: 40,
            marginLeft: 70,
            marginTop: 30,
        }} onPress={facebook}>
            <Text style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 10,
                color: "black",
            }}> Inscribirse por Facebook </Text>
        </TouchableOpacity>

        <Modal
        transparent = {true}
        visible={this.state.modalVentana}
        animationType="slide">

            <View style={{
                borderWidth: 2,
                width: 300,
                height: 330,
                marginLeft: 40,
                marginTop: 300,
                backgroundColor: "blue",
                borderColor: "blue",
                borderRadius: 40,
            }}>

                <Text style={{
                    fontSize: 25,
                    marginLeft: 20,
                    marginTop: 5,
                }}> Nombre: </Text>
                <TextInput onChangeText={(nombre) => this.setState({nombre})}>
                </TextInput>

                <Text style={{
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
                        borderWidth: 2,
                        width: 200,
                        height: 45,
                        marginLeft: 50,
                        borderRadius: 40,
                        fontSize: 20,
                    }} onPress={cierraModal}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                    }}> Aceptar </Text>
                </TouchableOpacity>
            </View>
        </Modal>
 
        <Modal transparent = {true}
        visible={this.state.modalVentanaF}
        animationType="slide">
            <View style={{
                borderWidth: 2,
                width: 300,
                height: 250,
                marginLeft: 40,
                marginTop: 300,
                backgroundColor: "white",
                borderColor: "white",
                borderRadius: 40,
            }}>
                <Text style={{
                    fontSize: 25,
                    marginLeft: 20,
                    marginTop: 5,
                }}> Correo: </Text>
                <TextInput></TextInput>

                <Text style={{
                    fontSize: 25,
                    marginLeft: 20,
                    marginTop: 5,
                }}> Contraseña: </Text>
                <TextInput></TextInput>

                <TouchableOpacity style={{
                    borderWidth: 2,
                    width: 200,
                    height: 45,
                    marginLeft: 50,
                    borderRadius: 40,
                    fontSize: 20,
                }} onPress={cierraModalF}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "black",
                    }}> Aceptar </Text>
                </TouchableOpacity>
            </View>
        </Modal>
        
      </View>
    );
  }
}
