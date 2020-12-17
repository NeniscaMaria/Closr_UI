import React, {useState, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import {stylesLogIn} from '../styles/login';

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

function submitLogin(email, password) {
    fetch('http://localhost:1900/api/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
        });
}

export default function Login({setShowSignUp}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const gotoSignUp = () => {
        setShowSignUp(true);
    };
    return (
        <View style={stylesLogIn.loginForm}>
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={"rgba(138, 112, 144, 0.6)"}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={"rgba(138, 112, 144, 0.6)"}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <LoginButton onPress={submitLogin.bind(this, email, password)} title={'Sign In'}/>
            <SubHeader text={"Don't have an account?"} skip={gotoSignUp}/>
        </View>
    );
}
