import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from '@expo/vector-icons/FontAwesome';
import Feed from "./Feed";
import Profile from "./Profile";
import Posts from './Posts';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

   export default function HomePage() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#666',
                    borderTopWidth: 0,

                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius: 5,
                    height:60,


                }

            }}
            >
               
                <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <FontAwesome5 name="user-alt" size={size} color={color} />
                        }
                        return <FontAwesome5 name="user" size={size} color={color} />
                    }
                }}

                />
                <Tab.Screen 
                name="Feed" 
                component={Feed} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}

                />
                <Tab.Screen 
                name="Posts" 
                component={Posts}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="camera" size={size} color={color} />
                        }
                        return <Ionicons name="camera-outline" size={size} color={color} />
                    }
                }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}