import React from "react";
import { Modal, View, Text, TouchableHighlight } from "react-native";

export default function UploadModal(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          marginTop: 22,
        }}
      >
        <View>
          <View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 30 }}>
            <TouchableHighlight
              style={{ backgroundColor: "#00CEC3" }}
              onPress={props.NextScreen}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                この動画を送る
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 10 }}>
            <TouchableHighlight
              style={{ backgroundColor: "red" }}
              onPress={props.BackScreen}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                やり直す
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}
