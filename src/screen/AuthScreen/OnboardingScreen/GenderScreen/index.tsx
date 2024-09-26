import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
import { Entypo } from '@expo/vector-icons';


const GenderScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const { genderAge }: Onboarding = useSelector((state: any) => state.onboarding)
    const [numbers, setNumbers] = useState<number[]>([]);
    const [age, setAge] = useState()
    const [warningState, setWarningState] = useState(false)


    const flatlistRef = useRef<any>()
    const contentOnViewRef = useRef((viewableItems: any) => {
        if (viewableItems?.changed?.length > 2) {
            setAge(viewableItems?.changed[2]?.item)
        }
    });


    const startValue = -1
    useEffect(() => {
        setNumbers([...Array(104).fill(0).map((_, index) => startValue + index)])
    }, [])


    const scrollEnd = () => {
        dispatch(setGenderAge({ ...genderAge, age: age }))
    }

    const navigate = () => {
        if (genderAge.gender != "" && genderAge.age != null) {
            navigation.navigate("weight")
        } else {
            setWarningState(true)
        }
    }


    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="gender/age" step={4} />


            <View style={mainStyles.contentBox}>

                <View style={styles.genderBox}>
                    <View style={styles.genderWrapper}>
                        <FontAwesome
                            name="male" size={scale(60)}
                            color={genderAge.gender == "male" ? "#16db65" : "#fff"}
                            onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "male" }))}
                        />
                        <CustomBtn
                            btnWidth={0.3} btnHeight={0.05}
                            onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "male" }))}
                            backgroundColor={genderAge.gender == "male" ? "#16db65" : '#fff'} text="male"
                            color={genderAge.gender == "male" ? "#fff" : 'black'}
                        />
                    </View>
                    <View style={styles.genderWrapper}>
                        <FontAwesome
                            name="female" size={scale(60)}
                            color={genderAge.gender == "female" ? "#16db65" : "#fff"}
                            onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "female" }))}
                        />
                        <CustomBtn
                            btnWidth={0.3} btnHeight={0.05}
                            onPress={() => dispatch(setGenderAge({ ...genderAge, gender: "female" }))}
                            backgroundColor={genderAge.gender == "female" ? "#16db65" : '#fff'} text="female"
                            color={genderAge.gender == "female" ? "#fff" : 'black'}
                        />
                    </View>
                </View>

                <View style={styles.ageBox}>
                    <FlatList
                        ref={flatlistRef}
                        data={numbers}
                        renderItem={({ item, index }) => (
                            <View style={[{
                                borderWidth: item < 1 || item > 100 ? 0 : 1,
                            },
                            styles.sliderBox
                            ]}
                            >
                                {
                                    item < 1 || item < 101 &&
                                    <Text style={styles.sliderText}>
                                        {item}
                                    </Text>
                                }
                            </View>
                        )}
                        style={styles.counterBox}
                        horizontal
                        onViewableItemsChanged={contentOnViewRef.current}
                        snapToInterval={width * 0.15}
                        showsHorizontalScrollIndicator={false}
                        onMomentumScrollEnd={scrollEnd}
                    />
                    <View style={styles.targetAge} />
                </View>
                {
                    (genderAge.gender == "" || genderAge.age == null) && warningState &&
                    <View style={mainStyles.warningTextBox}>
                        <Entypo name="warning" size={20} color="orange" />
                        {
                            genderAge.gender == "" &&
                            <Text style={mainStyles.warningText}>Mark gender</Text>
                        }
                        {
                            genderAge.age == null &&
                            <Text style={mainStyles.warningText}>Scroll for age</Text>
                        }
                    </View>
                }
            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={navigate} />
            </View>
        </View>
    )
}

export default GenderScreen
