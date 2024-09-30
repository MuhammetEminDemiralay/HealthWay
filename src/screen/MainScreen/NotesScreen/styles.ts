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
    noteContainer: {
        width: width * 0.95,
        height: height * 0.68,
        marginTop: (width * 0.04) - (height * 0.015)
    },
    noteAddBox: {
        width: width * 0.95,
        height: height * 0.18,
        borderWidth: 1,
        backgroundColor: '#343a40',
        borderColor: '#fff',
        borderRadius: 10
    },
    noteTextInput: {
        width: width * 0.95,
        color: '#fff',
        textAlignVertical: 'top',
        lineHeight: height * 0.03,
        fontSize: scale(15),
        padding: width * 0.05,
    },
    noteBtn: {
        width: height * 0.06,
        height: height * 0.06,
        borderWidth: 5,
        borderColor: '#343a40',
        borderRadius: 10,
        position: 'absolute',
        bottom: width * 0.01,
        right: width * 0.01,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noteListBox: {
        width: width * 0.95,
        minHeight: height * 0.485,
        marginTop: height * 0.015
    },
    noteFlatlistContainer: {
        width: width * 0.95,
        height: height * 0.5,
    },
    noteColumnWrapper: {
        justifyContent: 'space-between',
        marginBottom: width * 0.03
    },
    noteBox: {
        width: width * 0.46,
        minHeight: width * 0.46,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingVertical: width * 0.065,
        paddingHorizontal: width * 0.025,
        overflow: "scroll"
    },
    deleteBox: {
        position: 'absolute',
        right: 5,
        top: 5
    },
    noteDate: {
        position: 'absolute',
        top: 5,
        left: width * 0.025,
        color: 'gray',
        fontWeight: '700'
    },
    noteText: {
        color: '#1b1c1c',
        fontSize: scale(15),
        fontWeight: '500',
    }


})