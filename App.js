import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Title } from 'react-native-paper';
import { ProgressChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';
import Controller from './Controller'
import DataScreen from './Data'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RoomCard = ({ roomName, onDetailsPress }) => {
  const data = { data: [0.75] };
  const data2 = { data: [0.65] };
  const data3 = { data: [0.53] };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.header}>
          <Title style={styles.roomName}>{roomName}</Title>
          <TouchableOpacity onPress={onDetailsPress}>
            <Text style={styles.detailsText}>Alle metingen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <Text style={styles.chartLabelText}>CO2</Text>
            <Text style={styles.chartText}>479</Text>
            <ProgressChart
              data={data}
              width={(Dimensions.get('window').width - 160) / 3}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundColor: 'transparent',
                backgroundGradientFrom: 'transparent',
                backgroundGradientTo: 'transparent',
                color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
                strokeWidth: 2,
                useShadowColorFromDataset: false,
              }}
              hideLegend={true}
            />
          </View>
          <View style={styles.chart}>
            <Text style={styles.chartLabelText}>Temperatuur</Text>
            <Text style={styles.chartText}>16°C</Text>
            <ProgressChart
              data={data2}
              width={(Dimensions.get('window').width - 160) / 3}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundColor: 'transparent',
                backgroundGradientFrom: 'transparent',
                backgroundGradientTo: 'transparent',
                color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
                strokeWidth: 2,
                useShadowColorFromDataset: false,
              }}
              hideLegend={true}
            />
          </View>
          <View style={styles.chart}>
            <Text style={styles.chartLabelText}>Vochtigheid</Text>
            <Text style={styles.chartText}>53%</Text>
            <ProgressChart
              data={data3}
              width={(Dimensions.get('window').width - 160) / 3}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundColor: 'transparent',
                backgroundGradientFrom: 'transparent',
                backgroundGradientTo: 'transparent',
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                strokeWidth: 2,
                useShadowColorFromDataset: false,
              }}
              hideLegend={true}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const HomeScreen = () => {
  const handleDetailsPress = () => {
    alert('Alle metingen pressed!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoomCard roomName="Woonkamer" onDetailsPress={handleDetailsPress} />
      <RoomCard roomName="Slaapkamer" onDetailsPress={handleDetailsPress} />
      <RoomCard roomName="Keuken" onDetailsPress={handleDetailsPress} />
    </ScrollView>
  );
};

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Controller') {
              iconName = 'game-controller';
            } else if (route.name === 'Home') {
              iconName = 'flame';
            } else if (route.name === 'Data') {
              iconName = 'cellular';
            }

            
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Controller" component={Controller} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Data" component={DataScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width - 20,
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  roomName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailsText: {
    color: '#007BFF',
    fontSize: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chart: {
    flex: 1,
    alignItems: 'center',
  },
  chartText: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    color: '#000',
    fontSize: 15,
  },
  chartLabelText: {
    fontSize: 16,
    marginBottom: -50,
    marginTop: -10,
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
