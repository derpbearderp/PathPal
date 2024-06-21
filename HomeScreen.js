import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["CO2", "Temperature", "Humidity"], 
  data: [0.7, 0.5, 0.9]
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, 
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>PathPal</Text>
        <View style={styles.icons}>
          {/* Add your icons here */}
        </View>
      </View>
      <View style={styles.controller}>
        <Text style={styles.controllerText}>00</Text>
        <Button
          title="Start"
          onPress={() => navigation.navigate('Controller')}
        />
      </View>
      {['Woonkamer', 'Slaapkamer', 'Keuken'].map((room) => (
        <View key={room} style={styles.room}>
          <Text style={styles.roomTitle}>{room}</Text>
          <ProgressChart
            data={data}
            width={screenWidth - 30}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  
  },
  controller: {
    alignItems: 'center',
    margin: 20,
  },
  controllerText: {
    fontSize: 48,
    marginBottom: 10,
  },
  room: {
    margin: 15,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
