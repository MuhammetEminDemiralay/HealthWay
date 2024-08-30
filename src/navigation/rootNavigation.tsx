import React, { useEffect } from 'react'
import UserStack from './userStack';
import AuthStack from './authStack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin } from '../redux/authSlice';

const RootNavigation = () => {

    const { isAuth } = useSelector((state: any) => state.auth)



    return (
        <NavigationContainer>
            {
                isAuth ? <UserStack /> : <AuthStack />
            }
        </NavigationContainer >
    )

}

export default RootNavigation
