import Redux from '@reduxjs/toolkit';
import {AsyncStorage, ToastAndroid} from 'react-native';

const storeToken = async(token) => {
    try {
        await AsyncStorage.setItem('user_token', token);
        console.log(token);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const submitLogin = (email, password, onSuccess) => {
    fetch('http://192.168.0.103:1900/api/auth/login', {
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
        .then((json) => {
            if (json && json.token) {
                storeToken(json.token).then(() => {onSuccess()});
            } else {
              ToastAndroid.show('Wrong credentials, please try again.', ToastAndroid.SHORT);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const submitRegister = (email, password, firstName, lastName, dob, onSuccess) => {
    fetch('http://192.168.0.103:1900/api/auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dateOfBirth: dob,
            role: 'USER'
        })
    })
        .then((response) => response.json())
        .then((json) => {
            if (json && json.token) {
                storeToken(json.token).then(() => {onSuccess()});
            } else {
              ToastAndroid.show('There\'s already an account registered with this email address, please again.', ToastAndroid.SHORT);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

function authorizationReducer(state, action) {
    const {type, payload, onSuccess} = action;
    if(typeof state === 'undefined')
        return 0;
    if (type === 'LOGIN') {
        const {email, password} = payload;
        console.log("Logging in... ",email);
        submitLogin(email, password, onSuccess);
        return state;
    }
    if (type === 'REGISTER') {
        const {email, password, firstName, lastName, dob} = payload;
        console.log("Registering user... ", email);
        submitRegister(email, password, firstName, lastName, dob, onSuccess);
        return state;
    }
}

export const store = Redux.createStore(authorizationReducer);
