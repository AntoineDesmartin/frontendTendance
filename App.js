import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import MapScreen from './screens/MapScreen';

import PublishScreen from './screens/PublishScreen';
import TrendScreen from './screens/TrendScreen';
import SelectionScreen from "./screens/SelectionScreen.js";
import ProfileScreen from './screens/ProfileScreen';



import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import events from './reducers/events';
const store = configureStore({
  reducer: { user,events },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
    // <.Navigator screenOptions={({ route }) => ({
    //   tabBarIcon: ({ color, size }) => {
    //     let iconName= '';

    //     if (route.name === 'Snap') {
    //       iconName = 'camera';
    //     } else if (route.name === 'Gallery') {
    //       iconName = 'image';
    //     }

    //     return <FontAwesome name={iconName} size={size} color={color} />;
    //   },
    //   tabBarActiveTintColor: '#e8be4b',
    //   tabBarInactiveTintColor: '#b2b2b2',
    //   headerShown: false,
    // })}>
//     <Tab.Navigator>
//       <Tab.Screen name="Snap" component={SnapScreen} />
//       <Tab.Screen name="Gallery" component={GalleryScreen} />
//     </Tab.Navigator>
//   );
// };



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Selection" component={SelectionScreen}/>
            <Tab.Screen  name="Map" component={MapScreen} />
            <Tab.Screen name="Publish" component={PublishScreen} />
            <Tab.Screen name="Trend" component={TrendScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>


        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="map" component={mapScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}