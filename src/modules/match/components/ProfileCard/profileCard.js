import React from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {matchStyles} from '../../styles/match';
import {styles} from "../../../settings/styles/changePassword";
import Bubbles from "../../../userprofile/components/MedicalConditionsStep/bubbles";

const Details = ({name, age, location}) => {
    const [detailsWidth, setDetailsWidth] = React.useState(false);
    const onLayoutEventHandler = (event) => {
        const {width} = event.nativeEvent.layout;
        setDetailsWidth(width);
    };
    return (
        <View onLayout={onLayoutEventHandler}
              style={[matchStyles.cardDetails, {transform: [{translateX: -detailsWidth / 2}]}]}>
            <Text style={matchStyles.cardDetailsHeader}>{name}, {age}</Text>
            <Text style={matchStyles.cardDetailsSubheader}>{location}</Text>
        </View>
    );
};

const Input = ({text, value, onChange}) => {
    return (
        <View>
            <Text style={matchStyles.textOverInput}>{text}</Text>
            <TextInput editable={false} multiline
                       numberOfLines={20}
                       style={matchStyles.textInput} onChangeText={onChange} value={value}/>
        </View>
    )
};

const Bubble = ({data}) => {
    return (
        <View style={matchStyles.bubble}>
            <Text style={matchStyles.textBubble}>{data}</Text>
        </View>
    )
};

export default function ProfileCard({profile, index}) {
    const [showBio, setShowBio] = React.useState(false);
    const {profilePicture, firstName, lastName, age, location, bio, medConditions} = profile;

    return (
        <View style={[matchStyles.profileCard, {top: -index * 10, zIndex: -index}]}
            onTouchStart={()=>{setShowBio(!showBio)}}>
            <ImageBackground source={profilePicture} style={matchStyles.image}>
                {showBio ?
                    <View style={matchStyles.bioView}>
                        <Text style={matchStyles.name}>{firstName} {lastName}, {age}</Text>
                        <Text style={matchStyles.location}>{location}</Text>
                        <Input text={"Bio"} value={bio} onChange={()=>{}}/>
                        <Text style={matchStyles.medCond}>Medical conditions</Text>
                        <View style={matchStyles.containerBubble}>
                            {medConditions.map((item, i) => {
                                return <Bubble key={i} data={item}/>
                            })}
                        </View>
                    </View>
                    : <Details name={profile.name} age={profile.age} location={profile.location}/>}
            </ImageBackground>
        </View>
    );
}
