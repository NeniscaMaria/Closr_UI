import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        position: 'relative',
    },
    header: {
        position: 'absolute',
        top: windowHeight/7,
        paddingLeft: 20,
        paddingRight: 50,
        left: 0
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 38,
        color:'#242038',
    },
    button: {
        position: 'absolute',
        width: 214,
        height: 45,
        backgroundColor: '#8A7090',
        borderRadius: 20,
        marginTop: 50
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#F7ECE1',
        lineHeight: 20,
        marginTop: 8,
        alignItems: 'center',
        padding: 5
    },
    topNav: {
        flexDirection: 'row',
        position: 'absolute',
        top: windowHeight/15,
        justifyContent: 'space-between',
        width: windowWidth-40,
        left: 20,
    },
    textInput:{
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        height: 43,
        position: 'absolute',
        width: 326,
        top: 62,
        zIndex: 1,
        paddingLeft: 20,
        color: 'rgba(36, 32, 56, 0.8)',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 23
    },
    textOverInput: {
        color: 'rgba(36, 32, 56, 0.45)',
        fontSize: 16,
        marginLeft: 43,
        marginTop: 50,
        zIndex: 2,
        backgroundColor:'white',
        borderRadius: 20,
        width: 150,
    },
    svg: {
        marginTop: windowHeight/9
    }
});

