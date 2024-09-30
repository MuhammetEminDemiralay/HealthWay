import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../component/customHeader'
import { styles } from './styles'
import LottieView from 'lottie-react-native'

const BreathScreen = () => {

    const { width, height } = Dimensions.get("window")


    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.breathContainer}>
                <View style={styles.animationBox}>
                    <LottieView
                        autoPlay={true}
                        style={{
                            width: width * 0.95,
                            height: 450,
                        }}
                        source={require("../../../../assets/animation/breath.json")}
                    />
                </View>
            </View>
        </View>
    )
}

export default BreathScreen

