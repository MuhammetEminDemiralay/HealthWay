import React from 'react'
import UserStack from './userStack';
import AuthStack from './authStack';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigation = () => {

    const auth = false;

    return (
        <NavigationContainer>
            {
                auth ? <UserStack /> : <AuthStack />
            }
        </NavigationContainer >
    )

}

export default RootNavigation
