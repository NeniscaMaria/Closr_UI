import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, TouchableHighlight} from 'react-native';
import {styles} from '../styles/signUp';
import {stylesLogIn} from '../styles/login';
import {LoginButton} from "./logIn";
import DatePicker from "react-native-datepicker";
import { useDispatch } from 'react-redux';
import {SvgXml} from "react-native-svg";
import signupDoodle from "../assets/signupDoodle";

const textColor = "rgba(138, 112, 144, 0.6)";
export const SubHeader = ({text, skip}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={stylesLogIn.message}> {text} </Text>
            <TouchableHighlight onPress={skip}>
                <View><Text style={stylesLogIn.signUpMessage}>Sign in.</Text></View>
            </TouchableHighlight>
        </View>
    )
};

export default function SignUp({setShowSignUp,navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState(new Date());
    const dispatch = useDispatch();

    const gotoLogIn = () => {
        setShowSignUp(false);
    };

    const submitRegister = (email, password, firstName, lastName, dob) => {
        dispatch({
            type: 'REGISTER',
            payload: {email, password, firstName, lastName, dob}
        });
    };

    const handleClick = (email, password, firstName, lastName, dob)=>{
        submitRegister(email, password, firstName, lastName, dob)
    };

    return (
        <View style={styles.signUpForm}>
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="First Name"
                onChangeText={setFirstName}
                value={firstName}
            />
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="Last Name"
                onChangeText={setLastName}
                value={lastName}
            />
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={stylesLogIn.textInput}
                placeholderTextColor ={textColor}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <View style={styles.date}>
                <Text style={styles.text}>Date of birth</Text>
                <DatePicker
                    mode={"date"}
                    date={dob}
                    onDateChange={setDob}
                    customStyles={{
                        dateIcon: {
                            display: "none"
                        },
                        dateInput: {
                            marginTop: 24,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(138, 112, 144, 0.6)',
                        },
                        dateText: {
                            color: ' rgba(138, 112, 144, 0.8)'
                        }
                    }}
                />
            </View>
            <LoginButton title={'Sign Up'} onPress={handleClick.bind(this, email, password, firstName, lastName, dob)}/>
            <SubHeader text={"Already have an account?"} skip={gotoLogIn}/>
            {/*<SvgXml style={styles.svg} xml={signupDoodle} width={302} height={225}/>*/}
        </View>
    );
}
