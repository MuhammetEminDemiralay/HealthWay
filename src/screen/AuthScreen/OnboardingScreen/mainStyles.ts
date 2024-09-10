import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const mainStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'black',
    },
    contentBox: {
        width: '100%',
        height: height * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextBtnBox: {
        width: '100%',
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    flatlistContainer: {
        width: width * 0.9,
        minHeight: height * 0.45,
        maxHeight: height * 0.44,
    },
    btnBox: {
        width: width * 0.9,
        justifyContent: 'center',
        marginBottom: height * 0.01,
        borderRadius: 5
    },
    animated: {
        borderRadius: 5,
        backgroundColor: '#16db65',
        position: 'absolute',
        top: 0,
        height: '100%'
    },
    btnText: {
        fontSize: scale(16),
        fontWeight: '600'
    },
    warningTextBox: {
        width: width * 0.9,
        height: height * 0.03,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: width * 0.025
    },
    warningText: {
        color: '#fff',
    }

})