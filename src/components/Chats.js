import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { HooperContext } from "../../App";
import Match from "./Match.js";

function Chat() {
  const HoopersData = useContext(HooperContext);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    let match = [];
    for (let person of HoopersData) {
      console.log(person.match);
      if (!person.match) {
        match.push(person);
      }
    }
    setMatches(match);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.matchContainer}
        bounces={true}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>Teammates</Text>
        {matches.map((matchEntry) => (
          <Match matchData={matchEntry} key={matchEntry.id} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#181a1b",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
});
