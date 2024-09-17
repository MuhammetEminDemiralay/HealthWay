import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { SimpleLineIcons, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const { width, height } = Dimensions.get("window")


interface CustomContenBtnProps {
    text: string,
    value: number,
    icon?: string,
    setVisible: () => void
}


const CustomContentBtn = ({ text, value, icon, setVisible }: CustomContenBtnProps) => {

    
    const dispatch = useDispatch<AppDispatch>();
    const { activeFoodCategory } = useSelector((state: RootState) => state.activity)
    
    
    

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)',
                borderTopLeftRadius: text == 'Exercise' ? 10 : 0,
                borderTopRightRadius: text == 'Breakfast' ? 10 : 0,
                borderBottomRightRadius: text == 'Snacks' ? 10 : 0,
                borderBottomLeftRadius: text == 'Notes' ? 10 : 0
            },
            styles.btnContent
        ]}
            onPress={setVisible}
        >
            <Text style={styles.btnTitleText}>{text}</Text>
            <View style={styles.wrapper}>
                <Text style={styles.btnContenText}>{value}</Text>
                {
                    icon == "sports-gymnastics" &&
                    <MaterialIcons name="sports-gymnastics" size={24} color="#4cc9f0" />
                }
                {
                    icon == "footsteps-sharp" &&
                    <Ionicons name="footsteps-sharp" size={24} color="#4cc9f0" />
                }
                {
                    icon == "cup" &&
                    <MaterialCommunityIcons name="cup" size={24} color="#4cc9f0" />
                }
                {
                    icon == "note" &&
                    <SimpleLineIcons name="note" size={24} color="#4cc9f0" />
                }
            </View>
        </Pressable>
    )
}

export default CustomContentBtn




const styles = StyleSheet.create({
    btnContent: {
        width: width * 0.2,
        height: height * 0.125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitleText: {
        width: width * 0.2,
        height: height * 0.025,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: scale(13),
        fontWeight: '500',
    },
    wrapper: {
        width: width * 0.2,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: width * 0.02
    },
    btnContenText: {
        color: '#4cc9f0',
        fontSize: scale(16),
        fontWeight: '700'
    },
})