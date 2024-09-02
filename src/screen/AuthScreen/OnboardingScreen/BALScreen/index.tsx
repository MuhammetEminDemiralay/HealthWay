import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../../component/customBtn'
import { mainStyles } from '../mainStyles'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { Bals, Onboarding } from '../../../../model/onboarding'
import { useDispatch, useSelector } from 'react-redux'
import { setBal } from '../../../../redux/onboardingSlice'
import { styles } from './styles'
import { scale } from 'react-native-size-matters'


const BALScreen = () => {

    const { width, height } = Dimensions.get("window");
    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const balsData = [
        { level: "Not very active", description: "Spends most of the day sitting", examples: "TV watchers, desk workers, car commuters." },
        { level: "Lightly Active", description: "Engages in light physical activities throughout the day", examples: "Teachers, store clerks, light walkers." },
        { level: "Active", description: "Regularly engages in physical activities throughout the day", examples: "Waiters, retail workers, regular exercisers." },
        { level: "Very Active", description: "Spends most of the day engaged in intense physical activities", examples: "Construction workers, athletes, farmers." }
    ];
    const { bal }: Onboarding = useSelector((state: any) => state.onboarding)
    const widthAnimatedRefs = balsData.map(() => useRef(new Animated.Value(1)).current)

    const setWidthAnimated = (index: number) => {
        Animated.timing(widthAnimatedRefs[index], {
            toValue: width * 0.9,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.linear
        }).start()
    }

    const removeWidthAnimated = (index: number) => {
        Animated.timing(widthAnimatedRefs[index], {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.linear
        }).start()
    }


    const [previouslyIndex, setPreviouslyIndex] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [state, setState] = useState(false)

    const set = (item: Bals, index: number) => {
        if (previouslyIndex == undefined) {
            setPreviouslyIndex(index)
        }
        setActiveIndex(index)
        dispatch(setBal(item))
    };

    useEffect(() => {
        if (activeIndex == previouslyIndex) {
            if (state == true) {
                setWidthAnimated(activeIndex)
                setState(false)
            } else {
                removeWidthAnimated(activeIndex)
                setState(true)
            }
        } else {
            setWidthAnimated(activeIndex)
            removeWidthAnimated(previouslyIndex)
        }
        setPreviouslyIndex(activeIndex)
    }, [bal])



    return (
        <View style={styles.container}>

            <CustomOnboardingHeader text="What's your" targetText="basic activity level" step={3} />

            <View style={mainStyles.contentBox}>

                <FlatList
                    data={balsData}
                    renderItem={({ item, index }) => (
                        <Pressable
                            key={index}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.8)',
                                    height: (height * 0.41) / 4,
                                    rowGap: 5
                                },
                                mainStyles.btnBox
                            ]}
                            onPress={() => set(item, index)}
                        >
                            <Animated.View
                                style={[{ width: widthAnimatedRefs[index] }, mainStyles.animated]}
                            />
                            <View style={styles.textBox}>
                                <Text style={styles.headerText}>{item.level}</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.bottomText}>{item.description} ({item.examples})</Text>
                            </View>
                        </Pressable>
                    )}
                    style={mainStyles.flatlistContainer}
                    showsVerticalScrollIndicator={false}
                />

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("gender")} />
            </View>
        </View>
    )
}

export default BALScreen
