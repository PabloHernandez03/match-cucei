import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Alert, StyleSheet } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        correo: "",
        password: "",
        apellido: "",
    };
  }

  render() {
    const seguir_registro = () => {
        //Asigna un nuevo valor
        this.props.navigation.navigate('Continuar registro')
    }

    return (
      <View style={{backgroundColor: "yellow", width: 360, height: 900}}>
        <Text style={{fontSize: 55, textAlign: "center", marginTop: 30, marginBottom: 30, color: "black", fontWeight: "bold"}}> Match CUCEI </Text>

        <Text style={styles.requisito}> Escribe tu nombre: </Text>
        <TextInput value={this.state.nombre} style={styles.barra} onChangeText={(nombre) => this.setState({nombre: nombre})} />
        <Text style={styles.requisito}> Escribe tus apellidos: </Text>
        <TextInput value={this.state.apellido} style={styles.barra} onChangeText={(apellido) => this.setState({apellido: apellido})} />
        <Text style={styles.requisito}> Escribe tu correo institucional: </Text>
        <TextInput value={this.state.correo} style={styles.barra} onChangeText={(correo) => this.setState({correo: correo})} />
        <Text style={styles.requisito}> Escribe tu contraseña: </Text>
        <TextInput value={this.state.password} style={styles.barra} onChangeText={(password) => this.setState({password: password})} />
        <TouchableOpacity style={{
            borderWidth: 2,
            width: 180,
            height: 50,
            backgroundColor: "blue",
            borderColor: "blue",
            fontWeight: "bold",
            borderRadius: 40,
            marginLeft: 90,
            marginTop: 30,
        }} onPress={seguir_registro}>
            <Text style={{
                fontSize: 25,
                textAlign: "center",
                marginTop: 5,
                color: "black",
            }}> Continuar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    requisito:{
        //width: 20,
        color: "black",
        fontSize: 20,
    },

    barra:{
        backgroundColor: "white",
        width: 270,
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
    }
})