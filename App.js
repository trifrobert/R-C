import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.fuelWord}>Fuel</Text>
        <Text style={styles.finderWord}>Finder</Text>
      </Text>
      {/* Your other content */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Vertically align content at the top
    paddingTop: 100, // Add padding to the top
  },

  title: {
    fontSize: 24, // You can adjust the font size as needed
    textAlign: 'center', // Center the text horizontally
  },

  fuelWord: {
    fontWeight : 'bold',
    color : 'rgb(8,8,8)'
  },

  finderWord: {
    color: 'rgb(33,33,33)'
  }
});
