import React from "react";
import { TextInput } from "react-native";
import { darkGrey } from "./Constants";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: darkGrey,
        paddingHorizontal: 10,
        width: "75%",
        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 10,
        marginRight: 55,
        marginBottom: 20,
        height: 40,
      }}
      placeholderTextColor={darkGrey}
    ></TextInput>
  );
};

export default Field;
