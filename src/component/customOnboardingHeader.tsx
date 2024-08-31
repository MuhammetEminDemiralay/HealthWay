import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window")

const CustomOnboardingHeader = ({ text, targetText, step, source }: any) => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.progressBox}>
                <View style={styles.backBtnBox}>
                    <FontAwesome onPress={() => navigation.goBack()} name="long-arrow-left" size={scale(26)} color="#fff" />
                </View>
                <View style={styles.progressWrapper}>
                    {
                        [...Array(step).fill(0)].map((item: number, index: number) => (
                            <View
                                key={index}
                                style={styles.progress}
                            />
                        ))
                    }
                </View>
            </View>

            <View style={styles.mainTitleBox}>
                <Text style={styles.mainTitleText}>{text} </Text>
                <Text style={styles.targetText}>{targetText}?</Text>
            </View>

            <View style={styles.animationBox}>
                {
                    step != 4 &&
                    <LottieView
                        autoPlay
                        style={{ borderWidth: 1, borderColor: '#fff', width: '100%', height: height * 0.2 }}
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
                        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: '#fff' }}>
                            <FontAwesome name="child" size={scale(50)} color="rgba(47, 245, 125,1)" />
                            <FontAwesome name="child" size={scale(40)} color="rgba(47, 245, 125, 0.5)" />
                            <FontAwesome name="child" size={scale(30)} color="rgba(47, 245, 125, 0.25)" />
                        </View>
                    </View>
                }
                {
                    step == 5 &&
                    <View style={{ flexDirection: 'row', columnGap: width * 0.1 }}>
                        <MaterialCommunityIcons name="gender-male-female" size={scale(60)} color="#2ff57e" />
                        <MaterialCommunityIcons name="human-male-height" size={scale(60)} color="#2ff57e" />
                    </View>
                }
            </View>
        </View>
    )
}

export default CustomOnboardingHeader


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.35,
        borderWidth: 1,
        borderColor: '#fff'
    },
    progressBox: {
        width: '100%',
        height: height * 0.075,
        flexDirection: 'row',
    },
    progressWrapper: {
        width: width * 0.85,
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: width * 0.025
    },
    progress: {
        width: width * 0.09,
        height: height * 0.006,
        backgroundColor: '#23e3fc',
        marginLeft: width * 0.02,
    },
    backBtnBox: {
        width: width * 0.15,
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainTitleBox: {
        width: '100%',
        height: height * 0.075,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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
        height: height * 0.2,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})