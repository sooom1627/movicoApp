import React from "react";
import Animated, {
  Easing,
  set,
  cond,
  startClock,
  stopClock,
  clockRunning,
  block,
  timing,
  debug,
  Value,
  Clock,
} from "react-native-reanimated";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Row = ({ toggleContent, height, title, content }) => {
  const navigation = useNavigation();
  const transition = () => {
    navigation.navigate("新規リクエスト");
  };
  const twoFunctionHundler = () => {
    transition();
    toggleContent();
  };

  return (
    <Animated.View style={{ height: height, width: 200 }}>
      <TouchableOpacity
        onPress={() => {
          toggleContent();
        }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderColor: "white",
        }}
      >
        <View
          style={{
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Animated.ScrollView>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={twoFunctionHundler}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{content}</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </Animated.View>
  );
};

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: value,
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 300,
    toValue: dest,
    easing: Easing.inOut(Easing.cubic),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

export default class HeaderAccodion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };

    this.heightRow = new Value(20);
  }

  toggleRowContent = () => {
    if (!this.state.showContent) {
      this.heightRow = runTiming(new Clock(), new Value(20), new Value(40));
    } else {
      this.heightRow = runTiming(new Clock(), new Value(40), new Value(20));
    }

    this.setState({
      showContent: !this.state.showContent,
    });
  };

  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          overflow: "hidden",
          borderColor: "white",
        }}
      >
        <Row
          title="撮影済みリクエスト"
          content="新規リクエスト"
          toggleContent={this.toggleRowContent}
          height={this.heightRow}
        />
      </View>
    );
  }
}
