// les imports
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
// import type { StatusBarStyle } from "react-native";
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

// importation des images
import Logo_Dice from "../assets/dice_logo.png";
import Cross_Button from "../assets/RulesPage/Cross_Button.png";

// Vignettes
import Foret_Production from "../assets/RulesPage/Foret_Production.png";
import Coline_Production from "../assets/RulesPage/Coline_Production.png";
import Pre_Production from "../assets/RulesPage/Pre_Production.png";
import Champs_Production from "../assets/RulesPage/Champs_Production.png";
import Montagne_Production from "../assets/RulesPage/Montagne_Production.png";
import Desert_Production from "../assets/RulesPage/Desert_Production.png";
import Catan_Img from "../assets/RulesPage/Catan_Img.png";
import Plan_Img from "../assets/RulesPage/Plan_Img.png";
import Header from '../components/header';

export default function App() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
      })
    }, [])

  const vignettes = [
    { img: Foret_Production },
    { img: Coline_Production },
    { img: Pre_Production },
    { img: Champs_Production },
    { img: Montagne_Production },
    { img: Desert_Production },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
        <Header showButton={true}/>

          <View style={{ height: 35 }} />

          <View style={styles.First_Section}>
            <Image
              source={Catan_Img}
              style={{ width: 200, height: 200, borderRadius: 30 }}
            />
            <Text style={{ flex: 1 }}>
              Official rule of the Settlers of Cataniz or Catania. or Catan
              dependina on the edition). The Glossarv (Chanter C) is taken from
              the tirst egition of "c Settlers of Catania" published by Tilsit
              Kosmos. The rest of the rules Chapters hamebaretaken rom the new
              ection DuDliSneO oV FIlOSOTIa ang distribure o Asmodeus under
              the name "Catania"
            </Text>
          </View>

          <View style={styles.Seconde_Section}>
            <Text>Number of players: 3 to 4 players.</Text>
            <Text>Duration: 60 to 90 minutes.</Text>
            <Text>Age: 10 years old</Text>
          </View>

          <View style={styles.Third_Section}>
            <Text style={{ fontWeight: "700", marginBottom: 10 }}>
              The rules are divided into 3 parts :
            </Text>
            <Text>A) Game overview and introduction</Text>
            <Text>B) Starting a game</Text>
            <Text>C) Refer to the glossary in case of questions</Text>
          </View>

          <View style={{ height: 60 }} />

          <View style={styles.Fourth_Section}>
            <Text>overview of the set-up for beginners :</Text>
            <Image source={Plan_Img} style={{ width: 250, height: 250 }} />

            <Text style={{ marginBottom: 15, marginTop: 10, marginRight: 12 }}>
              1) Place the island of Catania in front of vou. It consists of 19
              terrair riles with sea around the edge Your challenge is to
              colonise this iciand
            </Text>
            <Text style={{ marginBottom: 10 }}>
              2) On the island of Catania there is 1 desert and 5 different
              tvoes of terrain. Each type or land allows you to receive a
              ditterent resource
            </Text>
          </View>

          <View style={{ height: 10 }} />

          <View style={styles.Vignettes_Section}>
            {vignettes.map((elem, index) => {
              return (
                <View key={index}>
                  <Image style={styles.Icon} source={elem.img} />
                </View>
              );
            })}

            <View style={{ height: 20 }} />

            <Text style={styles.Fourth_Section}>
              3) you start the came wiin z settleme is ane z roacs. vvita
              settlements you already have z victory points. Goal: The first
              player to score 10 victory points wins
            </Text>
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontfamily: "Liberator",
    height: 950,
    backgroundColor: 'white',
  },
  Header: {
    backgroundColor: "#e9bd1f",
    height: 90,
    width: 430,
    alignItems: "center",
  },
  Top_Button: {
    padding: 5,
    borderRadius: 10,
    left: 170,
    bottom: 30,
  },
  Icon: {
    width: 140,
    height: 140,
  },
  Vignettes_Section: {
    width: 450,
    height: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  First_Section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Seconde_Section: {
    marginTop: 30,
    marginLeft: 20,
  },
  Third_Section: {
    marginRight: 75,
    marginTop: 35,
    width: 300,
    marginLeft: 20,
  },
  Fourth_Section: {
    marginLeft: 20,
    marginRight: 60,
    alignItems: "center",
    marginTop: 30,
  },
});
