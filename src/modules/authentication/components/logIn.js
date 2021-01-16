import React, {useState, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import {stylesLogIn} from '../styles/login';
import { useDispatch } from 'react-redux'
import logInDoodle from "../assets/loginDoodle";
import {styles} from "../../splash screen/styles/splashScreen";
import doodle from "../../splash screen/assets/doodle";
import {SvgXml} from "react-native-svg";
const textColor = "rgba(138, 112, 144, 0.6)";
export const LoginButton = ({onPress, title}) => (
    <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={stylesLogIn.button}>
            <Text style={stylesLogIn.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

export const SubHeader = ({text, skip}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={stylesLogIn.message}> {text} </Text>
            <TouchableHighlight onPress={skip}>
                <View><Text style={stylesLogIn.signUpMessage}>Sign Up</Text></View>
            </TouchableHighlight>
        </View>
    )
};

export default function Login({setShowSignUp}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const gotoSignUp = () => {
        setShowSignUp(true);
    };

    const submitLogin = (email, password) => {
        dispatch({
            type: 'LOGIN',
            payload:{email, password}
        });
    };

    const handleClick = (email,password)=>{
        submitLogin(email,password)
    };

    return (
        <View style={stylesLogIn.loginForm}>
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <LoginButton onPress={handleClick.bind(this, email, password)} title={'Sign In'}/>
            <SubHeader text={"Don't have an account?"} skip={gotoSignUp}/>
            <SvgXml style={stylesLogIn.svg} xml = {logInDoodle} width={276} height={178}/>
        </View>
    );
}
