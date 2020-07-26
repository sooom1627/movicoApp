import React from "react";
import { View, Image } from "react-native";

const HomeHeader = () => {
  return (
    <View>
      <View>
        <Image
          source={require("../../../assets/app/home/Group84.png")}
          resizeMode="cover"
          style={{ height: 320, width: "100%" }}
        />
      </View>
      <View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 26 }}>
        <Image
          style={{ width: "100%", height: 130 }}
          source={require("../../../assets/app/home/Group127.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HomeHeader;
