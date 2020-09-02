import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CountingGame() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today we are going to learn how to count!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 24
    }
})