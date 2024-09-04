import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Easing, FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { styles } from './styles'
import { Onboarding } from '../../../../model/onboarding'
import { useDispatch, useSelector } from 'react-redux'
import { setReasons } from '../../../../redux/onboardingSlice'


const ReasonsScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation()
    const reasonsData = ["Shortage of time", "Difficulty complying with the regime", "food choices", "Holidays, travel and social events", "food cravings", "lack of progress"]
    const { reasons }: Onboarding = useSelector((state: any) => state.onboarding)
    const dispatch: any = useDispatch();

    const widthAnimatedRefs = reasonsData.map(() => useRef(new Animated.Value(0)).current);

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

    const set = (item: string, index: number) => {
        const newItem = reasons.find(reasonsItem => reasonsItem == item)
        dispatch(setReasons(item))
        if (newItem == undefined) {
            setWidthAnimated(index)
        } else {
            removeWidthAnimated(index)
        }
    }

    return (
        <View style={mainStyles.container}>


            <CustomOnboardingHeader text="Why did you" targetText="fail before" step={2} />

            <View style={mainStyles.contentBox}>
                <FlatList
                    data={reasonsData}
                    renderItem={({ item, index }) => (
                        <Pressable
                            key={index}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.8)',
                                    height: (height * 0.38) / 6,
                                    paddingLeft: width * 0.05,

                                },
                                mainStyles.btnBox
                            ]}
                            onPress={() => set(item, index)}
                        >
                            <Animated.View
                                style={[{ width: widthAnimatedRefs[index] }, mainStyles.animated]}
                            />
                            <Text style={mainStyles.btnText}>{item}</Text>
                        </Pressable>
                    )}
                    style={mainStyles.flatlistContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("bal")} />
            </View>
        </View>
    )
}

export default ReasonsScreen
