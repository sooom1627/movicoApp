import React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MoneyManagementTop = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>お金画面トップ</Text>
      <View>
        <Button
          title="次のページ"
          onPress={() => navigation.navigate("口座情報確認")}
        />
      </View>
      <TouchableHighlight onPress={() => navigation.navigate("振込履歴確認")}>
        <Text>振込履歴確認</Text>
      </TouchableHighlight>
    </View>
  );
};

export default MoneyManagementTop;
