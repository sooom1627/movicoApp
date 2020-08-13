import React from "react";
import { View, Text } from "react-native";

const AcccountInformation = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#B7B7B7",
        paddingRight: 40,
        paddingLeft: 40,
        paddingBottom: 38,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 33,
          marginBottom: 33,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>口座情報</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          borderBottomWidth: 1,
          borderBottomColor: "#B7B7B7",
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>金融機関名</Text>
          <Text>ゆうちょ銀行</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>口座番号</Text>
          <Text>0000000</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>支店名</Text>
          <Text>058</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>名義人</Text>
          <Text>カミヤ エリサ</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          borderBottomWidth: 1,
          borderBottomColor: "#B7B7B7",
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>振込可能残高</Text>
          <Text>50,000円</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>振込手数料</Text>
          <Text>246円</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>振込額計</Text>
        <Text>49,822円</Text>
      </View>
    </View>
  );
};

export default AcccountInformation;
