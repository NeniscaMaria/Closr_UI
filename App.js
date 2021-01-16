import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux'
import MainAuth from "./src/modules/authentication/components/mainAuth";
import {store} from "./src/modules/authentication/reducers/index"
import SetupProfile from "./src/modules/userprofile/components/userProfile";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from "./src/modules/splash screen/components/splashScreen";
import Settings from "./src/modules/settings/components/settingsScreen";
import MatchScreen from './src/modules/match/components/matchScreen';
import EditProfile from "./src/modules/settings/components/editProfile";
import EditPictures from "./src/modules/settings/components/editPictures";

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
                        name="Settings"
                        component={Settings}
                        />
                    <Stack.Screen
                        name="MatchScreen"
                        component={MatchScreen}
                    />
                    <Stack.Screen
                        name="EditProfile"
                        component={EditProfile}
                    />
                    <Stack.Screen
                        name="EditPictures"
                        component={EditPictures}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </Provider>

    );
}


