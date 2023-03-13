import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';
import Constants from 'expo-constants';
 
const ProgressBar = () => {
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0); 

  useEffect(() => {
    countInterval.current = setInterval(() => setCount((old) => old + 50), 1000);
    return () => {
      clearInterval(countInterval);
    };
  }, []);

  useEffect(() => {
    load(count)
    if (count >= 50) {
      setCount(50);
      clearInterval(countInterval);
    }
  }, [count]);

  const load = (count) => {
    Animated.timing(counter, {
      toValue: count,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const width = counter.interpolate({
  inputRange: [0, 50],
  outputRange: ["0%", "50%"],
  extrapolate: "clamp"
})

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: '#8BED4F', width })
          }></Animated.View>
      </View>

      <Text>{count}%</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'Column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    height: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
});
