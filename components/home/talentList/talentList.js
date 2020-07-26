import React from "react";
import { View, Text } from "react-native";
import TalentListCard from "./talentListCard/talentListCard";

const TalentList = () => {
  return (
    <View style={{ paddingLeft: 8, marginTop: 28 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 13 }}>おすすめ</Text>
      <TalentListCard />
    </View>
  );
};

export default TalentList;
