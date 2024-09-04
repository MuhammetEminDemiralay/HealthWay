import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { mainStyles } from '../mainStyles'
import CustomBtn from '../../../../component/customBtn'
import CustomOnboardingHeader from '../../../../component/customOnboardingHeader'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Onboarding } from '../../../../model/onboarding'
import { setWeeklyTarget } from '../../../../redux/onboardingSlice'


const WeeklyTargetScreen = () => {

    const navigation: any = useNavigation()
    const dispatch: any = useDispatch();
    const { weeklyTarget }: Onboarding = useSelector((state: any) => state.onboarding)
    const weeklyTargets = [0.25, 0.5, 0.75, 1]


    return (
        <View style={mainStyles.container}>

            <CustomOnboardingHeader text="What's your" targetText="weekly target" step={6} />


            <View style={mainStyles.contentBox}>

                <FlatList
                    data={weeklyTargets}
                    renderItem={({ item, index }) => (
                        <Pressable
                            style={[{
                                borderWidth: item == weeklyTarget ? 5 : 1.5,
                                borderColor: item == weeklyTarget ? '#23e3fc' : '#fff',
                            },
                            styles.btn]}
                            onPress={() => dispatch(setWeeklyTarget(item))}
                        >
                            <Text style={styles.btnText}>{item} kg</Text>
                        </Pressable>
                    )}
                    style={styles.flatlistContainer}
                    contentContainerStyle={styles.contentContainerStyle}
                    horizontal
                />

            </View>


            <View style={mainStyles.nextBtnBox}>
                <CustomBtn btnWidth={0.8} text="Next" backgroundColor='#16db65' onPress={() => navigation.navigate("register")} />
            </View>
        </View >
    )
}

export default WeeklyTargetScreen
