import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ExerciseListScreen from './ExerciseListScreen'
import ExerciseDetailScreen from './ExerciseDetailScreen'

const ExerciseScreen = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='exerciseList' component={ExerciseListScreen} />
            <Stack.Screen name='exerciseDetail' component={ExerciseDetailScreen} />
        </Stack.Navigator>
    )
}

export default ExerciseScreen
