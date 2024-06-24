import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ecomercescreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Ecomercescreen;
