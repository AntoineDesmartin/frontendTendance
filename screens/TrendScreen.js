import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEvent } from '../reducers/events'; // Remplacez le chemin par le chemin réel vers votre action `setEvent`

const eventData = [
    {
        creator: 'joan',
        eventName: 'SJparty',
        type: 'music',
        date: '2023-08-10',
        hourStart: '22:45',
        hourEnd: '01:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: 'Gratuit',
        website: 'linktr.ee/sacrejojo69',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002', '003', '004'],
            partUsers: ['005', '006', '007', '008'],
        }],
    }, {
        creator: 'nico',
        eventName: 'TacosMania',
        type: 'food',
        date: '2023-08-09',
        hourStart: '19:45',
        hourEnd: '22:45',
        address: '26 Rue de Marseille 69007 Lyon',
        price: '10',
        website: 'https://www.kebab-frites.com/kebab/uskudar-lyon-7.html',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002', '003', '004'],
            partUsers: ['005', '006', '007', '008','09','10'],
        }],
    }, 
    {
        creator: 'mich',
        eventName: 'ExpoMeme23',
        type: 'art',
        date: '2023-10-22',
        hourStart: '22:45',
        hourEnd: '05:45',
        address: '20 Place des Terreaux 69001 Lyon',
        price: '5',
        website: 'https://www.mba-lyon.fr/fr',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '009'],
        }],
    }, {
        creator: 'adri',
        eventName: 'Marathon de Lyon',
        type: 'sport',
        date: '2023-09-13',
        hourStart: '05:45',
        hourEnd: '22:45',
        address: 'Place Bellecour 69002 Lyon',
        price: '25',
        website: 'https://www.runinlyon.com/fr',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006', '008'],
        }],
    }, {
        creator: 'ines',
        eventName: 'Les Matins de la Cartographie',
        type: 'science',
        date: '2023-09-13',
        hourStart: '05:45',
        hourEnd: '11:45',
        address: 'Place de la Nation, 69120 Vaulx-en-Velin',
        price: '10',
        website: 'https://www.planetariumvv.com/',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006'],
        }],
    }, {
        creator: 'tone',
        eventName: 'La Pêche au Harpon',
        type: 'nature',
        date: '2023-08-24',
        hourStart: '05:45',
        hourEnd: '00:45',
        address: 'Rue de Créqui 69006 Lyon',
        price: '55',
        website: 'https://www.snsm.org/conseils/conseils-loisirs-nautiques/peche-sous-marine-pratique-et-reglementation',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002'],
            partUsers: ['003', '004','005', '006'],
        }],
    }, {
        creator: 'max',
        eventName: 'DemodayBatch89-LaCapsuleGrooveCamp',
        type: 'science',
        date: '2033-01-11',
        hourStart: '14:45',
        hourEnd: '16:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: '10',
        website: 'https://now-coworking.com/',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['001', '002', '009', '010'],
            partUsers: ['003', '004','005', '006', '007', '008'],
        }],
    }, 
    {
        creator: 'user',
        eventName: '???',
        type: 'science',
        date: '2024-01-11',
        hourStart: '00:45',
        hourEnd: '03:45',
        address: '35 rue de Marseille 69007 Lyon',
        price: 'Gratuit',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['003', '004','005', '006', '007', '008', '001', '002', '009', '010'],
            partUsers: [],
        }],
    }, 
    {
        creator: 'user',
        eventName: 'TekTek69event',
        type: 'music',
        date: '2023-12-11',
        hourStart: '21:45',
        hourEnd: '03:45',
        address: 'rue de Sèze 69006 Lyon',
        price: '3',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['003', '004','005', '006', '007', '008', '001', '002', '009', '010'],
            partUsers: [],
        }],
    }, 
    {
        creator: 'user',
        eventName: 'GymTonic2000',
        type: 'sport',
        date: '2023-11-11',
        hourStart: '07:45',
        hourEnd: '08:45',
        address: 'rue de Sèze 69006 Lyon',
        price: '3',
        website: '',
        description: 'Lorem ipsum dolor sit amet. Qui voluptates internos nam inventore atque aut culpa repellendus ut velit officia. Et velit vero sed velit reiciendis ut accusantium dolorem cum voluptates corporis sit quidem architecto.',
        eventCover: '',
        users: [{
            interUsers: ['003', '004','005', '006', '002', '009', '010'],
            partUsers: ['007', '008', '001'],
        }],
    }
];

const colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#9C27B0', '#F44336']; // Liste de couleurs pour les boutons

export default function TrendScreen() {
  const [buttonColors, setButtonColors] = useState(colors); // Etat local pour les couleurs des boutons
  const dispatch = useDispatch(); // Instance de `dispatch` pour appeler l'action `setEvent`

  const handleInterestedClick = (index) => {
    // Gère le clic sur le bouton "Intéressé"
    setButtonColors((prevColors) => {
      // Copie l'ancien état des couleurs
      const newColors = [...prevColors];
      newColors[index % colors.length] = getRandomColor(); // Change la couleur du bouton en utilisant une couleur aléatoire
      return newColors;
    });

    dispatch(setEvent(eventData[index])); // Appel de `setEvent` avec les données de l'événement correspondant à l'index
  };

  const handleParticipateClick = (index) => {
    // Gère le clic sur le bouton "Je participe"
    setButtonColors((prevColors) => {
      // Copie l'ancien état des couleurs
      const newColors = [...prevColors];
      newColors[index % colors.length] = getRandomColor(); // Change la couleur du bouton en utilisant une couleur aléatoire
      return newColors;
    });

    dispatch(setEvent(eventData[index])); // Appel de `setEvent` avec les données de l'événement correspondant à l'index
  };

  const getRandomColor = () => {
    // Fonction pour obtenir une couleur aléatoire de la liste des couleurs
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getTextColor = (buttonColor) => {
    // Fonction pour obtenir la couleur du texte en fonction de la couleur du bouton
    // Vous pouvez définir les conditions pour choisir la couleur du texte en fonction de la couleur du bouton
    // Par exemple, si le bouton est sombre, vous pouvez renvoyer '#FFF' (blanc) comme couleur de texte, sinon '#000' (noir).
    // Dans cet exemple, nous renvoyons toujours la couleur blanche (#FFF) pour le texte des boutons.
    return '#FFF';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {eventData.map((event, index) => (
        <View key={index} style={styles.eventBlock}>
          <Image source={require('../assets/campusfrance2017-21.jpg')} style={styles.eventImage} />
          <Text style={styles.eventDate}>{event.date}</Text>
          <Text style={styles.eventTime}>
            {event.hourStart} - {event.hourEnd}
          </Text>
          <Text style={styles.eventName}>{event.eventName}</Text>
          <Text style={styles.eventCreator}>Par {event.creator}</Text>
          <Text style={styles.eventAddress}>{event.address}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.interestedButton, { backgroundColor: buttonColors[index % colors.length] }]}
              onPress={() => handleInterestedClick(index)}
            >
              <Text style={[styles.buttonText, { color: getTextColor(buttonColors[index % colors.length]) }]}>Intéressé(e)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.participateButton, { backgroundColor: buttonColors[(index + 1) % colors.length] }]}
              onPress={() => handleParticipateClick(index)}
            >
              <Text style={[styles.buttonText, { color: getTextColor(buttonColors[(index + 1) % colors.length]) }]}>Je participe</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#F9F9F9',
      paddingHorizontal: 16,
      paddingTop: Platform.OS === 'ios' ? 40 : 20,
    },
    eventBlock: {
      backgroundColor: '#FFF',
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    eventImage: {
      width: '100%',
      height: 200, // Ajustez la hauteur de l'image selon vos besoins
      resizeMode: 'cover',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginBottom: 10,
    },
    eventDate: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    eventTime: {
      fontSize: 14,
      color: '#666',
    },
    eventName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    eventCreator: {
      fontSize: 14,
      color: '#666',
    },
    eventAddress: {
      fontSize: 14,
      color: '#666',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    interestedButton: {
      flex: 1,
      paddingVertical: 10,
      borderRadius: 8,
      marginRight: 5,
    },
    participateButton: {
      flex: 1,
      paddingVertical: 10,
      borderRadius: 8,
      marginLeft: 5,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
    },
  });




