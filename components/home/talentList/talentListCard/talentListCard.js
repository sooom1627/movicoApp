import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";

const TalentListCard = () => {
  return (
    <View style={{ height: 230, width: "100%" }}>
      <ImageBackground
        source={require("../../../../assets/app/home/talentPicuture.png")}
        style={{
          resizeMode: "cover",
          justifyContent: "flex-end",
          height: 230,
          width: 175,
        }}
      >
        <View style={{ paddingLeft: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            神谷 じゅりな
          </Text>
          <Image></Image>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 13,
            paddingLeft: 8,
            paddingBottom: 3,
          }}
        >
          jURiERi
        </Text>
      </ImageBackground>
    </View>
  );
};

export default TalentListCard;
