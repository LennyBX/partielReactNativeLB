import React  from "react";
import { View, Text, StyleSheet } from "react-native";



const Header = ({pseudo, nbrJeuxTotales}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.pseudo}>{pseudo}</Text>
            <Text style={styles.nbrJeuxTotales}> Nombres de jeux videos :  {nbrJeuxTotales}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 70,
        padding: 30,
        margin: 10,
        width: "96%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pseudo: {
        fontWeight: "bold"
    },
    nbrJeuxTotales: {
        fontWeight: "bold"
    },
});

export default Header;