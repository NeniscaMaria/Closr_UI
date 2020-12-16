import React, {useEffect, useState} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/bubbles';

const Bubble = ({data, deleteCondition}) => {
    return(
        <View style={styles.bubble}>
            <Text style={styles.text}>{data}</Text>
            <TouchableOpacity onPress={deleteCondition}>
                <Image style={styles.icon} source={require('../assets/Times_symbol.svg.png')}/>
            </TouchableOpacity>
        </View>
    )
};
export default function Bubbles({data, setData}) {
    const deleteCondition = () => {
        //TODO: delete condition
        console.log("delete cond")
    }
    return (
        <View style={styles.container}>
            {data.map((item,i)=>{
                return <Bubble key={i} data={item} deleteCondition={deleteCondition}/>
            })}
        </View>
    );
}
