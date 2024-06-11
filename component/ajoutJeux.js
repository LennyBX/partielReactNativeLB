import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from "expo-image-picker";

const AjoutJeux= ({onAjoutJeux}) => {
    const [name, setName] = useState('');
    const [categorie, setCategorie] = useState('');
    const [price, setPrice] = useState('');
    const [vignette, setVignette] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setVignette(result.assets[0].uri);
        }
    };

    const ajoutJeux = () => {
        const nouveauJeu = { name, categorie, price, vignette };
        onAjoutJeux(nouveauJeu);
        setName('');
        setCategorie('');
        setPrice('');
        setVignette(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}> Ajout d'un Jeux </Text>
            <TextInput
                style={styles.input}
                placeholder="Nom du jeu"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Categorie"
                value={categorie}
                onChangeText={setCategorie}
            />
            <TextInput
                style={styles.input}
                placeholder="Prix"
                value={price}
                onChangeText={setPrice}
            />
            {vignette && <Image source={{ uri: vignette }} style={styles.image} />}
            <Button title="Ajouter une image" onPress={pickImage} />
            <TouchableOpacity style={styles.button} onPress={ajoutJeux}>
                <Text>Ajouter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    name: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 30,
        padding: 5,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    button: {
        marginTop: 10,
        borderWidth: 2,
        marginBottom: 30,
        textAlign: 'center',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default AjoutJeux;