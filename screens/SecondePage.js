// les imports
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

// imports Progress Bar
import Svg from "react-native-svg";
import LoadBar from "./LoadComponent";
import * as Progress from "react-native-progress";

// tableau contenaire age range
export default function App() {
  const TB = [
    "14 - 17",
    "25 - 29",
    "35 - 39",
    " 45 - 49",
    "18 - 24",
    "30 - 34",
    "40 - 44",
    "> 50",
  ];

  // variable contenaire de l'index du bouton selectionné
  const [ActiveIndex, setActiveIndex] = React.useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  return (
    <View style={styles.container}>
      <View style={{ height: 70 }} />
      <View>
        <Progress.Circle
          // indeterminate={true}
          animated={true}
          progress={0.4}
          size={100}
          thickness={10}
          color="#e9bd1f"
          strokeCap="round"
          direction="counter-clockwise"
        />
      </View>
      <View style={{ height: 35 }} />

      <Text style={{ fontSize: 30, fontWeight: "800" }}>Choose Your Age</Text>

      <View style={{ height: 20 }} />

      <Text style={{ fontWeight: "500" }}>
        Select age range for better content.
      </Text>

      <View style={{ height: 70 }} />

      <View style={styles.Age_Range}>
        {TB.map((elem, index) => {
          return (
            <View
              key={index}
              style={[
                styles.boutton,
                {
                  // changement de couleur du shadowColor selectionné
                  shadowColor: ActiveIndex === index ? "#e9bd1f" : "white",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 24,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  setActiveIndex(index);
                }}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text>{elem}</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
            </View>
          );
        })}
      </View>

      <View style={styles.Bottom_section}>
        <TouchableOpacity
          style={styles.Bottom_Button}
          onPress={() => navigation.navigate("Genres")}
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
    height: 910,
  },
  separator: {
    marginVertical: 50,
  },
  Age_Range: {
    height: 400,
    width: 400,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // backgroundColor: "grey",
  },
  boutton: {
    width: 150,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e9bd1f",
    marginBottom: 50,
    marginRight: 30,
    marginLeft: 20,
    justifyContent: "center",
    paddingLeft: 50,
    backgroundColor: "white",
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
  Progress_Bar50: {
    top: 70,
    width: 150,
    height: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRightWidth: 0,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#e9bd1f",
  },
  Progress_Bar100: {
    top: 70,
    width: 150,
    height: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
});
