import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JeuxList from './jeuxList';

const Section = ({ title, jeux, onSupprimerJeux }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <JeuxList jeux={jeux} onSupprimerJeux={onSupprimerJeux} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 30,
        textAlign: 'center',
    },
});

export default Section;
