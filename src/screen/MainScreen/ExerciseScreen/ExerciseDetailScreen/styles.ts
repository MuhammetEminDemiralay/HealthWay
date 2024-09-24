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
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
        marginBottom: height * 0.01,
        borderRadius: 5
    },
    optionLeftBox: {
        width: width * 0.6,
        height: height * 0.07,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: width * 0.025
    },
    optionRightBox: {
        width: width * 0.3,
        height: height * 0.07,
        borderWidth: 1,
        borderColor: '#fff'
    },
    optionName: {
        color: '#fff',
        fontSize: scale(12)
    }


})