import React from "react";
import { View, Image } from "react-native";

export default function UploadPoint() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 14,
      }}
    >
      <Image
        style={{ width: 164, height: 120 }}
        source={require("../../../../assets/app/request/Group121.svg")}
      />
      <Image
        style={{ width: 164, height: 120 }}
        source={require("../../../../assets/app/request/Group122.svg")}
      />
    </View>
  );
}
