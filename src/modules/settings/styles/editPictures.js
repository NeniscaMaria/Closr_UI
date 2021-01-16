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
        marginTop: 30
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
    camera: {
        flex: 1,
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
    },
    buttonContainer: {
        top: windowHeight/2.5,
        width: windowWidth-20,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center'
        //margin: 20,
    }
});

