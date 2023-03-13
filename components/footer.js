import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Search'); 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="cards-playing-heart-multiple-outline" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handlePress}>
          <Ionicons name="ios-search" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="heart" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="account-circle" size={35} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
