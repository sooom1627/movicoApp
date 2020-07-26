import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

const RecommendTalentCard = () => {
  return (
    <View
      style={{
        borderRadius: 9,
        height: 200,
        width: 170,
        borderColor: "#E8E8E8",
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 14,
        marginRight: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      }}
    >
      <View>
        <Avatar />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>きょんだよ</Text>
        <Image
          style={{ width: 15, height: 15, marginTop: 2 }}
          source={require("../../../../assets/app/home/Group25.png")}
        />
      </View>
      <Text style={{ fontSize: 13, color: "#A3A3A3" }}>アイドル</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#00CEC3",
          height: 32,
          width: 136,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop: 11,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>リクエスト</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendTalentCard;
