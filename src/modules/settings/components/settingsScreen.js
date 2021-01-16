import React, {useState} from 'react';
import {AsyncStorage, Image, ImageBackground, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import jwt_decode from 'jwt-decode';
import {styles} from '../styles/settings';
import {SvgXml} from "react-native-svg";
import wolrdSVG from "../assets/worldSVG";
import chatSVG from "../assets/chatSVG";
import logoutSVG from "../assets/logoutSVG";
import profilePic from "../../authentication/assets/profilePic";
import userSVG from "../../authentication/assets/userSVG";
import editSVG from "../../authentication/assets/editSVG";
import passwordSVG from "../../authentication/assets/passwordSVG";
import notificationsHeaderSVG from "../../authentication/assets/notificationsHeaderSVG";
import notSVG from "../../authentication/assets/notSVG";
import appSVG from "../../authentication/assets/appSVG";
import moment from 'moment';

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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <SvgXml style={{marginTop: 12}} xml={logoutSVG} width={22} height={22}/>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export const NavigationButton = ({onPress, svg}) => (
    <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <SvgXml style={styles.svg} xml={svg} width={30} height={30}/>
        </TouchableOpacity>
    </View>
);

const UserInfo = ({image, name, age}) => (
    <View style={styles.userInfo}>
        <SvgXml style={{marginTop: 12}} xml={profilePic} width={90} height={90}/>
        <View style={{flexDirection:'column', marginTop: 15, marginLeft:10}}>
            <Text style={{fontSize:24, lineHeight: 36}}>{name}</Text>
            <Text style={{fontSize: 14, lineHeight: 21}}>Cluj-Napoca, Romania</Text>
            <Text style={{fontSize: 14, lineHeight: 21}}>{age} years old</Text>
        </View>
    </View>
);

const AccountOptions = ({navigate, profile}) => (
    <View style={{top:25}}>
        <SvgXml xml={userSVG} width={327} height={31}/>
        <TouchableOpacity onPress = {()=>{navigate("EditProfile", {profile})}}>
                <SvgXml style={{marginTop: 12}} xml={editSVG} width={327} height={31}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{navigate("ChangePassword")}}>
                <SvgXml style={{marginTop: 12}} xml={passwordSVG} width={327} height={31}/>
        </TouchableOpacity>
    </View>
);

const NotificationsOptions = () => (
    <View style={{top:25}}>
        <SvgXml style={{marginTop: 50}} xml={notificationsHeaderSVG} width={327} height={31}/>
        <SvgXml style={{marginTop: 12}} xml={notSVG} width={327} height={31}/>
        <SvgXml style={{marginTop: 12}} xml={appSVG} width={327} height={31}/>
    </View>
);

const removeToken = async() => {
  try {
    await AsyncStorage.removeItem('user_token');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getAge = (dateOfBirth) => {
  return moment().diff(moment(dateOfBirth, 'DD/MM/YYYY'), 'years');
}

export default function Settings({navigation}) {
    const [profile, setProfile] = useState(null);

    AsyncStorage.getItem('user_token').then((token) => {
      const jwtUser = jwt_decode(token);

      fetch('http://192.168.0.103:1900/api/users/' + jwtUser?.userId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
          .then((response) => response.json())
          .then((json) => {
            setProfile(json);
          })
          .catch((error) => {
            console.error(error);
          });
    });

    const logOut = () => {
        removeToken().then(() => {
            navigation.reset({
                index: 0,
                routes: [{name: 'SplashScreen'}]
            });
        });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../authentication/assets/background.jpg')} style={styles.image}>
                <View style={styles.topNav}>
                    <NavigationButton onPress={() => {navigation.navigate('MatchScreen')}} svg={wolrdSVG}/>
                    <NavigationButton onPress={() => {
                        navigation.navigate('Chat')
                    }} svg={chatSVG}/>
                </View>
                <Header text={"Settings"}/>
                <UserInfo image={"../assets/profilePic.jpg"}
                          name={(profile?.firstName + ' ' + profile?.lastName)}
                          age={getAge(profile?.dateOfBirth)}/>
                <Button onPress={logOut} title={"Log out"}/>
                <AccountOptions navigate={navigation.navigate} profile={profile}/>
                <NotificationsOptions/>
            </ImageBackground>
        </View>
    );
}
