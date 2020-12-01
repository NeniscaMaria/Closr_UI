import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ImageBackground, TouchableHighlight, Text, View} from 'react-native';
import {styles} from '../styles/userProfile';
import Breadcrumbs from "./breadcrumbs";
import UploadPicture from "./uploadPicture";

const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

const SubHeader = ({text, skip}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.message}> {text} </Text>
            <TouchableHighlight onPress={skip}>
                <View><Text style={styles.skipMessage}>Skip.</Text></View>
            </TouchableHighlight>
        </View>
    )
};

const AppButton = ({onPress, title}) => (
    <View style={{alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </View>
);

export default function SetupProfile() {
    const [step, setStep] = useState(1);

    const skip = () => {
        console.log("Skipping step.")
    };

    const getStepComponent = () => {
        let component;
        switch (step) {
            case 1:
                component = <UploadPicture/>;
                break;
            // case 2:
            //     text+="(Medical conditions)";
            //     break;
            // case 3:
            //     text+="(More details)";
            //     break;
            // case 4:
            //     text = "Finish";
            //     break;
            default:
                break;
        }
        return component;
    };
    const goToNextStep = () => {
        setStep(step + 1);
    };
    const getButtonText = () => {
        let text = "Next Step ";
        switch (step) {
            case 1:
                text += "(About you)";
                break;
            case 2:
                text += "(Medical conditions)";
                break;
            case 3:
                text += "(More details)";
                break;
            case 4:
                text = "Finish";
                break;
            default:
                break;
        }
        return text;
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/background.jpg")} style={styles.image}>
                <Header text={"Let's set up your profile."} style={styles.header}/>
                <SubHeader text={"Do you want to do this later?"} skip={skip}/>
                <Breadcrumbs step={step}/>
                {getStepComponent()}
                <AppButton onPress={goToNextStep} title={getButtonText()}/>
            </ImageBackground>
        </View>
    );
}
