import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function App() {
  return (
    <View>
      <Progress.Circle
        // indeterminate={true}
        animated={true}
        progress={0.5}
        size={100}
        thickness={10}
        color="orange"
        strokeCap="round"
        direction="counter-clockwise"
      />
    </View>
  );
}
const styles = StyleSheet.create({});
