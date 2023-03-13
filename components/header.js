import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ showButton }) => {

    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Home');
    }

  return (
    <View>
      <View
        style={{
          height: 70,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#e9bd1f',
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image style={{width: 65,height: 50, position: "absolute"}} source={require('../assets/LOGO_White.png')}/>
        {showButton && (
          <TouchableOpacity style={{marginLeft: "93%"}} onPress={handlePress}>
            <Ionicons name="ios-close-circle-outline" size={27} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Header;