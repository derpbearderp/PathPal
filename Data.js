import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Fijnstof from './Fijnstof';
import Koolstof from './Koolstof';
import Temperatuur from './temperatuur';
import Asbest from './asbest';

const DataScreen = () => {
  const [activeComponent, setActiveComponent] = useState('Fijnstof');

  const toggleComponent = () => {
    switch (activeComponent) {
      case 'Fijnstof':
        setActiveComponent('Koolstof');
        break;
      case 'Koolstof':
        setActiveComponent('Temperatuur');
        break;
      case 'Temperatuur':
        setActiveComponent('Asbest');
        break;
      case 'Asbest':
        setActiveComponent('Fijnstof');
        break;
      default:
        setActiveComponent('Fijnstof');
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Fijnstof':
        return <Fijnstof />;
      case 'Koolstof':
        return <Koolstof />;
      case 'Temperatuur':
        return <Temperatuur />;
      case 'Asbest':
        return <Asbest />;
      default:
        return <Fijnstof />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        {renderActiveComponent()}
      </View>
      <TouchableOpacity style={styles.button} onPress={toggleComponent}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  componentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    top: 20, 
   
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default DataScreen;
