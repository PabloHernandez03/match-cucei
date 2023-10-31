import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Button, TextInput, Alert, StyleSheet } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        correo: "",
        password: "",
        apellido: "",
        foto: null,
    };
  }

  render() {

    // const handleChoosePhoto = () => {
    //     launchImageLibrary({ noData: true }, (response) => {
    //     //   console.log(response);
    //       if (response) {
    //         this.setState({foto: response});
    //       }
    //     });
    //   };


    // return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         {
    //           this.state.foto && (
    //               <Image
    //             source={{ uri: this.state.foto.assets[0].uri}}
    //             style={{ width: 300, height: 300 }}
    //           />
    //           // <Button title="Upload Photo" onPress={handleUploadPhoto} />
    //           )
              
    //         }
            

        
    //     <Button title="Choose Photo" onPress={handleChoosePhoto} />
    //   </View>
    // );