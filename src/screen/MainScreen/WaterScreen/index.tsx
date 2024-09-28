import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../component/customHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { FontAwesome6, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import CalendarStrip from 'react-native-calendar-strip'
import { setActiveDate, setAsyncstorage, setWaterRedux } from '../../../redux/activitySlice'
import { WaterParams } from '../../../model/activity'


const WaterScreen = () => {

    const { heightWeight } = useSelector((state: RootState) => state.onboarding)
    const [dailyRequiredWater, setDailyRequiredWater] = useState<number>()
    const { width, height } = Dimensions.get("window")
    const dispatch: AppDispatch = useDispatch()
    const { activeDate, allDailyWaterData } = useSelector((state: RootState) => state.activity)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [dailyWaterData, setDailyWaterData] = useState<WaterParams[]>([])

    useEffect(() => {
        const requiredWater = Number((heightWeight.weight * 0.033).toFixed(2))
        setDailyRequiredWater(requiredWater * 1000)
    }, [])

    useEffect(() => {
        const isDailyWaterData = allDailyWaterData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isDailyWaterData) {
            setDailyWaterData(isDailyWaterData.water)
        }
    }, [allDailyWaterData])

    const setWater = (item: string) => {
        dispatch(setAsyncstorage({ water: { option: item }, subject: 'water' }))
        dispatch(setWaterRedux({ option: item }))
    }



    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.WaterContainer}>

                <View style={styles.options}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)'
                            },
                            styles.optionBtn
                        ]}
                        onPress={() => setWater('cup')}
                    >
                        <MaterialCommunityIcons name="cup" size={scale(28)} color="#4cc9f0" />
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)'
                            },
                            styles.optionBtn
                        ]}
                        onPress={() => setWater('bottle')}

                    >
                        <FontAwesome6 name="bottle-water" size={scale(26)} color="#4cc9f0" />
                    </Pressable>
                </View>

                <View style={styles.diagramBox}>

                </View>

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
                            <View style={[{ height: height * 0.25, borderWidth: 1, borderColor: '#fff' }]}>

                                <View style={styles.topBox}>

                                    <Pressable style={() => [
                                        {
                                            height:
                                                dailyRequiredWater && allDailyWaterData.find((item) => item.date.toDateString() == new Date(date.toISOString()).toDateString()) ?
                                                    (() => {
                                                        const isWaterDate = allDailyWaterData.find((item) => item.date.toDateString() == new Date(date.toISOString()).toDateString())
                                                        let value;
                                                        if (isWaterDate) {
                                                            value = isWaterDate.water.reduce((acc, item) => acc + (item ? (item.option == 'cup' ? 240 : 500) : 0), 0) / (dailyRequiredWater / (height * 0.15))
                                                        }
                                                        return isWaterDate ? value : 0
                                                    })()
                                                    :
                                                    0
                                        },
                                        styles.periodBtn
                                    ]

                                    }>

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

