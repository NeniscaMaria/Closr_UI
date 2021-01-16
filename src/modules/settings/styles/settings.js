import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        flexDirection: 'column',
    },
    svg:{
        //marginTop: windowWidth/3,
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
        width: 140,
        height: 50,
        backgroundColor: '#8A7090',
        borderRadius: 20,
        marginTop: windowHeight/2 - 20
    },
    button2: {
        position: 'absolute',
        width: 140,
        height: 50,
        backgroundColor: '#8A7090',
        borderRadius: 20,
        top: windowHeight/3
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#F7ECE1',
        lineHeight: 20,
        marginTop: 10,
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
    userInfo2:{
        position: 'absolute',
        paddingLeft: windowHeight/30,
        width: windowWidth/2 - 50,
        justifyContent: 'flex-start',
        marginLeft: 40,
        top: windowHeight/5
    },
    userInfo:{
        position: 'absolute',
        flexDirection: 'row',
        paddingLeft: windowHeight/30,
        width: windowWidth - 20,
        justifyContent: 'flex-start',
        marginLeft: 40,
        top: windowHeight/5
    },
    profileImage: {
        width: 90,
        height: 90
    },
    textInput:{
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        height: 43,
        position: 'absolute',
        width: windowWidth - 75,
        top: 62,
        zIndex: 1,
        paddingLeft: 20,
        color: 'rgba(36, 32, 56, 0.8)',
        fontWeight: 'bold',
        fontSize: 18
    },
    textOverInput: {
        color: 'rgba(36, 32, 56, 0.45)',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 50,
        zIndex: 2,
        backgroundColor:'white',
        borderRadius: 20,
        width: 95,
    },
    textInputCond: {
        width: '75%',
        textAlignVertical: 'top',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(138, 112, 144, 0.6)',
        paddingTop: 30,
        paddingLeft: 5,
        color: 'rgba(138, 112, 144, 0.6)',
        left: 10
    },
    medCondStyle: {
        marginTop: 15,
        zIndex: 2,
    },
    medSVG:{
        position: 'absolute',
        zIndex: 1,
        top: windowHeight/3,
    }

});

