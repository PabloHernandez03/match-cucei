import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import INICIO from './Inicio';
import REGISTRO from './Registro';
import MASDETI from './MasDeTi';
import MENU from './Menu';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={INICIO} options={{headerShown: false}}/>
                <Stack.Screen name="Registro" component={REGISTRO} options={{headerShown: false}}/>
                <Stack.Screen name="Menu" component={MENU} options={{headerShown: false}}/>
                <Stack.Screen name="Continuar registro" component={MASDETI} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}