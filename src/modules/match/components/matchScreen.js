import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import {matchStyles} from '../styles/match';

import ProfileCard from './ProfileCard/profileCard';

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
        <Image source={require('../assets/buttons/like.svg')}/>
      </TouchableOpacity>
    </View>
);

const profiles = [
  {name: 'Jane Doe', age: 24, location: 'Bucharest, Romania', profilePicture: require('../assets/profiles/profile1.jpg')},
  {name: 'John Doe', age: 27, location: 'Oradea, Romania', profilePicture: require('../assets/profiles/profile2.jpg')},
  {name: 'John Doe', age: 26, location: 'Cluj-Napoca, Romania', profilePicture: require('../assets/profiles/profile3.jpg')}
];

function likeProfile() {

}

function dislikeProfile() {

}

export default function MatchScreen(props) {
  const [cardsContainerWidth, setCardsContainerWidth] = React.useState(false);
  const [cardsContainerHeight, setCardsContainerHeight] = React.useState(false);

  return (
      <View style={matchStyles.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={matchStyles.image}>
          <Header text={'Discover'}/>
          <View onLayout={event => {
            const {width, height} = event.nativeEvent.layout;
            setCardsContainerWidth(width);
            setCardsContainerHeight(height);
          }}
                style={[matchStyles.cardsContainer, {transform: [{translateX: -cardsContainerWidth / 2}, {translateY: -cardsContainerHeight / 2}]}]}>
            {
              profiles.map((profile, index) => <ProfileCard profile={profile} index={index}/>)
            }
          </View>
          <View style={matchStyles.actionsContainer}>
            <LikeButton onPress={likeProfile}/>
          </View>
        </ImageBackground>
      </View>
  );
}
