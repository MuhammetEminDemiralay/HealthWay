import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import InitialScreen from './InitialScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import OnboardingScreen from './OnboardingScreen'
import PasswordResetScreen from './PasswordResetScreen'

const Stack = createNativeStackNavigator()

const AuthScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='initial'
                component={InitialScreen}
            />
            <Stack.Screen
                name='login'
                component={LoginScreen}
            />
            <Stack.Screen
                name='register'
                component={RegisterScreen}
            />
            <Stack.Screen
                name='onboarding'
                component={OnboardingScreen}
            />
             <Stack.Screen
                name='passwordReset'
                component={PasswordResetScreen}
            />

        </Stack.Navigator>
    )
}

export default AuthScreen
