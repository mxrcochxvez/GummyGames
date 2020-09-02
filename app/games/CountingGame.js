import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(var i = 0; i < 6; i++) {
        color =+ letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function CountingGame() {

    const [numbers, setNumbers] = React.useState([
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
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today we are going to learn how to count!</Text>

            <FlatList
                data={numbers}
                renderItem={({ item }) => (
                    <View style={{ padding: 16, alignItems: 'center', flexDirection: 'row', backgroundColor: 'tomato' }}>
                        <View>
                            <Text style={{ fontSize: 24 }}>@</Text>
                        </View>
                        <Text style={styles.listItem}>{item}</Text>
                    </View>
                )}
                keyExtractor={item => "" + item}
                style={styles.list}
            />
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
    },
    list: {
        width: '100%'
    },
    listItem: {
        fontSize: 22,
        flex: 1,
        textAlign: 'center'
    }
})