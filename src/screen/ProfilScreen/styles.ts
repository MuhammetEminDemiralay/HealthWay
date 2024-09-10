import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.9,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }


})