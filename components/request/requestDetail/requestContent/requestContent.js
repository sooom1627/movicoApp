import React from "react";
import { View, Text, Image } from "react-native";

export default function RequestContent() {
  return (
    <View>
      <View
        style={{
          marginTop: 34,

          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#D1D1D1",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 34,
          paddingBottom: 34,
        }}
      >
        <Image
          source={require("../../../../assets/app/request/Group66.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text>りょーた</Text>
        <Text>って呼んで欲しい！</Text>
        <Image
          source={require("../../../../assets/app/request/Ellipse34.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text>定番メッセージ</Text>
        <Text>Twitter頑張ることを</Text>
        <Text>応援して欲しい</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <Text>例文</Text>
        <View
          style={{
            marginTop: 8,
            padding: 17,
            backgroundColor: "white",
            borderRadius: 20,
            borderLeftColor: "#D1D1D1",
          }}
        >
          <Text>りょーたさん、Twitter頑張ること応援してるよ！</Text>
        </View>
      </View>
    </View>
  );
}
