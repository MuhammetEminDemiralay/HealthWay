import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.9,
        alignItems: 'center',
        backgroundColor: '#212529'
    },
    headContainer: {
        width: width * 0.95,
        height: height * 0.125,
        borderRadius: 10,
        marginTop: height * 0.015,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todayBtn: {
        width: width * 0.15,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: width * 0.05
    },
    todayBtnText: {
        color: "#c5c3c6",
        fontWeight: '500',
        fontSize: scale(14)
    },
    content: {
        width: width * 0.95,
        height: height * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: height * 0.015,
        flexDirection: 'row',
        backgroundColor: '#495057',
        elevation: 2,
        borderRadius: 10
    },
    leftContent: {
        width: width * 0.2,
        height: height * 0.5,
    },
    middleContent: {
        width: width * 0.55,
        height: height * 0.5,
    },
    middleTopContent: {
        width: width * 0.55,
        height: height * 0.125,
    },
    calorieMeterBox: {
        width: width * 0.55,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calorieMeter: {
        width: height * 0.25,
        height: height * 0.25,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: height * 0.125,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        position: 'absolute'
    },
    emtyBox: {
        width: height * 0.2,
        height: height * 0.2,
        position: 'absolute',
        borderRadius: height * 0.1,
    },
    calorieScreen: {
        width: height * 0.2,
        height: height * 0.2,
        borderRadius: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    middleBottomContent: {
        width: width * 0.55,
        height: height * 0.125,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.01
    },
    middleBottomBtn: {
        width: width * 0.5,
        height: height * 0.045,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    rightContent: {
        width: width * 0.2,
        height: height * 0.5,
    },


    activityContainer: {
        width: width * 0.95,
        height: height * 0.16,
        backgroundColor: '#495057',
        elevation: 2,
        borderRadius: 10,
    },


})