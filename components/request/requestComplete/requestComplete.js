import React from "react";
import { View, Image, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RequestComplete(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
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
        }}
      >
        〜さんの元にビデオメッセージが届くまで今しばらくお待ち下さい。
        お届けが完了すると、売上金の振込申請が可能になります。
      </Text>
      <View
        style={{
          backgroundColor: "#00CEC3",
          alignItems: "center",
          justifyContent: "center",
          height: 56,
          width: "100%",
          marginTop: 24,
          borderRadius: 9,
        }}
      >
        <Button
          title="さらにリクエストを見る！"
          color="white"
          onPress={() => navigation.navigate("新規リクエスト")}
        />
      </View>
    </View>
  );
}
