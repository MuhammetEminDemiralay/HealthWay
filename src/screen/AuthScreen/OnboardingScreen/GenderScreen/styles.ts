import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({

    genderBox: {
        width: width * 0.9,
        height: height * 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: width * 0.075
    },
    genderWrapper: {
        width: width * 0.3,
        height: height * 0.2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    ageBox: {
        width: width * 0.9,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counterBox: {
        width: width * 0.75,
        height: height * 0.15,
    },


})