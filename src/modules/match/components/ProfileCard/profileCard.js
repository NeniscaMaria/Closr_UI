import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {matchStyles} from '../../styles/match';

const Details = ({name, age, location}) => {
  const [detailsWidth, setDetailsWidth] = React.useState(false);

  return (
      <View onLayout={event => {
        const {width} = event.nativeEvent.layout;
        setDetailsWidth(width);
      }}
            style={[matchStyles.cardDetails, {transform: [{translateX: -detailsWidth / 2}]}]}>
        <Text style={matchStyles.cardDetailsHeader}>{name}, {age}</Text>
        <Text style={matchStyles.cardDetailsSubheader}>{location}</Text>
      </View>
  );
};

export default function ProfileCard({profile, index}) {
  return (
      <View style={[matchStyles.profileCard, {top: -index * 10, zIndex: -index}]}>
        <ImageBackground source={profile.profilePicture} style={matchStyles.image}>
          <Details name={profile.name} age={profile.age} location={profile.location}/>
        </ImageBackground>
      </View>
  );
}
