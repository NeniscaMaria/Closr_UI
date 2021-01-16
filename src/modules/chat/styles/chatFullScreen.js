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
    profilePics:{
        marginTop: windowHeight/4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    chatView: {
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0.5,
        height: 692,
        width: windowWidth,
        marginTop: windowHeight/5,
        backgroundColor: 'rgba(247, 236, 225, 0.5)',
        flexDirection: 'column',
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
    },
    inputMessage: {
        width: windowWidth,
        height: 58,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop:windowHeight/4 + 43,
        paddingLeft: 20
    }
});

