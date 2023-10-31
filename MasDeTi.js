import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class MasDeTi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gustos: {"Música":false,"Videojuegos":false,
                "Lectura":false,"Series de TV":false,"Deportes":false,
                "Manualidades":false,"Arte":false,"Redes sociales":false,
                "Fotografía":false,"Historietas":false,"Cocinar":false,
                "Bailar":false,"Puzzles":false,"Anime":false},
        };
    }
  render() {
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

    return (
      <ScrollView style={{backgroundColor: "white", height: 900}}>
        <Text style={{fontSize: 55, textAlign: "center", marginTop: 30, marginBottom: 30, color: "black", fontWeight: "bold"}}> Match CUCEI </Text>
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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

    barra:{
        backgroundColor: "white",
        width: 270,
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
    }
})