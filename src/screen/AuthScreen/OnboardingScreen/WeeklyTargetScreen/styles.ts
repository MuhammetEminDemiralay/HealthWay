import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({

    flatlistContainer: {
        width: width * 0.8,
        maxHeight: height * 0.1,
    },
    contentContainerStyle: {
        columnGap: (width * 0.08) / 3
    },
    btn: {
        width: width * 0.18,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText: {
        color: '#fff',
        fontSize: scale(14),
        fontWeight: '500'
    }

})