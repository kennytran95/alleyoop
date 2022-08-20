import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

function Chat() {
  return (
    <View style={styles.container}>
      <Text>Chats</Text>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
