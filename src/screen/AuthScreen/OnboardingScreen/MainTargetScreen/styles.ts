import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({

    flatlistContainer: {
        width: width * 0.9,
        minHeight: height * 0.44,
        maxHeight: height * 0.44,
    },
    btnBox: {
        width: width * 0.9,
        height: height * 0.065,
        justifyContent: 'center',
        marginBottom: height * 0.01,
        paddingLeft: width * 0.05,
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
    }


})