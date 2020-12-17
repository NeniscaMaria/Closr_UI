import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    signUpForm: {
        width: 300,
        height: 450,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '25%',
        right: 20,
        padding: 12,
        backgroundColor: 'rgba(247, 236, 225, 0.7)',
        borderRadius: 20
    },
    date: {
        flexDirection: 'row'
    },
    text: {
        color: 'rgba(138, 112, 144, 0.6)',
        textAlignVertical: 'top',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(138, 112, 144, 0.6)',
        paddingTop: 20,
        paddingBottom: 10,
        paddingRight: 50
    }
});

