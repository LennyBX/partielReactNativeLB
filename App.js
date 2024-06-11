import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Section from './component/section';
import { Jeux } from './data/data';
import Header from './component/header';
import AjoutJeux from "./component/ajoutJeux";
import Modaldelete from "./component/modaldelete";

export default function App() {
    const [jeux, setJeux] = useState(Jeux);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [selectedJeuxIndex, setSelectedJeuxIndex] = useState(null);
    const aventure = jeux.filter(game => game.categorie === 'Action-Aventure');
    const FPS = jeux.filter(game => game.categorie === 'FPS');
    const COMBAT = jeux.filter(game => game.categorie === 'Combat');
    const sport = jeux.filter(game => game.categorie === 'Sport');
    const voiture = jeux.filter(game => game.categorie === 'Voiture');
    const jeuxPeur = jeux.filter(game => game.categorie === 'Survival horror');

    const ajoutJeux = (nouveauJeu) => {
        setJeux(ancienJeux => [...ancienJeux, nouveauJeu]);
    };

    const supprimerJeux = (id) => {
        setSelectedJeuxIndex(id);
        setModalDeleteVisible(true);
    };

    const handleDeleteConfirmation = () => {
        if (selectedJeuxIndex !== null) {
            const nouveauxJeux = jeux.filter(game => game.id !== selectedJeuxIndex);
            setJeux(nouveauxJeux);
            setSelectedJeuxIndex(null);
            setModalDeleteVisible(false);
        }
    };

    return (
        <View style={styles.container}>
        <Header pseudo="Lenny BONDOUX" nbrJeuxTotales={jeux.length} />
            <Modaldelete visible={modalDeleteVisible} onClose={() => setModalDeleteVisible(false)} onDelete={handleDeleteConfirmation} />
            <ScrollView style={styles.scroll}>
                <Section title="Jeux d'avantures et d'action" jeux={aventure} onSupprimerJeux={supprimerJeux} />
                <Section title="Jeux FPS" jeux={FPS} onSupprimerJeux={supprimerJeux} />
                <Section title="Jeux de baguarre" jeux={COMBAT} onSupprimerJeux={supprimerJeux} />
                <Section title="Jeux de sports" jeux={sport} onSupprimerJeux={supprimerJeux} />
                <Section title="Voitures Jeux" jeux={voiture} onSupprimerJeux={supprimerJeux} />
                <Section title="Jeux qui font peur" jeux={jeuxPeur} onSupprimerJeux={supprimerJeux} />
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