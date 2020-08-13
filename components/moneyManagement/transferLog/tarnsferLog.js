import React from "react";
import { Text, View } from "react-native";

const TransferLog = (props) => {
  return (
    <View
      style={{
        marginRight: 16,
        marginLeft: 16,
        paddingTop: 18,
        paddingBottom: 18,
        borderBottomWidth: 0.5,
        borderBottomColor: "#C4C4C4",
      }}
    >
      <View style={{ paddingRight: 9, paddingLeft: 9, flexDirection: "row" }}>
        <View style={{ width: "35%" }}>
          <Text>{props.price}円</Text>
        </View>
        <View style={{ width: "40%" }}>
          <Text>{props.date}</Text>
        </View>
        <View style={{ width: "25%" }}>
          <Text>{props.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransferLog;
