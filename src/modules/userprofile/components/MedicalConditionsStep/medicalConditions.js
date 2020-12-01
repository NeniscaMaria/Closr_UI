import React, {useEffect, useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from '../../styles/medicalConditions';
import {Dropdown} from "react-native-material-dropdown";
import Bubbles from "./bubbles";

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
}
export default function MedicalConditions() {
    const [value, onChangeText] = React.useState('');
    const [ddlSelectedValue, setDdlSelectedValue] = React.useState(0);
    const [selectedConditions, setSelectedConditions] = useState([]);
    const medicalConditions = [
        {label: '', value: 0},
        {
            label: 'Covid-19',
            value: 1
        }, {
            label: 'Diabetes',
            value: 2
        }, {
            label: 'Cancer',
            value: 3
        }, {
            label: 'Hepatitis B',
            value: 4
        }
    ];

    useEffect(() => {
        let label = '';
        medicalConditions.forEach((c) => {
            if (c.value === ddlSelectedValue)
                label = c.label;
        });
        if (label !== '' && !selectedConditions.includes(label))
            setSelectedConditions([...selectedConditions, label]);
    }, [ddlSelectedValue]);

    return (
        <View>
            <View style={styles.container}>
                <Header text={"Medical conditions"}/>
                <Bubbles data={selectedConditions} setData={setSelectedConditions}/>
                <Dropdown data={medicalConditions}
                          value={ddlSelectedValue}
                          label="Choose medical conditions"
                          itemColor={'black'}
                          useNativeDriver={true}
                          onChangeText={(value, index, data) => {
                              console.log(value, index)
                              setDdlSelectedValue(value)
                          }}/>
            </View>
            <Disclaimer/>
        </View>
    );
}
