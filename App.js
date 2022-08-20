import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Title from "./src/components/Title.js";
import BottomNavBar from "./src/components/BottomNavBar.js";
import hoopers from "./hoopersdata.js";
import LoginScreen from "./src/components/LoginScreen.js";
import HomeScreen from "./src/components/HomeScreen.js";
import SwipePage from "./src/components/SwipePage.js";

export const HooperContext = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("Alley-oop app has been initialized.");
  }, []);

  return (
    <HooperContext.Provider value={hoopers}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </HooperContext.Provider>
  );
}

const styles = StyleSheet.create({});
