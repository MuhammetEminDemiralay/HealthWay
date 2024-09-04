import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Easing, FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../../component/customBtn'
import { mainStyles } from '../mainStyles'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Onboarding } from '../../../../model/onboarding'
import { removeTarget, setTarget } from '../../../../redux/onboardingSlice'



const MainTargetScreen = () => {

    const { width, height } = Dimensions.get("window")
    const navigation: any = useNavigation()
    const targetData = ["Lose weight", "Stay the same weight", "Gain weight", "Gain muscle", "Stress management", "Increase step count"]
    const dispatch: any = useDispatch();

    const { target }: Onboarding = useSelector((state: any) => state.onboarding)
    const widthAnimatedRefs = targetData.map(() => useRef(new Animated.Value(0)).current);

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
        const newItem = target.find(targetItem => targetItem == item)
        if (item == targetData[0] && (
            target.find(targetItem => targetItem == targetData[1]) != undefined ||
            target.find(targetItem => targetItem == targetData[2]) != undefined)) {
            dispatch(removeTarget(targetData[1]))
            dispatch(removeTarget(targetData[2]))
            removeWidthAnimated(1)
            removeWidthAnimated(2)
        }
        if (item == targetData[1] && (
            target.find(targetItem => targetItem == targetData[0]) != undefined ||
            target.find(targetItem => targetItem == targetData[2]) != undefined)) {
            dispatch(removeTarget(targetData[0]))
            dispatch(removeTarget(targetData[2]))
            removeWidthAnimated(0)
            removeWidthAnimated(2)
        }
        if (item == targetData[2] && (
            target.find(targetItem => targetItem == targetData[0]) != undefined ||
            target.find(targetItem => targetItem == targetData[1]) != undefined)) {
            dispatch(removeTarget(targetData[0]))
            dispatch(removeTarget(targetData[1]))
            removeWidthAnimated(0)
            removeWidthAnimated(1)
        }

        dispatch(setTarget(item))
        if (newItem == undefined) {
            setWidthAnimated(index)
        } else {
            removeWidthAnimated(index)
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
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',
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
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("reasons")} />
            </View>

        </View >
    )
}

export default MainTargetScreen
