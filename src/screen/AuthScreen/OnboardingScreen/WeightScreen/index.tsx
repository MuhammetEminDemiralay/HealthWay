import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'


const WeightScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={mainStyles.container}>


            <CustomOnboardingHeader text="Wha's your" targetText="weight/height" step={5} />

            <View style={mainStyles.contentBox}>

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("weeklyTarget")} />
            </View>
        </View>
    )
}

export default WeightScreen
