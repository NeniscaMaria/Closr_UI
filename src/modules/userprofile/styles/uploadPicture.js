import {Dimensions, StyleSheet} from "react-native";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: windowWidth-20,
        height: windowHeight/1.7,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20,
        margin: 20,
        marginBottom: windowHeight/26
    },
    text: {
        fontWeight: '100',
        fontSize: 14,
        color: 'rgba(138, 112, 144, 0.9)',
        textAlign: 'left',
        marginLeft: 15
    },
    actionsContainer:{
        flexDirection: 'row'
    },
    icon:{
        width:40,
        height:40,
        marginLeft: windowWidth/5.5,
        marginRight: windowWidth/5.5,
    }
});

