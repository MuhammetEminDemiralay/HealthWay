import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BALScreen from './BALScreen'
import GenderScreen from './GenderScreen'
import MainTargetScreen from './MainTargetScreen'
import ReasonsScreen from './ReasonsScreen'
import WeeklyTargetScreen from './WeeklyTargetScreen'
import { FontAwesome } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { Dimensions, Text, View } from 'react-native'
import WeightScreen from './WeightScreen'


const Stack = createNativeStackNavigator();

const OnboardingScreen = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='mainTarget'
                component={MainTargetScreen}
            />
            <Stack.Screen
                name='bal'
                component={BALScreen}
            />
            <Stack.Screen
                name='gender'
                component={GenderScreen}
            />
            <Stack.Screen
                name='reasons'
                component={ReasonsScreen}
            />
            <Stack.Screen
                name='weight'
                component={WeightScreen}
            />
            <Stack.Screen
                name='weeklyTarget'
                component={WeeklyTargetScreen}
            />

        </Stack.Navigator>
    )
}

export default OnboardingScreen
