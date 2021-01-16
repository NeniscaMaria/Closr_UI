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
import ChangePassword from "./src/modules/settings/components/changePassword";
import ChatScreen from "./src/modules/chat/components/ChatScreen";
import ChatFullScreen from "./src/modules/chat/components/ChatFullScreen";
import {AsyncStorage, ActivityIndicator} from 'react-native';

const Stack = createStackNavigator();

export default function App() {

    const [initialRouteName, setInitialRouteName] = useState('');

    AsyncStorage.getItem('user_token').then((token) => {
        if (token) {
            console.log(token);
            setInitialRouteName('MatchScreen');
        } else {
            setInitialRouteName('SplashScreen');
        }
    });

    React.useEffect(() => {}, [initialRouteName]);

    console.disableYellowBox = true;

    return initialRouteName ? (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRouteName}>
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
                    <Stack.Screen
                        name="ChangePassword"
                        component={ChangePassword}
                    />
                    <Stack.Screen
                        name="Chat"
                        component={ChatScreen}
                    />
                    <Stack.Screen
                        name="ChatFull"
                        component={ChatFullScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    ) : <ActivityIndicator/>;
}


