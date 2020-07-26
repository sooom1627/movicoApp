import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import RequestContent from "./requestContent/requestContent";
import MovieUpload from "./movieUpload/movieUpload";
import ComentInput from "./comentInput/comentInput";
import UploadPoint from "./uploadPoint/uploadPoint";
import RequestConfirm from "./requestComfirm/requestConfirm";
import UploadModal from "./uploadModal/uploadModal";

import { useNavigation } from "@react-navigation/native";

const RequestDetail = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          backgroundColor: "#F4F4F4",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <RequestContent />
        <UploadPoint />
        <MovieUpload />
        <ComentInput />
        <RequestConfirm
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <UploadModal
          visible={modalVisible}
          NextScreen={() => navigation.navigate("リクエスト完了")}
          BackScreen={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default RequestDetail;
