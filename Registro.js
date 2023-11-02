import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Button, TextInput, Alert, StyleSheet, ScrollView } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        correo: "",
        password: "",
        apellido: "",
        gustos: {"Música":false,"Videojuegos":false,
                "Lectura":false,"Series de TV":false,"Deportes":false,
                "Manualidades":false,"Arte":false,"Redes sociales":false,
                "Fotografía":false,"Historietas":false,"Cocinar":false,
                "Bailar":false,"Puzzles":false,"Anime":false},
    };
  }

  render() {
    const enviarRegistro = () => {
        var xhttp = new XMLHttpRequest();
        //Luego entra a esta función
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //Para sacar lo que dice la web "xhttp.responseText"
                //console.log(xhttp.responseText);
                if(xhttp.responseText === "1"){
                    //Para mostrar un mensaje en la app
                    Alert.alert("Registro insertado :)");
                }else{
                    Alert.alert("Error X~X");
                }
            }
        };
        //Primero hace esto
        xhttp.open("GET", "https://holandes-volador2-p.000webhostapp.com/Cuenta.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password+"&apellido="+this.state.apellido, true);
        xhttp.send();
    }

    const agregarGusto = (item)=>{
      var _gustos = this.state.gustos
      // _gustos.push(item)
      if(_gustos[item]===false)
          _gustos[item]=true;
      else
          _gustos[item]=false;
      this.setState({gustos: _gustos});
      console.log(this.state.gustos)
  }

    const seguir_registro = () => {
        //Asigna un nuevo valor
        this.props.navigation.navigate('Continuar registro')
    }

    return (
      <ScrollView style={{backgroundColor: "yellow", width: 360, height: 900}}>
        <Text style={{fontSize: 55, textAlign: "center", marginTop: 30, marginBottom: 30, color: "black", fontWeight: "bold"}}> Match CUCEI </Text>

        <Text style={styles.requisito}> Escribe tu nombre: </Text>
        <TextInput value={this.state.nombre} style={styles.barra} onChangeText={(nombre) => this.setState({nombre: nombre})} />
        <Text style={styles.requisito}> Escribe tus apellidos: </Text>
        <TextInput value={this.state.apellido} style={styles.barra} onChangeText={(apellido) => this.setState({apellido: apellido})} />
        <Text style={styles.requisito}> Escribe tu correo institucional: </Text>
        <TextInput value={this.state.correo} style={styles.barra} onChangeText={(correo) => this.setState({correo: correo})} />
        <Text style={styles.requisito}> Escribe tu contraseña: </Text>
        <TextInput value={this.state.password} style={styles.barra} onChangeText={(password) => this.setState({password: password})} />
        {/* <TouchableOpacity style={{
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
        </TouchableOpacity> */}
        {/* ------------------------------------------------------------- */}
       <Text style={{fontSize: 25, color: "black", marginBottom: 10}}> Hablanos un poco más de ti </Text>
        <Text style={{fontSize: 20, color: "black", marginBottom: 10}}>¿Cuáles son tus gustos?</Text>
        
        {
            this.state.gustos["Música"]==false && (
                <TouchableOpacity style={styles.botonApagado} onPress={()=>{agregarGusto("Música")}}>
                    <Text style={styles.gustos}> Música </Text>
                </TouchableOpacity>
            )
        }
        {
            this.state.gustos["Música"]==true && (
                <TouchableOpacity style={styles.botonEncendido} onPress={()=>{agregarGusto("Música")}}>
                    <Text style={styles.gustos}> Música </Text>
                </TouchableOpacity>
            )
        }
        
        <TouchableOpacity style={styles.botonApagado} onPress={()=>{agregarGusto("Videojuegos")}}> 
            <Text style={styles.gustos}>Videojuegos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Lectura </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Series de TV </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Deportes </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Manualidades </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Arte </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Redes sociales </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Fotografía </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Historietas </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Cocinar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Bailar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Puzzles </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonApagado}> 
            <Text style={styles.gustos}> Anime </Text>
        </TouchableOpacity>
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
        }} onPress={enviarRegistro}>
            <Text style={{
                fontSize: 25,
                textAlign: "center",
                marginTop: 5,
                color: "black",
            }}> Agregar </Text>
        </TouchableOpacity>
      </ScrollView>
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
    },
    gustos:{
      //width: 20,
      color: "black",
      fontSize: 18,
      textAlign: "center",
      marginTop: 5,
  },
  botonApagado:{
      backgroundColor: "red",
      borderColor: "red",
      width: 180,
      height: 35,
      marginLeft: 10,
      marginBottom: 10,
  },
  botonEncendido:{
      backgroundColor: "green",
      borderColor: "green",
      width: 180,
      height: 35,
      marginLeft: 10,
      marginBottom: 10,
  },
})
