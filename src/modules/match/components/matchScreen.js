import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {matchStyles} from '../styles/match';
import ProfileCard from './ProfileCard/profileCard';
import {styles} from "../../settings/styles/settings";
import chatSVG from "../../settings/assets/chatSVG";
import {NavigationButton} from "../../settings/components/settingsScreen";
import settingsSVG from "../assets/settingsSVG";
import {SvgXml} from "react-native-svg";
import like from "../assets/buttons/likeSVG";
import dislike from "../assets/buttons/dislikeSVG";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eu massa volutpat tincidunt. Aliquam malesuada enim id tincidunt egestas. " +
    "\n Morbi id libero vel ante tempus auctor. \n\n Curabitur scelerisque orci lacus, eget vulputate neque libero."
const medConditions = ['Diabetes', 'Covid'];
const Header = ({text}) => {
    return (
        <View style={matchStyles.header}>
            <Text style={matchStyles.headerText}> {text}</Text>
        </View>
    );
};

const LikeButton = ({onPress}) => (
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={matchStyles.button}>
            <SvgXml xml={like} width={70} height={70}/>
        </TouchableOpacity>
    </View>
);

const DislikeButton = ({onPress}) => (
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={matchStyles.button}>
            <SvgXml xml={dislike} width={80} height={80}/>
        </TouchableOpacity>
    </View>
);


export default function MatchScreen({navigation}) {
    const [cardsContainerWidth, setCardsContainerWidth] = React.useState(false);
    const [cardsContainerHeight, setCardsContainerHeight] = React.useState(false);
    const [currentMatchIndex, setCurrentMatchIndex] = React.useState(0);
    const [profiles, setProfiles] = React.useState([
        {
            firstName: 'Corina',
            lastName: 'Pop',
            age: 24,
            location: 'Bucharest, Romania',
            profilePicture: require('../assets/profiles/profile1.jpg'),
            bio:lorem,
            medConditions: medConditions
        },
        {
            firstName: 'Mihai',
            lastName: 'Cozma',
            age: 27,
            location: 'Oradea, Romania',
            profilePicture: require('../assets/profiles/profile2.jpg'),
            bio:lorem,
            medConditions: medConditions
        },
        {
            firstName: 'Ion',
            lastName: 'Popescu',
            age: 26,
            location: 'Cluj-Napoca, Romania',
            profilePicture: require('../assets/profiles/profile3.jpg'),
            bio:lorem,
            medConditions: medConditions
        }
    ]);
    const likeProfile = () => {
        //TODO: send like to server and check for match
        goToNextMatch();
    };

    const dislikeProfile = () => {
        //TODO: send dislike to server
        goToNextMatch();
    };

    const goToNextMatch = () => {
        setCurrentMatchIndex(currentMatchIndex + 1);
        profiles.push(profiles.shift());
    };

    const getCards = () => {
        return profiles.map((profile, index) =>
            <ProfileCard key={index} profile={profile} index={index}/>);
    };

    const onLayoutHandler = (event) => {
        const {width, height} = event.nativeEvent.layout;
        setCardsContainerWidth(width);
        setCardsContainerHeight(height);
    };
    return (
        <View style={matchStyles.container}>
            <ImageBackground source={require('../../authentication/assets/background.jpg')} style={matchStyles.image}>
                <View style={styles.topNav}>
                    <NavigationButton onPress={() => {
                        navigation.navigate('Settings')
                    }} svg={settingsSVG}/>
                    <NavigationButton onPress={() => {
                    }} svg={chatSVG}/>
                </View>
                <Header text={'Discover'}/>
                {currentMatchIndex < profiles.length ?
                    <View onLayout={onLayoutHandler}
                          style={[matchStyles.cardsContainer, {transform: [{translateX: -cardsContainerWidth / 2}, {translateY: -cardsContainerHeight / 2}]}]}>
                        {getCards()}
                    </View> :
                    <View>
                        <Text>No more new people for now! Try again later^^</Text>
                    </View>
                }
                <View style={matchStyles.actionsContainer}>
                    <DislikeButton onPress={dislikeProfile}/>
                    <LikeButton onPress={likeProfile}/>
                </View>
            </ImageBackground>
        </View>
    );
}
