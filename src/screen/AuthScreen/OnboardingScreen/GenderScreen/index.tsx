import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { FontAwesome } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import { setGenderAge } from '../../../../redux/onboardingSlice'
import { Onboarding } from '../../../../model/onboarding'


const GenderScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const { genderAge }: Onboarding = useSelector((state: any) => state.onboarding)
    const [numbers, setNumbers] = useState<number[]>([]);
    const [viewableData, setViewableData] = useState<any>()

    const flatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        setViewableData(viewableItems.changed[2])
    });

    useEffect(() => {
        setNumbers([...Array(100).fill(0).map((_, index) => index + 1)])
    }, [])

    console.log(viewableData);


    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="gender/age" step={4} />


            <View style={mainStyles.contentBox}>

                <View style={styles.genderBox}>
                    <View style={styles.genderWrapper}>
                        <FontAwesome name="male" size={scale(60)} color={genderAge.gender == "male" ? "#16db65" : "#fff"} />
                        <CustomBtn onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "male" }))} btnWidth={0.3} btnHeight={0.05} backgroundColor="#16db65" text="male" />
                    </View>
                    <View style={styles.genderWrapper}>
                        <FontAwesome name="female" size={scale(60)} color={genderAge.gender == "female" ? "#16db65" : "#fff"} />
                        <CustomBtn onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "female" }))} btnWidth={0.3} btnHeight={0.05} backgroundColor="#16db65" text="female" />
                    </View>
                </View>

                <View style={styles.ageBox}>
                    <FlatList
                        ref={flatlistRef}
                        data={numbers}
                        renderItem={({ item, index }) => (
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: width * 0.15, height: height * 0.1, borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)' }}>
                                <Text style={{ color: '#fff', fontSize: scale(20) }}>{item}</Text>
                            </View>
                        )}
                        style={styles.counterBox}
                        horizontal
                        onViewableItemsChanged={contentOnViewRef.current}
                        snapToInterval={width * 0.15}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={{ position: 'absolute', width: width * 0.15, height: height * 0.1, borderWidth: 4, borderColor: '#fff' }} />
                    <Text style={{ color: '#fff', position: 'absolute', bottom: - 40 }}>{viewableData.item}</Text>
                </View>
            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("weight")} />
            </View>
        </View>
    )
}

export default GenderScreen
