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
        marginLeft: 110
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 28,
        color:'#242038',
    },
    button: {
        width: 61,
        height: 61,
        backgroundColor: '#8A7090',
        position:'absolute',
        right: 0,
        zIndex: 2
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#F7ECE1',
        lineHeight: 20,
        alignItems: 'center',
        marginTop: 15,
        padding: 5,
        zIndex: 2
    },
    inputMessage: {
        width: windowWidth - 58,
        position:'absolute',
        height: 58,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingLeft: 20,
    },
    topNav: {
        flexDirection: 'row',
        position: 'absolute',
        top: windowHeight/15,
        justifyContent: 'space-between',
        width: windowWidth-40,
        left: 20,
    },
    profilePics:{
        marginTop: windowHeight/4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    chatView: {
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0.5,
        height: 550,
        width: windowWidth,
        marginTop: windowHeight/5.2,
        backgroundColor: 'rgba(247, 236, 225, 0.5)',
        flexDirection: 'column'
    },
    svgChats:{
        marginLeft:20,
        marginTop:30,
    },
    svg:{
        marginTop: 20,
        marginLeft:20
    },
    svg2:{
        marginTop: 20,
    },
    textChat:{
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 10,
        width: 339-85,
    },
    message:{
        height:56,
        width: 303,
        borderWidth: 1,
        marginLeft: 40,
        marginTop: 10
    }
});

