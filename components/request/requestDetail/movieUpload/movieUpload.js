import React from "react";
import { View, Image, Text } from "react-native";

export default function MovieUpload() {
  return (
    <View style={{ alignItems: "center", marginTop: 48 }}>
      <Text style={{ fontWeight: "bold" }}>動画をアップロード</Text>
      <View>
        <Image
          style={{ width: 89, height: 89, marginTop: 16 }}
          source={require("../../../../assets/app/request/Group130.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
