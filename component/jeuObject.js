import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JeuObject = ({ jeux }) => {
    return (
        <View style={styles.jeuxCard}>
            <View style={styles.dispositionCard}>
                <Text style={styles.titree}>{jeux.name}</Text>
                <Text style={styles.prixCategorie}>Prix: {jeux.price}</Text>
                <Text style={styles.prixCategorie}>Catégorie: {jeux.categorie}</Text>
            </View>
            <Image source={{ uri: jeux.vignette }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    jeuxCard: {
        padding: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    titree: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },
    dispositionCard: {
        flex: 2,
    },
    prixCategorie: {
        flex: 1,
        fontSize: 14,
    },
});

export default JeuObject;
