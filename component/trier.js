import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from "expo-checkbox";

const trier = ({ onTrierJeux }) => {
    const [CheckBoxCroissant, setCheckBoxCroissant] = useState(false);
    const [CheckBoxDecroissant, setCheckBoxDecroissant] = useState(false);

    const ValueChangeCroissant = (newValue) => {
        setCheckBoxCroissant(newValue);
        if (newValue) {
            setCheckBoxDecroissant(false);
            onTrierJeux('croissant');
        }
    };

    const ValueChangeDecroissant = (newValue) => {
        setCheckBoxDecroissant(newValue);
        if (newValue) {
            setCheckBoxCroissant(false);
            onTrierJeux('decroissant');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Trier par prix :</Text>
            <View style={styles.croissant}>
                <Text> Croissant</Text>
                <CheckBox
                    style={styles.checkbox}
                    value={CheckBoxCroissant}
                    onValueChange={ValueChangeCroissant}
                />
            </View>
            <View style={styles.decroissant}>
                <Text> Decroissant</Text>
                <CheckBox
                    style={styles.checkbox}
                    value={CheckBoxDecroissant}
                    onValueChange={ValueChangeDecroissant}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    croissant: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    decroissant: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginLeft: 10,
    },
});

export default trier;
