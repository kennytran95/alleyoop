import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import hoopersdata from "./hoopersdata.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Alley-oop!</Text>
      <Text style={styles.text2}>the app to find your dream teammates</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232931",
    alignItems: "center",
    justifyContent: "center",
    color: "#EEEEEE",
    border: "#393E46",
  },
  text: {
    color: "#4ECCA3",
  },
  text2: {
    color: "#EEEEEE",
  },
});
