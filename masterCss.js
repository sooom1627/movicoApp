import { StyleSheet, Dimensions } from "react-native";

const nativeWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
