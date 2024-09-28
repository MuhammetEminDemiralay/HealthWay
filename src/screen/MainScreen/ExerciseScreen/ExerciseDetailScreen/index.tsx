import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { RouteProp, useRoute } from '@react-navigation/native'
import CustomHeader from '../../../../component/customHeader'
import { RouteParams } from '../../../../datas/routeType'
import { exercise } from '../../../../datas/exercise'
import { Exercise, ExerciseOptions, ExerciseParams } from '../../../../model/activity'
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store'
import { setAsyncstorage, setExerciseRedux } from '../../../../redux/activitySlice'
import { scale } from 'react-native-size-matters'



const ExerciseDetailScreen = () => {

    const route = useRoute<RouteProp<RouteParams, 'ExerciseDetailScreen'>>();
    const { value } = route.params;
    const [activeExercise, setActiveExercise] = useState<Exercise>();
    const { width, height } = Dimensions.get("window")
    const [activeMinute, setActiveMinute] = useState<string>("30");
    const dispatch: AppDispatch = useDispatch()
    const { allDailyExerciseData, activeDate } = useSelector((state: RootState) => state.activity)
    const [activeOptions, setActiveOptions] = useState<ExerciseParams[]>([]);

    useEffect(() => {
        const isExercise = exercise.find((item: Exercise) => item.exerciseName == value)
        if (isExercise != undefined) {
            setActiveExercise(isExercise)
        }
    }, [value])

    useEffect(() => {
        const isDailyAllExercise = allDailyExerciseData.find(({ date }) => date.toDateString() == activeDate.toDateString())?.exercise
        const targetExerciseOptions = isDailyAllExercise?.filter(({ exerciseName }) => exerciseName == value)
        if (targetExerciseOptions != undefined) {
            setActiveOptions(targetExerciseOptions)
        }
    }, [allDailyExerciseData])

    const setExercise = (item: string) => {
        dispatch(setAsyncstorage({ exercise: { exerciseName: value, options: item }, subject: 'exercise' }))
        dispatch(setExerciseRedux({ exerciseName: value, options: item }))
    }

    const onBlur = (item: string) => {
        dispatch(setExerciseRedux({ exerciseName: value, options: item, time: Number(activeMinute) }))
        dispatch(setAsyncstorage({ exercise: { exerciseName: value, options: item, time: Number(activeMinute) }, subject: 'exercise' }))
    }

    const onFocus = (item: string) => {
        const isOption = activeOptions.find(({ options }) => options == item)
        if (isOption != undefined) {
            dispatch(setExerciseRedux({ exerciseName: value, options: item }))
            dispatch(setAsyncstorage({ exercise: { exerciseName: value, options: item }, subject: 'exercise' }))
        }
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
                                    placeholder={
                                        activeOptions.find(({ time, options }) =>
                                            options == item.optionName) != undefined ?
                                            `${activeOptions.find(({ options }) => options == item.optionName)?.time} min` :
                                            `30 min`
                                    }
                                    placeholderTextColor='#4cc9f0'
                                    inputMode='numeric'
                                    onChangeText={(text: string) => setActiveMinute(text)}
                                    onFocus={() => onFocus(item.optionName)}
                                    onBlur={() => onBlur(item.optionName)}
                                />
                                <View style={styles.calorieBox}>
                                    <Text style={styles.calorieText}>
                                        {
                                            (() => {
                                                const findOptionTime = activeOptions.find(({ options }) => options == item.optionName)?.time;
                                                return findOptionTime != undefined ? Math.floor((findOptionTime / 30) * (item.calorie ? item.calorie : 1)) : item.calorie
                                            })()
                                        } cal

                                    </Text>
                                </View>
                            </View>

                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'rgba(255,255,255,0.5)' :
                                        activeOptions.find(({ options }) => options == item.optionName) ?
                                            'lime' :
                                            'rgba(255,255,255,0.25)'
                                },
                                styles.openExerciseBtn
                            ]}
                                onPress={() => setExercise(item.optionName)}
                            >
                                {
                                    activeOptions.find(({ options }) => options == item.optionName) ?
                                        <MaterialIcons name="sports-gymnastics" size={scale(22)}
                                            color={
                                                activeOptions.find(({ options }) => options == item.optionName) ?
                                                    'black' :
                                                    '#fff'
                                            } /> :
                                        < Entypo name="man" size={scale(22)} color="#fff" />
                                }
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
