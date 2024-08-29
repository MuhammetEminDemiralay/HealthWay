import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { LinearGradient } from 'expo-linear-gradient'


const RegisterScreen = () => {

    const navigation: any = useNavigation()


    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(value, { }) => {

                }}
            >
                {
                    ({ }) => (
                        <View style={styles.manuelEntryBox}>

                            <View style={styles.titleBox}>
                                <Text>Sign up</Text>
                                <Text>"If you already have a HealthWay account, you can access it using the same login method you originally used (whether it's logging in with email or through a social account)</Text>
                            </View>


                            <View
                                style={styles.inputContainer}
                            >

                            </View>
                        </View>
                    )
                }
            </Formik>

            <View style={styles.autoEntryBox}>

            </View>
        </View>
    )
}

export default RegisterScreen
