import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'


const OnboardingScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
            <Text>Onboarding screen</Text>
            <Button title='registera' onPress={() => navigation.navigate("register")} />

        </View>
    )
}

export default OnboardingScreen
