import React, { useState, useEffect } from "react";
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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MapScreen({navigation}) {
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

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {currentPosition && <Marker coordinate={currentPosition} title="My position" pinColor="#fecb2d" />}
        
      </MapView>
      <Pressable onPress={() => handleSubmit()}>
            <FontAwesome name={"bars"} size={100} color={'#b2b2b2'} />
        </Pressable>
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
});



