import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import CustomBtn from '../../../component/customBtn'
import LottieView from 'lottie-react-native'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../../redux/authSlice'


const PasswordResetScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch();

    return (
        <View style={styles.container}>

            <View style={styles.titleTextBox}>
                <Text style={styles.mainTitleText}>Password reset</Text>
                <Text style={styles.tittleText}>
                    If you forgot your password, don’t worry; you can reset it easily. Just enter your email, follow the link we send,
                    and set a new password.
                </Text>
            </View>

            <Formik
                initialValues={{
                    email: "",
                }}
                onSubmit={(value) => {
                    dispatch(resetPassword(value.email))
                }}
            >
                {
                    ({ handleSubmit, handleChange, values }) => (

                        <View
                            style={styles.inputContainer}
                        >


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

                            <CustomBtn
                                btnWidth={0.8}
                                backgroundColor="#07b34c"
                                text="Send"
                                onPress={handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

export default PasswordResetScreen
