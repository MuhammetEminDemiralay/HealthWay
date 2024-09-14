import React, { useRef, useState } from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { food } from '../../../datas/food';
import CalendarStrip from "react-native-calendar-strip";



const FoodScreen = () => {

    const [filterData, setFilterData] = useState<any>([]);
    const calendarStripRef = useRef<any>();
    const [activeDate, setActiveDate] = useState(new Date())

    const onChangeText = (value: string) => {
        const filterDatas = food.filter(item => item?.foodName.toLowerCase().includes(value.toLowerCase()))
        if (filterDatas) {
            setFilterData(filterDatas)
        }

    }

    console.log(new Date());



    return (
        <View style={styles.container}>

            <View>
                <CalendarStrip
                    ref={calendarStripRef}
                    startingDate={new Date()}
                    style={styles.headerCalendar}
                    scrollable={true}
                    dateNameStyle={styles.dateName}
                    dateNumberStyle={styles.dateNumber}
                    dayContainerStyle={styles.dayContainer}
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
            <View style={styles.searchInputBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='search...'
                    placeholderTextColor='gray'
                    onChangeText={(value: string) => onChangeText(value)}
                />
                <Pressable style={styles.searchBtn}>
                    <MaterialCommunityIcons name="food-apple" size={scale(25)} color="#fff" />
                </Pressable>
            </View>

            <FlatList
                data={filterData}
                renderItem={({ item, index }) => (
                    <Text style={{ color: '#fff' }}>{item.foodName}</Text>
                )}
                style={styles.flatlistContainer}
            />

        </View>
    )
}

export default FoodScreen
