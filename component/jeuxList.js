import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import JeuObject from './jeuObject';

const JeuxList = ({ jeux }) => {
    return (
        <FlatList
            style={styles.flatlist}
            data={jeux}
            renderItem={({ item }) => <JeuObject jeux={item} />}
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
