// les imports
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Input } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from "react-native-radio-buttons-group";

// imports Progress Bar
import * as Progress from "react-native-progress";

// Creation fonction radio button
function FirstPage() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  // tableau contenaire des boutons radio
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1",
      label: "I'm a male",
      color: "#e9bd1f",
      size: 25,
      containerStyle: {
        width: 300,
        marginBottom: 30,
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      },
      labelStyle: { fontSize: 20, fontWeight: "800" },
    },
    {
      id: "2",
      label: "I'm a femal",
      color: "#e9bd1f",
      size: 25,
      containerStyle: {
        width: 300,
        marginBottom: 30,
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      },
      labelStyle: { fontSize: 20, fontWeight: "800" },
    },
    {
      id: "3",
      label: "Other",
      color: "#e9bd1f",
      size: 25,
      containerStyle: {
        width: 300,
        marginBottom: 30,
        paddingBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      },
      labelStyle: { fontSize: 20, fontWeight: "800" },
    },
    {
      id: "4",
      label: "Rather not to stay",
      color: "#e9bd1f",
      size: 25,
      containerStyle: { width: 300, marginBottom: 30 },
      labelStyle: { fontSize: 20, fontWeight: "800" },
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ height: 70 }} />
      <View>
        <Progress.Circle
          // indeterminate={true}
          animated={true}
          progress={0.2}
          size={100}
          thickness={10}
          color="#e9bd1f"
          strokeCap="round"
          direction="counter-clockwise"
        />
      </View>
      <View style={{ height: 35 }} />

      <Text style={{ fontSize: 30, fontWeight: "800" }}>
        What is your Gender ? 🚻 
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "900" }}>
        Selec your gender for better content
      </Text>

      <View style={{ height: 50 }} />

      <View style={styles.Checkbox_section}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="column"
        />
      </View>

      <View style={styles.Bottom_section}>
        <TouchableOpacity
          style={styles.Bottom_Button}
          onPress={() => navigation.navigate("Age Verification")}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontfamily: "Liberator",
    height: 910,
    // backgroundColor: "black",
  },
  boutton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#e9bd1f",
    marginBottom: 50,
    marginRight: 30,
    marginLeft: 20,
    justifyContent: "center",
    paddingLeft: 50,
  },
  Bottom_Button: {
    width: 380,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#e9bd1f",
    backgroundColor: "#e9bd1f",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "center",
    paddingLeft: 160,
    marginBottom: 30,
    marginTop: 10,
  },
  Bottom_section: {
    height: 100,
    width: "80%",
    bottom: 40,
    position: "absolute",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // justifyContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  },
  Checkbox_section: {
    // backgroundColor: "grey",
    height: 200,
    display: "flex",
  },
});
