import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styles} from '../../styles/uploadPicture';
import ImageScroller from "./ImageScroller";
import Camera from "expo-camera/build/Camera";

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
        //TODO: upload picture
        console.log("upload picture")
    };

    const takePicture = async () => {
        if(camera) {
            const options = {quality: 0.5, base64: true};
            setTakePic(false);
            const photo = await camera.takePictureAsync(options);
            console.log(photo);
            setImg(photo);
        }
    };

    return (
        <View style={styles.container}>
            {!takePic ?
                <View>
                    <Header text={"Upload some pictures of you"}/>
                    <ImageScroller/>
                    <ActionButtons takePicture={take} uploadPicture={uploadPicture}/>
                </View> :
                <Camera style={styles.camera} type={type} ref={camera}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                            }}>
                            <Text style={styles.textCamera}> Flip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.capture}
                            onPress={takePicture}>
                            <Text style={styles.textCamera}>Tap</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            }
        </View>
    );
}
