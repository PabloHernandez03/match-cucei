import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Button, TextInput, Alert, StyleSheet, ScrollView} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import AwesomeAlert from 'react-native-awesome-alerts';
import { DateTimePickerAndroid }  from '@react-native-community/datetimepicker';
export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        correo: "",
        password: "",
        apellido: "",
        nacimiento: new Date(),
        gustos: [
                {"tipo": "Música","chosen":false},
                {"tipo": "Videojuegos", "chosen":false},
                {"tipo":"Lectura", "chosen":false},
                {"tipo":"Series de TV", "chosen":false},
                {"tipo":"Deportes", "chosen":false},
                {"tipo":"Manualidades", "chosen":false},
                {"tipo":"Arte", "chosen":false},
                {"tipo":"Redes sociales", "chosen":false},
                {"tipo":"Fotografía", "chosen":false},
                {"tipo":"Historietas", "chosen":false},
                {"tipo":"Cocinar", "chosen":false},
                {"tipo":"Bailar", "chosen":false},
                {"tipo":"Puzzles", "chosen":false},
                {"tipo":"Anime", "chosen":false}
            ],
        alertaRegistro: false,
        alertaError: false,
        mensajeError: "",
        contGustos: 0,
    };
  }

  render() {
    const enviarRegistro = () => {
        var xhttp = new XMLHttpRequest();
        _this = this;
        //Luego entra a esta función
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //Para sacar lo que dice la web "xhttp.responseText"
                //console.log(xhttp.responseText);
                if(_this.state.nombre==="" || _this.state.apellido==="" || _this.state.correo==="" || _this.state.password===""){
                    _this.setState({mensajeError: "Llena todos los campos"});
                    _this.setState({alertaError: true});
                }else if(_this.state.contGustos < 3){
                    _this.setState({mensajeError: "Escoge por lo menos 3 gustos"});
                    _this.setState({alertaError: true});
                }else{
                    if(xhttp.responseText === "1"){
                        //Para mostrar un mensaje en la app
                        _this.setState({alertaRegistro: true});
                        console.log("hola")
                    }else{
                        Alert.alert("Error X~X");
                    }
                }
                
            }
        };
        //Gustos
        var _gustos = [];
        _this.state.gustos.map((item)=>{
            if(item.chosen){
                _gustos.push(item.tipo);
            }
        });
        var _nacimiento = _this.state.nacimiento.getFullYear()+"-"+(_this.state.nacimiento.getMonth()+1)+"-"+_this.state.nacimiento.getDate();
        console.log(_nacimiento);
        // xhttp.open("GET", "https://holandes-volador2-p.000webhostapp.com/Cuenta.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password+"&apellido="+this.state.apellido, true);
        xhttp.open("GET", "https://holandes-volador3-p.000webhostapp.com/Cuenta.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password+"&apellido="+this.state.apellido+"&gustos="+JSON.stringify(_gustos)+"&nacimiento="+_nacimiento, true);
        xhttp.send();
        console.log("https://holandes-volador3-p.000webhostapp.com/Cuenta.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password+"&apellido="+this.state.apellido+"&gustos="+JSON.stringify(_gustos)+"&nacimiento="+_nacimiento);
    }

    const agregarGusto = (item)=>{
      var _gustos = this.state.gustos;
      var _contGustos = this.state.contGustos;
      _gustos.map((gusto)=>{
        if(gusto.tipo===item){
            if(gusto.chosen===false){
                gusto.chosen=true;
                _contGustos=_contGustos+1;
            }else{
                gusto.chosen=false;
                _contGustos=_contGustos-1;
            }
        }
      });
      this.setState({gustos: _gustos});
      this.setState({contGustos: _contGustos});
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState({nacimiento: currentDate});
  };

  const setDate = ()=>{
    DateTimePickerAndroid.open({
        value: this.state.nacimiento,
        onChange,
        mode: "date",
        is24Hour: true,
      });
  }

    // const seguir_registro = () => {
    //     //Asigna un nuevo valor
    //     this.props.navigation.navigate('Continuar registro')
    // }

    return (
      <ScrollView style={{backgroundColor: "#001f54"}}>
        <Text 
        style={{
            fontSize: moderateScale(55),
            textAlign: "center",
            marginTop: verticalScale(20),
            marginBottom: verticalScale(20),
            color: "white",
            fontWeight: "bold"}}> Match CUCEI </Text>

        <Text style={{height: verticalScale(2),backgroundColor:"#b93926",marginHorizontal: horizontalScale(50)}}></Text>

        <Text style={styles.requisito}> Nombre: </Text>
        <TextInput value={this.state.nombre} style={styles.barra} onChangeText={(nombre) => this.setState({nombre: nombre})} />
        <Text style={styles.requisito}> Apellidos: </Text>
        <TextInput value={this.state.apellido} style={styles.barra} onChangeText={(apellido) => this.setState({apellido: apellido})} />
        <Text style={styles.requisito}> Fecha de nacimiento: </Text>
        <TouchableOpacity style={styles.barra} onPress={setDate}>
            <Text style={{height: verticalScale(40),marginTop: verticalScale(10),marginLeft: horizontalScale(5)}}>{this.state.nacimiento.getDate()}/{this.state.nacimiento.getMonth()+1}/{this.state.nacimiento.getFullYear()}</Text>
        </TouchableOpacity>
        <Text style={styles.requisito}> Correo institucional: </Text>
        <TextInput value={this.state.correo} style={styles.barra} onChangeText={(correo) => this.setState({correo: correo})} />
        <Text style={styles.requisito}> Contraseña: </Text>
        <TextInput value={this.state.password} style={styles.barra} secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} />

        <Text style={{marginTop: verticalScale(20),height: verticalScale(2),backgroundColor:"#b93926",marginHorizontal: horizontalScale(50)}}></Text>

       <Text style={{fontSize: 20, color: "white", textAlign: "center",marginTop: verticalScale(10)}}> Cuentanos un poco más de ti... </Text>
        <Text style={{fontSize: 15, color: "#b2bbcb", marginBottom: 10,textAlign: "center",marginBottom: verticalScale(15)}}>(Selecciona Uno o más)</Text>

        <View style={styles.app}>
            {this.state.gustos.map((item) => {
                return (
                    <View>
                        {
                            item.chosen==false && (
                                <TouchableOpacity style={styles.itemApagado} onPress={()=>{agregarGusto(item.tipo)}}>
                                    <Text style={styles.gustos}>{item.tipo}</Text>
                                </TouchableOpacity>
                            )
                        }
                        {
                            item.chosen==true && (
                                <TouchableOpacity style={styles.itemEncendido} onPress={()=>{agregarGusto(item.tipo)}}>
                                    <Text style={styles.gustos}>{item.tipo}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    
                );
            })}
        </View>
        
        <TouchableOpacity style={{
            borderWidth: 3,
            marginVertical: verticalScale(15),
            marginHorizontal: horizontalScale(60),
            backgroundColor: "#3926b9",
            borderColor: "#271a81",
            fontWeight: "bold",
            borderRadius: 50,
        }} onPress={enviarRegistro}>
            <Text style={{
                fontSize: 25,
                textAlign: "center",
                color: "white",
            }}>Registrarse</Text>
        </TouchableOpacity>
      
            {/* Alertas */}
            <AwesomeAlert
                show={this.state.alertaRegistro}
                showProgress={false}
                title="Registro confirmado"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    this.setState({alertaRegistro: false})
                  }}
            />
            <AwesomeAlert
                show={this.state.alertaError}
                showProgress={false}
                title={this.state.mensajeError}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    this.setState({alertaError: false})
                  }}
            />
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    requisito:{
        //width: 20,
        color: "white",
        fontSize: moderateScale(15),
        marginTop: verticalScale(15),
        marginLeft: horizontalScale(10),
    },
    barra:{
        backgroundColor: "#193565",
        // backgroundColor: "white",
        width: horizontalScale(350),
        height: verticalScale(40),
        borderRadius: 10,
        marginLeft: horizontalScale(10),
        // marginTop: 15,
        // marginBottom: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1.5,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: "#b2bbcb"
    },
    gustos:{
      //width: 20,
      color: "white",
      fontSize: moderateScale(10),
      textAlign: "center",
  },
  app:{
        // marginLeft: 7,
        // marginHorizontal: "auto",
        width: horizontalScale(300),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginHorizontal: horizontalScale(30),
    },
    itemApagado: {
        flex: 1,
        minWidth: horizontalScale(90),
        maxWidth: horizontalScale(90),
        height: verticalScale(35),
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#b9265d",
        borderColor: "#b9265d",
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 50
    },
    itemEncendido:{
        flex: 1,
        minWidth: horizontalScale(90),
        maxWidth: horizontalScale(90),
        height: verticalScale(35),
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#26b982",
        borderColor: "#26b982",
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 50
    }
})
