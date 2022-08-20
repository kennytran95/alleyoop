import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Title from "./src/components/Title.js";
import BottomNavBar from "./src/components/BottomNavBar.js";
import hoopers from "./hoopersdata.js";
import LoginScreen from "./src/components/LoginScreen.js";
import SwipePage from "./src/components/SwipePage.js";

export const HooperContext = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("Alley-oop app has been initialized.");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <HooperContext.Provider value={hoopers}> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={SwipePage} />
        {/* <SafeAreaView style={styles.container}>
            <Title />
            <BottomNavBar />
            <StatusBar style="auto" />
          </SafeAreaView> */}
        {/* </HooperContext.Provider> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232931",
    // alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
    border: "#393E46",
  },
  hooperimage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});
