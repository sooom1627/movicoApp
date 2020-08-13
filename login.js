import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function Auth(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const base64 = require("base-64");

  useEffect(() => {
    getData();
  }, []);

  const logIn = () => {
    props.func();
  };

  const auth = () => {
    fetch(`https://movie-co.com/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        saveData(res.token);
      })
      .catch((error) => console.log(error));
  };
  const saveData = async (token) => {
    await AsyncStorage.setItem("Movico_Token", token);
    if (token) {
      logIn();
    }
  };

  const getData = async () => {
    const token = await AsyncStorage.getItem("Movico_Token");
    if (token) {
      logIn();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize={"none"}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize={"none"}
      />
      <Button onPress={() => auth()} title={"Login"} />
      <Button onPress={props.func} title="抜け道" />
    </View>
  );
}

Auth.navigationOptions = (screenProps) => ({
  title: "Login",
  headerStyle: {
    backgroundColor: "orange",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C35",
    padding: 10,
  },
  label: {
    fontSize: 24,
    color: "white",
    padding: 10,
  },
  input: {
    fontSize: 24,
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
  viewText: {
    color: "white",
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
