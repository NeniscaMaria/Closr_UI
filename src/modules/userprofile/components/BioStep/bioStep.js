import React, {useEffect, useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from '../../styles/bioStep';
import SvgUri from 'react-native-svg-uri';

const Header = ({text}) => {
    return (
        <View>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

//TODO: fix svg
export default function BioStep() {
    const [value, onChangeText] = React.useState('');
    return (
        <View>
            <View style={styles.container}>
                <Header text={"Here you can write about yourself: your passions, hobbies and many more."}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    multiline={true}
                    maxLength={256}
                    padding={12}
                />

            </View>
            <SvgUri style={styles.svg}
                    width={221}
                    height={163}
                    source={require('../assets/personalNotes.svg')}/>
        </View>
    );
}
