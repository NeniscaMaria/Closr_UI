import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 60,
        width: 323
    },
    bubble: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 110,
        height: 25,
        backgroundColor: 'rgba(120, 132, 117, 0.3)',
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 5,
        marginTop: 5
    },
    text: {
        fontWeight: '100',
        fontSize: 14,
        color: '#242038',
        textAlign: 'left',
        marginLeft:10,
        textAlignVertical: 'center',
        alignItems: 'center',
    },
    icon:{
        width:30,
        height:30,
    }
});

