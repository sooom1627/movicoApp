import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MoneyManagementTop = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>お金画面トップ</Text>
      <Button
        title="次のページ"
        onPress={() => navigation.navigate("口座情報確認")}
      />
    </View>
  );
};

export default MoneyManagementTop;
