import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../../component/customBtn'
import { mainStyles } from '../mainStyles'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Onboarding } from '../../../../model/onboarding'
import { setTarget } from '../../../../redux/onboardingSlice'



const MainTargetScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation()
    const targetData = ["Lose weight", "Stay the same weight", "Gain weight", "Gain muscle", "Stress management", "Increase step count"]
    const dispatch: any = useDispatch();

    const { target }: Onboarding = useSelector((state: any) => state.onboarding)
    const widthAnimatedRefs = targetData.map(() => useRef(new Animated.Value(1)).current);

    const setWidthAnimated = (index: number) => {
        Animated.timing(widthAnimatedRefs[index], {
            toValue: width * 0.9,
            duration: 750,
            useNativeDriver: false,
            easing: Easing.linear

        }).start()
    }

    const removetWidthAnimated = (index: number) => {
        Animated.timing(widthAnimatedRefs[index], {
            toValue: 0,
            duration: 750,
            useNativeDriver: false,
            easing: Easing.linear
        }).start()
    }


    const set = (item: string, index: number) => {
        const newItem = target.find(targetItem => targetItem == item)
        dispatch(setTarget(item))
        if (newItem == undefined) {
            setWidthAnimated(index)
        } else {
            removetWidthAnimated(index)
        }
    }




    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="target" step={1} />

            <View style={mainStyles.contentBox}>

                <FlatList
                    data={targetData}
                    renderItem={({ item, index }) => (
                        <Pressable
                            key={index}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.8)'
                                },
                                styles.btnBox
                            ]}
                            onPress={() => set(item, index)}
                        >
                            <Animated.View
                                style={[{ width: widthAnimatedRefs[index] }, styles.animated]}
                            />
                            <Text style={[{ color: target.find(targetItem => targetItem == item) == undefined ? "black" : '#fff' }, styles.btnText]}>{item}</Text>
                        </Pressable>
                    )}
                    style={styles.flatlistContainer}
                    showsVerticalScrollIndicator={false}
                />

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("reasons")} />
            </View>

        </View >
    )
}

export default MainTargetScreen
