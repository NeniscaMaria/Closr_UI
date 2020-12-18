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

}

export const store = Redux.createStore(authorizationReducer);