import React from "react";
import { View } from "react-native";
import HomeHeader from "./header/header";
import RecommendTalent from "./recommendTalent/recommendTalent";
import { ScrollView } from "react-native-gesture-handler";
import TalentList from "./talentList/talentList";

const Home = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <HomeHeader />
        <RecommendTalent />
        <TalentList />
      </View>
    </ScrollView>
  );
};

export default Home;
