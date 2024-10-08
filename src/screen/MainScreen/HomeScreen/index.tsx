import React, { useEffect, useState } from 'react'
import { BackHandler, Dimensions, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, } from '../../../redux/store'
import { getUserInfoAsyncstorage } from '../../../redux/onboardingSlice'
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'
import CustomContentBtn from '../../../component/customContentBtn'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '../../../component/customHeader'
import { getAsyncstorage, setActiveDate, setActiveMealFoodCategory, setProductInformation } from '../../../redux/activitySlice'
import { Content } from '../../../model/activity'
import { food } from '../../../datas/food'
import { FoodItem } from '../../../model/food'
import CalendarStrip from 'react-native-calendar-strip'

const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { width, height } = Dimensions.get("window")
    const { dailyRequiredCalories, activeDate, allDailyFoodData, productInformation } = useSelector((state: RootState) => state.activity)
    const navigation: any = useNavigation();
    const [caloriesConsumed, setCaloriesConsumed] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fat, setFat] = useState(0)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



    useEffect(() => {
        const backAction = () => {
            dispatch(setActiveMealFoodCategory("health way"))
            navigation.goBack()
            return true
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        dispatch(getUserInfoAsyncstorage({}))
        dispatch(getAsyncstorage())
    }, [])


    useEffect(() => {
        setCaloriesConsumed(productInformation.reduce((acc, item) => acc + (item.energy.value != undefined ? item.energy.value : 0), 0))
        setCarbohydrate(productInformation.reduce((acc, item) => acc + (item.carbohydrate?.value != undefined ? Math.floor(item.carbohydrate.value) : 0), 0))
        setProtein(productInformation.reduce((acc, item) => acc + (item.protein?.value != undefined ? Math.floor(item.protein.value) : 0), 0))
        setFat(productInformation.reduce((acc, item) => acc + (item.totalFat?.value != undefined ? Math.floor(item.totalFat.value) : 0), 0))
    }, [productInformation])




    useEffect(() => {
        dispatch(setProductInformation(null))
        const result = allDailyFoodData.find((item: any) => item.date.toDateString() == activeDate.toDateString())
        if (result != undefined) {
            result.data.forEach((item: Content) => {
                const data = food.find((foodData: FoodItem) => foodData.foodName == item.foodName)
                if (data != undefined) {
                    for (let i = 1; i <= item.amount; i++) {
                        const newObject = Object.assign({}, data, { mealTime: item.mealTime })
                        dispatch(setProductInformation(newObject))
                    }
                }
            })
        }
    }, [activeDate, allDailyFoodData])



    const navigate = (route: string) => {
        if (route == "breakfast" || route == 'lunch' || route == 'dinner' || route == 'snacks') {
            navigation.navigate('food')
            dispatch(setActiveMealFoodCategory(route))
        } else {
            navigation.navigate(route)
            dispatch(setActiveMealFoodCategory(route))
        }
    }


    const calculateDailyEnergy = (date: moment.Duration) => {

        const dailyData = allDailyFoodData.find(item => item.date?.toDateString() === new Date(date.toISOString()).toDateString());
        if (!dailyData) {
            return 0;
        } else {
            const result = dailyData.data.reduce((accumulator, item) => {
                const isFood = food.find((foodItem: FoodItem) => foodItem.foodName == item.foodName)

                return accumulator + (isFood != undefined ? isFood.energy.value ? isFood.energy.value * item.amount : 0 : 0)
            }, 0)

            return result != undefined ? result : 0
        }
    }



    return (
        <View style={styles.container} >

            <CustomHeader />

            <View style={styles.content}>
                <View style={styles.leftContent}>
                    <CustomContentBtn text="Exercise" icon="sports-gymnastics" onPress={() => navigate("exercise")} />
                    <CustomContentBtn text="Water" icon="cup" onPress={() => navigate("water")} />
                    <CustomContentBtn text="Notes" icon="note" onPress={() => navigate("notes")} />
                    <CustomContentBtn text="Breath" icon="pulse" onPress={() => navigate("breath")} />
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
                    <CustomContentBtn text="Breakfast" onPress={() => navigate("breakfast")} />
                    <CustomContentBtn text="Lunch" onPress={() => navigate("lunch")} />
                    <CustomContentBtn text="Dinner" onPress={() => navigate("dinner")} />
                    <CustomContentBtn text="Snacks" onPress={() => navigate("snacks")} />
                </View>

            </View>


            {/* CARBOHYDRATE */}
            <View style={styles.activityContainer}>

                <View style={styles.progressBarContainer}>

                    <View style={styles.progressBarBox}>
                        <View style={styles.progressWeightBox}>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>Carbs</Text>
                            </View>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate &&
                                            carbohydrate > (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) ?
                                            (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) :
                                            carbohydrate
                                    }g
                                </Text>
                                <Text style={styles.progressText}> / </Text>
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate &&
                                        (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4))
                                    }g
                                </Text>
                            </View>
                        </View>
                        <Progress.Bar
                            borderWidth={0}
                            height={height * 0.011}
                            style={styles.progressBackground}
                            progress={carbohydrate / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate ?
                                (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) : 1
                            )}
                            width={width * 0.26}
                            color={
                                new Date(new Date().toDateString()) <= new Date(activeDate.toDateString()) ?
                                    'lime' :
                                    dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate &&
                                        carbohydrate < (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) ?
                                        'orange' :
                                        'lime'
                            }
                        />
                        <Text style={styles.progressText}>
                            {
                                dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate &&
                                    carbohydrate > (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) ?
                                    `extra ${carbohydrate - (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4))}g` :
                                    `left ${dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.carbohydrate &&
                                    (Math.floor((dailyRequiredCalories.percentage.carbohydrate * dailyRequiredCalories.calorie) / 4)) - carbohydrate}g`
                            }
                        </Text>
                    </View>


                    {/* PROTEİN */}
                    <View style={styles.progressBarBox}>
                        <View style={styles.progressWeightBox}>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>Protein</Text>
                            </View>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein &&
                                            protein > (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) ?
                                            (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) :
                                            protein
                                    }g
                                </Text>
                                <Text style={styles.progressText}> / </Text >
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein &&
                                        (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4))
                                    }g
                                </Text>
                            </View>
                        </View>
                        <Progress.Bar
                            borderWidth={0}
                            height={height * 0.011}
                            style={styles.progressBackground}
                            progress={protein / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein ?
                                (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) : 1
                            )}
                            width={width * 0.26}
                            color={
                                new Date(new Date().toDateString()) <= new Date(activeDate.toDateString()) ?
                                    'lime' :
                                    dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein &&
                                        protein < (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) ?
                                        'orange' :
                                        'lime'
                            }
                        />
                        <Text style={styles.progressText}>
                            {
                                dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein &&
                                    protein > (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) ?
                                    `extra ${protein - (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4))}g` :
                                    `left ${dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.protein &&
                                    (Math.floor((dailyRequiredCalories.percentage.protein * dailyRequiredCalories.calorie) / 4)) - protein}g`
                            }
                        </Text>
                    </View>


                    {/* FAT */}
                    <View style={styles.progressBarBox}>
                        <View style={styles.progressWeightBox}>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>Fat</Text>
                            </View>
                            <View style={styles.progressWeight}>
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat &&
                                            fat > (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) ?
                                            (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) :
                                            fat
                                    }g
                                </Text>
                                <Text style={styles.progressText}> / </Text>
                                <Text style={styles.progressText}>
                                    {
                                        dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat &&
                                        (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9))
                                    }g
                                </Text>
                            </View>
                        </View>
                        <Progress.Bar
                            borderWidth={0}
                            height={height * 0.011}
                            style={styles.progressBackground}
                            progress={fat / (dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat ?
                                (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) : 1
                            )}
                            width={width * 0.26}
                            color={
                                new Date(new Date().toDateString()) <= new Date(activeDate.toDateString()) ?
                                    'lime' :
                                    dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat &&
                                        fat < (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) ?
                                        'orange' :
                                        'lime'
                            }
                        />
                        <Text style={styles.progressText}>
                            {
                                dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat &&
                                    fat > (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) ?
                                    `extra ${fat - (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9))}g` :
                                    `left ${dailyRequiredCalories?.calorie && dailyRequiredCalories.percentage.fat &&
                                    (Math.floor((dailyRequiredCalories.percentage.fat * dailyRequiredCalories.calorie) / 9)) - fat}`
                            }
                        </Text>
                    </View>
                </View>

                {/* PERİOD */}
                <View style={styles.dailyPeriodProgressContainer}>

                    <View style={styles.periodBorder}>
                        {
                            [...Array(15).fill(0)].map((item, index) => (
                                <View key={index} style={styles.dashed}></View>
                            ))
                        }
                    </View>
                    <CalendarStrip
                        startingDate={new Date(new Date().setDate(new Date().getDate() - 3))}
                        style={styles.headerCalendar}
                        scrollable={true}
                        selectedDate={activeDate}
                        numDaysInWeek={7}
                        showMonth={false}
                        calendarHeaderStyle={{ height: 0 }}
                        useNativeDriver={true}
                        iconLeft={undefined}
                        iconRight={undefined}
                        iconLeftStyle={{ width: 0 }}
                        iconRightStyle={{ width: 0 }}
                        dayComponent={({ date }) => (
                            <View style={[{ height: height * 0.15 }]}>
                                <View style={styles.topBox}>
                                    {
                                        calculateDailyEnergy(date) != 0 &&
                                        <Pressable
                                            style={
                                                [
                                                    {
                                                        backgroundColor: new Date(new Date().toDateString()) <= new Date(new Date(date.toISOString()).toDateString()) ?
                                                            'lime' :
                                                            dailyRequiredCalories.calorie &&
                                                                dailyRequiredCalories.calorie > calculateDailyEnergy(date) ?
                                                                'red' :
                                                                'lime'
                                                        ,
                                                        height:
                                                            calculateDailyEnergy(date) /
                                                            (dailyRequiredCalories.calorie ? (dailyRequiredCalories.calorie) / (height * 0.075) : 1)
                                                    },
                                                    styles.periodBtn
                                                ]
                                            }
                                            onPress={() => dispatch(setActiveDate(new Date(new Date(date.toISOString()).toDateString())))}
                                        >

                                        </Pressable>
                                    }
                                </View>

                                <View style={styles.bottomBox}>
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' :
                                                    new Date(activeDate.toISOString()).toDateString() == new Date(date.toISOString()).toDateString() ?
                                                        '#c5c3c6' :
                                                        'rgba(255, 255,255,0.0)'

                                            },
                                            styles.btnBox
                                        ]}
                                        onPress={() => dispatch(setActiveDate(new Date(new Date(date.toISOString()).toDateString())))}
                                    >
                                        <Text style={{
                                            color: new Date(activeDate.toISOString()).toDateString() == new Date(date.toISOString()).toDateString() ?
                                                'black' : '#fff'

                                        }}>{`${days[new Date(date.toISOString()).getDay()]}`}</Text>
                                        <Text
                                            style={{
                                                color: new Date(activeDate.toISOString()).toDateString() == new Date(date.toISOString()).toDateString() ?
                                                    'black' : '#fff'
                                            }}>{`${new Date(date.toISOString()).getDate()}`}</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                        dayComponentHeight={height * 0.15}
                    />
                </View>
            </View>
        </View >
    )
}

export default HomeScreen 
