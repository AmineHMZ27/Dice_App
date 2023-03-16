// les imports
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useLayoutEffect } from 'react';

// importation des images
import Adventure from "../assets/QuestImages/Adventure_Logo.png";
import Memory from "../assets/QuestImages/Memory_Logo.png";
import Logique from "../assets/QuestImages/Logique_Logo.png";
import Card from "../assets/QuestImages/Card_Logo.png";
import Education from "../assets/QuestImages/Education_Logo.png";
import Dice from "../assets/QuestImages/Dice_Logo.png";
import { useNavigation } from "@react-navigation/native";

// imports Progress Bar
import Svg from "react-native-svg";
import LoadBar from "./LoadComponent";
import * as Progress from "react-native-progress";

const uChoice = []

export default function GenresScreen() {
  // tableau contenaire categories de jeux
  const Vign = [
    { text: "Adventure", img: Adventure, cat: "adventure" },
    { text: "Puzzle", img: Memory, cat: "puzzle" },
    { text: "Logique", img: Logique, cat: "logique" },
    { text: "Card", img: Card, cat: "card" },
    { text: "Education", img: Education, cat: "education" },
    { text: "Dice", img: Dice, cat: "dice" },
  ];

  /*const initialUChoice = [];
  const [uChoice, setuChoice] = React.useState(initialUChoice);*/

  const [SecondActiveIndex, setSecondActiveIndex] = React.useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  function Select(index) {
    if (SecondActiveIndex.includes(index)) {
      setSecondActiveIndex((curr) => curr.filter((elem) => elem !== index));
      uChoice.splice(uChoice.length-1)
      /*setuChoice(uChoice)*/
    } else {
      setSecondActiveIndex((curr) => [...curr, index]);
      uChoice.push(Vign[index].cat);
      /*setuChoice(uChoice)*/
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ height: 70 }} />

      <View> 
        <Progress.Circle
          // indeterminate={true}
          animated={true}
          progress={0.6}
          size={100}
          thickness={10}
          color="#e9bd1f"
          strokeCap="round"
          direction="counter-clockwise"
        />
      </View>

      <View style={{ height: 35 }} />

      <Text style={{ fontSize: 25, fontWeight: "800", marginHorizontal: 25 }}>
        Whats genres Are you into the most ?🎲
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          textAlign: "left",
          marginTop: 35,
        }}
      >
        Select the game genre : 🎮
      </Text>

      <View style={styles.Middle_Container}>
        {Vign.map((elem, index) => {
          return (
            <View
              key={index}
              style={[
                styles.Middle_Bloc,
                {
                  shadowColor: SecondActiveIndex.includes(index)
                    ? "#e9bd1f"
                    : "white",
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
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                style={styles.Middle_Bloc}
                onPress={() => Select(index)}
              >
                <Image style={styles.Icon} source={elem.img} />
                <Text>{elem.text}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <View style={styles.Bottom_section}>
        <TouchableOpacity
          style={styles.Bottom_Button}
          onPress={() => {
          navigation.navigate("HowLong")}}
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
    fontfamily: "Liberator",
    height: 910,
    alignItems: "center",
  },
  Middle_Container: {
    // backgroundColor: "grey",
    height: 425,
    width: 325,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  Middle_Bloc: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  Icon: {
    height: 75,
    width: 75,
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
    backgroundColor: "#e9bd1f",
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
});

export {uChoice};