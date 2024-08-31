import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const mainStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#000814',
    },
    contentBox: {
        width: '100%',
        height: height * 0.5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextBtnBox: {
        width: '100%',
        height: height * 0.15,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }

})