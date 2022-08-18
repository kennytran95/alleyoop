import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alley-oop!</Text>
      <Text style={styles.text2}>the app to find your dream teammates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "#EEEEEE",
    border: "#393E46",
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: "#4ECCA3",
  },
  text2: {
    color: "#EEEEEE",
  },
  hooperimage: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});

export default Title;
