import React from "react";
import { View, Text } from "react-native";

export default function ComentInput() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
      }}
    >
      <Text>ひとこと(任意)</Text>
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
  );
}
