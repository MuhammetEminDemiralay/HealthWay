import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, } from '../../../redux/store'
import { Auth } from '../../../model/auth'
import { getUserInfoAsyncstorage } from '../../../redux/onboardingSlice'
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'
import CustomContentBtn from '../../../component/customContentBtn'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../../datas/navigationType'
import CustomHeader from '../../../component/customHeader'
import { bmr, calorieCalculation } from '../../../helper/calorieCalculation'
import { getFoodAsyncstorage, setActiveMealFoodCategory, setDailyRequiredCalories } from '../../../redux/activitySlice'
import { DataModel } from '../../../model/activity'
import { food } from '../../../datas/food'
import { FoodItem } from '../../../model/food'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)
    const { updateProfile } = useSelector((state: RootState) => state.onboarding);
    const { width, height } = Dimensions.get("window")
    const { dailyRequiredCalories, activeDate, allDataOfTheDay } = useSelector((state: RootState) => state.activity)
    const navigation: any = useNavigation();
    const [productİnformation, setProductInformation] = useState<FoodItem[]>([])
    const [caloriesConsumed, setCaloriesConsumed] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fat, setFat] = useState(0)

    useEffect(() => {
        dispatch(getUserInfoAsyncstorage())
    }, [])

    useEffect(() => {
        dispatch(getFoodAsyncstorage())
    }, [activeDate])

    useEffect(() => {
        setCaloriesConsumed(productİnformation.reduce((acc, item) => acc + (item.energy.value != undefined ? item.energy.value : 0), 0))
        setCarbohydrate(productİnformation.reduce((acc, item) => acc + (item.carbohydrate?.value != undefined ? item.carbohydrate.value : 0), 0))
        setProtein(productİnformation.reduce((acc, item) => acc + (item.protein?.value != undefined ? item.protein.value : 0), 0))
        setFat(productİnformation.reduce((acc, item) => acc + (item.totalFat?.value != undefined ? item.totalFat.value : 0), 0))
    }, [productİnformation])

    useEffect(() => {
        setProductInformation([])
        allDataOfTheDay.forEach((item: DataModel) => {
            const data = food.find((foodData: FoodItem) => foodData.foodName == item.foodName)
            if (data != undefined) {
                for (let i = 1; i <= item.amount; i++) {
                    setProductInformation((prev) => [...prev, data])
                }
            }
        })


    }, [allDataOfTheDay])


    const navigate = (route: string) => {
        if (route == "breakfast" || route == 'lunch' || route == 'dinner' || route == 'snacks') {
            navigation.navigate('food')
            dispatch(setActiveMealFoodCategory(route))
        } else {
            navigation.navigate(route)
            dispatch(setActiveMealFoodCategory(route))
        }
    }



    return (
        <View style={styles.container} >

            <CustomHeader />

            <View style={styles.content}>
                <View style={styles.leftContent}>
                    <CustomContentBtn text="Exercise" value={0} icon="sports-gymnastics" onPress={() => navigate("exercise")} />
                    <CustomContentBtn text="Steps" value={0} icon="footsteps-sharp" onPress={() => navigate("step")} />
                    <CustomContentBtn text="Water" value={0} icon="cup" onPress={() => navigate("water")} />
                    <CustomContentBtn text="Notes" value={0} icon="note" onPress={() => navigate("notes")} />
                </View>

                <View style={styles.middleContent}>
                    <Pressable style={styles.middleTopContent}>
                        <Text style={styles.requiredCalorieText}>Daily Calorie</Text>
                        <Text style={styles.requiredCalorieText}>{dailyRequiredCalories.calorie != null ? Math.floor(dailyRequiredCalories.calorie) : 0}</Text>
                    </Pressable>

                    <View style={styles.calorieMeterBox}>
                        <View style={styles.calorieMeter}>
                            <Progress.Circle
                                thickness={height * 0.025}
                                style={styles.progress} size={height * 0.25}
                                borderWidth={0}
                                color={
                                    dailyRequiredCalories.calorie &&
                                        new Date(new Date().toDateString()) > new Date(activeDate.toDateString()) ?
                                        (
                                            dailyRequiredCalories.calorie > caloriesConsumed ?
                                                'red' :
                                                'lime'
                                        ) :
                                        'lime'

                                }
                                progress={
                                    dailyRequiredCalories.calorie != null ?
                                        (caloriesConsumed / dailyRequiredCalories.calorie) : 0} />
                            <View style={styles.emtyBox}></View>
                            <View style={styles.calorieScreen}>
                                {
                                    caloriesConsumed != undefined &&
                                    <Text style={[
                                        {
                                            color: dailyRequiredCalories.calorie &&
                                                new Date(new Date().toDateString()) > new Date(activeDate.toDateString()) ?
                                                (
                                                    dailyRequiredCalories.calorie > caloriesConsumed ?
                                                        '#ff4a68' :
                                                        'lime'
                                                ) :
                                                'lime'
                                        },
                                        styles.calorieText
                                    ]}>{caloriesConsumed}</Text>
                                }
                                <View>
                                    <Text style={styles.calorieTextInfo}>{dailyRequiredCalories.calorie && dailyRequiredCalories.calorie > caloriesConsumed ? 'Left' : 'Over'}</Text>
                                    <Text style={styles.calorieTextInfo}>{dailyRequiredCalories.calorie && dailyRequiredCalories.calorie > caloriesConsumed ?
                                        Math.floor(dailyRequiredCalories.calorie - caloriesConsumed) :
                                        (dailyRequiredCalories.calorie && Math.floor(-1 * (dailyRequiredCalories.calorie - caloriesConsumed)))}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.middleBottomContent}>
                        <Pressable style={styles.middleBottomBtn}>
                            <FontAwesome6 name="microphone" size={24} color="#fff" />
                        </Pressable>
                        <Pressable style={styles.middleBottomBtn}>
                            <FontAwesome6 name="plus" size={24} color="#fff" />
                        </Pressable>
                    </View>

                </View>
                <View style={styles.rightContent}>
                    <CustomContentBtn text="Breakfast" value={0} onPress={() => navigate("breakfast")} />
                    <CustomContentBtn text="Lunch" value={0} onPress={() => navigate("lunch")} />
                    <CustomContentBtn text="Dinner" value={0} onPress={() => navigate("dinner")} />
                    <CustomContentBtn text="Snacks" value={0} onPress={() => navigate("snacks")} />
                </View>

            </View>


            <View style={styles.activityContainer}>
                <View>
                    <Progress.Bar
                        progress={carbohydrate / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrare ?
                            dailyRequiredCalories.percentage.carbohydrare * dailyRequiredCalories.calorie : 1
                        )}
                        width={width * 0.25}
                        color='lime'
                    />
                </View>
                <View>
                    <Progress.Bar
                        progress={protein / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein ?
                            dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie : 1
                        )}
                        width={width * 0.25}
                        color='lime'
                    />
                </View>
                <View>
                    <Progress.Bar
                        progress={fat / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat ?
                            dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie : 1
                        )}
                        width={width * 0.25}
                        color='lime'
                    />

                </View>
            </View>

        </View >
    )
}

export default HomeScreen 
