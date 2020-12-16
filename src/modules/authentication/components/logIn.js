import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ImageBackground} from 'react-native-web';

import {styles} from '../styles/login';

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> {text}</Text>
        </View>
    );
};

const LoginButton = ({onPress, title}) => (
    <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

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

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/loginBackground.svg')} style={styles.image}>
                <Header text={'Welcome back!\n Continue matching with other\n people and share stories.'}/>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />
                    <LoginButton onPress={submitLogin.bind(this, email, password)} title={'Login'}/>
                    <Text style={{textAlign: 'center', marginTop: 10}}>
                        Don't have an account? <Text style={{fontWeight: 'bold'}}>Sign up</Text>.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}
