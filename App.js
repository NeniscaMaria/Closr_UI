import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainAuth from "./src/modules/authentication/components/mainAuth";

export default function App() {
  return (
    <View style={styles.container}>
      <MainAuth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
