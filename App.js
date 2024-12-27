import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Teks di Tengah Layar</Text>

      {/* Flexbox dengan dua kotak */}
      <View style={styles.flexContainer}>
        <View style={styles.boxLeft} />
        <View style={styles.boxRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 50, // Memberi jarak antara teks dan kotak
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Memberi ruang horizontal untuk kotak
  },
  boxLeft: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna bebas
  },
  boxRight: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Warna bebas
  },
});

export default App;
