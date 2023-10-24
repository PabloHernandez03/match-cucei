import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from "./Tab1"
import TAB2 from "./Tab2"
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
            >
                <Tab.Screen name="Lista de constructores" component={TAB1} initialParams={{nombre: this.props.route.params.nombre}}
                options={{
                    tabBarLabel: 'Constructores',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="body-outline" color={"red"} size={30} />
                    ),

                }}
                />

                <Tab.Screen name="Reproductor de videos" component={TAB2}
                options={{
                    tabBarLabel: 'Informacion',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="newspaper-outline" color={"red"} size={30} />
                    ),

                }}
                />
            </Tab.Navigator>
        );
    }
}

