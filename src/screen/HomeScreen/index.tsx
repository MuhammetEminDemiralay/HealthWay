import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, } from '../../redux/store'
import { Auth } from '../../model/auth'
import { getUserInfoAsyncstorage } from '../../redux/onboardingSlice'
import CalendarStrip from "react-native-calendar-strip";
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'
import CustomContentBtn from '../../component/customContentBtn'
import * as Progress from 'react-native-progress'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)
    const { bal, weeklyTarget } = useSelector((state: any) => state.onboarding)
    const { width, height } = Dimensions.get("window")
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
                <View style={styles.leftContent}>
                    <CustomContentBtn text="Exercise" value={0} icon="sports-gymnastics" />
                    <CustomContentBtn text="Steps" value={0} icon="footsteps-sharp" />
                    <CustomContentBtn text="Water" value={0} icon="cup" />
                    <CustomContentBtn text="Notes" value={0} icon="note" />
                </View>

                <View style={styles.middleContent}>
                    <Pressable style={styles.middleTopContent}>

                    </Pressable>

                    <View style={styles.calorieMeterBox}>
                        <View style={styles.calorieMeter}>
                            <Progress.Pie style={styles.progress} size={height * 0.25} borderWidth={0} color='#31cb00' progress={0.65} />
                            <View style={styles.emtyBox}></View>
                            <View style={styles.calorieScreen}>

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
                    <CustomContentBtn text="Breakfast" value={0} />
                    <CustomContentBtn text="Lunch" value={0} />
                    <CustomContentBtn text="Dinner" value={0} />
                    <CustomContentBtn text="Snacks" value={0} />
                </View>

            </View>


            <View style={styles.activityContainer}>


            </View>


        </View>
    )
}

export default HomeScreen 
