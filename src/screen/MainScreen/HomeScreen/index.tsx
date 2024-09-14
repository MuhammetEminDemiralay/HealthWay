import React, { useEffect, useRef, useState } from 'react'
import { Button, Dimensions, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, } from '../../../redux/store'
import { Auth } from '../../../model/auth'
import { getUserInfoAsyncstorage } from '../../../redux/onboardingSlice'
import CalendarStrip from "react-native-calendar-strip";
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'
import CustomContentBtn from '../../../component/customContentBtn'
import * as Progress from 'react-native-progress'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)
    const { bal, weeklyTarget } = useSelector((state: any) => state.onboarding)
    const { width, height } = Dimensions.get("window")
    const calendarStripRef = useRef<any>();
    const [activeDate, setActiveDate] = useState(new Date())
    const [visible, setVisible] = useState({ state: false, title: "" });
    const navigation: any = useNavigation();

    useEffect(() => {
        dispatch(getUserInfoAsyncstorage())
    }, [])

    const setTodayDate = () => {
        if (calendarStripRef.current != undefined) {
            calendarStripRef.current.setSelectedDate(new Date())
        }
    }

    const closeModal = () => {
        setVisible({ ...visible, state: false })
    }



    return (
        <View style={styles.container}>

            <View style={styles.headContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#c5c3c6' : 'rgba(0,0,0,0)'
                        },
                        styles.todayBtn
                    ]}
                    onPress={setTodayDate}
                >
                    <Text style={styles.todayBtnText}>Today</Text>
                </Pressable>
                <CalendarStrip
                    ref={calendarStripRef}
                    startingDate={new Date()}
                    style={styles.headerCalendar}
                    scrollable={true}
                    dateNameStyle={styles.dateName}
                    dateNumberStyle={styles.dateNumber}
                    dayContainerStyle={styles.dayContainer}
                    calendarHeaderContainerStyle={styles.calendarHeaderContainer}
                    calendarHeaderStyle={styles.calendarHeader}
                    selectedDate={new Date()}
                    onDateSelected={(date: moment.Moment) => setActiveDate(date.toDate())}
                    numDaysInWeek={3}
                    showMonth={true}
                    highlightDateContainerStyle={styles.highlightDateContainer}
                    highlightDateNameStyle={styles.highlightDateName}
                    useNativeDriver={false}
                    iconStyle={{ tintColor: '#fff' }}
                />
            </View>


            <View style={styles.content}>
                <View style={styles.leftContent}>
                    <CustomContentBtn text="Exercise" value={0} icon="sports-gymnastics" setVisible={() => navigation.navigate("exercise")} />
                    <CustomContentBtn text="Steps" value={0} icon="footsteps-sharp" setVisible={() => navigation.navigate("step")} />
                    <CustomContentBtn text="Water" value={0} icon="cup" setVisible={() => navigation.navigate("water")} />
                    <CustomContentBtn text="Notes" value={0} icon="note" setVisible={() => navigation.navigate("notes")} />
                </View>

                <View style={styles.middleContent}>
                    <Pressable style={styles.middleTopContent}>

                    </Pressable>

                    <View style={styles.calorieMeterBox}>
                        <View style={styles.calorieMeter}>
                            <Progress.Pie style={styles.progress} size={height * 0.25} borderWidth={0} color='lime' progress={0.8} />
                            <View style={styles.emtyBox}></View>
                            <View style={styles.calorieScreen}>
                                <Text style={{ fontSize: 30 }}>0</Text>
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
                    <CustomContentBtn text="Breakfast" value={0} setVisible={() => navigation.navigate("food")} />
                    <CustomContentBtn text="Lunch" value={0} setVisible={() => navigation.navigate("food")} />
                    <CustomContentBtn text="Dinner" value={0} setVisible={() => navigation.navigate("food")} />
                    <CustomContentBtn text="Snacks" value={0} setVisible={() => navigation.navigate("food")} />
                </View>

            </View>


            <View style={styles.activityContainer}>

            </View>


        </View>
    )
}

export default HomeScreen 
