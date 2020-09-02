import React from 'react';
import colors from '../config/colors';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

import gummy from '../assets/gummyBear.jpg';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground source={gummy} style={styles.image}>
            <Text style={styles.brand}>Gummy Games!</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Click here to Play!" 
                    color={colors.white} 
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    brand: {
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold'
    },
    buttonContainer: {
      backgroundColor: colors.secondary,
      borderRadius: 15
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
