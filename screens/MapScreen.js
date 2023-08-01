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
import { displayIncomingEvents } from '../reducers/events';
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import eventData from "../data/data"

export default function MapScreen({navigation}) {
    const dispatch = useDispatch();
    //const user = useSelector((state) => state.events.value);
  
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 }, (location) => {
          setCurrentPosition(location.coords);
        });
      }
    })();
  }, []);

  const handleSubmit = () => {
    navigation.navigate('List', { screen: 'ListScreen' });
};

const displayEvents = () => {
    
    dispatch(displayIncomingEvents({ name: newPlace, latitude: tempCoordinates.latitude, longitude: tempCoordinates.longitude }));
    setModalVisible(false);
    setNewPlace('');
  };

// const markers = user.places.map((data, i) => {
//     return <Marker key={i} coordinate={{ latitude: data.latitude, longitude: data.longitude }} title={data.name} />;
//   });

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {currentPosition && <Marker coordinate={currentPosition} title="My position" pinColor="#fecb2d" />}
        
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

});



