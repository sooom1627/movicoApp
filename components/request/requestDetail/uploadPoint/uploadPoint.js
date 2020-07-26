import React from "react";
import { View, Image } from "react-native";

export default function UploadPoint() {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 14,
      }}
    >
      <Image
        style={{ width: "100%", height: 120 }}
        source={require("../../../../assets/app/request/Group129.png")}
        resizeMode="contain"
      />
    </View>
  );
}
