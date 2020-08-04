import React from "react";
import { View, TouchableHighlight, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AcccountInformation from "./accountInformation";
import AleartText from "./aleartText";

const AccountCheck = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View
        style={{ backgroundColor: "F5F5F5", paddingRight: 16, paddingLeft: 16 }}
      >
        <AcccountInformation />
        <AleartText />
        <TouchableHighlight
          style={{
            width: "100%",
            height: 58,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00CEC3",
            borderRadius: 9,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("振込完了")}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            振込申請
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "white",
            borderColor: "#00CEC3",
            borderWidth: 2,
            width: "100%",
            height: 37,
            borderRadius: 9,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate("振込先口座情報")}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#00CEC3" }}>
            口座情報を変更する
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default AccountCheck;
