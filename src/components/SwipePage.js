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
    backgroundColor: "#181a1b",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#1E212D",
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
    color: "white",
    paddingBottom: 10,
    fontSize: 35,
    // textTransform: "uppercase",
  },
  location: {
    backgroundColor: "#e8830c",
    borderRadius: 20,
    color: "white",
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  quote: {
    fontSize: 15,
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
