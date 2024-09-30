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
    WaterContainer: {
        width: width * 0.95,
        height: height * 0.68,
    },
    optionsContainer: {
        width: width * 0.95,
        height: height * 0.12,
        flexDirection: 'row',
        borderRadius: 10
    },
    optionBox: {
        width: width * 0.3,
        height: height * 0.12,
        flexDirection: 'row',
    },
    optionWrapper: {
        width: width * 0.15,
        height: height * 0.12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBox: {
        width: width * 0.65,
        height: height * 0.12,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    progressWrapper: {
        width: width * 0.65,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    valueBox: {
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionBtn: {
        borderWidth: 1.5,
        borderColor: '#4cc9f0',
        borderRadius: (height * 0.065) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: scale(9)
    },
    wordBox: {
        width: width * 0.65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wordText: {
        color: '#fff',
        fontSize: scale(13)
    },

    diagramContainer: {
        width: width * 0.95,
        height: height * 0.56,
        justifyContent: 'space-between'
    },
    diagramBox: {
        width: width * 0.95,
        height: height * 0.25,
        marginTop: height * 0.03
    },
    flatlistContainer: {
        width: width * 0.95,
        height: height * 0.25,
    },
    hourBox: {
        width: (width * 0.95) / 6,
        height: height * 0.25,
        alignItems: 'center'
    },
    contentBox: {
        width: height * 0.05,
        height: height * 0.22,
    },
    timeBox: {
        width: '80%',
        height: height * 0.03,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        color: '#fff',
        fontSize: scale(10),
    },
    periodBorder: {
        width: width * 0.95,
        height: 10,
        position: 'absolute',
        top: height * 0.05,
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
        height: height * 0.25,
    },
    topBox: {
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
    },
    periodBtn: {
        width: '50%',
        position: 'absolute',
        bottom: 0,
        borderBottomWidth: 2,
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