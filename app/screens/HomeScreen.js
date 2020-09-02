import React from 'react';
import colors from '../config/colors';
import { View, Text, StyleSheet, Button } from 'react-native';

const games = [
    {
        name: 'Counting Game'
    }
]

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.selectionTitle}>Select a game!</Text>
            {games.map((game, idx) => (
                <View style={styles.selectionContainer} key={idx}>
                    <Button title={game.name} onPress={() => {
                        navigation.navigate('CountingGame')
                    }} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    selectionTitle: {
        fontSize: 24,
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    selectionContainer: {
        alignItems: 'flex-start',
        marginTop: 50,
        backgroundColor: colors.white,
        padding: 20,
        width: '100%'
    }
})
