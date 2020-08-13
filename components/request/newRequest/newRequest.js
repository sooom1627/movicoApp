import React from "react";
import { View, ScrollView, Button } from "react-native";

import styles from "../../../masterCss";

import RequestCard from "./requestCard/requestCard";
import NewRequestHeader from "./header/header";
import RequestNumber from "./requestCase/requestCase.js";

import { useNavigation } from "@react-navigation/native";

const list = [
  {
    name: "りょーた",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    date: "2020年3月14日",
    price: "¥3000",
    subtitle: "オリジナルメッセージ",
  },
  {
    name: "けいすけ",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    date: "2020年3月14日",
    price: "¥3000",
    subtitle: "定番メッセージ",
  },
];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <NewRequestHeader requestCase={list.length} />
        <RequestNumber number={list.length} />
        {list.map((l, i) => {
          return (
            <RequestCard
              key={i}
              name={l.name}
              avatar_url={l.avatar_url}
              date={l.date}
              price={l.price}
              subtitle={l.subtitle}
              navigate={() => navigation.navigate("リクエスト詳細")}
            />
          );
        })}
      </View>
      <Button
        onPress={() => navigation.navigate("撮影済みリクエスト")}
        title="撮影済み"
      />
    </ScrollView>
  );
}

export default HomeScreen;
