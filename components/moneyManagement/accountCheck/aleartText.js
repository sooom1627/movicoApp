import React from "react";
import { Text, View } from "react-native";

const AleartText = () => {
  return (
    <View style={{ marginTop: 18 }}>
      <Text style={{ fontSize: 11, lineHeight: 20, color: "#A3A3A3" }}>
        ・着金まで申請から最大で<Text style={{ color: "red" }}>1週間</Text>
        頂いております。
      </Text>
      <Text style={{ fontSize: 11, lineHeight: 20, color: "#A3A3A3" }}>
        ・売上金の振込申請をするには、本人情報と銀行口座の登録が必須です。
      </Text>
      <Text style={{ fontSize: 11, lineHeight: 20, color: "#A3A3A3" }}>
        ・<Text style={{ color: "red" }}>振込手数料250円</Text>
        を振込額から徴収いたします。
      </Text>
      <Text style={{ fontSize: 11, lineHeight: 20, color: "#A3A3A3" }}>
        ・最終的なお振込額は、残高から振込手数料を引いた額になります。
      </Text>
    </View>
  );
};

export default AleartText;
