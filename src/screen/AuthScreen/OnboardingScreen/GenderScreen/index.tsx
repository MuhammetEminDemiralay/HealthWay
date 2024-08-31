import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'

const GenderScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>

            <CustomOnboardingHeader text="What's your" targetText="gender/age" step={4}/>


            <View style={mainStyles.contentBox}>

            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("weight")} />
            </View>
        </View>
    )
}

export default GenderScreen
