import React, { useContext } from "react";
import { Text, View, Image } from "react-native";
import { HooperContext } from "../../App.js";
import Hooper from "./Hooper.js";

function Hoopers() {
  const HoopersData = useContext(HooperContext);
  console.log(HoopersData[0], "found my context");
  return (
    <View>
      {HoopersData.map((HooperData) => (
        <Hooper key={HooperData.id} HooperData={HooperData} />
      ))}
    </View>
  );
}

export default Hoopers;
