import React, {useState} from 'react';
import {ImageBackground, Text, TouchableHighlight, View} from 'react-native';
import {styles} from '../styles/userProfile';
import Breadcrumbs from "./breadcrumbs";
import UploadPicture from "./UploadPictureStep/uploadPicture";
import BioStep from "./BioStep/bioStep";
import MedicalConditions from "./MedicalConditionsStep/medicalConditions";
import FinalStep from "./FinalStep/finalStep";

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

const screenInfo = [
    {
        headerMessage: "Let's set up your profile.",
        buttonText: "Next step (About you)"
    }, {
        headerMessage: "Tell us more about you.",
        buttonText: "Next step (Medical conditions)"
    }, {
        headerMessage: "Connect with people that go through the same experiences as you",
        buttonText: "Next step (More details)"
    }, {
        headerMessage: "One step closer to the perfect match",
        buttonText: "Finish"
    }
]


export default function SetupProfile() {
    const [step, setStep] = useState(1);

    const skip = () => {
        //TODO: skip
        console.log("Skipping step.")
    };

    const getStepComponent = () => {
        let component;
        switch (step) {
            case 1:
                component = <UploadPicture/>;
                break;
            case 2:
                component = <BioStep/>;
                break;
            case 3:
                component = <MedicalConditions/>;
                break;
            case 4:
                component = <FinalStep/>;
                break;
            default:
                break;
        }
        return component;
    };

    const goToNextStep = () => {
        setStep(step + 1);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/background.jpg")} style={styles.image}>
                <Header text={screenInfo[step - 1].headerMessage} style={styles.header}/>
                {step === 1 && <SubHeader text={"Do you want to do this later?"} skip={skip}/>}
                <Breadcrumbs step={step}/>
                {getStepComponent()}
                <AppButton onPress={goToNextStep} title={screenInfo[step - 1].buttonText}/>
            </ImageBackground>
        </View>
    );
}
