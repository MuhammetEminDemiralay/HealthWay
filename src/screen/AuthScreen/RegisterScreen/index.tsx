import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { LinearGradient } from 'expo-linear-gradient'
import CustomOnboardingHeader from '../../../component/customOnboardingHeader'


const RegisterScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
          
        <CustomOnboardingHeader text="Kayıt" targetText="Son" step={7} />
           
        </View>
    )
}

export default RegisterScreen
