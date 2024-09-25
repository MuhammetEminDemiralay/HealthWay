import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { RouteProp, useRoute } from '@react-navigation/native'
import CustomHeader from '../../../../component/customHeader'
import { RouteParams } from '../../../../datas/routeType'
import { exercise } from '../../../../datas/exercise'
import { Exercise, ExerciseOptions, ExerciseParams } from '../../../../model/activity'
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { setAsyncstorage } from '../../../../redux/activitySlice'



const ExerciseDetailScreen = () => {

    const route = useRoute<RouteProp<RouteParams, 'ExerciseDetailScreen'>>();
    const { value } = route.params;
    const [activeExercise, setActiveExercise] = useState<Exercise>();
    const { width, height } = Dimensions.get("window")
    const [activeMinute, setActiveMinute] = useState<string>();
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        const isExercise = exercise.find((item: Exercise) => item.exerciseName == value)
        if (isExercise != undefined) {
            setActiveExercise(isExercise)
        }
    }, [value])

    const setExercise = (item: string) => {
        dispatch(setAsyncstorage({ exercise: { exerciseName: value, options: item }, subject: 'exercise' }))
    }

    const changeMinute = (item: string) => {
        dispatch(setAsyncstorage({ exercise: { exerciseName: value, options: item, time: Number(activeMinute) }, subject: 'exercise' }))
    }



    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.exerciseTitle}>{value}</Text>
                <Text style={styles.description}>{activeExercise?.description}</Text>
            </View>
            <FlatList
                data={activeExercise?.options}
                renderItem={({ item, index }) => (
                    <View style={styles.optionBox}>
                        <View style={styles.optionLeftBox}>
                            <Text style={styles.optionName}>{item.optionName}</Text>
                        </View>
                        <View style={styles.optionRightBox}>

                            <View style={styles.exerciseDuration}>
                                <TextInput
                                    style={styles.timeTextInput}
                                    placeholder='30 min'
                                    placeholderTextColor='#4cc9f0'
                                    inputMode='numeric'
                                    onChangeText={(text: string) => setActiveMinute(text)}
                                    onEndEditing={() => changeMinute(item.optionName)}
                                />
                                <View style={styles.calorieBox}>
                                    <Text style={styles.calorieText}>{item.calorie} cals</Text>
                                </View>
                            </View>

                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)'
                                },
                                styles.openExerciseBtn
                            ]}
                                onPress={() => setExercise(item.optionName)}
                            >
                                <Entypo name="man" size={24} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                )
                }
                style={styles.optionFlatlist}
                snapToInterval={height * 0.08}
                showsVerticalScrollIndicator={false}
            />
        </View >
    )
}

export default ExerciseDetailScreen
