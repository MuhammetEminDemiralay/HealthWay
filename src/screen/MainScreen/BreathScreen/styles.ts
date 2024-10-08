import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")


export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.9,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    breathContainer: {
        width: width * 0.95,
        height: height * 0.68,
    },
    animationBox: {
        width: width * 0.95,
        height: height * 0.68,
        alignItems: 'center',
        justifyContent: 'center'
    },
})