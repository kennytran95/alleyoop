import React, { useContext } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { YellowBox } from "react-native-web";

function Hooper({ HooperData }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{HooperData.name}</Text>
      <Image
        style={styles.hooperimage}
        source={require(`../images/${HooperData.picture}`)}
      />
      <Text>{HooperData.location}</Text>
      <Text style={styles.quote}>{HooperData.quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "gray",
    padding: "10px",
    width: "300px",
    borderWidth: 1.7,
    borderColor: "lightgray",
    borderRadius: 20,
    alignItems: "center",
  },
  hooperimage: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  name: {
    color: "yellow",
  },
  quote: {
    fontSize: 10,
    color: "lightgray",
    fontStyle: "italic",
  },
});

export default Hooper;
