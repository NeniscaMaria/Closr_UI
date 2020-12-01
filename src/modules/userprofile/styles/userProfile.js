import {Dimensions, StyleSheet} from "react-native";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24
    },
    header: {
        paddingLeft: 20,
        paddingTop: windowHeight/15
    },
    message: {
        fontSize: 14,
        marginLeft: 20,
        fontWeight: '100'
    },
    skipMessage:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    button:{
        margin:10,
        backgroundColor: '#8A7090',
        height: 43,
        borderRadius: 5,
        marginTop:10,
        width: windowWidth-20
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgba(247, 236, 225, 1.0)',
        lineHeight: 20,
        marginTop: 10,
        alignItems: 'center'
    }
});

