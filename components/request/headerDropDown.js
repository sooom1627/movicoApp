import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

const HeaderDropDown = () => {
  return (
    <DropDownPicker
      items={[{ label: "Item 2", value: "item2" }]}
      defaultIndex={0}
      containerStyle={{ height: 40 }}
      onChangeItem={(item) => console.log(item.label, item.value)}
      placeholder="新規リクエスト"
    />
  );
};

export default HeaderDropDown;
