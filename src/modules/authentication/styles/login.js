import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    header: {
        position: 'absolute',
        top: 64,
        left: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'left'
    },
    loginForm: {
        width: 260,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translate(0, -50%)',
        padding: 12,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20
    },
    textInput: {
        width: '100%',
        textAlignVertical: 'top',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#8a7090',
        paddingTop: 10,
        paddingBottom: 10
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
    }
});

