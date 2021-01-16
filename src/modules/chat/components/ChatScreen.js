import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/chat';
import wolrdSVG from "../../settings/assets/worldSVG";
import chatSVG from "../../settings/assets/chatSVG";
import {NavigationButton} from "../../settings/components/settingsScreen";
import {SvgXml} from "react-native-svg";
import pic1SVG from './assets/pic1SVG'
import pic2SVG from "./assets/pic2SVG";
import pic3SVG from "./assets/pic3SVG";
import pic4SVG from "./assets/pic4SVG";

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
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

const ChatWindow = ({svg, name, text, time, onPress=()=>{}}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.chatView}>
            <SvgXml style={styles.svg} xml={svg} width={60} height={60}/>
            <View style={styles.textChat}>
                <View style={{flexDirection:'row', justifyContent:"space-between", marginBottom: 5}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#242038'}}>{name}</Text>
                    <Text style={{fontSize:12, fontWeight:'normal', color:'rgba(0, 0, 0, 0.5)'}}>{time}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode='tail'
                      style={{fontSize:12, fontWeight:'normal', color:'#242038', marginTop:3}}>{text}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};
export default function ChatScreen({navigation}) {
    const openChatFullScreen = () =>{
        console.log("open chat");
        navigation.navigate("ChatFull",{
            name: 'Susan Megan',
            pic: pic4SVG
        })
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
                <Header text={"Chat"}/>
                <View style={styles.profilePics}>
                    <SvgXml xml={pic1SVG} width={60} height={60}/>
                    <SvgXml xml={pic2SVG} width={60} height={60}/>
                    <SvgXml xml={pic3SVG} width={60} height={60}/>
                    <SvgXml xml={pic4SVG} width={60} height={60}/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <ChatWindow svg={pic4SVG} name={"Susan Megan"} text={"Hi!!! How was the last visit to the doctor?"}
                                time={"09:13 AM"} onPress={openChatFullScreen}/>
                    <ChatWindow svg={pic1SVG} name={"Bill Smith"} text={"I am glad I found someone like you."}
                                time={"08:16 PM"}/>
                    <ChatWindow svg={pic3SVG} name={"Karen Richards"} text={"Let's meet at the mall!!"}
                                time={"01:13 PM"}/>
                    <ChatWindow svg={pic2SVG} name={"Richard Homer"}
                                text={"I will gladly help you with whatever you need."} time={"06:21 PM"}/>
                </View>
            </ImageBackground>
        </View>
    );
}
