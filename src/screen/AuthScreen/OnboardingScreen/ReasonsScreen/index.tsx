import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'


const ReasonsScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={mainStyles.container}>


            <CustomOnboardingHeader text="Why did you" targetText="fail before" step={2} />

            <View style={mainStyles.contentBox}>

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("bal")} />
            </View>
        </View>
    )
}

export default ReasonsScreen
