import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Temperatuur = () => {

  const data = {
    labels: ['18:40', '18:42', '18:44', '18:46', '18:48', '18:50', '18:52', '18:54'],
    datasets: [
      {
        data: [18, 12, 12, 11, 11, 10, 24, 25],
        color: (opacity = 1) => `lightgreen`,
        strokeWidth: 4, 
      },
      {
        data: [17, 17, 17, 17, 17, 17, 17, 17],
        color: (opacity = 1) => `lightblue`, 
        strokeWidth: 4, 
      },
    ],
  };


  const [dropdownVisible, setDropdownVisible] = useState(false);

 
  const dropdownItems = [
    { title: 'Groen: Goede temperatuur', description: 'Het is niet te heet in de kamer, geen kans op ongevallen', color: 'green' },
    { title: 'Oranje: gevaarlijk', description: 'Open de ramen of doe de airconditioning aan, er is een kans op ongevallen door de warmte', color: 'orange' },
    { title: 'Rood: noodgeval', description: 'PathPal wordt geactiveerd en een melding wordt doorgegeven', color: 'red' },
  ];

  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  
  const dropdownIcon = dropdownVisible ? 'chevron-up-outline' : 'chevron-down-outline';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.cardTitle}>Temperatuur</Text>
        <View style={styles.textContainer}>
          <Text style={styles.vandaagText}>vandaag</Text>
          <Text style={styles.pmText}>°C</Text>
          <Text style={styles.valueText}>^ 1°</Text>
        </View>
        <LineChart
          data={data}
          width={320} 
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: 20, 
          }}
          withDots={false}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: 'lightgreen' }]} />
          <Text style={styles.circleText}>Meting</Text>
        </View>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: 'lightblue' }]} />
          <Text style={styles.circleText}>Gemiddelde</Text>
        </View>
      </View>

      {/* New card */}
      <View style={styles.newCard}>
        <Text style={styles.newCardText}>
          <Text style={{ color: 'lightgreen' }}>Meting</Text> - schone lucht
        </Text>
      </View>

      {/* Dropdown menu */}
      <View style={[styles.dropdown, dropdownVisible && styles.dropdownActive]}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
          <Text style={styles.dropdownHeaderText}>Temperatuur</Text>
          <Ionicons name={dropdownIcon} size={24} color="#000" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        {dropdownVisible && (
          <ScrollView style={styles.dropdownItems}>
            {dropdownItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.dropdownItem}>
                <Text style={[styles.dropdownTitle, { color: item.color }]}>{item.title}</Text>
                <Text style={styles.dropdownDescription}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    paddingTop: 50, 
    paddingLeft: 10, 
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    position: 'relative', 
  },
  textContainer: {
    position: 'absolute', 
    top: 16, 
    left: 16,
  },
  vandaagText: {
    color: 'gray',
    fontSize: 14,
  },
  pmText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueText: {
    color: 'lightgreen',
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  circleText: {
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 12,
  },
  newCard: {
    width: '90%',
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  newCardText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
  },
  dropdownActive: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownItems: {
    maxHeight: 150, 
    paddingHorizontal: 16,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownDescription: {
    fontSize: 14,
    color: '#888',
  },
});

export default Temperatuur;
