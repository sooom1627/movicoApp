import React from "react";
import { Button } from "react-native";

import HomeScreen from "./newRequest/newRequest.js";
import RequestDetail from "./requestDetail/requestDetail";
import RequestComplete from "./requestComplete/requestComplete";
import CompletedRequest from "./completedRequest/completedRequest";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderAccordion from "./headerAccordion";
import HeaderAccordion2 from "./headerAccordion2";

const Stack = createStackNavigator();

export default function Request() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="新規リクエスト"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderAccordion />,
        }}
      />
      <Stack.Screen
        name="撮影済みリクエスト"
        component={CompletedRequest}
        options={{
          headerLeft: null,
          headerTitle: () => <HeaderAccordion2 />,
        }}
      />
      <Stack.Screen name="リクエスト詳細" component={RequestDetail} />
      <Stack.Screen
        name="リクエスト完了"
        component={RequestComplete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
