import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search'

const Footer = ({activeIconColor}) => {

  const navigation = useNavigation();
  const route = useRoute();

  const handlePress = () => {
    navigation.navigate('Search'); 
  }
  const GoProfil = () => {
    navigation.navigate('ProfilPage'); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="cards-playing-heart-multiple-outline" size={35} color={route.name === 'HomeScreen' ? activeIconColor : '#e9bd1f'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Ionicons name="ios-search" size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="heart" size={35}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={GoProfil}>
          <MaterialCommunityIcons name="account-circle" size={35}  />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#white',
    marginTop: 13,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
});

export default Footer;
