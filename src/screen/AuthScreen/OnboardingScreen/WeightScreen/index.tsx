import React, { useRef, useState } from 'react'
import { Dimensions, Pressable, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters'
import { setHeightWeight } from '../../../../redux/onboardingSlice'



const WeightScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch();

    const [weight, setWeight] = useState(75)
    const [height, setHeight] = useState(175)
    const [active, setActive] = useState("kg");

    const weightDecrement = () => {
        setWeight(prev => prev > 30 ? prev - 1 : prev)
    }
    const weightIncrement = () => {
        setWeight(prev => prev < 400 ? prev + 1 : prev)
    }

    const heightDecrement = () => {
        setHeight(prev => prev > 30 ? prev - 1 : prev)
    }
    const heightIncrement = () => {
        setHeight(prev => prev < 300 ? prev + 1 : prev)
    }




    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="Wha's your" targetText="weight/height" step={5} />

            <View style={mainStyles.contentBox}>


                <View style={styles.box}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',
                                },
                                styles.weightBtnBox
                            ]}
                            onPress={weightDecrement}
                        >
                            <FontAwesome name="caret-down" size={scale(40)} color="black" />
                        </Pressable>

                        <View style={styles.weightScreenBox}>
                            <TextInput style={styles.counterText} inputMode='numeric' value={`${active == "kg" ? weight : Math.floor(weight * 2.2)}`} onChangeText={(value: any) => setWeight(value)} />
                            <Text style={styles.counterText}> {active}</Text>
                        </View>

                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',
                                },
                                styles.weightBtnBox
                            ]}
                            onPress={weightIncrement}
                        >
                            <FontAwesome name="caret-up" size={scale(40)} color="black" />
                        </Pressable>
                    </View>

                    <View style={styles.optionBox}>
                        <Pressable
                            style={[{ backgroundColor: active == "kg" ? 'rgba(255,255,255,0.75)' : "black" }, styles.leftBtn, styles.optionBtn]}
                            onPress={() => setActive("kg")}
                        >
                            <Text style={[{ color: active == "kg" ? "black" : 'rgba(255,255,255,0.75)' }, styles.optionText]}>kg</Text>
                        </Pressable>
                        <Pressable
                            style={[{ backgroundColor: active == "lb" ? 'rgba(255,255,255,0.75)' : "black" }, styles.rightBtn, styles.optionBtn]}
                            onPress={() => setActive("lb")}
                        >
                            <Text style={[{ color: active == "lb" ? "black" : 'rgba(255,255,255,0.75)' }, styles.optionText]}>lb</Text>
                        </Pressable>
                    </View>

                </View>

                <View style={[{ flexDirection: 'row' }, styles.box]}>

                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',
                            },
                            styles.weightBtnBox
                        ]}
                        onPress={heightDecrement}
                    >
                        <FontAwesome name="caret-down" size={scale(40)} color="black" />
                    </Pressable>

                    <View style={styles.weightScreenBox}>
                        <TextInput style={styles.counterText} inputMode='numeric' value={`${height}`} onChangeText={(value: any) => setHeight(value)} />
                        <Text style={styles.counterText}> cm</Text>
                    </View>

                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#fff' : 'rgba(255,255,255,0.75)',
                            },
                            styles.weightBtnBox
                        ]}
                        onPress={heightIncrement}
                    >
                        <FontAwesome name="caret-up" size={scale(40)} color="black" />
                    </Pressable>
                </View>
            </View>

            <View style={mainStyles.nextBtnBox}>
                <CustomBtn
                    btnWidth={0.8} text="Next" backgroundColor='#16db65'
                    onPress={() => {
                        dispatch(setHeightWeight({ height: height, weight: weight }))
                        navigation.navigate("weeklyTarget")
                    }}
                />
            </View>
        </View>
    )
}

export default WeightScreen
