import React, { useEffect } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { googleSignin, register } from '../../../redux/authSlice'
import LottieView from 'lottie-react-native'
import CustomBtn from '../../../component/customBtn'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { FontAwesome, } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { Onboarding } from '../../../model/onboarding'


const RegisterScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch();

    const { bal, genderAge, heightWeight, reasons, target, weeklyTarget }: Onboarding = useSelector((state: any) => state.onboarding);

    useEffect(() => {
        console.log("Target", target);
        console.log("Reasons", reasons);
        console.log("BALS", bal);
        console.log("GenderAge", genderAge);
        console.log("HeightWeight", heightWeight);
        console.log("WeeklyTarget", weeklyTarget);






    }, [])

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
                onSubmit={(value) => {
                    dispatch(register(value))
                }}
            >
                {
                    ({ handleSubmit, handleChange, values }) => (
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

                        </View>
                    )
                }
            </Formik>

            <View style={styles.autoEntryBox}>
                <Text style={styles.tittleText}>Or</Text>
                <GoogleSigninButton
                    onPress={() => dispatch(googleSignin())}
                    style={styles.googleSigninBtn}
                />
                < Text style={{ color: '#fff' }}>genderAge {genderAge.age}</Text>
                <Button title='Tıkla' onPress={() => Alert.alert("Varmı", `${genderAge.age}`)} />
            </View>
        </View >
    )
}

export default RegisterScreen
