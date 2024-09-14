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
        flexDirection: 'row',
        alignItems: 'center'
    },
    todayBtn: {
        width: width * 0.15,
        height: height * 0.05,
        borderWidth: 1,
        borderColor: '#c5c3c6',
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: height * 0.175,
        borderRadius: 10,
        backgroundColor: '#333533',
        borderWidth: 1,
        borderColor: '#c5c3c6',
    },
    headerCalendar: {
        width: width * 0.55,
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
    },

    bottomCalendar: {
        flex: 1,
        width: width * 0.95,
        height: height * 0.175,
        borderWidth: 1,
        borderColor: 'red',
        padding: 0,
        margin: 0
    }


})