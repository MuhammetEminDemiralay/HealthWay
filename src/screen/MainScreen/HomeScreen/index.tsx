import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, } from '../../../redux/store'
import { Auth } from '../../../model/auth'
import { getUserInfoAsyncstorage } from '../../../redux/onboardingSlice'
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles'
import CustomContentBtn from '../../../component/customContentBtn'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../../../datas/navigationType'
import CustomHeader from '../../../component/customHeader'
import { BlurView } from 'expo-blur'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)
    const { bal, weeklyTarget } = useSelector((state: any) => state.onboarding)
    const { width, height } = Dimensions.get("window")
    const calendarStripRef = useRef<any>();
    const [activeDate, setActiveDate] = useState(new Date())
    const navigation: NavigationProps = useNavigation();

    useEffect(() => {
        dispatch(getUserInfoAsyncstorage())
    }, [])



    return (
        <View style={styles.container} >

            <CustomHeader />

            <View style={styles.content}>
                <View style={styles.leftContent}>
                    <CustomContentBtn text="Exercise" value={0} icon="sports-gymnastics" setVisible={() => navigation.navigate('exercise', { value: 'exercise' })} />
                    <CustomContentBtn text="Steps" value={0} icon="footsteps-sharp" setVisible={() => navigation.navigate('step', { value: "steps" })} />
                    <CustomContentBtn text="Water" value={0} icon="cup" setVisible={() => navigation.navigate("water", { value: "water" })} />
                    <CustomContentBtn text="Notes" value={0} icon="note" setVisible={() => navigation.navigate("notes", { value: 'notes' })} />
                </View>

                <View style={styles.middleContent}>
                    <Pressable style={styles.middleTopContent}>

                    </Pressable>

                    <View style={styles.calorieMeterBox}>
                        <View style={styles.calorieMeter}>
                            <Progress.Circle thickness={height * 0.025} style={styles.progress} size={height * 0.25} borderWidth={0} color='lime' progress={0.8} />
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
                    <CustomContentBtn text="Breakfast" value={0} setVisible={() => navigation.navigate('food', { value: 'breakfast' })} />
                    <CustomContentBtn text="Lunch" value={0} setVisible={() => navigation.navigate('food', { value: 'lunch' })} />
                    <CustomContentBtn text="Dinner" value={0} setVisible={() => navigation.navigate('food', { value: 'dinner' })} />
                    <CustomContentBtn text="Snacks" value={0} setVisible={() => navigation.navigate('food', { value: 'snacks' })} />
                </View>

            </View>


            <View style={styles.activityContainer}>

            </View>

        </View>
    )
}

export default HomeScreen 
