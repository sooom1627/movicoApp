import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const RequestConfirm = (props) => {
  return (
    <View
      style={{
        borderRadius: 9,
        marginTop: 35,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableHighlight
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 56,
          backgroundColor: "#00CEC3",
          width: "100%",
          borderRadius: 9,
        }}
        onPress={props.onPress}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>確認画面へ</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RequestConfirm;
