import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../component/customHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { FontAwesome6, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import CalendarStrip from 'react-native-calendar-strip'
import { setActiveDate, setAsyncstorage, setWaterRedux } from '../../../redux/activitySlice'
import { WaterParams } from '../../../model/activity'
import * as Progress from 'react-native-progress'

const WaterScreen = () => {

    const { heightWeight } = useSelector((state: RootState) => state.onboarding)
    const [dailyRequiredWater, setDailyRequiredWater] = useState<number>()
    const { width, height } = Dimensions.get("window")
    const dispatch: AppDispatch = useDispatch()
    const { activeDate, allDailyWaterData } = useSelector((state: RootState) => state.activity)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [dailyWaterData, setDailyWaterData] = useState<WaterParams[]>()
    const hours = [0, 4, 8, 12, 16, 20]

    useEffect(() => {
        const requiredWater = Number((heightWeight.weight * 0.033).toFixed(2))
        setDailyRequiredWater(requiredWater * 1000)
    }, [])

    useEffect(() => {
        const isDailyWaterData = allDailyWaterData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isDailyWaterData) {
            setDailyWaterData(isDailyWaterData.water)
        } else {
            setDailyWaterData([])
        }
    }, [allDailyWaterData, activeDate])

    const setWater = (item: string, date?: string) => {
        dispatch(setWaterRedux({ option: item, date: date != undefined ? date : `${new Date()}` }))
        dispatch(setAsyncstorage({ water: { option: item, date: date != undefined ? date : `${new Date()}` }, subject: 'water' }))
    }

    const dailyCalculateWater = (date: moment.Duration | Date) => {
        const isWaterDate = allDailyWaterData.find((item) => item.date.toDateString() == new Date(date.toISOString()).toDateString())
        let value = 0;
        if (isWaterDate) {
            value = isWaterDate.water.reduce((acc, item) => acc + (item ? (item.option == 'cup' ? 200 : 500) : 0), 0) / (dailyRequiredWater ? (dailyRequiredWater / (height * 0.15)) : 1)
        }

        console.log("value", value);

        return isWaterDate ? value : 0
    }


    console.log((dailyCalculateWater(activeDate)) / (dailyRequiredWater ? dailyRequiredWater : 1));

    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.WaterContainer}>
                <View style={styles.optionsContainer}>
                    <View style={styles.optionBox}>
                        <View style={styles.optionWrapper}>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                                        width: height * 0.06,
                                        height: height * 0.06,
                                    },
                                    styles.optionBtn
                                ]}
                                onPress={() => setWater('cup')}
                            >
                                <MaterialCommunityIcons name="cup" size={scale(28)} color="#4cc9f0" />
                            </Pressable>
                            <Text style={styles.optionText}>200 ml</Text>
                        </View>

                        <View style={styles.optionWrapper}>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                                        width: height * 0.06,
                                        height: height * 0.06,
                                    },
                                    styles.optionBtn
                                ]}
                                onPress={() => setWater('bottle')}
                            >
                                <FontAwesome6 name="bottle-water" size={scale(26)} color="#4cc9f0" />
                            </Pressable>
                            <Text style={styles.optionText}>500 ml</Text>
                        </View>
                    </View>

                    <View style={styles.progressBox}>
                        <View style={styles.wordBox}>
                            <Text style={styles.wordText}>Drink more water, feel more alive</Text>
                        </View>
                        <View style={styles.progressWrapper}>
                            <Progress.Bar
                                borderWidth={2}
                                borderColor='#fff'
                                borderRadius={10}
                                height={height * 0.02}
                                progress={dailyCalculateWater(activeDate) / (dailyRequiredWater ? dailyRequiredWater : 1)}
                                width={width * 0.5}
                                color='#4cc9f0'
                            />
                        </View>
                    </View>
                </View>

                {/* HOURLY */}
                <View style={styles.diagramBox}>
                    <FlatList
                        data={hours}
                        renderItem={({ item, index }) => (
                            <View style={styles.hourBox}>
                                <FlatList
                                    data={dailyWaterData?.filter(({ date }) => item < new Date(`${date}`).getHours() && new Date(`${date}`).getHours() < (item + 4))}
                                    renderItem={({ item, index }) => (
                                        <>
                                            {
                                                item.option == 'cup' ?
                                                    <Pressable
                                                        style={({ pressed }) => [
                                                            {
                                                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                                                                marginBottom: height * 0.005,
                                                                width: height * 0.05,
                                                                height: height * 0.05,
                                                            },
                                                            styles.optionBtn
                                                        ]}
                                                        onLongPress={() => setWater('cup', item.date)}
                                                    >
                                                        <MaterialCommunityIcons name="cup" size={scale(20)} color="#4cc9f0" />
                                                    </Pressable> :
                                                    <Pressable
                                                        style={({ pressed }) => [
                                                            {
                                                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                                                                marginBottom: height * 0.005,
                                                                width: height * 0.05,
                                                                height: height * 0.05,
                                                            },
                                                            styles.optionBtn
                                                        ]}
                                                        onLongPress={() => setWater('bottle', item.date)}
                                                    >
                                                        <FontAwesome6 name="bottle-water" size={scale(20)} color="#4cc9f0" />
                                                    </Pressable>
                                            }
                                        </>
                                    )}
                                    style={styles.contentBox}
                                    inverted
                                    snapToInterval={height * 0.055}
                                    showsVerticalScrollIndicator={false}
                                />
                                <View style={styles.timeBox}>
                                    <Text style={styles.time}>{item}.00</Text>
                                </View>
                            </View>
                        )}
                        style={styles.flatlistContainer}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        scrollEnabled={false}
                    />
                </View>


                {/* DAİLY */}
                <View style={styles.diagramBox}>
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
                        iconLeft={null}
                        iconRight={null}
                        iconLeftStyle={{ width: 0 }}
                        iconRightStyle={{ width: 0 }}
                        dayComponent={({ date }) => (
                            <View style={[{ height: height * 0.25 }]}>

                                <View style={styles.topBox}>

                                    <Pressable style={() => [
                                        {

                                            backgroundColor: new Date(new Date(date.toISOString()).toDateString()) < new Date(new Date().toDateString()) ?
                                                dailyRequiredWater && dailyRequiredWater < (dailyCalculateWater(date) * (dailyRequiredWater ? (dailyRequiredWater / (height * 0.15)) : 1)) ?
                                                    '#4cc9f0' :
                                                    'rgba(76, 201, 240, 0.4)' :
                                                '#4cc9f0'
                                            ,
                                            height:
                                                dailyRequiredWater && allDailyWaterData.find((item) => item.date.toDateString() == new Date(date.toISOString()).toDateString()) ?
                                                    dailyCalculateWater(date) :
                                                    0
                                        },
                                        styles.periodBtn
                                    ]
                                    }
                                        onPress={() => dispatch(setActiveDate(new Date(new Date(date.toISOString()).toDateString())))}
                                    >

                                    </Pressable>


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
                        dayComponentHeight={height * 0.25}
                    />
                </View>

            </View>
        </View >
    )
}

export default WaterScreen

