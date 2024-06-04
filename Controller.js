import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Controller = () => {
  return (
    <View style={styles.container}>
      <Text>Controller Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Controller;