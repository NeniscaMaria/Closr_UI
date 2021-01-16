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
    profilePics:{
        marginTop: windowHeight/4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    chatView: {
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0.5,
        borderRadius: 20,
        height: 70,
        width: 339,
        marginLeft: 20,
        marginTop: 30,
        backgroundColor: 'rgba(247, 236, 225, 0.2)',
        flexDirection: 'row',
    },
    svgChats:{
        marginLeft:20,
        marginTop:30,
    },
    svg:{
        marginTop: 5,
        marginLeft:5
    },
    textChat:{
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 10,
        width: 339-85,
    }
});

