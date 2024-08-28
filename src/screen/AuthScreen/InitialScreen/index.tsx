import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'


const InitialScreen = () => {

    const navigation : any = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Initial screen</Text>
            <Button title='logine' onPress={() => navigation.navigate("login")}/>
        </View>
    )
}

export default InitialScreen
