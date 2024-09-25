import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")


export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.9,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    titleBox: {
        width: width * 0.9,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    exerciseTitle: {
        color: '#fff',
        fontSize: scale(20),
        fontWeight: '700',
    },
    description: {
        fontSize: scale(14),
        color: '#fff'
    },
    optionFlatlist: {
        width: width * 0.9,
        minHeight: height * 0.64,
        maxHeight: height * 0.64,
    },
    optionBox: {
        width: width * 0.9,
        height: height * 0.07,
        flexDirection: 'row',
        marginBottom: height * 0.01,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    optionLeftBox: {
        width: width * 0.55,
        height: height * 0.07,
        justifyContent: 'center',
        paddingHorizontal: width * 0.025
    },
    optionRightBox: {
        width: width * 0.35,
        height: height * 0.07,
        flexDirection: 'row',
    },
    exerciseDuration: {
        width: width * 0.2,
        height: height * 0.07,
        borderColor: '#fff',
        justifyContent: 'center',
    },
    timeTextInput: {
        width: width * 0.2,
        height: height * 0.03,
        textAlign: "center",
        textAlignVertical: 'center',
        color: '#4cc9f0',
    },
    calorieBox: {
        width: width * 0.2,
        height: height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calorieText: {
        color: 'lime',
        fontSize: scale(10)
    },
    openExerciseBtn: {
        width: width * 0.15,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    optionName: {
        color: '#fff',
        fontSize: scale(12)
    }


})