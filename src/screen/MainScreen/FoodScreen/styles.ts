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
    searchInputBox: {
        width: width * 0.95,
        height: height * 0.075,
        marginTop: height * 0.015,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5
    },
    searchInput: {
        width: width * 0.75,
        height: height * 0.075,
        fontSize: scale(20),
        color: '#fff',
        paddingHorizontal: width * 0.05
    },
    searchIconBox: {
        width: width * 0.2,
        height: height * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlistContainer: {
        width: width * 0.95,
        marginTop: height * 0.015
    },
    foodBtnBox: {
        width: width * 0.95,
        height: height * 0.075,
        marginBottom: height * 0.01,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.25)',
    },
    foodLeftBox: {
        width: width * 0.75,
        height: height * 0.075,
        justifyContent: 'center',
        rowGap: height * 0.0025,
    },
    foodRightBox: {
        width: width * 0.2,
        height: height * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBox: {
        width: width * 0.08,
        height: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    titleBox: {
        width: width * 0.75,
        paddingHorizontal: width * 0.025,
    },
    foodNameText: {
        fontSize: scale(13),
        color: '#4cc9f0',
        fontWeight: '700'
    },
    subTextBox: {
        width: width * 0.75,
        flexDirection: 'row',
        paddingHorizontal: width * 0.025,
    },
    calText: {
        fontSize: scale(12),
        color: '#70e000',
        fontWeight: '500'
    },
    measureText: {
        color: '#fff'
    }


})