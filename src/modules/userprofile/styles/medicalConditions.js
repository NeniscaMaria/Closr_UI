import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth - 20,
        height: windowHeight / 2,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20,
        margin: 20,
        marginTop: 10,
        marginBottom: windowHeight / 45
    },
    text: {
        fontWeight: '100',
        fontSize: 20,
        color: 'rgba(138, 112, 144, 0.9)',
        textAlign: 'left',
        marginLeft: 15,
    },
    disclaimer: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20
    },
    disclaimerText: {
        color:'rgba(153,11,11,0.5)',
        fontSize: 10
    },
});

