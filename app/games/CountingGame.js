import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

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