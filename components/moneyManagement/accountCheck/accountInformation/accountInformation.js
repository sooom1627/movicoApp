import React from "react";
import { View, Text } from "react-native";

const AcccountInformation = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderLeftColor: "#B7B7B7",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 33,
          marginBottom: 33,
        }}
      >
        <Text>講座情報</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>金融機関名</Text>
          <Text>ゆうちょ銀行</Text>
        </View>
      </View>
    </View>
  );
};

export default AcccountInformation;
