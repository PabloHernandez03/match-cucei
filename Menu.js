import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from "./Tab1"
import TAB2 from "./Tab2"
import TAB3 from "./Tab3"
import TAB4 from "./Tab4"
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        const Tab = createBottomTabNavigator();
        const { Id_perfil } = this.props.route.params;

        return (
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
            >
                <Tab.Screen name="Recomendaciones" component={TAB1} initialParams={{ IdPerfil: Id_perfil }}
                options={{
                    tabBarLabel: 'Recomendaciones',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                          name={focused ? 'people' : 'people-outline'}
                          size={30}
                          color="#3069be"
                        />
                    ),
                }}
                />

                <Tab.Screen name="Solicitudes" component={TAB2}
                options={{
                    tabBarLabel: 'Solicitudes',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                          name={focused ? 'mail' : 'mail-outline'}
                          size={30}
                          color="#3069be"
                        />
                    ),

                }}
                />
                
                <Tab.Screen name="Agenda" component={TAB3}
                options={{
                    tabBarLabel: 'Agenda',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                          name={focused ? 'calendar' : 'calendar-outline'}
                          size={30}
                          color="#3069be"
                        />
                    ),

                }}
                />

                <Tab.Screen name="Perfil" component={TAB4}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                          name={focused ? 'person' : 'person-outline'}
                          size={30}
                          color="#3069be"
                        />
                    ),

                }}
                />
            </Tab.Navigator>
        );
    }
}

