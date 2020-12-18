import React, {useCallback, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/finalStep';
import {Dropdown} from "react-native-material-dropdown";
import {Slider} from 'rn-range-slider';
import Thumb from "./Thumb";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Notch from "./Notch";
import Label from "./Label";

const Header = ({text}) => {
    return (
        <View>
            <Text style={styles.text}> {text}</Text>
        </View>
    )
};

const Bubble = ({data, deleteCondition}) => {
    return (
        <View style={styles.bubble}>
            <Text style={styles.textBubble}>{data}</Text>
            <TouchableOpacity onPress={deleteCondition}>
                <Image style={styles.icon} source={require('../assets/Times_symbol.svg.png')}/>
            </TouchableOpacity>
        </View>
    )
};
const Bubbles = ({data, setData}) => {
    const deleteCondition = (i) => {
        let newData = [...data];
        newData.splice(i, 1);
        setData(newData);
        console.log(i)
    };
    return (
        <View style={styles.containerBubble}>
            {data.map((item, i) => {
                return <Bubble key={i} data={item} deleteCondition={deleteCondition.bind(this, i)}/>
            })}
        </View>
    );
};

export default function FinalStep() {
    const [selectedGenderValue, setSelectedGenderValue] = React.useState(0);
    const [selectedGendersValue, setSelectedGendersValue] = React.useState(0);
    const [selectedGenders, setSelectedGenders] = React.useState([]);
    const [minAge, setMinAge] = React.useState(10);
    const [maxAge, setMaxAge] = React.useState(80);
    const genders = [
        {label: '', value: 0},
        {
            label: 'Female',
            value: 1
        }, {
            label: 'Male',
            value: 2
        }, {
            label: 'Non-binary',
            value: 3
        }
    ];

    useEffect(() => {
        let label = '';
        genders.forEach((c) => {
            if (c.value === selectedGendersValue)
                label = c.label;
        });
        if (label !== '' && !selectedGenders.includes(label))
            setSelectedGenders([...selectedGenders, label]);
    }, [selectedGendersValue]);

    const getMessageSlider = () => {
        return "I am looking forward to speaking with people between " + minAge.toString() + " - " + maxAge.toString() + " years old."
    };

    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
        setMinAge(low);
        setMaxAge(high);
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <Header text={"What gender do you identify with?"}/>
                <View style={styles.dropdown}><Dropdown data={genders}
                                                        value={selectedGenderValue}
                                                        label="Choose gender"
                                                        itemColor={'black'}
                                                        useNativeDriver={true}
                                                        onChangeText={(value, index, data) => {
                                                            setSelectedGenderValue(value)
                                                        }}/>
                </View>

                <Header text={"What gender(s) are you interested in?"}/>
                <Bubbles data={selectedGenders} setData={setSelectedGenders}/>
                <View style={styles.dropdown}><Dropdown data={genders}
                                                        value={selectedGendersValue}
                                                        label="Choose gender(s)"
                                                        itemColor={'black'}
                                                        useNativeDriver={true}
                                                        onChangeText={(value, index, data) => {
                                                            setSelectedGendersValue(value)
                                                        }}/>
                </View>

                <Header text={getMessageSlider()}/>
                <Slider
                    style={styles.slider}
                    min={10}
                    max={80}
                    step={1}
                    floatingLabel
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />
            </View>
        </View>
    );
}
