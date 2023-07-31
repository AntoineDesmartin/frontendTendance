import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MapScreen({navigation}) {

    const handleSubmit = () => {
        
          navigation.navigate('List', { screen: 'ListScreen' });
       
      };

  return (
    <View>
      <Text>MapScreen</Text>

      <Pressable onPress={() => handleSubmit()}>
        <FontAwesome name={"bars"} size={100} color={'#b2b2b2'} />
      </Pressable>
    </View>
  );
}
