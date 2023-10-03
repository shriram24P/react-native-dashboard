import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ bgColor, btnLabel, textColor, Press }) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 320,
        paddingVertical: 5,
        marginVertical: 10,
        marginRight: 60,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
