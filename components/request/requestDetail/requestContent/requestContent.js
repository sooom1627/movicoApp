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
          style={{ width: 20, height: 20, marginBottom: 7 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>りょーた</Text>
        <Text style={{ marginBottom: 13, fontSize: 13 }}>
          って呼んで欲しい！
        </Text>
        <Image
          source={require("../../../../assets/app/request/Ellipse34.png")}
          style={{ width: 20, height: 20, marginBottom: 6 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 14, color: "#C4C4C4" }}>定番メッセージ</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Twitter頑張ること
          <Text style={{ fontSize: 13, fontWeight: "normal" }}>を</Text>
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>応援して欲しい</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>例文</Text>
        <View
          style={{
            marginTop: 8,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 20,
            borderLeftColor: "#D1D1D1",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>りょーたさん、Twitter頑張ること応援してるよ！</Text>
        </View>
      </View>
    </View>
  );
}
