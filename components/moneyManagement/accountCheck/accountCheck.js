import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AcccountInformation from "./accountInformation/accountInformation";

const AccountCheck = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "F5F5F5", paddingRight: 16, paddingLeft: 16 }}
    >
      <AcccountInformation />
      <Button
        title="次のページ"
        onPress={() => navigation.navigate("お金の管理")}
      />
    </View>
  );
};

export default AccountCheck;
