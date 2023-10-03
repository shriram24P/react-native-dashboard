import { View, Text } from "react-native";
import React from "react";
import Background from "./Background";

const WelcomePage = () => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Welcome !</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 40 }}>
          Let's Start Coding
        </Text>
      </View>
    </Background>
  );
};

export default WelcomePage;
