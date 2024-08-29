import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#000814',
    },
    manuelEntryBox: {
        width: '100%',
        height: height * 0.6,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: height * 0.05
    },
    titleBox: {
        width: width * 0.8,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
    },
    inputContainer: {
        width: width * 0.8,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
    },
    autoEntryBox: {
        width: '100%',
        height: height * 0.4,
        backgroundColor: 'blue'
    }

})