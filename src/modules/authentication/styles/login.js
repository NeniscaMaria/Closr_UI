import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const stylesLogIn = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    header: {
        position: 'absolute',
        top: windowHeight/10,
        paddingLeft: 20,
        paddingRight:50,
        left: 0
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'left'
    },
    loginForm: {
        width: 300,
        height: 245,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '30%',
        left: 20,
        padding: 12,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20
    },
    textInput: {
        width: '100%',
        textAlignVertical: 'top',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(138, 112, 144, 0.6)',
        paddingTop: 25,
        paddingBottom: 10,
        color: 'rgba(138, 112, 144, 0.6)',
    },
    button: {
        width: '100%',
        height: 42,
        backgroundColor: '#8A7090',
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgba(247, 236, 225, 1.0)',
        lineHeight: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    message: {
        marginTop: 10,
        fontSize: 14,
        marginLeft: 30,
        fontWeight: '100',
        color: 'rgba(138, 112, 144, 0.9)'
    },
    signUpMessage:{
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(138, 112, 144, 0.9)'
    },
});

