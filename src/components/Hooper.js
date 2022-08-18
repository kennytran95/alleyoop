import React, { useContext } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Hooper({ HooperData }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{HooperData.name}</Text>
      <Image
        style={styles.hooperimage}
        source={require(`../images/${HooperData.picture}`)}
      />
      <Text style={styles.location}>{HooperData.location}</Text>
      <Text style={styles.quote}>{HooperData.quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: "gray",
    padding: "10px",
    width: "300px",
    borderWidth: 1.8,
    borderColor: "darkgray",
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 5,
  },
  hooperimage: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  name: {
    color: "#4ECCA3",
    paddingBottom: 10,
  },
  location: {
    backgroundColor: "#03C4A1",
    borderRadius: 20,
    color: "white",
    marginTop: 5,
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  quote: {
    fontSize: 10,
    color: "lightgray",
    fontStyle: "italic",
  },
});

export default Hooper;
