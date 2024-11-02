import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const TestPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Test Page</Text>
            <Button title="Hello" onPress={() => alert('Hello!')} />
            <Button title="Back to Home" onPress={() => navigation.navigate('/')} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TestPage;
