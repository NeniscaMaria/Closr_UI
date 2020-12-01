import {Dimensions, StyleSheet} from "react-native";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth-50,
        height: windowHeight/2.5,
        backgroundColor: 'rgba(196, 196, 196, 0.4)',
        borderRadius: 20,
        margin: 15,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: windowWidth-90,
        marginTop: windowHeight/2.5-40,
    }
});

