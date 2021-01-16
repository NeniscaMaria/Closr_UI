import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/changePassword';
import wolrdSVG from "../assets/worldSVG";
import chatSVG from "../assets/chatSVG";
import {NavigationButton} from "./settingsScreen";
import changePasswordSVG from "../assets/changePasswordSVG";
import {SvgXml} from "react-native-svg";

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

const Input = ({text, value, onChange}) => {
    return (
        <View>
            <Text style={styles.textOverInput}>{text}</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={onChange} value={value}/>
        </View>
    )
};
const Form = ({old, setOld, newP, setNew, confirmation, setConfirmation}) => (
    <View style={{marginTop: 250}}>
        <Input text={"  Old password  "} value={old} onChange={setOld}/>
        <Input text={"  New Password  "} value={newP} onChange={setNew}/>
        <Input text={"  Confirm Password "} value={confirmation} onChange={setConfirmation}/>
    </View>
);

export default function ChangePassword({navigation}) {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmation, setConfirmation] = React.useState('');

    const change = () => {
        console.log("change");
        if(confirmation !== newPassword) {
            alert("The new password doesn't match the confirmation!");
            resetValues();
        }
        else {
            navigation.navigate("Settings")
        }
    };

    const resetValues = () => {
        setNewPassword("");
        setOldPassword("");
        setConfirmation("");
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
                <Header text={"Change\n password"}/>
                <Form old={oldPassword} setOld={setOldPassword}
                      newP={newPassword} setNew={setNewPassword}
                      confirmation={confirmation} setConfirmation={setConfirmation}/>
                <Button onPress={change} title={"Change Password"}/>
                <SvgXml style={styles.svg} xml={changePasswordSVG} width={249} height={200}/>
            </ImageBackground>
        </View>
    );
}
