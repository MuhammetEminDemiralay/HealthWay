import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({

    box: {
        width: width * 0.9,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.03,
    },
    weightScreenBox: {
        width: height * 0.14,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        flexDirection: 'row'
    },
    counterText: {
        fontWeight: '700',
        fontSize: scale(18),
        color: '#fff',
    },
    weightBtnBox: {
        width: height * 0.07,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionBox: {
        width: height * 0.28,
        height: height * 0.045,
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    optionBtn: {
        width: height * 0.135,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftBtn: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    rightBtn: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    optionText: {
        fontWeight: "500",
        fontSize: scale(16),
    }

})