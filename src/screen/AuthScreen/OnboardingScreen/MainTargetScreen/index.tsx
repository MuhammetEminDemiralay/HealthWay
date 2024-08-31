import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../../component/customBtn'
import { mainStyles } from '../mainStyles'
import { FontAwesome } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import OnboardingHeader from '../../../../component/customOnboardingHeader'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'



const MainTargetScreen = () => {

    const navigation: any = useNavigation()

    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="target" step={1} />

            <View style={mainStyles.contentBox}>

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("reasons")} />
            </View>

        </View>
    )
}

export default MainTargetScreen
