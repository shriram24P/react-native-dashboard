import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import { darkGrey } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";
import Signup from "./Signup";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const submit = () => {
    if (userName === "shriram" && pass === "patil") {
      alert(`${userName}, you have logged in successfully`);
      props.navigation.navigate("WelcomePage");
    } else {
      alert(`Username or Password is not correct`);
    }
  };
  return (
    <Background>
      <View style={{ alignItems: "center", width: 460 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 10,
            marginRight: 50,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: darkGrey,
              fontWeight: "bold",
              marginRight: 30,
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              marginRight: 15,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
            value={userName}
            onChangeText={(val) => setUserName(val)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={pass}
            onChangeText={(val) => setPass(val)}
          />
          <View
            style={{
              alignItems: "flex-end",
              width: "65%",
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text style={{ color: darkGrey, fontWeight: "bold", fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGrey}
            btnLabel="Login"
            Press={() => submit()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginRight: 40,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: darkGrey, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
