import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'black'
    },
    manuelEntryBox: {
        width: '100%',
        height: height * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.05,
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
        textAlign: 'justify',
        fontWeight: '500'
    },
    inputContainer: {
        width: width * 0.8,
        height: height * 0.35,
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    autoEntryBox: {
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        rowGap: height * 0.025,
    },
    googleSigninBtn: {
        width: width * 0.8,
        height: height * 0.075,
    }


})