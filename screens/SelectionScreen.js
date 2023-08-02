import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SelectionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'purple' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Art</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'blue' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Music</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* 4 autres blocs */}
      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'green' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Food</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'red' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/tim-swaan-eOpewngf68w-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Nature</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'orange' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/milad-fakurian-58Z17lnVS4U-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Science</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.block, { backgroundColor: 'yellow' }]}
        activeOpacity={0.8}
        onPress={() => {
          // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
        }}
      >
        <ImageBackground
          source={require('../assets/august-phlieger-CREqtqgBFcU-unsplash.jpg')}
          style={[
            styles.imageContainer,
            { width: windowWidth * 0.9, height: windowWidth * 0.9 * (3 / 4) },
          ]}
          resizeMode="cover"
          borderRadius={20}
        >
          <Text style={styles.title}>Sport</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ajout de flexGrow pour permettre le scrolling
    justifyContent: 'space-between',
    padding: 15,
  },
  block: {
    width: windowWidth / 1.1,
    height: windowHeight / 5,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 20,
  },
});
