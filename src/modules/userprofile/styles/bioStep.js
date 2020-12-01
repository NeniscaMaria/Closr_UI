import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth-20,
        height: windowHeight/2.5,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20,
        margin: 20,
        marginBottom: windowHeight/26
    },
    text: {
        fontWeight: '100',
        fontSize: 16,
        color: 'rgba(138, 112, 144, 0.9)',
        textAlign: 'left',
        marginLeft: 15,
        marginTop:windowHeight/20
    },
    textInput: {
        width: windowWidth-45,
        height: windowHeight/4,
        backgroundColor: 'white',
        margin: 15,
        marginTop: windowHeight/30,
        borderRadius: 10,
        textAlignVertical: 'top',
    },
    svg: {
        marginLeft:windowWidth -240
    }
});

