import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { Ionicons, Fontisto, Entypo } from '@expo/vector-icons';
import { food } from '../../../datas/food';
import CustomHeader from '../../../component/customHeader';
import { FoodItem } from '../../../model/food';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { DailyCalorie, DataModel, Params } from '../../../model/activity';
import { getAsyncstorage, setActiveData, setCaloriesConsumed, setAsyncstorage, setFoodRedux } from '../../../redux/activitySlice';



const FoodScreen = () => {

    const [filterData, setFilterData] = useState<FoodItem[]>([]);
    const { width, height } = Dimensions.get("window");
    const dispatch = useDispatch<AppDispatch>();
    const { foodsConsumed, activeDate, activeData, allDailyFoodData, productInformation } = useSelector((state: RootState) => state.activity)

    const onChangeText = (value: string) => {
        const filterDatas = food.filter(item => item?.foodName.toLowerCase().includes(value.toLowerCase()))
        if (filterDatas) {
            setFilterData(filterDatas)
        }
    }

    const setFood = (item: Params) => {
        dispatch(setCaloriesConsumed(item.food?.foodName))
        dispatch(setFoodRedux({ foodName: item.food?.foodName, amountState: item.food?.amountState }))
        dispatch(setAsyncstorage({ food: { foodName: item.food?.foodName, amountState: item.food?.amountState }, subject: 'food' }))
    }

    useEffect(() => {
        dispatch(setActiveData());
    }, [activeDate, allDailyFoodData])



    return (
        <View style={styles.container}>

            <CustomHeader />

            <View style={styles.searchInputBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='search...'
                    placeholderTextColor='gray'
                    onChangeText={(value: string) => onChangeText(value)}
                />
                <View style={styles.searchIconBox}>
                    <Fontisto name="search" size={scale(25)} color="#fff" />
                </View>
            </View>

            <FlatList
                data={filterData}
                renderItem={({ item, index }) => (
                    <View
                        key={index}
                        style={styles.foodBtnBox}
                    >
                        <View style={styles.foodLeftBox}>
                            <View style={styles.titleBox}>
                                <Text
                                    numberOfLines={2}
                                    style={styles.foodNameText}
                                >{item.foodName}</Text>
                            </View>
                            <View style={styles.subTextBox}>
                                <Text style={styles.calText}>{item.energy?.value} cals</Text>
                                <Text style={styles.measureText}> / {item.measure}</Text>
                                {
                                    productInformation.find((food) => food.foodName == item.foodName) != undefined &&
                                    <Text style={{ color: '#fff', position: 'absolute', right: 10 }}>{activeData?.data.find(foodItem => foodItem.foodName == item.foodName)?.amount}x</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.foodRightBox}>
                            {
                                activeData?.data != undefined && activeData?.data.find(foodItem => foodItem.foodName == item.foodName) &&
                                <View style={styles.amountBox}>
                                    <Pressable style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'rgba(255, 255,255,0.5)' : 'rgba(0,0,0,0)'
                                        },
                                        styles.amountBtnBox
                                    ]}
                                        onPress={() => setFood({ food: { foodName: item.foodName, amountState: 'up' }, subject: 'food' })}
                                    >
                                        <Entypo name="chevron-up" size={24} color="#fff" />
                                    </Pressable>
                                    <Pressable style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'rgba(255, 255,255,0.5)' : 'rgba(0,0,0,0)'
                                        },
                                        styles.amountBtnBox
                                    ]}
                                        onPress={() => setFood({ food: { foodName: item.foodName, amountState: 'down' }, subject: 'food' })}
                                    >
                                        <Entypo name="chevron-down" size={24} color="#fff" />
                                    </Pressable>
                                </View>
                            }
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'black'
                                    },
                                    styles.checkBox
                                ]}
                                onPress={() => setFood({ food: { foodName: item.foodName }, subject: 'food' })}
                            >
                                {
                                    activeData?.data.find(foodItem => foodItem.foodName == item.foodName) &&
                                    <Ionicons name="checkmark-outline" size={24} color="#fff" />
                                }
                            </Pressable>
                        </View>
                    </View>
                )}
                style={styles.flatlistContainer}
                showsVerticalScrollIndicator={false}
                snapToInterval={height * 0.085}
            />

        </View>
    )
}

export default FoodScreen
