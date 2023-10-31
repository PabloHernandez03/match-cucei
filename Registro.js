import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Button, TextInput, Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        correo: "",
        password: "",
        foto: null,
    };
  }

  render() {

    const cierraModal = () => {
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

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
        //   console.log(response);
          if (response) {
            this.setState({foto: response});
          }
        });
        console.log(this.state.foto)
      };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Image
              source={{ uri: thi}}
              style={{ width: 300, height: 300 }}
            />
            {/* <Button title="Upload Photo" onPress={handleUploadPhoto} /> */}

        
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    );
  }
}
