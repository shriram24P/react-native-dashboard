import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import { darkGrey } from "./Constants";
import Field from "./Field";

import CheckBox from "expo-checkbox";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [userContactError, setUserContactError] = useState(false);

  const submit = () => {
    const realoadData = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setUserContact("");
      setUserPassword("");
      setConfirmUserPassword("");
      setFNameError(false);
      setLNameError(false);
      setEmailError(false);
      setPassError(false);
      setUserContactError(false);
    };

    if (!firstName) {
      setFNameError(true);
    }

    if (!lastName) {
      setLNameError(true);
    }

    if (!email) {
      setEmailError(true);
    }

    if (!userContact) {
      setUserContactError(true);
    }

    if (!userPassword) {
      setPassError(true);
    }

    if (!firstName || !lastName || !email || !userContact || !userPassword) {
      return false;
    }
    if (
      firstName &&
      lastName &&
      email &&
      userContact &&
      userPassword &&
      agree
    ) {
      alert("account added successfully");
      props.navigation.navigate("Login");
      realoadData();
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
            marginTop: 20,
            marginRight: 50,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Field
            placeholder="First Name"
            value={firstName}
            onChangeText={(val) => setFirstName(val)}
          />
          {fNameError ? (
            <Text style={{ color: "red", marginRight: 275, marginTop: -10 }}>
              Enter Valid First Name
            </Text>
          ) : undefined}
          <Field
            placeholder="Last Name"
            value={lastName}
            onChangeText={(val) => setLastName(val)}
          />
          {lNameError ? (
            <Text style={{ color: "red", marginRight: 285, marginTop: -10 }}>
              Enter valid last name
            </Text>
          ) : undefined}
          <Field
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          {emailError ? (
            <Text style={{ color: "red", marginRight: 300, marginTop: -10 }}>
              Enter valid email id
            </Text>
          ) : undefined}
          <Field
            placeholder="Contact Number"
            value={userContact}
            keyboardType="numeric"
            onChangeText={(val) => setUserContact(val)}
          />
          {userContactError ? (
            <Text style={{ color: "red", marginRight: 250, marginTop: -10 }}>
              Enter valid contact number
            </Text>
          ) : undefined}

          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={userPassword}
            onChangeText={(val) => setUserPassword(val)}
          />
          {passError ? (
            <Text style={{ color: "red", marginRight: 290, marginTop: -10 }}>
              Enter valid password
            </Text>
          ) : undefined}
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmUserPassword}
            onChangeText={(val) => setConfirmUserPassword(val)}
          />
          {userPassword !== confirmUserPassword && (
            <Text
              style={{
                color: "red",
                marginRight: 220,
                marginTop: -15,
                marginBottom: 10,
              }}
            >
              Password does not match
            </Text>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "65%",
              paddingRight: 16,
              marginRight: 50,
            }}
          >
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              style={{ borderRadius: 10 }}
              color={agree && darkGrey}
            />
            <Text style={{ color: "grey", fontSize: 16 }}>
              {" "}
              I have agreed with the{" "}
            </Text>
            <Text style={{ color: darkGrey, fontWeight: "bold", fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "65%",
              paddingRight: 16,
              marginRight: 50,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>and </Text>
            <Text style={{ color: darkGrey, fontWeight: "bold", fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 100,
              alignItems: "center",
              width: 320,
              paddingVertical: 5,
              marginVertical: 10,
              marginRight: 60,
              backgroundColor: agree ? darkGrey : "grey",
            }}
            onPress={() => submit()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginRight: 40,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "grey" }}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGrey, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
