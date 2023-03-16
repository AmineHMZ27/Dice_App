import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';
import games from '../components/game_list';
import LogPop from '../components/LogPop';
import Recommandation from './recommandation';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('GameInfo'); 
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(true)

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    listRecommandation = Recommandation()


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <LogPop isVisible={isModalVisible} toggleModal={toggleModal} />
      <Header/>

      {/* Main content */}
      <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>My suggestions</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity  onPress={handlePress}>
              <Image style={styles.image} source={listRecommandation[0].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
              <Image style={styles.image} source={listRecommandation[1].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
              <Image style={styles.image} source={listRecommandation[2].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
              <Image style={styles.image} source={listRecommandation[3].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
              <Image style={styles.image} source={listRecommandation[4].image} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>New Games</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[24].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[28].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[12].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[3].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[1].image} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Popular on Dice</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[4].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[7].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[22].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[13].image} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handlePress}>
            <Image style={styles.image} source={games[27].image} />
          </TouchableOpacity>
        </ScrollView>
      </View>
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
  section: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 17,
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
  }
})

export default HomeScreen;
