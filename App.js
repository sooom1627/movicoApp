import "react-native-gesture-handler";

import React from "react";

import Request from "./components/request/request.js";
import MoneyManagementTop from "./components/moneyManagement/moneyManagement";
import MyPage from "./components/myPage/myPage";
import Home from "./components/home/home";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ホーム" component={Home} />
          <Tab.Screen name="リクエスト" component={Request} />
          <Tab.Screen name="お金の管理" component={MoneyManagementTop} />
          <Tab.Screen name="マイページ" component={MyPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
