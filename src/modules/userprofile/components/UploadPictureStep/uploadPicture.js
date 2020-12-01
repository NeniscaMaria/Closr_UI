import React, {useEffect, useState} from 'react';
import {TouchableOpacity,Image, Text, View} from 'react-native';
import {styles} from '../../styles/uploadPicture';
import ImageScroller from "./ImageScroller";

const Header = ({text}) => {
    return (
        <View>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

const ActionButtons = ({takePicture, uploadPicture}) => {
    return (
        <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={takePicture}>
                <Image style={styles.icon} source={require('../assets/takePictureIcon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={uploadPicture}>
                <Image style={styles.icon} source={require('../assets/uploadIcon.png')}/>
            </TouchableOpacity>
        </View>
    )
};
export default function UploadPicture() {

    const takePicture = () => {
        //TODO: take picture
        console.log("take picture")
    };

    const uploadPicture = () => {
        //TODO: upload picture
        console.log("upload picture")
    };

    return (
        <View style={styles.container}>
            <Header text={"Upload some pictures of you"}/>
            <ImageScroller/>
            <ActionButtons takePicture={takePicture} uploadPicture={uploadPicture}/>
        </View>
    );
}
