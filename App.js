import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Section from './component/section';
import { Jeux } from './data/data';
import Header from './component/header';
import AjoutJeux from "./component/ajoutJeux";

export default function App() {
    const [jeux, setJeux] = useState(Jeux);
    const aventure = jeux.filter(game => game.categorie === 'Action-Aventure');
    const FPS = jeux.filter(game => game.categorie === 'FPS');
    const COMBAT = jeux.filter(game => game.categorie === 'Combat');
    const sport = jeux.filter(game => game.categorie === 'Sport');
    const voiture = jeux.filter(game => game.categorie === 'Voiture');
    const jeuxPeur = jeux.filter(game => game.categorie === 'Survival horror');

    const ajoutJeux = (nouveauJeu) => {
        setJeux(ancienJeux => [...ancienJeux, nouveauJeu]);
    };

    return (
        <View style={styles.container}>
        <Header pseudo="Lenny BONDOUX" nbrJeuxTotales={jeux.length} />
            <ScrollView style={styles.scroll}>
                <Section title="Jeux d'avantures et d'action" jeux={aventure} />
                <Section title="Jeux FPS" jeux={FPS} />
                <Section title="Jeux de baguarre" jeux={COMBAT} />
                <Section title="Jeux de sports" jeux={sport} />
                <Section title="Voitures Jeux" jeux={voiture} />
                <Section title="Jeux qui font peur" jeux={jeuxPeur} />
            </ScrollView>
            <AjoutJeux onAjoutJeux={ajoutJeux}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});