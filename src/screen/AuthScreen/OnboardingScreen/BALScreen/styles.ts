import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#000814',
    },
    textBox: {
        width: width * 0.9,
        paddingHorizontal: width * 0.05,
    },
    headerText: {
        fontSize: scale(16),
        fontWeight: '600'
    },
    bottomText: {
        fontSize: scale(11),
        color: '#737270',
        fontWeight: '500'
    }


})