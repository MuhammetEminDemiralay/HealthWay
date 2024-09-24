import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")


export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.9,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    flatlistContainer: {
        width: width * 0.95,
        marginTop: height * 0.01
    },
    flatlistColumnWrapper: {
        justifyContent: 'space-between'
    },
    itemBox: {
        width: width * 0.29,
        height: width * 0.29,
        marginBottom: width * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        rowGap: width * 0.02

    },
    exerciseName: {
        color: '#4cc9f0',
        fontSize: scale(13),
        fontWeight: '500',
        textAlign: 'center',
    },
    exerciseInfoBox: {
        flexDirection: 'row'
    },
    infoText: {
        fontSize: scale(11),
        fontWeight: '500'
    }


})