import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen } from '../screen'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get("window")

const UserStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: height * 0.1, backgroundColor: '#f5cb5c' },
                tabBarItemStyle: { height: height * 0.1 }
            }}
        >
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={28} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default UserStack
