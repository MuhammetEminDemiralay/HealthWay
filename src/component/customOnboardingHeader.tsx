import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window")

const CustomOnboardingHeader = ({ text, targetText, step, source }: any) => {

    const navigation: any = useNavigation()

    const animationScale = useRef(new Animated.Value(0.5,)).current



    const grow = () => {
        Animated.timing(animationScale, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start()
    }


    useEffect(() => {
        grow()
        rotateView()
    }, [animationScale])


    const rotate = useRef(new Animated.Value(0)).current

    const rotatetInterpolate = rotate.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['0deg', '360deg', '180deg']
    })

    const rotateView = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotate, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                    easing: Easing.cubic
                }),
                Animated.timing(rotate, {
                    toValue: 2,
                    duration: 2000,
                    useNativeDriver: true
                })
            ])
        ).start()
    }



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
                        <MaterialCommunityIcons name="gender-male-female" size={scale(50)} color="#2ff57e" />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="child" size={scale(30)} color="rgba(47, 245, 125, 0.25)" />
                            <FontAwesome name="child" size={scale(40)} color="rgba(47, 245, 125, 0.5)" />
                            <FontAwesome name="child" size={scale(50)} color="rgba(47, 245, 125,1)" />
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

                {/* {
                    step == 7 &&
                    <Animated.View style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ff57e', transform: [{ rotate: rotatetInterpolate }] }} >
                        <Text>Muhammet</Text>
                    </Animated.View>

                    // <AntDesign name="checkcircle" size={scale(60)} color="#2ff57e" />
                } */}

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
        justifyContent: 'center'
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
        fontWeight: '500',
        fontSize: scale(20)
    },
    targetText: {
        color: '#fff',
        fontWeight: '500',
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
        columnGap: width * ((0.095) / 6),
        flexDirection: 'row',
    },
    progress: {
        width: width * 0.115,
        height: height * 0.006,
        backgroundColor: '#23e3fc',
    },
})