import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {

    const navigation : any = useNavigation()


    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
            <Button title='onboardinge' onPress={() => navigation.navigate("onboarding")}/>
        </View>
    )
}

export default LoginScreen
