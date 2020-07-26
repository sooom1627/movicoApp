import React from "react";

import HomeScreen from "./newRequest/newRequest.js";
import RequestDetail from "./requestDetail/requestDetail";
import RequestComplete from "./requestComplete/requestComplete";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Request() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="新規リクエスト" component={HomeScreen} />
      <Stack.Screen name="リクエスト詳細" component={RequestDetail} />
      <Stack.Screen
        name="リクエスト完了"
        component={RequestComplete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
