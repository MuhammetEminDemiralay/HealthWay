import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'


const HomeScreen = () => {

    const dispatch: any = useDispatch();

    return (
        <View style={styles.container}>
            <Text>Welcome to RAMS PARK</Text>
            <Button title='Logout' onPress={() => dispatch(logout())} />
        </View>
    )
}

export default HomeScreen
