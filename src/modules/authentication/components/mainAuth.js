import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Login from "../components/logIn";
import SignUp from "../components/signUp";

import {stylesLogIn} from '../styles/login';

const Header = ({text}) => {
    return (
        <View style={stylesLogIn.header}>
            <Text style={stylesLogIn.headerText}> {text}</Text>
        </View>
    );
};

export default function MainAuth(props) {
    const [showSignUp, setShowSignUp] = React.useState(false);

    const getText = () => {
        return showSignUp ? "Begin your journey\n with us!"
            : 'Welcome back!\n Continue matching with other people and share stories.';
    };

    return (
        <View style={stylesLogIn.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={stylesLogIn.image}>
                <Header text={getText()}/>
                {!showSignUp ? <Login setShowSignUp={setShowSignUp}/> :
                    <SignUp setShowSignUp={setShowSignUp} navigation={props.navigation}/>}
            </ImageBackground>
        </View>
    );
}
