import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screen'
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get("window")

const UserStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: height * 0.175 },
                tabBarItemStyle: { maxWidth: 100, height: height * 0.175, borderWidth: 1 }
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
        </Tab.Navigator>
    )
}

export default UserStack
