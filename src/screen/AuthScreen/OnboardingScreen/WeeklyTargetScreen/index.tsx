import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'


const WeeklyTargetScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="weekly target" step={6} />


            <View style={mainStyles.contentBox}>

            </View>


            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("register")} />
            </View>
        </View>
    )
}

export default WeeklyTargetScreen
