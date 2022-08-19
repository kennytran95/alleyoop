import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { HooperContext } from "../../App";
import Swiper from "react-native-deck-swiper";

function SwipePage() {
  const HoopersData = useContext(HooperContext);
  return (
    <View style={styles.container}>
      <Swiper
        containerStyle={{ backgroundColor: "transparent" }}
        cards={HoopersData}
        renderCard={(HooperData) => {
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
        }}
        // cardIndex={0}
        stackSize={3}
        infinite={true}
        showSecondCard={true}
      ></Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232931",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#232931",
    padding: "10px",
    minWidth: "300px",
    borderWidth: 1.8,
    borderColor: "darkgray",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    // marginVertical: 5,
  },
  hooperimage: {
    height: 500,
    width: 500,
    resizeMode: "contain",
    overflow: "hidden",
  },
  name: {
    color: "#4ECCA3",
    paddingBottom: 10,
  },
  location: {
    backgroundColor: "#03C4A1",
    borderRadius: 20,
    color: "white",
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  quote: {
    fontSize: 10,
    color: "lightgray",
    fontStyle: "italic",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
});

export default SwipePage;
