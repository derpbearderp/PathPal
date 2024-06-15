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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Controller;