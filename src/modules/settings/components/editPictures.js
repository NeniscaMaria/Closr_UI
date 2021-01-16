import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/editPictures';
import {styles as uploadStyle} from '../../userprofile/styles/uploadPicture';
import wolrdSVG from "../assets/worldSVG";
import chatSVG from "../assets/chatSVG";
import {NavigationButton} from "./settingsScreen";
import ImageScroller from "../../userprofile/components/UploadPictureStep/ImageScroller";
import Camera from "expo-camera/build/Camera";
import {ActionButtons} from "../../userprofile/components/UploadPictureStep/uploadPicture";
import * as ImagePicker from "expo-image-picker";

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> {text}</Text>
        </View>
    );
};

export const Button = ({onPress, title}) => (
    <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

export default function EditPictures({navigation}) {
    const [img, setImg] = useState(null);
    const [takePic, setTakePic] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    let camera = useRef(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const take = () => {
        setTakePic(true);
    };

    const uploadPicture = () => {
        pickImage();
    };

    const takePicture = async () => {
        if (camera) {
            const options = {quality: 0.5, base64: true};
            setTakePic(false);
            const photo = await camera.takePictureAsync(options);
            console.log(photo);
            setImg(photo);
        }
    };

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            } else {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [3, 4],
                    quality: 1,
                });
                console.log(result);
                if (!result.cancelled) {
                    setImg(result.uri);
                }
            }
        }
    };

    const save = () => {
        //TODO save pictures
        navigation.navigate("EditProfile");
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../authentication/assets/background.jpg')} style={styles.image}>
                <View style={styles.topNav}>
                    <NavigationButton onPress={() => {
                        navigation.navigate('MatchScreen')
                    }} svg={wolrdSVG}/>
                    <NavigationButton onPress={() => {
                    }} svg={chatSVG}/>
                </View>
                <Header text={"Edit pictures"}/>
                {!takePic ?
                    <View style={{marginTop: 20}}>
                        <ImageScroller/>
                        <ActionButtons takePicture={take} uploadPicture={uploadPicture}/>
                    </View> :
                    <Camera style={styles.camera} type={type} ref={camera}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={uploadStyle.button}
                                onPress={() => {
                                    setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                                }}>
                                <Text style={uploadStyle.textCamera}> Flip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={uploadStyle.capture}
                                onPress={takePicture}>
                                <Text style={uploadStyle.textCamera}>Tap</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                }
                <Button onPress={save} title={"Save"}/>
            </ImageBackground>
        </View>
    );
}
