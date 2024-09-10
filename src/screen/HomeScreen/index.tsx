import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { logout } from '../../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { Auth } from '../../model/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUser, setDietCalculate } from '../../redux/userSlice'
import { food } from '../../datas/food'
import { getUserInfoAsyncstorage } from '../../redux/onboardingSlice'
import CalendarStrip from "react-native-calendar-strip";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { styles } from './styles'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)
    const { bal, weeklyTarget } = useSelector((state: any) => state.onboarding)

    const [selectedDate, setSelectedDate] = useState(new Date())


    useEffect(() => {
        dispatch(getUserInfoAsyncstorage())
    }, [])



    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
                <CalendarStrip
                    style={styles.calendar}
                    scrollable={true}
                    dateNameStyle={styles.dateName}
                    dateNumberStyle={styles.dateNumber}
                    dayContainerStyle={styles.dayContainer}
                    calendarHeaderContainerStyle={styles.calendarHeaderContainer}
                    calendarHeaderStyle={styles.calendarHeader}
                    selectedDate={selectedDate}
                    numDaysInWeek={3}
                    showMonth={true}
                    highlightDateContainerStyle={styles.highlightDateContainer}
                    highlightDateNameStyle={styles.highlightDateName}
                />
            </View>

            <View style={styles.content}>
            </View>

            <View style={styles.activityContainer}>
            </View>
        </View>
    )
}

export default HomeScreen 
