import React, { useRef, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../../../component/customHeader'
import { styles } from './styles'
import LottieView from 'lottie-react-native'
import CustomBtn from '../../../component/customBtn'

const BreathScreen = () => {

    const { width, height } = Dimensions.get("window")
    const [state, setState] = useState<boolean>(false)



    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.breathContainer}>
                <View style={styles.animationBox}>
                    <LottieView
                        autoPlay={true}
                        style={{
                            width: width * 0.95,
                            height : height * 0.68
                        }}
                        source={require("../../../../assets/animation/breath.json")}
                    />
                </View>
            </View>
        </View>
    )
}

export default BreathScreen

