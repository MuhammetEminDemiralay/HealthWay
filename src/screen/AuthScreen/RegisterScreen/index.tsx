import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'


const RegisteScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
            <Text>Register screen</Text>
            <Button title='initial' onPress={() => navigation.navigate("initial")} />
        </View>
    )
}

export default RegisteScreen
