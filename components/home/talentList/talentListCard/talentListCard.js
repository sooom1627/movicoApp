import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { recoveredProps } from "expo-error-recovery";

const TalentListCard = (props) => {
  return (
    <View style={{ height: 230, flex: 0.5 }}>
      <ImageBackground
        source={require("../../../../assets/app/home/talentPictutre.png")}
        style={{
          resizeMode: "cover",
          justifyContent: "flex-end",
          height: 230,
          width: 170,
        }}
        imageStyle={{ borderRadius: 5 }}
      >
        <View style={{ paddingLeft: 8, flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            {props.name}
          </Text>
          <Image
            style={{ height: 15, width: 15, marginTop: 4, marginLeft: 2 }}
            source={require("../../../../assets/app/home/Group25.png")}
          />
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
