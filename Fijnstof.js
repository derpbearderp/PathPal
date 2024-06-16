import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Fijnstof = () => {
  // Sample data for the chart
  const data = {
    labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        data: [12, 10, 11, 14, 10, 13, 12, 11],
        color: (opacity = 1) => `lightgreen`, // Green color for primary line
        strokeWidth: 4, // Width of the primary line
      },
      {
        data: [12, 12, 12, 12, 12, 12, 12, 12],
        color: (opacity = 1) => `lightblue`, // Blue color for secondary line
        strokeWidth: 4, // Width of the secondary line
      },
    ],
  };

  // State to manage dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Dropdown items data
  const dropdownItems = [
    { title: 'Groen: schone lucht', description: 'Geen kans op brand in huis en geen gevaarlijke stoffen', color: 'green' },
    { title: 'Oranje: gevaarlijk', description: 'Open de ramen voor genoeg zuurstof, Er is een kans op brand en gevaarlijke stoffen', color: 'orange' },
    { title: 'Rood: noodgeval', description: 'PathPal wordt geactiveerd en een melding wordt doorgegeven', color: 'red' },
  ];

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Determine which icon to show based on dropdown visibility
  const dropdownIcon = dropdownVisible ? 'chevron-up-outline' : 'chevron-down-outline';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.cardTitle}>Fijnstof</Text>
        <View style={styles.textContainer}>
          <Text style={styles.vandaagText}>vandaag</Text>
          <Text style={styles.pmText}>PM</Text>
          <Text style={styles.valueText}>^ 0.6</Text>
        </View>
        <LineChart
          data={data}
          width={320} // Adjusted width to fit within the card
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
          <Text style={styles.dropdownHeaderText}>Fijnstof</Text>
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
    backgroundColor: '#ffffff', // White background
    paddingTop: 50, // Padding top to move content down
    paddingLeft: 10, // Padding left to align content to the left
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20, // Add margin bottom for spacing
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, // Increased height of shadow offset
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    position: 'relative', // Make the card container position relative
  },
  textContainer: {
    position: 'absolute', // Position the text container absolutely within the card
    top: 16, // Adjust the position as needed
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
    marginTop: 10, // Adjusted marginTop for pushing the card down
  },
  newCardText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    marginLeft: 10,
    marginTop: 20,
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
    maxHeight: 150, // Adjust height as needed
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

export default Fijnstof;
