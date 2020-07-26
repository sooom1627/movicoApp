import React from "react";
import { View, Image, Text } from "react-native";

export default function MovieUpload() {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>動画をアップロード</Text>
      <View>
        <Image
          style={{ width: 89, height: 89 }}
          source={require("../../../../assets/app/request/Group123.svg")}
        />
      </View>
    </View>
  );
}
