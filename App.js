import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import MapScreen from "./screens/MapScreen";

import PublishScreen from "./screens/PublishScreen";
import TrendScreen from "./screens/TrendScreen";
import SelectionScreen from "./screens/SelectionScreen.js";
import ProfileScreen from "./screens/ProfileScreen";
import ListScreen from "./screens/ListScreen";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import events from "./reducers/events";
const store = configureStore({
  reducer: { user, events },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Selection") {
            iconName = "bolt";
          } else if (route.name === "Map") {
            iconName = "compass";
          } else if (route.name === "Publish") {
            iconName = "plus";
          } else if (route.name === "Trend") {
            iconName = "star";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1E064E",
        tabBarInactiveTintColor: "#b2b2b2",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Selection" component={SelectionScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Publish" component={PublishScreen} />
      <Tab.Screen name="Trend" component={TrendScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
