import React from "react";

import MoneyManagementTop from "./moneyManagementTop/moneyManagementTop";
import { createStackNavigator } from "@react-navigation/stack";
import AccountCheck from "./accountCheck/accountCheck";

const Stack = createStackNavigator();

export default function MoneyMnagementTop() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="お金の管理" component={MoneyManagementTop} />
      <Stack.Screen name="口座情報確認" component={AccountCheck} />
    </Stack.Navigator>
  );
}
