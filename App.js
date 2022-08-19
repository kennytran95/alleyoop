import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Title from "./src/components/Title.js";
import SwipePage from "./src/components/SwipePage.js";
import BottomNavBar from "./src/components/BottomNavBar.js";
import hoopers from "./hoopersdata.js";

export const HooperContext = React.createContext();

export default function App() {
  useEffect(() => {
    console.log("Alley-oop app has been initialized.");
  }, []);

  return (
    <NavigationContainer>
      <HooperContext.Provider value={hoopers}>
        <SafeAreaView style={styles.container}>
          <Title />
          {/* <SwipePage /> */}
          <BottomNavBar />

          <StatusBar style="auto" />
        </SafeAreaView>
      </HooperContext.Provider>
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
