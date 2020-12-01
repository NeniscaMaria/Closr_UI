import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/imageScroller';


export default function ImageScroller() {

    const deletePicture = () => {
        //TODO: delete picture
        console.log("delete picture")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={deletePicture}>
                <Image style={styles.icon} source={require('./assets/trashIcon.png')}/>
            </TouchableOpacity>
        </View>
    );
}
