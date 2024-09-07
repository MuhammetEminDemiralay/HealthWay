import React, { useEffect } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { logout } from '../../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { Auth } from '../../model/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUser } from '../../redux/userSlice'
import { food } from '../../datas/food'


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user, uid }: Auth = useSelector((state: any) => state.auth)

    useEffect(() => {
        console.log("uid", uid);
    }, [])

    const a = async () => {
        const keys = await AsyncStorage.getItem("_uid");
        console.log("keys", keys);
    }


    return (
        <View style={styles.container}>
            <Text>Welcome to RAMS PARK</Text>
            <FlatList
                data={food}
                renderItem={({ item, index }) => (
                    <Text>{item.protein.value}</Text>
                )}
            />
        </View>
    )
}

export default HomeScreen
