import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import MainAuth from "./src/modules/authentication/components/mainAuth";
import {store} from "./src/modules/authentication/reducers/index"
import SetupProfile from "./src/modules/userprofile/components/userProfile";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="MainAuth"
                        component={MainAuth}
                    />
                    <Stack.Screen
                        name="SetUpProfile"
                        component={SetupProfile}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </Provider>

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
