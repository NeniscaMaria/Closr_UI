import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const Rail = () => {
    return (
        <View style={styles.root}/>
    );
};

export default memo(Rail);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: 24,
        borderRadius: 20,
        backgroundColor: 'rgba(120, 132, 117, 0.3)',
    },
});