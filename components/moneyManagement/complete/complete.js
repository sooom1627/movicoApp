import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Complete = () => {
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
      <View
        style={{
          paddingTop: 100,
          paddingBottom: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/app/moneyManagement/Group127.png")}
          style={{ height: 109, width: 219 }}
        />
      </View>
      <TouchableHighlight
        style={{
          width: "100%",
          height: 58,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00CEC3",
          borderRadius: 9,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("新規リクエスト")}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
          さらにリクエストを見る
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Complete;
