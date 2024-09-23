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
        height: height * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        elevation: 2,
    },
    leftContent: {
        width: width * 0.2,
        height: height * 0.45,
    },
    middleContent: {
        width: width * 0.55,
        height: height * 0.45,
    },
    middleTopContent: {
        width: width * 0.55,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: height * 0.005,
    },
    requiredCalorieText: {
        fontSize: scale(15),
        fontWeight: '500',
        color: '#fff'
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
        backgroundColor: 'black',
        rowGap: height * 0.015,
        borderWidth: 1.5,
        borderColor: '#fff'
    },
    calorieText: {
        fontSize: scale(24),
        fontWeight: '500',
    },
    calorieTextInfo: {
        color: '#ededed',
        fontSize: scale(14),
        fontWeight: '500'
    },
    middleBottomContent: {
        width: width * 0.55,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: height * 0.0375
    },
    middleBottomBtn: {
        width: height * 0.075,
        height: height * 0.075,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    rightContent: {
        width: width * 0.2,
        height: height * 0.45,
    },


    activityContainer: {
        width: width * 0.95,
        height: height * 0.23,
        backgroundColor: 'black',
        elevation: 2,
    },
    progressBarContainer: {
        width: width * 0.95,
        height: height * 0.075,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.025,
        alignItems: 'center',
    },
    progressBarBox: {
        height: height * 0.075,
        justifyContent: 'center',
        rowGap: height * 0.004
    },
    progressWeightBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    progressWeight: {
        flexDirection: 'row',
    },
    progressText: {
        fontSize: scale(10),
        fontWeight: '500',
        color: '#fff'
    },
    progressBackground: {
        backgroundColor: '#adb5bd'
    }


    ,
    dailyPeriodProgressContainer: {
        width: width * 0.95,
        height: height * 0.15,
    },
    periodBorder: {
        width: width * 0.95,
        height: 10,
        position: 'absolute',
        top: height * 0.025,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dashed: {
        width: (width * 0.95) / 29,
        height: 1,
        backgroundColor: 'gray'
    },
    headerCalendar: {
        width: width * 0.95,
        height: height * 0.15,
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

    topBox: {
        width: '100%',
        height: height * 0.1,
        alignItems: 'center'
    },
    periodBtn: {
        width: '40%',
        position: 'absolute',
        bottom: 0,
        borderBottomWidth: 2
    },
    bottomBox: {
        width: '100%',
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBox: {
        width: '90%',
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
})