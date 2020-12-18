import React, {useEffect, useState} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/medicalConditions';
import Bubbles from "./bubbles";
import {stylesLogIn} from "../../../authentication/styles/login";

const Header = ({text}) => {
    return (
        <View>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

const Disclaimer = () => {
    return (
        <View style={styles.disclaimer}>
            <Text style={styles.disclaimerText}> Disclaimer: This information is private. Others will know about your
                medical conditions only with
                your consent. By proceeding to the next, you agree with our</Text>
            <Text style={[styles.disclaimerText, {fontWeight: 'bold'}]}> terms and services.</Text>
        </View>
    )
};

export const AddButton = ({onPress}) => (
    <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    </View>
);

export default function MedicalConditions() {
    const [value, onChangeText] = React.useState('');
    const [selectedConditions, setSelectedConditions] = React.useState([]);

    const addCondition = () => {
        selectedConditions.push(value);
        onChangeText("");
    };

    return (
        <View>
            <View style={styles.container}>
                <Header text={"Medical conditions"}/>
                <Bubbles data={selectedConditions} setData={setSelectedConditions}/>
                <View style={{flexDirection: "row"}}>
                    <TextInput style={styles.textInput}
                               value={value}
                               onChangeText={onChangeText}
                    />
                    <AddButton onPress={addCondition}/>
                </View>
            </View>
            <Disclaimer/>
        </View>
    );
}
