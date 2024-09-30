import React, { useEffect, useState } from 'react'
import { BackHandler, Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomHeader from '../../../component/customHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { setAsyncstorage, setNotesRedux } from '../../../redux/activitySlice'
import { NotesParams } from '../../../model/activity'


const NotesScreen = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { activeDate, allDailyNotesData } = useSelector((state: RootState) => state.activity)
    const [text, setText] = useState<string>("")
    const [dailyNotes, setDailyNotes] = useState<NotesParams[]>()
    const colors = ['#e2e41d', '#fffaff', '#e5e5e5', '#c4c4c4']
    const { width, height } = Dimensions.get("window")

    useEffect(() => {
        const isDailyNotesData = allDailyNotesData.find(({ date }) => date.toDateString() == activeDate.toDateString())
        if (isDailyNotesData) {
            setDailyNotes(isDailyNotesData.notes)
        } else {
            setDailyNotes([])
        }
    }, [allDailyNotesData, activeDate])

    const setNotes = (noteDate?: string) => {
        if (text != "" || noteDate != undefined) {
            dispatch(setNotesRedux({ note: text, date: noteDate }))
            dispatch(setAsyncstorage({ notes: { note: text, date: noteDate }, subject: 'notes' }))
        }
        setText("")
    }

    return (
        <View style={styles.container}>
            <CustomHeader />

            <View style={styles.noteContainer}>
                <View style={styles.noteAddBox}>
                    <TextInput
                        style={styles.noteTextInput}
                        multiline={true}
                        numberOfLines={6}
                        cursorColor={'#fff'}
                        value={text}
                        autoCorrect={false}
                        spellCheck={false}
                        onChangeText={(text: string) => setText(text)}
                        placeholder='notes . . . '
                        placeholderTextColor='#fff'
                    />
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : '#c4c4c4'
                            },
                            styles.noteBtn
                        ]}
                        onPress={() => setNotes()}
                    >
                        <FontAwesome6 name="plus" size={scale(18)} color="#343a40" />
                    </Pressable>
                </View>

                <View style={styles.noteListBox}>
                    <FlatList
                        data={dailyNotes}
                        renderItem={({ item, index }) => (
                            <View
                                style={
                                    [
                                        {
                                            backgroundColor: colors[index <= 3 ? index : index % 4]
                                        },
                                        styles.noteBox
                                    ]
                                }
                            >
                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'red' : 'rgba(0,0,0,0)'
                                        },
                                        styles.deleteBox
                                    ]}
                                    onPress={() => setNotes(item.date)}
                                >
                                    <MaterialIcons name="delete" size={scale(20)} color="'black'" />
                                </Pressable>
                                <Text
                                    style={styles.noteDate}
                                >
                                    {`${item.date && new Date(item.date).getHours() < 10 ? `0${new Date(item.date).getHours()}` : item.date && new Date(item.date).getHours()}`} : {`${item.date && new Date(item.date).getMinutes() < 10 ? `0${new Date(item.date).getMinutes()}` : item.date && new Date(item.date).getMinutes()}`}
                                </Text>
                                <Text style={styles.noteText}>{item.note}</Text>
                            </View>
                        )}
                        style={styles.noteFlatlistContainer}
                        columnWrapperStyle={styles.noteColumnWrapper}
                        numColumns={2}
                        snapToInterval={width * 0.49}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}

export default NotesScreen
