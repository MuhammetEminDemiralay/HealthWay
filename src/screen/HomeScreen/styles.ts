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
        height: height * 0.54,
        backgroundColor: '#333533',
        borderWidth: 2,
        borderColor: '#c5c3c6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: height * 0.015
    },
    activityContainer: {
        width: width * 0.95,
        height: height * 0.175,
        borderRadius: 10,
        backgroundColor: '#333533',
        borderWidth: 2,
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