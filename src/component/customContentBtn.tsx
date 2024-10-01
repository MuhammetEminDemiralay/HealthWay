import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { SimpleLineIcons, MaterialIcons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { exercise } from '../datas/exercise';

const { width, height } = Dimensions.get("window")


interface CustomContenBtnProps {
    text: string,
    icon?: string,
    onPress: () => void
}


const CustomContentBtn = ({ text, icon, onPress }: CustomContenBtnProps) => {


    const { allDailyExerciseData, productInformation, activeDate, allDailyWaterData, allDailyNotesData } = useSelector((state: RootState) => state.activity)
    const [breakfast, setBreakfast] = useState(0)
    const [lunch, setLunch] = useState(0)
    const [dinner, setDinner] = useState(0)
    const [snacks, setSnacks] = useState(0)
    const [dailyExercise, setDailyExercise] = useState(0)
    const [dailyWater, setDailyWater] = useState(0)
    const [dailyNotes, setDailyNotes] = useState(0)

    useEffect(() => {
        setBreakfast(productInformation.filter(({ mealTime }) => mealTime == 'breakfast').reduce((acc, item) => (acc + item.energy.value), 0))
        setLunch(productInformation.filter(({ mealTime }) => mealTime == 'lunch').reduce((acc, item) => (acc + item.energy.value), 0))
        setDinner(productInformation.filter(({ mealTime }) => mealTime == 'dinner').reduce((acc, item) => (acc + item.energy.value), 0))
        setSnacks(productInformation.filter(({ mealTime }) => mealTime == 'snacks').reduce((acc, item) => (acc + item.energy.value), 0))
    }, [productInformation])


    useEffect(() => {
        const isExerciseData = allDailyExerciseData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isExerciseData) {
            let exerciseCalculate = 0;
            isExerciseData.exercise.forEach((item) => {
                const value = exercise.find(({ exerciseName }) => exerciseName == item.exerciseName)?.options?.find(({ optionName }) => optionName == item.options)?.calorie
                if (value) {
                    exerciseCalculate += (item.time == 30) ? value : value * (item.time ? item.time / 30 : 1)
                }
            })
            setDailyExercise(Math.ceil(exerciseCalculate))
        } else {
            setDailyExercise(0)
        }
    }, [allDailyExerciseData, activeDate])


    useEffect(() => {
        const isWaterData = allDailyWaterData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isWaterData) {
            setDailyWater(isWaterData.water.reduce((acc, item) => acc + (item.option == 'cup' ? 200 : 500), 0))
        } else {
            setDailyWater(0)
        }
    }, [allDailyWaterData, activeDate])

    useEffect(() => {
        const isNotesData = allDailyNotesData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isNotesData) {
            setDailyNotes(isNotesData.notes.length)
        } else {
            setDailyNotes(0)
        }
    }, [allDailyNotesData, activeDate])

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                borderTopLeftRadius: text == 'Exercise' ? 10 : 0,
                borderTopRightRadius: text == 'Breakfast' ? 10 : 0,
                borderBottomRightRadius: text == 'Snacks' ? 10 : 0,
                borderBottomLeftRadius: text == 'Notes' ? 10 : 0
            },
            styles.btnContent
        ]}
            onPress={onPress}
        >
            <Text style={styles.btnTitleText}>{text}</Text>
            <View style={styles.wrapper}>
                <Text style={styles.btnContenText}>
                    {
                        text == 'Breakfast' ? breakfast :
                            text == 'Lunch' ? lunch :
                                text == 'Dinner' ? dinner :
                                    text == 'Snacks' ? snacks :
                                        text == 'Exercise' ? dailyExercise :
                                            text == 'Water' ? dailyWater :
                                                text == 'Notes' && dailyNotes
                    }
                </Text>
                {
                    icon == "sports-gymnastics" &&
                    <MaterialIcons name="sports-gymnastics" size={scale(22)} color="#4cc9f0" />
                }
                {
                    icon == "pulse" &&
                    <Fontisto name="pulse" size={scale(18)} color="#4cc9f0" />
                }
                {
                    icon == "cup" &&
                    <MaterialCommunityIcons name="cup" size={scale(20)} color="#4cc9f0" />
                }
                {
                    icon == "note" &&
                    <SimpleLineIcons name="note" size={scale(20)} color="#4cc9f0" />
                }
            </View>
        </Pressable>
    )
}

export default CustomContentBtn




const styles = StyleSheet.create({
    btnContent: {
        width: width * 0.225,
        height: (height * 0.45) / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitleText: {
        width: width * 0.225,
        height: height * 0.025,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: scale(13),
        fontWeight: '500',
    },
    wrapper: {
        width: width * 0.2,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: width * 0.02
    },
    btnContenText: {
        color: '#4cc9f0',
        fontSize: scale(16),
        fontWeight: '700',
    },
})