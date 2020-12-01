import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SetupProfile from "./src/modules/userprofile/components/userProfile";

export default function App() {
  return (
    <View style={styles.container}>
      <SetupProfile/>
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
