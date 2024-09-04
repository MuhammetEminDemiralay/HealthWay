import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window")
const FontAwesomeIcon = Animated.createAnimatedComponent(FontAwesome)

const CustomOnboardingHeader = ({ text, targetText, step, source }: any) => {

    const navigation: any = useNavigation()


    const animatedUpDownRef1 = useRef(new Animated.Value(0)).current
    const animatedUpDownRef2 = useRef(new Animated.Value(0)).current
    const animatedUpDownRef3 = useRef(new Animated.Value(0)).current


    const setUpDown = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedUpDownRef1, {
                    toValue: -height * 0.05,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(animatedUpDownRef2, {
                    toValue: -height * 0.05,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animatedUpDownRef3, {
                    toValue: -height * 0.05,
                    duration: 750,
                    useNativeDriver: true
                }),
                Animated.timing(animatedUpDownRef1, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(animatedUpDownRef2, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animatedUpDownRef3, {
                    toValue: 0,
                    duration: 750,
                    useNativeDriver: true
                }),
            ])).start();
    }


    const rotateRef = useRef(new Animated.Value(0)).current
    const rotateInterpolate = rotateRef.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['0deg', '360deg', '0deg']
    })

    const rotateView = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateRef, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(rotateRef, {
                    toValue: 2,
                    duration: 2000,
                    useNativeDriver: true
                })
            ])
        ).start()
    }

    useEffect(() => {
        rotateView();
        setUpDown();
    }, [rotateRef])

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.backBtnBox}>
                    <FontAwesome onPress={() => navigation.goBack()} name="long-arrow-left" size={scale(26)} color="#fff" />
                </View>

                <View style={styles.mainTitleBox}>
                    <Text style={styles.mainTitleText}>{text} </Text>
                    <Text style={styles.targetText}>{targetText}?</Text>
                </View>


            </View>



            <View style={styles.animationBox}>
                {
                    step != 4 && step != 5 && step != 6 && step != 7 &&
                    <LottieView
                        autoPlay
                        style={{ height: height * 0.2, width: width }}
                        resizeMode='contain'
                        source={
                            step == 1 ? require("../../assets/animation/arrow.json") :
                                step == 2 ? require("../../assets/animation/fail.json") :
                                    step == 3 && require("../../assets/animation/zigzag.json")
                        }
                    />
                }
                {
                    step == 4 &&
                    <View style={{ flexDirection: 'row', columnGap: width * 0.1 }}>
                        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                            <MaterialCommunityIcons name="gender-male-female" size={scale(50)} color="#2ff57e" />
                        </Animated.View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon style={{ transform: [{ translateY: animatedUpDownRef1 }] }} name="child" size={scale(30)} color="rgba(47, 245, 125, 0.25)" />
                            <FontAwesomeIcon style={{ transform: [{ translateY: animatedUpDownRef2 }] }} name="child" size={scale(40)} color="rgba(47, 245, 125, 0.5)" />
                            <FontAwesomeIcon style={{ transform: [{ translateY: animatedUpDownRef3 }] }} name="child" size={scale(50)} color="rgba(47, 245, 125,1)" />
                        </View>
                    </View>
                }
                {
                    step == 5 &&
                    <View style={{ flexDirection: 'row', columnGap: width * 0.1 }}>
                        <FontAwesome6 name="weight-scale" size={scale(60)} color="#2ff57e" />
                        <MaterialCommunityIcons name="human-male-height" size={scale(60)} color="#2ff57e" />
                    </View>
                }
                {
                    step == 6 &&
                    <FontAwesome name="calendar" size={scale(60)} color="#2ff57e" />
                }

            </View>

            <View style={styles.progressBox}>
                {
                    [...Array(step).fill(0)].map((item: number, index: number) => (
                        <View
                            key={index}
                            style={styles.progress}
                        />
                    ))
                }
            </View>
        </View >
    )
}

export default CustomOnboardingHeader


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.35,
        alignItems: 'center'
    },
    headerBox: {
        width: '100%',
        height: height * 0.075,
        flexDirection: 'row',
    },
    backBtnBox: {
        width: width * 0.15,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff'
    },
    mainTitleBox: {
        width: width * 0.85,
        height: height * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    mainTitleText: {
        color: '#dbdbdb',
        fontSize: scale(18)
    },
    targetText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: scale(20)
    },
    animationBox: {
        width: '100%',
        height: height * 0.225,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBox: {
        width: width * 0.9,
        height: height * 0.05,
        alignItems: 'flex-end',
        columnGap: width * 0.024,
        flexDirection: 'row',
    },
    progress: {
        width: width * 0.13,
        height: height * 0.006,
        backgroundColor: '#23e3fc',
    },
})