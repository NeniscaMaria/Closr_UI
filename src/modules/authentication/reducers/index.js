import Redux from "@reduxjs/toolkit";
import { AsyncStorage } from 'react-native';

const storeKey = async(response) => {
    try{
        await AsyncStorage.setItem("authKey", response);
    }catch(error){
        console.log(error);
    }
};

const submitLogin = (email,password) => {
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
        .then((responseData) => {
            storeKey(responseData);
        }).done();
};

const submitRegister = (email, password, firstName, lastName, dob) => {
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
        .then((responseData) => {
            storeKey(responseData);
        }).done();
};

function authorizationReducer(state, action) {
    const {type, payload} = action;
    if(typeof state === 'undefined')
        return 0;
    if (type === 'LOGIN') {
        const {email, password} = payload;
        console.log("Logging in... ",email);
        submitLogin(email,password);
        return state;
    }
    if (type === 'REGISTER') {
        const {email, password, firstName, lastName, dob} = payload;
        console.log("Registering user... ", email);
        submitRegister(email, password, firstName, lastName, dob);
        return state;
    }
}

export const store = Redux.createStore(authorizationReducer);
