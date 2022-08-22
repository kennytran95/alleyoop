import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

function Match({ matchData }) {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Image
          style={styles.avatar}
          source={require(`../images/${matchData.picture}`)}
        />
        <Text style={styles.text}>{matchData.name}</Text>
      </View>
    </View>
  );
}

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    color: "white",
    marginVertical: 10,
    borderVertical: 2,
  },
  div: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 20,
    paddingVertical: 10,
    // backgroundColor: "green",
    paddingHorizontal: 100,
  },
  text: {
    color: "white",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginVertical: 0,
    marginHorizontal: 15,
  },
});
