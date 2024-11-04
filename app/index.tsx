import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from 'expo-router';
import { NavigationHelpersContext } from '@react-navigation/native';

const Home = () => {

  return (
    <View>

      <Button title='Home Screen' />
      <Button title='Tic Tac Toe' onPress={() => navigation.navigate('ticTacToe')} />
      <Button title='Hangman' onPress={() => navigation.navigate('hangMan')} />
    </View>
  )

}
export default Home;
