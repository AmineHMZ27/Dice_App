import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons, Fontisto, Feather } from '@expo/vector-icons';
import Header from '../components/header';
import Footer from '../components/footer';
import Badge from '../components/badge';
import RulesPage from '../screens/RulesPages'

const GameInfoPage = () => {

  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const handlePress = () => {
      navigation.navigate('RulesPage');
    }

  return (
    <SafeAreaView style={styles.container}>
      <Header showButton={true}/>
      <View style={styles.topContainer}>
        <Image style={styles.gameImage} source={require('../assets/image/7_wonders.webp')} />
        <Text style={styles.gameMatch}>89% match</Text>
        {/* <Text style={styles.gameTitle}>7 Wonders</Text> */}
        <TouchableOpacity style={styles.buttonRules} onPress={handlePress}>
            <Text style={styles.buttonText}>Rules of the game</Text>
        </TouchableOpacity>
        {/* <View style={styles.buttonContainer}>
          <View style={styles.button}></View>
        </View> */}
      </View>
      <Text style={styles.gameDescription}>In 1984, a young programmer begins to question reality as he adapts a dark fanatsy novel into a video game. A mind-bending tale with multiple endings</Text>
      <View style={styles.badgeContainer}>
      <Badge text="Fiction" />
      <Badge text="Negociation" />
      <Badge text="Strategy" />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconInContainer}>
          <Fontisto name="plus-a" size={23} color="#000" />
          <Text style={styles.textIcone}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconInContainer}>
          <Feather name="thumbs-up" size={23} color="#000" />
          <Text style={styles.textIcone}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconInContainer}>
          <MaterialCommunityIcons name="export-variant" size={23} color="#000" />
          <Text style={styles.textIcone}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>My suggestions</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Image style={styles.image} source={listRecommandation[0].image} />
          <Image style={styles.image} source={listRecommandation[1].image} />
          <Image style={styles.image} source={listRecommandation[2].image} />
          <Image style={styles.image} source={listRecommandation[3].image} />
          <Image style={styles.image} source={listRecommandation[4].image} />
        </ScrollView>
      </View>
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  gameImage: {
    width: 140,
    height: 190,
    borderRadius: 10,
  },
  gameTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 5,
  },
  gameMatch: {
    fontWeight: "bold",
    color: '#01D758',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 17,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    height: '3%',
    alignItems: 'center',
  },
  buttonRules: {
    backgroundColor: '#e9bd1f',
    padding: 10,
    width: '90%',
    marginTop: 20,
    marginBottom:20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 'auto'
  },
  gameDescription: {
    width: '85%',
    marginTop: 0,
    marginLeft: "7.5%",
    textAlign: 'left',
    fontWeight: "bold",
    alignSelf: 'stretch',
    fontSize: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
    alignSelf: 'stretch',
  },
  badge: {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: 5,
    marginRight: 10,
  },
  iconContainer: {
    width: "40%",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  section: {
    flex: 1,
    paddingLeft: 21,
    paddingTop: 30,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 15,
    marginRight: 15,
    marginTop: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }, 
  textIcone: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 11,
  },
});

export default GameInfoPage;
