
import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';

const RailSelected = () => {
    return (
        <View style={styles.root}/>
    );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
    root: {
        height: 24,
        backgroundColor: 'rgba(138, 112, 144, 1)',
        borderRadius: 2,
    },
});