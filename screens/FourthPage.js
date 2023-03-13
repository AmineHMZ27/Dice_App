import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";

// imports Progress Bar
import Svg from "react-native-svg";
import LoadBar from "./LoadComponent";
import * as Progress from "react-native-progress";

export default function App() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <View style={styles.container}>
      <View style={{ height: 10 }} />

      <View>
        <Progress.Circle
          // indeterminate={true}
          animated={true}
          progress={0.8}
          size={100}
          thickness={10}
          color="#e9bd1f"
          strokeCap="round"
          direction="counter-clockwise"
        />
      </View>

      <View style={{ height: 35 }} />

      <Text style={{ fontSize: 30, fontWeight: "800" }}>
        How long do you what your games to last ? ⌛
      </Text>

      <View style={{ height: 250 }} />

      <View style={styles.Slider}>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Short</Text>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Medium</Text>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Long</Text>
      </View>

      <Slider
        minimumValue={0}
        maximumValue={4}
        minimumTrackTintColor="#e9bd1f"
        maximumTrackTintColor="grey"
        step={2}
        thumbTintColor="white"
        width={350}
        height={40}
      />

      <View style={styles.Bottom_section}>
        <TouchableOpacity
          style={styles.Bottom_Button}
          onPress={() => navigation.navigate("Level")}
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
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontfamily: "Liberator",
    height: 800,
    // backgroundColor:"grey",
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
    marginTop: 26,
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
  Slider: {
    // backgroundColor: "grey",
    width: 350,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
