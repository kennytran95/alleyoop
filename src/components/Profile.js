import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { auth } from "../../firebase";

function Profile() {
  const user = auth.currentUser;
  console.log(user.photoURL, "this is my user!");
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
