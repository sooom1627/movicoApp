import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import TransferLog from "./tarnsferLog";
import { useNavigation } from "@react-navigation/native";

const TransferLogHead = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", paddingTop: 52, height: "100%" }}>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          width: "100%",
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          position: "relative",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>振込履歴</Text>
        <TouchableHighlight
          style={{ position: "absolute", left: 16, width: 32, height: 32 }}
          onPress={() => navigation.navigate("お金の管理")}
        >
          <Image
            source={require("../../../assets/app/moneyManagement/Group1.png")}
            style={{ width: 32, height: 32 }}
          />
        </TouchableHighlight>
      </View>
      <View style={{ paddingLeft: 16, paddingRight: 16 }}>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#000000",
            paddingBottom: 13,
          }}
        >
          <View
            style={{ flexDirection: "row", paddingLeft: 9, paddingRight: 9 }}
          >
            <View style={{ width: "35%" }}>
              <Text style={{ fontWeight: "bold" }}>振込額</Text>
            </View>
            <View style={{ width: "40%" }}>
              <Text style={{ fontWeight: "bold" }}>申請額</Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text style={{ fontWeight: "bold" }}>ステータス</Text>
            </View>
          </View>
        </View>
      </View>
      <TransferLog price={"2,750"} date={"2019/12/09"} status={"着金待ち"} />
    </View>
  );
};

export default TransferLogHead;
