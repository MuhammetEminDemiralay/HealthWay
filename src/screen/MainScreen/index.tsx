import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './HomeScreen';
import FoodScreen from './FoodScreen';
import ExerciseScreen from './ExerciseScreen';
import StepScreen from './StepScreen';
import WaterScreen from './WaterScreen';
import NotesScreen from './NotesScreen';



const MainScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='exercise' component={ExerciseScreen} />
            <Stack.Screen name='step' component={StepScreen} />
            <Stack.Screen name='water' component={WaterScreen} />
            <Stack.Screen name='notes' component={NotesScreen} />
            <Stack.Screen name='food' component={FoodScreen} />
        </Stack.Navigator>
    )
}

export default MainScreen
