import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/bubbles';

const Bubble = ({data, deleteCondition}) => {
    return (
        <View style={styles.bubble}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{data}</Text>
            <TouchableOpacity onPress={(e) => {
                deleteCondition(e)
            }}>
                <Image style={styles.icon} source={require('../../userprofile/components/assets/Times_symbol.svg.png')}/>
            </TouchableOpacity>
        </View>
    )
};
export default function Bubbles({data, setData}) {
    const deleteCondition = (i) => {
        let newData = [...data];
        newData.splice(i, 1);
        setData(newData);
    };

    return (
        <View style={styles.container}>
            {data.map((item, i) => {
                return <Bubble key={i} data={item} deleteCondition={deleteCondition.bind(this, i)}/>
            })}
        </View>
    );
}
