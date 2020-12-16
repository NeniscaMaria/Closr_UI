import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/finalStep';
import {Dropdown} from "react-native-material-dropdown";

const Header = ({text}) => {
    return (
        <View>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

const Bubble = ({data, deleteCondition}) => {
    return(
        <View style={styles.bubble}>
            <Text style={styles.textBubble}>{data}</Text>
            <TouchableOpacity onPress={deleteCondition}>
                <Image style={styles.icon} source={require('../assets/Times_symbol.svg.png')}/>
            </TouchableOpacity>
        </View>
    )
};
const Bubbles = ({data, setData}) => {
    const deleteCondition = () => {
        //TODO: delete condition
        console.log("delete cond")
    }
    return (
        <View style={styles.containerBubble}>
            {data.map((item,i)=>{
                return <Bubble key={i} data={item} deleteCondition={deleteCondition}/>
            })}
        </View>
    );
}

export default function FinalStep() {
    const [selectedGenderValue, setSelectedGenderValue] = React.useState(0);
    const [selectedGendersValue, setSelectedGendersValue] = React.useState(0);
    const [selectedGenders, setSelectedGenders] = React.useState([]);
    const genders = [
        {label: '', value: 0},
        {
            label: 'Female',
            value: 1
        }, {
            label: 'Male',
            value: 2
        }, {
            label: 'Non-binary',
            value: 3
        }
    ];

    useEffect(() => {
        let label = '';
        genders.forEach((c) => {
            if (c.value === selectedGendersValue)
                label = c.label;
        });
        if (label !== '' && !selectedGenders.includes(label))
            setSelectedGenders([...selectedGenders, label]);
    }, [selectedGendersValue]);

    return (
        <View>
            <View style={styles.container}>
                <Header text={"What gender do you identify with?"}/>
                <View style={styles.dropdown}><Dropdown data={genders}
                          value={selectedGenderValue}
                          label="Choose gender"
                          itemColor={'black'}
                          useNativeDriver={true}
                          onChangeText={(value, index, data) => {
                              setSelectedGenderValue(value)
                          }}/>
                </View>

                <Header text={"What gender(s) are you interested in?"}/>
                <Bubbles data={selectedGenders} setData={setSelectedGenders}/>
                <View style={styles.dropdown}><Dropdown data={genders}
                          value={selectedGendersValue}
                          label="Choose gender(s)"
                          itemColor={'black'}
                          useNativeDriver={true}
                          onChangeText={(value, index, data) => {
                              setSelectedGendersValue(value)
                          }}/>
                </View>

                <Header text={"I am looking forward to speaking with people between 21 - 35 years old."}/>
            {/*    TODO: age slider*/}
            </View>
        </View>
    );
}
