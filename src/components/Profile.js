import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { auth } from "../../firebase";
import { launchImageLibrary } from "react-native-image-picker";

function Profile() {
  const [avatar, setAvatar] = useState("");
  const user = auth.currentUser;

  console.log(avatar, "this is my user!");

  useEffect(() => {
    setAvatar(user.photoURL);
  }, []);

  function upload() {
    //import fxn
    launchImageLibrary()
      .then((image) => {
        setAvatar(image);
      })
      .then(() => {
        console.log(avatar);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.email}!</Text>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/123496795_3349449538443633_4581368380665942204_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=FhLBqMzOLMoAX9eXjJR&_nc_ht=scontent-lax3-2.xx&oh=00_AT91zIHh6FoG5FOMYp2X8k26hl6noKmo-_iCJHajgKvDrw&oe=6328E748",
        }}
      />
      <Button title="Upload Photo" color="#841584" onPress={upload}></Button>
      <Text style={styles.text}>Find your dream team</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#181a1b",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  button: {
    width: 400,
    height: 100,
  },
  text: {
    color: "white",
  },
});
