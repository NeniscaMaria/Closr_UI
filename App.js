import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux'
import MainAuth from "./src/modules/authentication/components/mainAuth";
import {store} from "./src/modules/authentication/reducers/index"
import SetupProfile from "./src/modules/userprofile/components/userProfile";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from "./src/modules/splash screen/components/splashScreen";
import MatchScreen from './src/modules/match/components/matchScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                    />
                    <Stack.Screen
                        name="MainAuth"
                        component={MainAuth}
                    />
                    <Stack.Screen
                        name="SetUpProfile"
                        component={SetupProfile}
                    />
                    <Stack.Screen
                        name="MatchScreen"
                        component={MatchScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </Provider>

    );
}


