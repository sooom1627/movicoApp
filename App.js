import "react-native-gesture-handler";

import React from "react";
import { Image } from "react-native";
import { Avatar } from "react-native-elements";

import Request from "./components/request/request.js";
import MoneyManagementTop from "./components/moneyManagement/moneyManagement";
import MyPage from "./components/myPage/myPage";
import Home from "./components/home/home";
import Notification from "./components/notification/notification";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="ホーム"
            component={Home}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require("./assets/app/home/HomeIcon.png")}
                  style={{ width: 22, height: 22, tintColor: tintColor }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="通知"
            component={Notification}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require("./assets/app/Notification/NotificationIcon.png")}
                  style={{ width: 20, height: 20, tintColor: tintColor }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="リクエスト"
            component={Request}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require("./assets/app/request/RequestIcon.png")}
                  style={{ width: 22, height: 22, tintColor: tintColor }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="お金の管理"
            component={MoneyManagementTop}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require("./assets/app/moneyManagement/MoneyIcon.png")}
                  style={{ width: 22, height: 22, tintColor: tintColor }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="マイページ"
            component={MyPage}
            options={{
              tabBarIcon: ({ tintColor }) => (
                <Avatar
                  rounded
                  source={require("./assets/app/home/talentPictutre.png")}
                  style={{ width: 20, height: 20, tintColor: tintColor }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
