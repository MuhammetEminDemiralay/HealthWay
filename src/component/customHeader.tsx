import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CalendarStrip from "react-native-calendar-strip";
import { scale } from 'react-native-size-matters';
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../datas/navigationType';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setActiveDate, setActiveMealFoodCategory } from '../redux/activitySlice';



const { width, height } = Dimensions.get("window")

const CustomHeader = () => {

    const calendarStripRef = useRef<any>();
    const navigation: NavigationProps = useNavigation()
    const { params, name }: any = useRoute();
    const [onCategory, setOnCategory] = useState(false)
    const [activeFoodCategory, setActiveFoodCategory] = useState<string | undefined>(params?.value)
    const foodCategory = ["breakfast", "lunch", "dinner", "snacks"]
    const { activeDate, activeMealFoodCategory } = useSelector(((state: RootState) => state.activity))
    const dispatch = useDispatch<AppDispatch>()


    const setDropdown = (item: string) => {
        dispatch(setActiveMealFoodCategory(item))
        setActiveFoodCategory(item)
        setOnCategory(false)
    }

    const goBack = () => {
        dispatch(setActiveMealFoodCategory("health way"))
        navigation.goBack()
    }

    const setTodayDate = () => {
        dispatch(setActiveDate(new Date()))

    }


    return (
        <View style={styles.container}>


            {/* Dropdown */}
            {
                onCategory && name == 'food' &&
                <View style={styles.dropdownBox}>
                    <FlatList
                        data={foodCategory.filter(item => item != activeFoodCategory)}
                        renderItem={({ item, index }) => (
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? '#c5c3c6' : '#dcdcdd'
                                    },
                                    styles.dropDownBtn
                                ]}
                                onPress={() => setDropdown(item)}
                            >
                                <Text style={styles.dropdownText}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            }

            <View style={styles.headerTopContainer}>
                <Pressable style={styles.backIconBox}>
                    {
                        activeMealFoodCategory != "health way" &&
                        < FontAwesome onPress={() => goBack()} name="long-arrow-left" size={scale(26)} color="#fff" />
                    }
                </Pressable>
                <View style={styles.headerTextBox}>
                    {
                        activeMealFoodCategory != 'health way' ?
                            <Text style={styles.headerText}>{activeMealFoodCategory}</Text> :
                            <Text style={styles.headerText}>HEALTH WAY</Text>

                    }

                    {
                        name == "food" &&
                        <>
                            {
                                onCategory == false &&
                                <Entypo onPress={() => setOnCategory(!onCategory)} name="chevron-down" size={scale(22)} color="#fff" />
                            }
                            {
                                onCategory &&
                                <Entypo onPress={() => setOnCategory(!onCategory)} name="chevron-up" size={scale(22)} color="#fff" />
                            }
                        </>
                    }

                </View>
            </View>


            <View style={styles.headerBottomContainer}>

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ?
                                '#c5c3c6' :
                                new Date().toDateString() == activeDate.toDateString() ?
                                    'rgba(255,255,255,0.25)' :
                                    'rgba(0,0,0,0)'
                        },
                        styles.todayBtn
                    ]}
                    onPress={setTodayDate}
                >
                    <Text style={[
                        {
                            color: new Date().toDateString() == activeDate.toDateString() ?
                                'black' :
                                '#fff'

                        },
                        styles.todayBtnText
                    ]}>Today</Text>
                </Pressable>

                <CalendarStrip
                    ref={calendarStripRef}
                    startingDate={new Date(new Date().setDate(new Date().getDate() - 1))}
                    style={styles.headerCalendar}
                    scrollable={true}
                    dateNameStyle={styles.dateName}
                    dateNumberStyle={styles.dateNumber}
                    dayContainerStyle={styles.dayContainer}
                    selectedDate={activeDate}
                    onDateSelected={(date: moment.Moment) => dispatch(setActiveDate(date.toDate()))}
                    numDaysInWeek={3}
                    showMonth={false}
                    highlightDateContainerStyle={styles.highlightDateContainer}
                    highlightDateNameStyle={styles.highlightDateName}
                    useNativeDriver={true}
                    iconStyle={{ tintColor: '#fff' }}
                />
            </View>

        </View>
    )
}

export default CustomHeader


const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height * 0.175,
        alignItems: 'center',
        marginTop: height * 0.015
    },
    headerTopContainer: {
        width: width * 0.95,
        height: height * 0.075,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#778da9',
    },
    backIconBox: {
        width: width * 0.15,
        height: height * 0.05,
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBottomContainer: {
        width: width * 0.95,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#495057',
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    todayBtn: {
        width: width * 0.15,
        height: height * 0.05,
        borderBottomWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: width * 0.025
    },
    todayBtnText: {
        fontWeight: '500',
        fontSize: scale(14)
    },
    headerTextBox: {
        flexDirection: 'row',
        columnGap: width * 0.025,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: scale(18),
        fontWeight: '700'
    },
    dropdownBox: {
        position: 'absolute',
        top: height * 0.075,
        width: width * 0.9,
        height: height * 0.2,
        zIndex: 99,
        backgroundColor: '#dcdcdd',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    dropDownBtn: {
        width: width * 0.9,
        height: (height * 0.19) / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownText: {
        fontSize: scale(16),
        textTransform: 'uppercase',
        fontWeight: "700",
        color: '#778da9'
    },
    headerCalendar: {
        width: width * 0.55,
        height: height * 0.1,
    },
    dateName: {
        color: '#fff'
    },
    dateNumber: {
        color: '#fff'
    },
    dayContainer: {
        borderRadius: 0
    },
    highlightDateContainer: {
        backgroundColor: '#c5c3c6',
        borderRadius: 10
    },
    highlightDateName: {
        fontWeight: '700',
    },


})
