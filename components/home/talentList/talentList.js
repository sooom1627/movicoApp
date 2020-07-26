import React from "react";
import { View, Text } from "react-native";
import TalentListCard from "./talentListCard/talentListCard";

const TalentList = () => {
  return (
    <View style={{ marginTop: 28, flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 13,
          marginLeft: 8,
        }}
      >
        おすすめ
      </Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <TalentListCard />
        <TalentListCard />
      </View>
    </View>
  );
};

export default TalentList;
