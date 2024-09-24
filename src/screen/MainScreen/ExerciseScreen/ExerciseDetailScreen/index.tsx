import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { RouteProp, useRoute } from '@react-navigation/native'
import CustomHeader from '../../../../component/customHeader'
import { RouteParams } from '../../../../datas/routeType'
import { exercise } from '../../../../datas/exercise'
import { Exercise } from '../../../../model/activity'
import CustomBtn from '../../../../component/customBtn'



const ExerciseDetailScreen = () => {

    const route = useRoute<RouteProp<RouteParams, 'ExerciseDetailScreen'>>();
    const { value } = route.params;
    const [activeExercise, setActiveExercise] = useState<Exercise>();
    const { width, height } = Dimensions.get("window")

    useEffect(() => {
        const isExercise = exercise.find((item: Exercise) => item.exerciseName == value)
        if (isExercise != undefined) {
            setActiveExercise(isExercise)
        }
    }, [value])

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
                            <Text style={styles.optionName}>{item.name}</Text>
                        </View>
                        <View style={styles.optionRightBox}>
                            <View >

                            </View>
                            <View >

                            </View>
                        </View>
                    </View>
                )}
                style={styles.optionFlatlist}
                snapToInterval={height * 0.08}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ExerciseDetailScreen
