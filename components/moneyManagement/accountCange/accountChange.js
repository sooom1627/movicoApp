import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountChange = () => {
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
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>振込先口座情報</Text>
      </View>
      <View style={{ paddingLeft: 16, paddingRight: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>
            金融機関名
          </Text>
          <View
            style={{
              backgroundColor: "#EDEDED",
              width: "100%",
              height: 40,
              borderRadius: 5,
            }}
          ></View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>口座番号</Text>
          <View
            style={{
              backgroundColor: "#EDEDED",
              width: "100%",
              height: 40,
              borderRadius: 5,
            }}
          ></View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>支店名</Text>
          <View
            style={{
              backgroundColor: "#EDEDED",
              width: "100%",
              height: 40,
              borderRadius: 5,
            }}
          ></View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>名前</Text>
          <View
            style={{
              backgroundColor: "#EDEDED",
              width: "100%",
              height: 40,
              borderRadius: 5,
            }}
          ></View>
        </View>
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
          onPress={() => navigation.navigate("口座情報確認")}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            決定
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default AccountChange;
