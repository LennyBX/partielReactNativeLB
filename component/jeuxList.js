import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import JeuObject from './jeuObject';

const JeuxList = ({ jeux, onSupprimerJeux }) => {
    return (
        <FlatList
            style={styles.flatlist}
            data={jeux}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <JeuObject jeux={item} onSupprimerJeux={onSupprimerJeux} />}
        />
    );
};

const styles = StyleSheet.create({
    flatlist: {
        width: '80%',
        alignSelf: 'center',
    },
});

export default JeuxList;
