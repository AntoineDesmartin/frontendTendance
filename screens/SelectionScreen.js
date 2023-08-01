import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectionScreen = () => {
  const data = [
    {
      id: 1,
      title: 'Bloc 1',
      image: require('../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg'), // Remplace par le chemin de ton image
    },
    {
      id: 2,
      title: 'Bloc 2',
      image: require('../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg'), // Remplace par le chemin de ton image
    },
    {
        id: 2,
        title: 'Bloc 2',
        image: require('../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg'), // Remplace par le chemin de ton image
      },
      {
        id: 2,
        title: 'Bloc 2',
        image: require('../assets/tim-swaan-eOpewngf68w-unsplash.jpg'), // Remplace par le chemin de ton image
      },
      {
        id: 2,
        title: 'Bloc 2',
        image: require('../assets/milad-fakurian-58Z17lnVS4U-unsplash.jpg'), // Remplace par le chemin de ton image
      },
  ];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.block}
          activeOpacity={0.8}
          onPress={() => {
            // Ajoute ici le code à exécuter lorsqu'un bloc est cliqué (si nécessaire)
          }}
        >
          <ImageBackground
            source={item.image}
            style={styles.imageBackground}
            resizeMode="cover"
            borderRadius={20}
          >
            <Text style={styles.title}>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  block: {
    width: '48%', // 2 blocs par ligne pour laisser un petit espace entre eux
    height: 200,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 20,
  },
});

export default SelectionScreen;
