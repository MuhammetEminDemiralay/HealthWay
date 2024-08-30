import React, { useEffect } from 'react'
import { Button, Dimensions, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../component/customBtn'
import LottieView from 'lottie-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'
import { autoLogin } from '../../../redux/authSlice'

const { width, height } = Dimensions.get("window")

const InitialScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch()


    useEffect(() => {
        dispatch(autoLogin())
    }, [])



    return (
        <LinearGradient
            colors={["#0295F6", "white", "white"]}
            style={styles.container}
        >

            <View style={[{ height: height * 0.3 }, styles.locationBox]}>
                <Text style={styles.title}>Health Way</Text>
            </View>

            <View style={[{ height: height * 0.4, }, styles.locationBox]}>
                <LottieView
                    autoPlay={true}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={require("../../../../assets/animation/running_person.json")}
                />
            </View>

            <View style={[{ height: height * 0.3 }, styles.locationBox]}>
                <CustomBtn btnWidth={0.8} text="Sign up" backgroundColor="#07b34c" fontWeight="900" onPress={() => navigation.navigate("register")} />
                <CustomBtn btnWidth={0.8} text="Sign in" backgroundColor="#0295F6" onPress={() => navigation.navigate("login")} />
            </View>


        </LinearGradient>
    )
}

export default InitialScreen
