import React from 'react';
import {AsyncStorage, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/settings';
import {SvgXml} from "react-native-svg";
import wolrdSVG from "../assets/worldSVG";
import chatSVG from "../assets/chatSVG";
import profilePic from "../../authentication/assets/profilePic";
import {NavigationButton} from "./settingsScreen";
import editProfilePicSVG from "../assets/editProfilePicSVG";
import medCOndSVG from "../assets/medCondSVG";
import Bubbles from "../components/bubbles";
import {AddButton} from "../../userprofile/components/MedicalConditionsStep/medicalConditions";
import jwt_decode from 'jwt-decode';

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> {text}</Text>
        </View>
    );
};

export const Button = ({onPress, title}) => (
    <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button2}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

const UserInfo = ({image, navigate}) => (
    <View style={styles.userInfo2}>
        <SvgXml style={{marginTop: 12}} xml={profilePic} width={92} height={92}/>
        <TouchableOpacity style={{marginLeft: 100, position: 'absolute', marginTop: 80}} onPress={() => {
            navigate("EditPictures")
        }}>
            <SvgXml xml={editProfilePicSVG} width={25}
                    height={25}/>
        </TouchableOpacity>
    </View>
);

const Input = ({text, value, onChange}) => {
    return (
        <View>
            <Text style={styles.textOverInput}>{text}</Text>
            <TextInput style={styles.textInput} onChangeText={onChange} value={value}/>
        </View>
    )
};
const Form = ({
                  fName, setFName, lName, setLName, email, setEmail,
                  selectedConditions, setSelectedConditions,
                  condition, setCondition, addCondition
              }) => (
    <View style={{top: 30}}>
        <Input text={"  First Name  "} value={fName} onChange={setFName}/>
        <Input text={"  Last Name  "} value={lName} onChange={setLName}/>
        <Input text={"  Email "} value={email} onChange={setEmail}/>
        <SvgXml style={styles.medSVG} xml={medCOndSVG} width={323} height={156}/>
        <View style={styles.medCondStyle}>
            <Bubbles data={selectedConditions} setData={setSelectedConditions}/>
            <View style={{flexDirection: "row"}}>
                <TextInput style={styles.textInputCond}
                           value={condition}
                           onChangeText={setCondition}
                />
                <AddButton onPress={addCondition}/>
            </View>
        </View>
    </View>
);

export default function EditProfile({navigation, route}) {
    const profile = route.params?.profile;

    const [firstName, setFirstName] = React.useState(profile?.firstName || '');
    const [lastName, setLastName] = React.useState(profile?.lastName || '');
    const [email, setEmail] = React.useState(profile?.email || '');
    const [condition, setCondition] = React.useState('');
    const [selectedConditions, setSelectedConditions] = React.useState([]);

    const save = () => {
      AsyncStorage.getItem('user_token').then((token) => {
        const jwtUser = jwt_decode(token);

        fetch('http://192.168.0.103:1900/api/users/' + jwtUser?.userId, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email
          })
        })
            .then((response) => response.json())
            .then(() => {
              navigation.navigate("Settings");
            })
            .catch((error) => {
              console.error(error);
            });
      });
    };

    const addCondition = () => {
        selectedConditions.push(condition);
        setCondition("");
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../authentication/assets/background.jpg')} style={styles.image}>
                <View style={styles.topNav}>
                    <NavigationButton onPress={() => {
                        navigation.navigate('MatchScreen')
                    }} svg={wolrdSVG}/>
                    <NavigationButton onPress={() => {
                        navigation.navigate('Chat')
                    }} svg={chatSVG}/>
                </View>
                <Header text={"Edit Profile"}/>
                <UserInfo image={"../assets/profilePic.jpg"} navigate={navigation.navigate}/>

                <View style={{position:'absolute', top:190}}>
                    <Form fName={firstName} setFName={setFirstName}
                      lName={lastName} setLName={setLastName}
                      email={email} setEmail={setEmail}
                      selectedConditions={selectedConditions} setSelectedConditions={setSelectedConditions}
                      condition={condition} setCondition={setCondition} addCondition={addCondition}/>
                </View>
                <Button onPress={save} title={"Save"}/>
            </ImageBackground>
        </View>
    );
}
