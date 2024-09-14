import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 0.9,
        backgroundColor: '#000814',
        alignItems: 'center',
        paddingTop: height * 0.05
    },
    searchInputBox: {
        width: width * 0.9,
        height: height * 0.075,
        flexDirection: 'row'
    },
    searchInput: {
        width: width * 0.75,
        height: height * 0.075,
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        fontSize: scale(20),
        color: '#fff',
        paddingHorizontal: width * 0.05
    },
    searchBtn: {
        width: width * 0.15,
        height: height * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },

    flatlistContainer: {
        width: width * 0.9,
        marginTop: height * 0.025
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
    highlightDateContainer: {
        backgroundColor: '#c5c3c6',
        borderRadius: 10
    },
    highlightDateName: {
        fontWeight: '700',
    },


})