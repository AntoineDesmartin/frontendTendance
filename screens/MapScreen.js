import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { setEvents } from '../reducers/events';
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import eventData from "../data/data"

const BACKEND_ADDRESS = 'https://backend-tendance.vercel.app';

export default function MapScreen({navigation}) {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.value);
  
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
        console.log("Fetch des events dans map screen au chargement de la page",data);
      });
  }, []);

  const handleSubmit = () => {
    navigation.navigate('List', { screen: 'ListScreen' });
};


const handleMarkerPress = (event) => {
  setSelectedEvent(event);
};


const handleCalloutPress = () => {
  navigation.navigate('EventDetails', { eventId: selectedEvent._id });
};



// const displayEvents = () => {
    
//     dispatch(displayIncomingEvents({ name: newPlace, latitude: tempCoordinates.latitude, longitude: tempCoordinates.longitude }));
//     setModalVisible(false);
//     setNewPlace('');
//   };


// const markers = events.map((data, i) => {
//   return <Marker key={i} coordinate={{ latitude: data.latitude, longitude: data.longitude }} title={data.eventName} />;
// });

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {currentPosition && (<Marker coordinate={currentPosition} title="My position" pinColor="#fecb2d" />)}
        {events.map((event, i) => (
          <Marker 
          key={i} 
          coordinate={{ latitude: event.latitude, longitude: event.longitude }}
          title={event.eventName}
          onPress={() => handleMarkerPress(event)}
          
        >
        <Callout onPress={handleCalloutPress} style={styles.popup} title="Event">
              {/* Customize the content of the Callout */}
              <View style={styles.viewCallOut}> 
                <Text>Event</Text>
                <Text>{event.eventName}</Text>
                <Text>{event.type}</Text>
                {/* <Text>{event.website}</Text> */}
                <Text>{event.date}</Text>
                <Text>{event.hourStart}</Text>
                <Text>{event.houEnd}</Text>
                <Text>{event.description}</Text>
                <Text>{event.price}</Text>
                <Text>{event.address}</Text>
                {/* Add any additional information you want to show in the Callout */}
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
    right: 20,
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 30,
  },
  viewCallOut:{
    backgroundColor:"red"
  }

});