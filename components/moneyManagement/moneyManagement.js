import React from "react";

import MoneyManagementTop from "./moneyManagementTop/moneyManagementTop";
import { createStackNavigator } from "@react-navigation/stack";
import AccountCheck from "./accountCheck/accountCheck";
import Complete from "./complete/complete";
import HomeScreen from "../request/newRequest/newRequest";

const Stack = createStackNavigator();

export default function MoneyMnagementTop() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="お金の管理" component={MoneyManagementTop} />
      <Stack.Screen name="口座情報確認" component={AccountCheck} />
      <Stack.Screen
        name="振込完了"
        component={Complete}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="新規リクエスト" component={HomeScreen} />
    </Stack.Navigator>
  );
}
