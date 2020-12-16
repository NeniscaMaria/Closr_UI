import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles/breadcrumbs';

const Rectangle = ({backgroundColor}) =>{
    return (
        <View style={[styles.rectangle, {backgroundColor : backgroundColor}]}/>
    )
};
export default function Breadcrumbs({step}) {
    let colors = new Array(4).fill("rgba(231, 231, 231, 0.5)");
    for(let i=0;i<step;i++){
       colors[i]="rgba(186, 90, 49, 0.6)";
    }

    const breadcrumbs = colors.map((item,i)=>{
        return <Rectangle key={i} backgroundColor={item}/>
    });
    return (
        <View style={styles.container}>
            {breadcrumbs}
        </View>
    );
}