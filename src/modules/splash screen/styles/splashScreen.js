import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    svg:{
        marginTop: windowWidth/3,
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
        paddingRight:50,
        left: 0
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 48,
        color:'#242038',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: 'rgba(138, 112, 144, 0.8)',
        borderRadius: 20,
        marginTop: windowHeight/15
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F7ECE1',
        lineHeight: 20,
        marginTop: 10,
        alignItems: 'center',
        padding: 5
    },
    headline: {
        color: 'rgba(186, 90, 49, 0.8)',
        fontWeight: '200',
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        marginTop: windowHeight/20
    }
});

