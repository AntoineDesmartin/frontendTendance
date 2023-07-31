import React from 'react';
import { View, FlatList, Text } from 'react-native';

// Supposons que vous ayez une liste d'événements sous cette forme
const events = [
  { id: 1, title: 'Événement 1', date: '2023-07-31' },
  { id: 2, title: 'Événement 2', date: '2023-08-01' },
  { id: 3, title: 'Événement 3', date: '2023-07-29' },
  // ... Autres événements ...
];

const EventList = () => {
  // Triez les événements par date en utilisant la méthode sort()
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Fonction pour rendre chaque élément de la liste
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={sortedEvents}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default EventList;