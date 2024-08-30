import React from 'react'
import { Button, Dimensions, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import CustomBtn from '../../../component/customBtn'
import { useDispatch } from 'react-redux'
import { googleSignin, login, register } from '../../../redux/authSlice'
import LottieView from 'lottie-react-native'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const { width, height } = Dimensions.get("window")

const LoginScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch()


    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(value) => {
                    dispatch(login(value))
                }}
            >
                {
                    ({ handleSubmit, handleChange, values }) => (
                        <View style={styles.manuelEntryBox}>

                            <View style={styles.titleTextBox}>
                                <Text style={styles.mainTitleText}>Sign in</Text>
                                <Text style={styles.tittleText}>
                                    If you already have a HealthWay account, you can access it using the same login method you originally used,
                                    whether it's by logging in with email or through a social account.
                                </Text>
                            </View>


                            <View
                                style={styles.inputContainer}
                            >
                                <View style={styles.inputBox}>
                                    <View style={styles.animationBox}>
                                        <LottieView
                                            autoPlay
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode='contain'
                                            source={require("../../../../assets/animation/email.json")}
                                        />
                                    </View>
                                    <View style={styles.inputWrapper}>
                                        <View style={styles.inputTextBox}>
                                            <Text style={styles.inputText}>Email or acount name</Text>
                                        </View>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange("email")}
                                            value={values.email}
                                        />
                                    </View>
                                    <View style={styles.iconBox}>
                                    </View>
                                </View>

                                <View style={styles.inputBox}>
                                    <View style={styles.animationBox}>
                                        <LottieView
                                            autoPlay
                                            style={{ width: '100%', height: '100%' }}
                                            resizeMode='contain'
                                            source={require("../../../../assets/animation/password.json")}
                                        />
                                    </View>

                                    <View style={styles.inputWrapper}>
                                        <View style={styles.inputTextBox}>
                                            <Text style={styles.inputText}>Password</Text>
                                        </View>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange("password")}
                                            value={values.password}
                                        />
                                    </View>

                                    <View style={styles.iconBox}>

                                    </View>
                                </View>

                                <CustomBtn
                                    btnWidth={0.8}
                                    backgroundColor="#07b34c"
                                    text="Sign in"
                                    onPress={handleSubmit}
                                />
                            </View>

                            <CustomBtn onPress={() => navigation.navigate("passwordReset")} btnWidth={0.6} btnHeight={0.05} text="Forgot your password?" />

                        </View>
                    )
                }
            </Formik>

            <View style={styles.autoEntryBox}>
                <GoogleSigninButton
                    onPress={() => dispatch(googleSignin())}
                />
            </View>
        </View>
    )
}

export default LoginScreen
