import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Title from "./Title.js";
import BottomNavBar from "./BottomNavBar.js";
import hoopers from "../../hoopersdata.js";

export const HooperContext = React.createContext();

function HomeScreen() {
  return (
    <HooperContext.Provider value={hoopers}>
      <SafeAreaView style={styles.container}>
        <Title />
        <BottomNavBar />
        <StatusBar style="auto" />
      </SafeAreaView>
    </HooperContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a1b",
    borderWidth: 2,
    // alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
  },
  hooperimage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});

export default HomeScreen;
