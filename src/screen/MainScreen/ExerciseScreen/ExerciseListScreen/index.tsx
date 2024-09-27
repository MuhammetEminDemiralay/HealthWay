import React from 'react'
import { Dimensions, FlatList, Pressable, Text, View } from 'react-native'
import CustomHeader from '../../../../component/customHeader'
import { styles } from './styles'
import { exercise } from '../../../../datas/exercise'
import { NavigationProps } from '../../../../datas/navigationType'
import { useNavigation } from '@react-navigation/native'

const ExerciseListScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation()

    return (
        <View style={styles.container}>
            <CustomHeader />
            <FlatList
                data={exercise}
                renderItem={({ item, index }) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(255, 255, 255, 0.2)'

                            },
                            styles.itemBox]}
                        onPress={() => navigation.navigate('exerciseDetail', { value: item.exerciseName })}
                    >
                        <Text style={styles.exerciseName}>{item.exerciseName}</Text>
                        <View style={styles.exerciseInfoBox}>
                            <Text style={[{ color: 'lime' }, styles.infoText]}>{item.options && item.options[0].calorie} cal</Text>
                            <Text style={{ color: '#fff' }}> / </Text>
                            <Text style={[{ color: '#fff' }, styles.infoText]}>{item.time}min</Text>
                        </View>
                    </Pressable>
                )}
                style={styles.flatlistContainer}
                columnWrapperStyle={styles.flatlistColumnWrapper}
                numColumns={3}
                snapToInterval={width * 0.33}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ExerciseListScreen

