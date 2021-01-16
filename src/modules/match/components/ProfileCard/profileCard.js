import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {matchStyles} from '../../styles/match';

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
    const {firstName, lastName, age, location, profilePicture, bio, medConditions} = profile;
    const getBlur = () => {
        return showBio ? 3: 0;
    };
    return (
        <View style={[matchStyles.profileCard, {top: -index * 10, zIndex: -index}]}
            onTouchStart={()=>{setShowBio(!showBio)}}>
            <ImageBackground source={profilePicture} style={matchStyles.image} blurRadius={getBlur()}>
                {showBio ?
                    <View style={matchStyles.bioView}>
                        <Text style={matchStyles.name}>{firstName+" "+lastName+", "+age}</Text>
                        <Text style={matchStyles.location}>{location}</Text>
                        <Input text={"Bio"} value={bio} onChange={()=>{}}/>
                        <Text style={matchStyles.medCond}>Medical conditions</Text>
                        <View style={matchStyles.containerBubble}>
                            {medConditions.map((item, i) => {
                                return <Bubble key={i} data={item}/>
                            })}
                        </View>
                    </View>
                    : <Details name={firstName+" "+lastName} age={profile.age} location={profile.location}/>}
            </ImageBackground>
        </View>
    );
}
