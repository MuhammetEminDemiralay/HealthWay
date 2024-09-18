import React, { useEffect, useRef, useState } from 'react'
import { Button, Dimensions, Pressable, Text, View } from 'react-native'
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
    const { updateStatus } = useSelector((state: any) => state.onboarding);
    const profile = useSelector((state: any) => state.onboarding)
    const { dailyRequiredCalories, activeDate, allDataOfTheDay } = useSelector((state: RootState) => state.activity)

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation();
    const [productİnformation, setProductInformation] = useState<FoodItem[]>([])

    useEffect(() => {
        dispatch(getUserInfoAsyncstorage())
    }, [])

    useEffect(() => {
        const bmrInfo = bmr(profile)
        const calorie = calorieCalculation(profile, bmrInfo);
        dispatch(setDailyRequiredCalories(calorie));
    }, [updateStatus])

    useEffect(() => {
        dispatch(getFoodAsyncstorage())
    }, [activeDate])

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

    console.log("Aa", productİnformation.length);



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
                        {
                            dailyRequiredCalories?.calorie != undefined &&
                            <>
                                <Text style={styles.requiredCalorieText}>Daily Calorie</Text>
                                <Text style={styles.requiredCalorieText}>{Math.ceil(dailyRequiredCalories.calorie)}</Text>
                            </>
                        }
                    </Pressable>

                    <View style={styles.calorieMeterBox}>
                        <View style={styles.calorieMeter}>
                            <Progress.Circle thickness={height * 0.025} style={styles.progress} size={height * 0.25} borderWidth={0} color='lime' progress={0.8} />
                            <View style={styles.emtyBox}></View>
                            <View style={styles.calorieScreen}>
                                {
                                    <Text style={{ fontSize: 30 }}>{productİnformation.reduce((acc, item) => acc + (item.energy.value != udne) , 0)}</Text>
                                }
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
                <Button title="çek" onPress={() => dispatch(getFoodAsyncstorage())} />
            </View>

        </View>
    )
}

export default HomeScreen 
