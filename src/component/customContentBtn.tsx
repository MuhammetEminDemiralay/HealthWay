import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { SimpleLineIcons, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window")

const CustomContentBtn = ({ text, value = 0, icon }: any) => {


    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0)'
            },
            styles.btnContent
        ]}>
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
        borderRadius: 10
    },
    btnTitleText: {
        width: width * 0.2,
        height: height * 0.025,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: scale(13),
        fontWeight: '500'
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