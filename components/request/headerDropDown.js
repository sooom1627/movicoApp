import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

const HeaderDropDown = () => {
  const navigation = useNavigation();
  return (
    <DropDownPicker
      items={[{ label: "撮影済みリクエスト", value: "撮影済みリクエスト" }]}
      defaultIndex={0}
      containerStyle={{ height: 40 }}
      onChangeItem={() => navigation.navigate("撮影済みリクエスト")}
      placeholder="新規リクエスト"
    />
  );
};

export default HeaderDropDown;
