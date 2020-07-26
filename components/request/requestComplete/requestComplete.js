import React from "react";
import { View, Image, Text, Button } from "react-native";

export default function RequestComplete() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 170, width: 150, marginTop: 90, marginBottom: 44 }}
          source={require("../../../assets/app/request/Group128.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          color: "#A3A3A3",
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        〜さんの元にビデオメッセージが届くまで今しばらくお待ち下さい。
        お届けが完了すると、売上金の振込申請が可能になります。
      </Text>
      <View>
        <Button title="さらにリクエストを見る！" />
      </View>
    </View>
  );
}
