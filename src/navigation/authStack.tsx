import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { LoginScreen, OnboardingScreen } from '../screen'
import AuthScreen from '../screen/AuthScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='auth'
                component={AuthScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
