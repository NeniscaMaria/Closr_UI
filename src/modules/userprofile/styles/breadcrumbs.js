import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20

    },
    rectangle: {
        height: 7,
        width: windowWidth/4-30,
        backgroundColor: 'pink',
        margin: 10
    },
});

