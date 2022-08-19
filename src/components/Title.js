import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alley-oop!</Text>
      <Text style={styles.text2}>find your dream team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#393E46",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "#EEEEEE",
    border: "#393E46",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  text: {
    color: "#4ECCA3",
    fontSize: 30,
    textTransform: "uppercase",
  },
  text2: {
    color: "#EEEEEE",
    fontSize: 10,
    textTransform: "uppercase",
  },
  hooperimage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});

export default Title;
