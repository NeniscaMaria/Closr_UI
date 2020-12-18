import {StyleSheet, Dimensions} from "react-native";

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
        fontSize: 16,
        color: 'rgba(138, 112, 144, 0.9)',
        textAlign: 'left',
        marginLeft: 5,
    },
    dropdown:{
        marginLeft:10,
        marginRight:10,
    },
    bubble: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 115,
        height: 45,
        backgroundColor: 'rgba(120, 132, 117, 0.3)',
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 5,
        marginBottom: 10
    },
    textBubble: {
        fontWeight: '100',
        fontSize: 14,
        color: '#242038',
        textAlign: 'left',
        marginLeft:10,
        marginTop:10
    },
    icon:{
        width:30,
        height:30,
        marginTop:7
    },
    containerBubble:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:15,
    },
    slider: {
        top: 35
    }
});

