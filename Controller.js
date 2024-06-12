import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KorolJoystick } from "korol-joystick";

export default function Controller() {
  return (
    <View style={styles.container}>
      
      <KorolJoystick style={styles.stickTop} color="#ffffff" radius={110} onMove={(data) => console.log(data.position.x)} />

      <KorolJoystick style={styles.stickBottom} color="#ffffff" radius={110} onMove={(data) => console.log(data.position.y)} />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    stickTop: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '100',
      },

      stickBottom: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        margin: '100',
      },
  });


