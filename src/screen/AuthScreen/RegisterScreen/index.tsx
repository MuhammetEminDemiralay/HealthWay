import React, { useEffect, useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { googleSignin, register } from '../../../redux/authSlice'
import LottieView from 'lottie-react-native'
import CustomBtn from '../../../component/customBtn'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { Onboarding } from '../../../model/onboarding'
import * as Yup from "yup"
import { AppDispatch, RootState } from '../../../redux/store'
import { setDietCalculate, setUser } from '../../../redux/userSlice'
import { Auth } from '../../../model/auth'
import { getUserInfoAsyncstorage } from '../../../redux/onboardingSlice'


const RegisterScreen = () => {

    const navigation: any = useNavigation();
    const dispatch: any = useDispatch();
    const [passwordViewable, setPasswordViewable] = useState(true);

    const { bal, genderAge, heightWeight, reasons, target, weeklyTarget }: Onboarding = useSelector((state: any) => state.onboarding);


    const setGoogleSignin = async () => {
        const result = await dispatch(googleSignin())
        if (googleSignin.fulfilled.match(result)) {
            dispatch(setUser({ bal, genderAge, heightWeight, reasons, target, weeklyTarget }))
            dispatch(getUserInfoAsyncstorage({ initialInfo: { bal, genderAge, heightWeight, reasons, target, weeklyTarget } }));
        } else {
            Alert.alert("Error", "Try it again")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.backBtnBox}>
                <FontAwesome onPress={() => navigation.goBack()} name="long-arrow-left" size={scale(26)} color="#fff" />
            </View>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={async (value) => {
                    const result = await dispatch(register(value))
                    if (register.fulfilled.match(result)) {
                        dispatch(setUser({ bal, genderAge, heightWeight, reasons, target, weeklyTarget }))
                    } else {
                        Alert.alert("Error", "Try it again")
                    }
                }}
                validationSchema={validationSchema}
            >
                {
                    ({ handleSubmit, handleChange, values, errors, touched, dirty }) => (
                        <View style={styles.manuelEntryBox}>

                            <View style={styles.titleTextBox}>
                                <Text style={styles.mainTitleText}>Congratulations!</Text>
                                <Text style={styles.tittleText}>
                                    You're almost done! Just one more step to complete your registration.
                                </Text>
                            </View>


                            <View
                                style={styles.inputContainer}
                            >
                                <View>
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
                                                <Text style={styles.inputText}>Email</Text>
                                            </View>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={handleChange("email")}
                                                value={values.email}
                                            />
                                        </View>
                                        <View style={styles.iconBox}>
                                            <Entypo name="email" size={22} color="#fff" />
                                        </View>
                                    </View>
                                    {
                                        errors.email && touched.email && dirty &&
                                        <Error error={errors.email} />
                                    }
                                </View>

                                <View>
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
                                                secureTextEntry={passwordViewable}
                                            />
                                        </View>

                                        <View style={styles.iconBox}>
                                            {
                                                passwordViewable &&
                                                <Ionicons onPress={() => setPasswordViewable(false)} name="eye-off" size={22} color="#fff" />
                                            }
                                            {
                                                passwordViewable == false &&
                                                < Ionicons onPress={() => setPasswordViewable(true)} name="eye" size={22} color="#fff" />
                                            }
                                        </View>
                                    </View>
                                    {
                                        errors.password && touched.password && dirty &&
                                        <Error error={errors.password} />
                                    }
                                </View>

                                <CustomBtn
                                    btnWidth={0.8}
                                    backgroundColor="#07b34c"
                                    text="Sign in"
                                    onPress={handleSubmit}
                                />
                            </View>

                        </View>
                    )
                }
            </Formik >

            <View style={styles.autoEntryBox}>
                <Text style={styles.tittleText}>Or</Text>
                <GoogleSigninButton
                    onPress={setGoogleSignin}
                    style={styles.googleSigninBtn}
                />
            </View>
        </View >
    )
}

export default RegisterScreen


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email field required").email("Email format is not suitable"),
    password: Yup.string().required("Password field required").min(6, "Minimum 6 character").max(15, "Maximum 15 character")
})

const Error = ({ error }: any) => {


    return (
        <View style={styles.errorBox}>
            <MaterialIcons name="error-outline" size={scale(18)} color="#f24b58" />
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}
