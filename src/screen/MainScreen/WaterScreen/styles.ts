import { Dimensions, StyleSheet } from "react-native";

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
    options: {
        width: width * 0.95,
        height: height * 0.12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    optionBtn: {
        width: height * 0.065,
        height: height * 0.065,
        borderWidth: 1.5,
        borderColor: '#4cc9f0',
        borderRadius: (height * 0.065) / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    diagramContainer: {
        width: width * 0.95,
        height: height * 0.56,
        justifyContent: 'space-between'
    },
    diagramBox: {
        width: width * 0.95,
        height: height * 0.25,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: height * 0.03
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
        backgroundColor: '#4cc9f0'
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