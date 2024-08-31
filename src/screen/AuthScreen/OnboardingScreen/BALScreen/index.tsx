import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../../../component/customBtn'
import { mainStyles } from '../mainStyles'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'


const BALScreen = () => {

    const navigation: any = useNavigation()

    return (
        <View style={styles.container}>

            <CustomOnboardingHeader text="What's your" targetText="basic activity level" step={3} />


            <View style={mainStyles.contentBox}>

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("gender")} />
            </View>
        </View>
    )
}

export default BALScreen
