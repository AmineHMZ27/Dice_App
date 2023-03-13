import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Badge = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 10,
  },
  text: {
    fontSize: 10,
  },
});

export default Badge;