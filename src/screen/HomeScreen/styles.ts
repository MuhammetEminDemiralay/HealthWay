import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.9,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    headContainer: {
        width: width * 0.95,
        height: height * 0.125,
        borderRadius: 10,
        marginTop: height * 0.015,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: width * 0.95,
        height: height * 0.5,
        backgroundColor: '#333533',
        borderWidth: 1,
        borderColor: '#c5c3c6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: height * 0.015,
        flexDirection: 'row'
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
        borderWidth: 1,
        borderColor: '#fff'
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
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: height * 0.1,
    },
    calorieScreen: {
        width: height * 0.2,
        height: height * 0.2,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: height * 0.1,
        backgroundColor: '#fff'
    },
    middleBottomContent: {
        width: width * 0.55,
        height: height * 0.125,
        borderWidth: 1,
        borderColor: '#fff',
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
        height: height * 0.175,
        borderRadius: 10,
        backgroundColor: '#333533',
        borderWidth: 1,
        borderColor: '#c5c3c6',
    },


    calendar: {
        width: width * 0.6,
        height: height * 0.125,
    },
    dateName: {
        color: '#fff'
    },
    dateNumber: {
        color: '#fff'
    },
    dayContainer: {
        borderRadius: 0
    },
    calendarHeaderContainer: {
    },
    calendarHeader: {
        color: '#fff'
    },
    highlightDateContainer: {
        backgroundColor: '#c5c3c6',
        borderRadius: 10
    },
    highlightDateName: {
        fontWeight: '700',
    }


})