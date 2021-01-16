import React from 'react';
import {AsyncStorage, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/splashScreen';
import {SvgXml} from 'react-native-svg';
import doodle from '../assets/doodle';

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

export default function SplashScreen(props) {
    const redirect = () => {
        props.navigation.navigate("MainAuth");
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../authentication/assets/background.jpg')} style={styles.image}>
                <Header text={"Closr"}/>
                <SvgXml style={styles.svg} xml = {doodle} width={318} height={258}/>
                <Text style={styles.headline}>Connect with people from all over the world and share experiences</Text>
                <Button onPress={redirect} title={"Get Started"}/>
            </ImageBackground>
        </View>
    );
}
