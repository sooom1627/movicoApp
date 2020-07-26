import React from "react";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import RecommendTalentCard from "./recommendTalentCard/recommendTarentCard";

const RecommendTalent = () => {
  return (
    <View style={{ paddingLeft: 8, marginTop: 24 }}>
      <Text style={{ fontWeight: "bold" }}>以前リクエストしたタレント</Text>
      <ScrollView horizontal={true}>
        <RecommendTalentCard />
        <RecommendTalentCard />
        <RecommendTalentCard />
      </ScrollView>
    </View>
  );
};

export default RecommendTalent;
