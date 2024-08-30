import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#000814',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTextBox: {
        width: width * 0.8,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    mainTitleText: {
        color: '#fff',
        fontSize: scale(25),
        fontWeight: '900'
    },
    tittleText: {
        color: '#fff',
        fontSize: scale(14),
        textAlign: 'justify'
    },
    inputContainer: {
        width: width * 0.8,
        height: height * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.025,
    },
    inputBox: {
        width: '100%',
        height: height * 0.075,
        borderWidth: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    },
    animationBox: {
        width: width * 0.15,
        height: '100%',
    },
    inputWrapper: {
        width: width * 0.55,
        height: '100%',
    },
    inputTextBox: {
        width: '100%',
        height: '30%',
        paddingLeft: width * 0.02
    },
    inputText: {
        color: '#fff',
        fontSize: scale(12)
    },
    input: {
        width: width * 0.55,
        height: '70%',
        paddingHorizontal: width * 0.02,
        color: '#fff',
        fontSize: scale(18)
    },
    iconBox: {
        width: width * 0.1,
        height: '100%',
        borderWidth: 0.5
    },

})