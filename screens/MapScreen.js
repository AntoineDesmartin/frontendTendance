import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { setEvents } from '../reducers/events';
import { setEvent } from "../reducers/event";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import eventData from "../data/data"

const BACKEND_ADDRESS = 'https://backend-tendance.vercel.app';

import {setOpenModal} from "../reducers/openModal"
import Modale from './components/Modale';


export default function MapScreen(props) {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.value);
  
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentPositionMarker = require('../assets/current_location_icon.png')

  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setCurrentPosition(location.coords);
        });
      }
    })();

    fetch(`${BACKEND_ADDRESS}/events/events`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(setEvents(data));
        }
       // console.log("Fetch des events dans map screen au chargement de la page",data);
      });
  }, []);

  const handleSubmit = () => {
    props.navigation.navigate('List', { screen: 'ListScreen' });
};

const handleMarkerPress = (event) => {
  setSelectedEvent(event);
};


const user = useSelector((state)=>state.user.value); 
const isModalOpen = useSelector((state)=>state.openModal.value)

const handlePress = (data)=>{
  
    if(user===null){
      console.log("null");
        dispatch(setOpenModal(!isModalOpen))
    }else{
      console.log(data);
        props.navigation.navigate('Event', { screen: 'EventScreen' });
        dispatch(setEvent(data))
    } 
}

const handleInitialRegion = (region) => {
  if (!initialRegion) {
    setInitialRegion(region);
  }
}

// const displayEvents = () => {
    
//     dispatch(displayIncomingEvents({ name: newPlace, latitude: tempCoordinates.latitude, longitude: tempCoordinates.longitude }));
//     setModalVisible(false);
//     setNewPlace('');
//   };


// const markers = events.map((data, i) => {
//   return <Marker key={i} coordinate={{ latitude: data.latitude, longitude: data.longitude }} title={data.eventName} />;
// });


//Fond de carte personnalisé
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }

]

  const foodIcon = require('../assets/food_icon.png');
  const musicIcon = require('../assets/music_icon.png');
  const natureIcon = require('../assets/nature_icon.png');
  const scienceIcon = require('../assets/science_icon.png');
  const artIcon = require('../assets/art_icon.png');
  const sportIcon = require('../assets/sport_icon.png');

  const getMarkerIconByType = (eventType) => {
    switch (eventType) {
      case 'Food':
        return foodIcon;
      case 'Music':
        return musicIcon;
      case 'Nature':
        return natureIcon;
      case 'Science':
        return scienceIcon;
      case 'Art':
        return artIcon;
      case 'Sport':
        return sportIcon;
    }
  }

    return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Change to "light-content" if you need white status bar content
        backgroundColor="white" // Set the background color of the status bar
      />
      <Modale></Modale>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        zoomControlEnabled={true}
        initialRegion={currentPosition ? {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        } : null}
        handleInitialRegion={handleInitialRegion}
      >
        {currentPosition && (
        <Marker 
          coordinate={currentPosition} 
          title="My position"  
        >
        <Image
          source={currentPositionMarker}
          style={styles.currentPositionIcon}/>
        </Marker>
        )}

        {events.map((event, i) => (
          <Marker 
          key={i} 
          coordinate={{ latitude: event.latitude, longitude: event.longitude }}
          title={event.eventName}
          onMarkerPress={() => handleMarkerPress(event)}
          
        >
          <Image
          source={getMarkerIconByType(event.type)}
          style={styles.markerImage}/>

        <Callout tooltip onPress={()=>handlePress(event)} title="Event">
              {/* Customize the content of the Callout */}
              <View>
              <View style={styles.bubble}> 
                <Text style={styles.eventName}>{event.eventName}</Text>
                <Text style={styles.typeEvent}>{event.type}</Text>
                {/* <Text>{event.website}</Text> */}
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.hourStart}>{event.hourStart}</Text>
                <Text style={styles.hourEnd}>{event.hourEnd}</Text>
                <Text style={styles.descriptionEvent}>{event.description}</Text>
                <Text style={styles.priceEvent}>{event.price}</Text>
                <Text style={styles.addressEvent}>{event.address}</Text>
                {/* Add any additional information you want to show in the Callout */}
              </View>
              <View style={styles.arrowBorder}/>
              <View style={styles.arrow} />
              </View>
            </Callout>
            </Marker>
        ))}
      </MapView>
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.pressableButton}>
            <FontAwesome name={"bars"} size={30} color={'#b2b2b2'} />
        </TouchableOpacity>
    </View>
  );
}

//STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  pressableButton: {
    position: "absolute",
    bottom: 20,
    right: 70,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
  },

  markerImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  currentPositionIcon: {
    width: 30,
    height: 30,
  },
  bubble:{
    flexDirection: 'column',
    alignSelf: 'flex-start',
    width: 170,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
  },
  eventName: {
    fontSize: 16,
    marginBottom: 5,
  },
  typeEvent: {
    fontSize: 14,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
});

