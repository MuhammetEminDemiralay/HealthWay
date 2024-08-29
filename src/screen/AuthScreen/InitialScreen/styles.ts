import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
    },
    locationBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.025
    },
    title: {
        fontSize: scale(24),
        color: '#fff',
        fontWeight: '700'
    }

})