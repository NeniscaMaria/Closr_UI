import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/chatFullScreen';
import wolrdSVG from "../../settings/assets/worldSVG";
import chatSVG from "../../settings/assets/chatSVG";
import {SvgXml} from "react-native-svg";
import {NavigationButton} from "../../settings/components/settingsScreen";
import profilePic from "../../authentication/assets/profilePic";

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> {text}</Text>
        </View>
    );
};

export const Button = ({onPress, title}) => (
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

const Message = ({text, left}) => {
    const getStyles = () => {
        return left ? {
                borderRadius: 20, borderTopLeftRadius: 0,
                borderColor: 'rgba(186, 90, 49, 0.5)',
                backgroundColor: '#F7ECE1'
            }
            : {
                borderRadius: 20, borderTopRightRadius: 0,
                borderColor: 'rgba(120, 132, 117, 0.9)',
                backgroundColor: 'rgba(120, 132, 117, 0.2)',
            };
    };

    return (
        <View style={[styles.message, getStyles()]}>
            <Text style={{fontSize: 14, color: '#242038', padding: 10}}>{text}</Text>
        </View>
    )
};
const ChatWindow = ({svg}) => {
    const [text, setText] = React.useState("");
    const [messages, setMessages] = React.useState([
        {text: "Hi!!! How was the last visit to the doctor?", left: true, time: "09:13 AM"}
    ]);

    function formatAMPM() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return hours + ':' + minutes+" " +ampm;
    }

    const addMessage = () => {
        setMessages([...messages, {
            text: text,
            left: false,
            time: formatAMPM()
        }]);
        setText("");
    };

    return (
        <View>
        <View style={styles.chatView}>
            {messages.map((message, i) => {
                return (
                    <View key={i}>
                        {message.left ? <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <SvgXml style={styles.svg} xml={svg} width={60} height={60}/>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'normal',
                                    color: 'rgba(0, 0, 0, 0.5)',
                                    marginTop: 60,
                                    marginLeft: 5
                                }}>{message.time}</Text>
                            </View> :
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'normal',
                                color: 'rgba(0, 0, 0, 0.5)',
                                marginTop: 60
                            }}>{message.time}</Text>
                            <SvgXml style={styles.svg2} xml={profilePic} width={60} height={60}/>
                        </View>
                        }
                        <Message text={message.text} left={message.left}/>
                    </View>
                )
            })}

            </View>
            <View>
                <TextInput placeholder={"Type something..."} style={styles.inputMessage}
                           value={text} onChangeText={setText}/>
                <Button onPress={addMessage} title={"Send"}/>
            </View>
        </View>
    );
};
export default function ChatFullScreen({navigation, route}) {
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
                <Header text={route.params.name}/>
                <ChatWindow svg={route.params.pic}/>
            </ImageBackground>
        </View>
    );
}
