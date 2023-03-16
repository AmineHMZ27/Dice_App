import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Angle_Right from "../assets/ProfilPage/Angle_Right.png";
import Logo_Dice from "../assets/dice_logo.png";
import Logo_Amine from "../assets/ProfilPage/Logo_Amine.png";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Send_Icon from "../assets/ProfilPage/Send_Icon.png";
import Header from '../components/header';
import Footer from '../components/footer';

export default function ProfilPage() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

  const handlePress = () => {
    navigation.navigate('Home');
  }

  const Section = [
    { text: "Contact", dsc: "Name, Surname, Phone", img: Angle_Right },
    { text: "Favourites", dsc: "04 Games", img: Angle_Right },
    { text: "My suggestions", dsc: "12 Games", img: Angle_Right },
    {
      text: "Settings",
      dsc: "Notifications, Password , FAQ",
      img: Angle_Right,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ height: 150 }} />

      <View style={styles.Top_Section}>
        <Image
          source={Logo_Dice}
          style={{
            width: 70,
            height: 45,
            right: 10,
            top: 120,
            transform: [{ rotate: "-15.00deg" }],
          }}
        />
        <TouchableOpacity style={styles.ButtonHome} onPress={handlePress}>
            <Ionicons name="ios-close-circle-outline" size={27} color="black" />
          </TouchableOpacity>
      </View>

      <View style={styles.Top_Profil}>
        <View style={styles.PP_Amine}>
          <Image source={Logo_Amine} style={{ width: 70, height: 70 }} />
        </View>

        <View style={{ height: 25 }} />

        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "800",
            marginTop: 25,
          }}
        >
          Amine
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
            padding: 10,
          }}
        >
          Has malorum habemus detraxit at. Timeam fabulas splendide et his.Usu
          nullam dolorum questio ei, sit vidit facilisis ea. Per ne impedit
          iracundia neglegentur.
        </Text>

        <View style={styles.TopButton_Section}>
          <TouchableOpacity style={styles.Button_Follow}>
            <Text
              style={{
                color: "white",
                fontWeight: "800",
              }}
            >
              Follow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FEE9A2",
              borderRadius: 10,
              left: 120,
              top: 15,
            }}
          >
            <Image source={Send_Icon} style={{ width: 35, height: 35 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 25 }} />
      {Section.map((elem, index) => {
        return (
          <View key={index} style={styles.boutton}>
            <TouchableOpacity>
              <Text style={styles.Text}>{elem.text}</Text>
              <Text style={styles.dsc}>{elem.dsc}</Text>
              <Image source={elem.img} style={styles.png_button} />
            </TouchableOpacity>
          </View>
        );
      })}

      <View style={{ height: 50 }} />

      <View style={styles.Bottom_section}>
        <TouchableOpacity style={styles.Bottom_Button}>
          <Text
            style={{
              color: "white",
              fontWeight: "800",
            }}
          >
            LogOut
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
    height: 900,
  },
  boutton: {
    width: 300,
    height: 70,
    marginBottom: 25,
    marginRight: 30,
    paddingLeft: 50,
    marginLeft: 35,
    justifyContent: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  png_button: {
    width: 40,
    height: 40,
    top: -20,
    left: 200,
  },
  Text: {
    top: 20,
    left: -45,
    fontSize: 20,
    fontWeight: "800",
  },
  dsc: {
    top: 20,
    left: -40,
    color: "#A9A9A9",
  },
  Bottom_Button: {
    width: 200,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#e9bd1f",
    alignItems: "center",
    justifyContent: "center",
  },
  Bottom_section: {
    height: 100,
    width: 430,
    bottom: 40,
    alignItems: "center",
  },
  Top_Section: {
    alignItems: "center",
    height: 380,
    width: 610,
    top: -65,
    backgroundColor: "#e9bd1f",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    transform: [{ rotate: "15.00deg" }],
  },
  Top_Profil: {
    height: 200,
    width: 350,
    // marginLeft: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  PP_Amine: {
    position: "absolute",
    top: -35,
    borderRadius: 50,
    backgroundColor: "white",
    padding: 5,
  },
  Button_Follow: {
    width: 240,
    height: 35,
    borderRadius: 15,
    backgroundColor: "#e9bd1f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    top: 50,
    right: 40,
  },
  TopButton_Section: {
    height: 100,
    width: 430,
    bottom: 40,
    alignItems: "center",
  },
  ButtonHome:{
    transform: [{ rotate: "-15.00deg" }],
    marginTop: 37,
    marginLeft: 310,
  }
});
